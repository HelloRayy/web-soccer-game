import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useGamepad } from '../hooks/useGamepad';
import { useKeyboardInput } from '../hooks/useKeyboardInput';
import { useGameLoop } from '../hooks/useGameLoop';
import { Field } from '../game/Field';
import { Ball } from '../game/Ball';
import { Player } from '../game/Player';
import { MatchRules } from '../game/MatchRules';
import { HUDOverlay } from './HUDOverlay';
import { MatchMode, MatchRulesState, GamepadState } from '../types/game';
import { HostPeerService } from '../services/peerService';

// Large Virtual Stadium World Dimensions
const WORLD_WIDTH = 2200;
const WORLD_HEIGHT = 1350;
// Wide Broadcast Tactical Viewport Zoom
const CAMERA_ZOOM = 0.92;

interface GameViewProps {
  selectedMode?: '1v1' | '2vBot';
  onReturnToLobby?: () => void;
  peerRoomId?: string;
  isPeerConnected?: boolean;
}

export const GameView: React.FC<GameViewProps> = ({
  selectedMode = '1v1',
  onReturnToLobby,
  peerRoomId = '8492',
  isPeerConnected = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { gamepads } = useGamepad();
  const { p1Input, p2Input } = useKeyboardInput();

  // Screen Viewport dimensions
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  // Toggle HUD Overlay & Debugger State
  const [showHUD, setShowHUD] = useState(true);

  // Mouse Cursor Visibility State
  const [showCursor, setShowCursor] = useState(false);
  const prevBackBtnRef = useRef(false);

  const [goalBannerText, setGoalBannerText] = useState<string | null>(null);
  const remoteGamepadStateRef = useRef<GamepadState | null>(null);

  // Smooth Camera Position & Dynamic Zoom Tracking State
  const cameraRef = useRef({
    x: WORLD_WIDTH * 0.5,
    y: WORLD_HEIGHT * 0.5,
    zoom: 0.85
  });

  // Core Game Engine instances
  const fieldRef = useRef(new Field(WORLD_WIDTH, WORLD_HEIGHT));
  const ballRef = useRef(new Ball(WORLD_WIDTH * 0.5, WORLD_HEIGHT * 0.5));
  const matchRulesRef = useRef(new MatchRules('1v1_local'));

  // Players Array dynamically initialized based on mode
  const playersRef = useRef<Player[]>([]);

  const [matchState, setMatchState] = useState<MatchRulesState>(matchRulesRef.current.state);

  const resetMatchPositions = useCallback(() => {
    ballRef.current.reset(WORLD_WIDTH * 0.5, WORLD_HEIGHT * 0.5);

    const players = playersRef.current;
    players.forEach((p) => {
      p.hasPossession = false;
    });

    if (selectedMode === '1v1') {
      if (players.length >= 2) {
        players[0].reset(WORLD_WIDTH * 0.42, WORLD_HEIGHT * 0.5);
        players[1].reset(WORLD_WIDTH * 0.58, WORLD_HEIGHT * 0.5);
      }
    } else {
      // 2 vs BOT Mode
      if (players.length >= 4) {
        players[0].reset(WORLD_WIDTH * 0.38, WORLD_HEIGHT * 0.42);
        players[1].reset(WORLD_WIDTH * 0.38, WORLD_HEIGHT * 0.58);
        players[2].reset(WORLD_WIDTH * 0.62, WORLD_HEIGHT * 0.42);
        players[3].reset(WORLD_WIDTH * 0.62, WORLD_HEIGHT * 0.58);
      }
    }

    cameraRef.current = {
      x: WORLD_WIDTH * 0.5,
      y: WORLD_HEIGHT * 0.5
    };
  }, [selectedMode]);

  // Re-instantiate players whenever selectedMode changes
  useEffect(() => {
    if (selectedMode === '1v1') {
      playersRef.current = [
        new Player('p1', 'Player 1 (Home)', 'home', 0, '#06b6d4', WORLD_WIDTH * 0.35, WORLD_HEIGHT * 0.5),
        new Player('p2', 'Player 2 (Away)', 'away', 1, '#f59e0b', WORLD_WIDTH * 0.65, WORLD_HEIGHT * 0.5)
      ];
    } else {
      // 2 vs BOT
      playersRef.current = [
        new Player('p1', 'Player 1 (Home)', 'home', 0, '#06b6d4', WORLD_WIDTH * 0.35, WORLD_HEIGHT * 0.42),
        new Player('p2', 'Player 2 (Home)', 'home', 1, '#34d399', WORLD_WIDTH * 0.35, WORLD_HEIGHT * 0.58),
        new Player('p3', 'Bot AI 1 (Away)', 'away', null, '#f59e0b', WORLD_WIDTH * 0.65, WORLD_HEIGHT * 0.42),
        new Player('p4', 'Bot AI 2 (Away)', 'away', null, '#ef4444', WORLD_WIDTH * 0.65, WORLD_HEIGHT * 0.58)
      ];
    }
    matchRulesRef.current.resetMatch();
    resetMatchPositions();
  }, [selectedMode, resetMatchPositions]);

  // Window Resize & Keyboard Ctrl Listener
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Control' || e.ctrlKey) {
        setShowCursor((prev) => !prev);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleResetMatch = useCallback(() => {
    matchRulesRef.current.resetMatch();
    resetMatchPositions();
    setMatchState({ ...matchRulesRef.current.state });
  }, [resetMatchPositions]);

  const handleToggleMode = useCallback((mode: MatchMode) => {
    matchRulesRef.current.setMode(mode);
    resetMatchPositions();
    setMatchState({ ...matchRulesRef.current.state });
  }, [resetMatchPositions]);

  const handleToggleHUD = useCallback(() => {
    setShowHUD((prev) => !prev);
  }, []);

  // Main 60 FPS Game Loop
  useGameLoop((dt) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const field = fieldRef.current;
    const ball = ballRef.current;
    const rules = matchRulesRef.current;
    const players = playersRef.current;

    if (gamepads[0]) {
      const isPressingBack = gamepads[0].buttons.back;
      if (isPressingBack && !prevBackBtnRef.current) {
        setShowCursor((prev) => !prev);
      }
      prevBackBtnRef.current = isPressingBack;
    }

    // 1. Update Match Rules & Timer
    const goalScored = rules.update(dt, ball, field);
    if (goalScored) {
      setGoalBannerText('⚽ GOAL SCORED!');
      setTimeout(() => {
        resetMatchPositions();
        setGoalBannerText(null);
      }, 1500);
    }

    if (rules.state.state !== 'GAME_OVER') {
      // 2. Update Players (P1, P2, AI Bots)
      players.forEach((player) => {
        const teammates = players.filter((p) => p.team === player.team && p.id !== player.id);
        const opponents = players.filter((p) => p.team !== player.team);

        let activeGp: GamepadState | null = null;
        if (player.id === 'p1') {
          const isP1KeyboardActive =
            p1Input.axes.leftStickX !== 0 ||
            p1Input.axes.leftStickY !== 0 ||
            p1Input.buttons.a || p1Input.buttons.b || p1Input.buttons.x || p1Input.buttons.y || p1Input.buttons.rt > 0;

          if (isP1KeyboardActive) {
            activeGp = p1Input;
          } else if (gamepads[0]) {
            activeGp = gamepads[0];
          } else {
            activeGp = p1Input;
          }
        } else if (player.id === 'p2') {
          const isP2KeyboardActive =
            p2Input.axes.leftStickX !== 0 ||
            p2Input.axes.leftStickY !== 0 ||
            p2Input.buttons.a || p2Input.buttons.b || p2Input.buttons.x || p2Input.buttons.y || p2Input.buttons.rt > 0;

          if (remoteGamepadStateRef.current && isPeerConnected) {
            activeGp = remoteGamepadStateRef.current;
          } else if (isP2KeyboardActive) {
            activeGp = p2Input;
          } else if (gamepads[1]) {
            activeGp = gamepads[1];
          } else {
            activeGp = p2Input;
          }
        }

        if (activeGp) {
          const { toggleHUDRequested } = player.updateFromGamepad(activeGp, ball, field, teammates, opponents);
          if (toggleHUDRequested) {
            setShowHUD((prev) => !prev);
          }
        } else if (player.id === 'p3' || player.id === 'p4') {
          // AI Enemy Bot Intelligence Loop
          player.updateEnemyBotAI(ball, field, opponents);
        } else {
          player.updatePassiveReception(ball, field);
        }
      });

      // 3. FRAME-PERFECT RECEPTION POSSESSION ATTACHMENT SOLVER & SINGLE SOURCE OF TRUTH
      players.forEach((p) => {
        if (ball.attachedPlayerId === p.id) {
          p.hasPossession = true;
          ball.attachToPlayer(p.pos, p.facingAngle, p.radius, p.vel, p.id);
        } else {
          const distToBall = Math.hypot(p.pos.x - ball.pos.x, p.pos.y - ball.pos.y);
          const receptionRadius = p.radius + ball.radius + 28;

          if (ball.releaseTimer <= 0 && distToBall < receptionRadius) {
            if (ball.homingTargetPlayer && ball.homingTargetPlayer.id === p.id) {
              p.hasPossession = true;
              ball.homingTargetPlayer = null;
              ball.throughPassTargetPos = null;
              ball.attachToPlayer(p.pos, p.facingAngle, p.radius, p.vel, p.id);
            } else if (!ball.homingTargetPlayer && !ball.attachedPlayerId) {
              p.hasPossession = true;
              ball.attachToPlayer(p.pos, p.facingAngle, p.radius, p.vel, p.id);
            }
          }
        }

        // Single Source of Truth Enforcer
        p.hasPossession = (ball.attachedPlayerId === p.id);
      });

      // 4. SOLID PLAYER-TO-PLAYER BODY COLLISION PHYSICS SOLVER
      for (let i = 0; i < players.length; i++) {
        for (let j = i + 1; j < players.length; j++) {
          const pA = players[i];
          const pB = players[j];

          const dx = pB.pos.x - pA.pos.x;
          const dy = pB.pos.y - pA.pos.y;
          const dist = Math.hypot(dx, dy) || 1;
          const minDist = pA.radius + pB.radius + 6;

          if (dist < minDist) {
            const overlap = minDist - dist;
            const nx = dx / dist;
            const ny = dy / dist;

            pA.pos.x -= nx * overlap * 0.55;
            pA.pos.y -= ny * overlap * 0.55;
            pB.pos.x += nx * overlap * 0.55;
            pB.pos.y += ny * overlap * 0.55;

            const kx = pA.vel.x - pB.vel.x;
            const ky = pA.vel.y - pB.vel.y;
            const p = nx * kx + ny * ky;

            if (p > 0) {
              pA.vel.x -= p * nx * 0.5;
              pA.vel.y -= p * ny * 0.5;
              pB.vel.x += p * nx * 0.5;
              pB.vel.y += p * ny * 0.5;
            }
          }
        }
      }

      // 5. FIFA/PES STYLE BALL COLLISION & DISPOSSESS RESOLUTION ENGINE
      players.forEach((tackler) => {
        const ballCarrier = players.find((p) => p.id !== tackler.id && p.hasPossession);
        if (ballCarrier) {
          const distToCarrier = Math.hypot(tackler.pos.x - ballCarrier.pos.x, tackler.pos.y - ballCarrier.pos.y);
          const distToBall = Math.hypot(tackler.pos.x - ball.pos.x, tackler.pos.y - ball.pos.y);

          const touchDistanceThreshold = tackler.radius + ballCarrier.radius + 14;
          const slideReachThreshold = tackler.radius + ballCarrier.radius + 75;

          const isBodyTouching = distToCarrier < touchDistanceThreshold || distToBall < (tackler.radius + ball.radius + 14);
          const isSlideReaching = tackler.isTackling && (distToCarrier < slideReachThreshold || distToBall < slideReachThreshold);

          const canDispossess = (isSlideReaching || (isBodyTouching && ballCarrier.dispossessProtectionTimer <= 0)) && tackler.dispossessProtectionTimer <= 0;

          if (canDispossess) {
            if (ballCarrier.skillDodgeInvincibleTimer > 0) {
              ballCarrier.triggerFeedback('🔥 GOCEK SUCCESS!');
              tackler.stumbleTimer = 0.55;
              tackler.isTackling = false;
              tackler.triggerFeedback('❌ TACKLE MISSED!');
            } else {
              ballCarrier.hasPossession = false;
              tackler.hasPossession = true;
              tackler.dispossessProtectionTimer = 0.60;

              ball.releaseTimer = 0;
              ball.homingTargetPlayer = null;
              ball.throughPassTargetPos = null;
              ball.attachToPlayer(tackler.pos, tackler.facingAngle, tackler.radius, tackler.vel, tackler.id);

              tackler.triggerFeedback('⚡ BOLA DIREBUT!');
              ballCarrier.triggerFeedback('💥 REBUT!');
              tackler.isTackling = false;
            }
          }
        }
      });

      // 5b. Sandwiched Loose Ball Squeeze Pop-Out Solver
      for (let i = 0; i < players.length; i++) {
        for (let j = i + 1; j < players.length; j++) {
          const pA = players[i];
          const pB = players[j];
          const distBetween = Math.hypot(pB.pos.x - pA.pos.x, pB.pos.y - pA.pos.y) || 1;

          if (distBetween < pA.radius + pB.radius + 12) {
            const midX = (pA.pos.x + pB.pos.x) * 0.5;
            const midY = (pA.pos.y + pB.pos.y) * 0.5;
            const distBallToMid = Math.hypot(ball.pos.x - midX, ball.pos.y - midY);

            if (distBallToMid < 32) {
              const lineDx = (pB.pos.x - pA.pos.x) / distBetween;
              const lineDy = (pB.pos.y - pA.pos.y) / distBetween;
              const popDirX = -lineDy;
              const popDirY = lineDx;

              pA.hasPossession = false;
              pB.hasPossession = false;
              ball.kick({ x: popDirX, y: popDirY }, 5.5, 'none');
              ball.releaseTimer = 0.35;
            }
          }
        }
      }

      // 6. Check Loose Ball Collision Bounce (ONLY during active releaseTimer flight!)
      players.forEach((p) => {
        if (!p.hasPossession && ball.releaseTimer > 0) {
          ball.checkPlayerCollision(p);
        }
      });

      const controllerSource = isPeerConnected ? '📱 HP Remote' : 'P1 Controller 0';
      const player1 = players[0];
      rules.state.debugInputText = player1 ? `${player1.debugInputString} | MODE: ${selectedMode} | SRC: ${controllerSource}` : `MODE: ${selectedMode}`;

      // 7. Update Ball Physics
      ball.update(dt, field);

      // 8. Dynamic Multi-Player Broadcast Camera Tracking & Auto-Zoom
      let minX = ball.pos.x;
      let maxX = ball.pos.x;
      let minY = ball.pos.y;
      let maxY = ball.pos.y;
      let sumX = ball.pos.x * 1.5;
      let sumY = ball.pos.y * 1.5;
      let totalWeight = 1.5;

      players.forEach((p) => {
        minX = Math.min(minX, p.pos.x);
        maxX = Math.max(maxX, p.pos.x);
        minY = Math.min(minY, p.pos.y);
        maxY = Math.max(maxY, p.pos.y);
        sumX += p.pos.x;
        sumY += p.pos.y;
        totalWeight += 1.0;
      });

      const centerX = sumX / totalWeight;
      const centerY = sumY / totalWeight;

      const spanX = maxX - minX;
      const spanY = maxY - minY;

      const viewW = dimensions.width;
      const viewH = dimensions.height;

      const paddingX = 260;
      const paddingY = 200;
      const requiredZoomX = viewW / (spanX + paddingX);
      const requiredZoomY = viewH / (spanY + paddingY);
      const calculatedZoom = Math.min(requiredZoomX, requiredZoomY);

      // Clamp dynamic zoom between 0.52 (wide view for distant players) and 0.88 (close-up)
      const targetZoom = Math.max(0.52, Math.min(0.88, calculatedZoom));

      // Smooth Lerp Camera Position & Dynamic Zoom
      cameraRef.current.x = cameraRef.current.x * 0.92 + centerX * 0.08;
      cameraRef.current.y = cameraRef.current.y * 0.92 + centerY * 0.08;
      cameraRef.current.zoom = cameraRef.current.zoom * 0.94 + targetZoom * 0.06;
    }

    setMatchState({ ...rules.state });

    const viewW = dimensions.width;
    const viewH = dimensions.height;
    const currentZoom = cameraRef.current.zoom;

    const halfVisibleW = viewW / (2 * currentZoom);
    const halfVisibleH = viewH / (2 * currentZoom);

    const clampedCamX = Math.max(halfVisibleW, Math.min(WORLD_WIDTH - halfVisibleW, cameraRef.current.x));
    const clampedCamY = Math.max(halfVisibleH, Math.min(WORLD_HEIGHT - halfVisibleH, cameraRef.current.y));

    // Render Canvas
    ctx.clearRect(0, 0, viewW, viewH);

    ctx.save();
    ctx.translate(viewW / 2, viewH / 2);
    ctx.scale(currentZoom, currentZoom);
    ctx.translate(-clampedCamX, -clampedCamY);

    field.draw(ctx);

    players.forEach((p) => p.draw(ctx));
    ball.draw(ctx);

    ctx.restore();
  });

  return (
    <div
      className={`fixed inset-0 w-screen h-screen overflow-hidden bg-slate-950 flex flex-col items-center justify-center ${
        showCursor ? 'cursor-auto' : 'cursor-none'
      }`}
    >
      <HUDOverlay
        matchState={matchState}
        showHUD={showHUD}
        onToggleHUD={handleToggleHUD}
        onResetMatch={handleResetMatch}
        onToggleMode={handleToggleMode}
        onReturnToLobby={onReturnToLobby}
        peerRoomId={peerRoomId}
        isPeerConnected={isPeerConnected}
        goalBannerText={goalBannerText}
      />

      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        className="block w-full h-full"
      />
    </div>
  );
};
