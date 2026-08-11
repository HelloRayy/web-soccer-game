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
import { DeviceType } from './ControllerSelectModal';

// Large Virtual Stadium World Dimensions
const WORLD_WIDTH = 2200;
const WORLD_HEIGHT = 1350;

interface GameViewProps {
  selectedMode?: '1v1' | '2vBot';
  p1Device?: DeviceType;
  p2Device?: DeviceType;
  onReturnToLobby?: () => void;
  peerRoomId?: string;
  isPeerConnected?: boolean;
  hostPeerService?: HostPeerService | null;
}

export const GameView: React.FC<GameViewProps> = ({
  selectedMode = '1v1',
  p1Device = 'keyboard1',
  p2Device = 'keyboard2',
  onReturnToLobby,
  peerRoomId = '8492',
  isPeerConnected = false,
  hostPeerService = null,
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
  const [showCursor, setShowCursor] = useState(false);
  const prevBackBtnRef = useRef(false);

  const [goalBannerText, setGoalBannerText] = useState<string | null>(null);
  const remoteGamepadStateRef = useRef<GamepadState | null>(null);

  // Register WebRTC HP Remote Connection Callbacks
  useEffect(() => {
    if (!hostPeerService) return;

    hostPeerService.onGamepadStateUpdate = (inputState: GamepadState) => {
      remoteGamepadStateRef.current = inputState;
    };

    hostPeerService.onInputReceived = (partialInput: any) => {
      if (!remoteGamepadStateRef.current) {
        remoteGamepadStateRef.current = {
          index: 99,
          id: 'HP Remote Wireless',
          connected: true,
          axes: { leftStickX: 0, leftStickY: 0, rightStickX: 0, rightStickY: 0 },
          buttons: { a: false, b: false, x: false, y: false, lb: false, rb: false, lt: 0, rt: 0, back: false, start: false, lsClick: false, rsClick: false },
          ...(partialInput || {})
        };
      } else {
        remoteGamepadStateRef.current = {
          ...remoteGamepadStateRef.current,
          ...(partialInput || {})
        };
      }
    };
  }, [hostPeerService]);

  // Camera Position & Dynamic Zoom Tracking State
  const cameraRef = useRef({
    x: WORLD_WIDTH * 0.5,
    y: WORLD_HEIGHT * 0.5
  });
  const zoomRef = useRef(0.92);

  // Core Game Engine instances
  const fieldRef = useRef(new Field(WORLD_WIDTH, WORLD_HEIGHT));
  const ballRef = useRef(new Ball(WORLD_WIDTH * 0.5, WORLD_HEIGHT * 0.5));
  const matchRulesRef = useRef(new MatchRules('1v1_local'));
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
      // 2. Update Players (P1, P2, AI Bots) with HP Remote & Controller Assignments
      players.forEach((player) => {
        const teammates = players.filter((p) => p.team === player.team && p.id !== player.id);
        const opponents = players.filter((p) => p.team !== player.team);

        let activeGp: GamepadState | null = null;
        if (player.id === 'p1') {
          if (p1Device === 'hp_remote') {
            activeGp = remoteGamepadStateRef.current || p1Input;
          } else if (p1Device === 'keyboard1') {
            activeGp = p1Input;
          } else if (p1Device === 'gamepad0') {
            activeGp = gamepads[0] || p1Input;
          } else {
            activeGp = p1Input;
          }
        } else if (player.id === 'p2') {
          if (p2Device === 'hp_remote') {
            // Priority for Player 2 HP Remote Wireless Controller!
            activeGp = remoteGamepadStateRef.current || p2Input;
          } else if (p2Device === 'keyboard2') {
            activeGp = p2Input;
          } else if (p2Device === 'gamepad1') {
            activeGp = gamepads[1] || gamepads[0] || p2Input;
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
          player.updateEnemyBotAI(ball, field, opponents, teammates);
        } else {
          player.updatePassiveReception(ball, field);
        }
      });

      // 3. SOLID PLAYER-TO-PLAYER BODY COLLISION PHYSICS SOLVER
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

      // 4. FIFA/PES STYLE DIRECTIONAL BODY SHIELDING & PRECISE BALL HITBOX ENGINE
      players.forEach((tackler) => {
        const ballCarrier = players.find((p) => p.id !== tackler.id && (p.hasPossession || ball.attachedPlayerId === p.id));
        if (ballCarrier) {
          const distToCarrier = Math.hypot(tackler.pos.x - ballCarrier.pos.x, tackler.pos.y - ballCarrier.pos.y);
          const distToBall = Math.hypot(tackler.pos.x - ball.pos.x, tackler.pos.y - ball.pos.y);

          const dxToTackler = tackler.pos.x - ballCarrier.pos.x;
          const dyToTackler = tackler.pos.y - ballCarrier.pos.y;
          const angleToTackler = Math.atan2(dyToTackler, dxToTackler);

          let angleDiff = Math.abs(angleToTackler - ballCarrier.facingAngle);
          while (angleDiff > Math.PI) angleDiff = Math.abs(angleDiff - Math.PI * 2);

          const isTacklerBehindCarrier = angleDiff > 1.83;

          const ballHitboxRadius = tackler.radius + ball.radius + 14;
          const bodyHitboxRadius = tackler.radius + ballCarrier.radius + 12;
          const slideHitboxRadius = tackler.radius + ballCarrier.radius + 75;

          const isDirectBallHit = distToBall < ballHitboxRadius;
          const isBodyContactHit = distToCarrier < bodyHitboxRadius && !isTacklerBehindCarrier;
          const isSlideHit = tackler.isTackling && (distToCarrier < slideHitboxRadius || distToBall < slideHitboxRadius);

          const canDispossess = (isDirectBallHit || isBodyContactHit || isSlideHit) && ballCarrier.dispossessProtectionTimer <= 0;

          if (canDispossess) {
            let stealChance = 0.85;
            if (isSlideHit) stealChance = 0.95;

            if (Math.random() < stealChance) {
              ballCarrier.hasPossession = false;
              ball.attachedPlayerId = null;
              ballCarrier.dispossessProtectionTimer = 0.40;
              tackler.dispossessProtectionTimer = 0;
              tackler.hasPossession = true;
              ball.attachedPlayerId = tackler.id;
              ballCarrier.triggerFeedback('💥 REBUT!');
              tackler.isTackling = false;
            }
          } else if (distToCarrier < bodyHitboxRadius && isTacklerBehindCarrier && !tackler.isTackling) {
            if (Math.random() < 0.08) {
              ballCarrier.triggerFeedback('🛡️ BODY SHIELD!');
            }
          }
        }
      });

      // 5. FRAME-PERFECT RECEPTION POSSESSION ATTACHMENT SOLVER
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

        p.hasPossession = (ball.attachedPlayerId === p.id);
      });

      // Debug telemetry info
      const p1Source = p1Device === 'hp_remote' ? '📱 HP Remote' : p1Device.toUpperCase();
      const p2Source = p2Device === 'hp_remote' ? '📱 HP Remote' : p2Device.toUpperCase();
      rules.state.debugInputText = `P1: [${p1Source}] | P2: [${p2Source}] | MODE: ${selectedMode}`;

      // 6. Update Ball Physics
      ball.update(dt, field);

      // 7. DYNAMIC AUTO-FIT BROADCAST CAMERA & DYNAMIC ZOOM SYSTEM
      const allX = [...players.map((p) => p.pos.x), ball.pos.x];
      const allY = [...players.map((p) => p.pos.y), ball.pos.y];

      const minX = Math.min(...allX);
      const maxX = Math.max(...allX);
      const minY = Math.min(...allY);
      const maxY = Math.max(...allY);

      const targetCamX = (minX + maxX) * 0.5;
      const targetCamY = (minY + maxY) * 0.5;

      const padding = 280;
      const spanX = Math.max(500, (maxX - minX) + padding);
      const spanY = Math.max(350, (maxY - minY) + padding);

      const viewW = dimensions.width;
      const viewH = dimensions.height;

      const reqZoomX = viewW / spanX;
      const reqZoomY = viewH / spanY;

      const targetZoomRaw = Math.min(reqZoomX, reqZoomY);
      const targetZoom = Math.max(0.52, Math.min(0.92, targetZoomRaw));

      cameraRef.current.x = cameraRef.current.x * 0.90 + targetCamX * 0.10;
      cameraRef.current.y = cameraRef.current.y * 0.90 + targetCamY * 0.10;
      zoomRef.current = zoomRef.current * 0.92 + targetZoom * 0.08;
    }

    setMatchState({ ...rules.state });

    const viewW = dimensions.width;
    const viewH = dimensions.height;
    const currentZoom = zoomRef.current;
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
