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

export const GameView: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { gamepads } = useGamepad();
  const keyboardGamepadState = useKeyboardInput();

  // Screen Viewport dimensions
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  // Toggle HUD Overlay & Debugger State
  const [showHUD, setShowHUD] = useState(true);

  // Mouse Cursor Visibility State (Toggleable via Ctrl Key or Xbox Back Button)
  const [showCursor, setShowCursor] = useState(false);
  const prevBackBtnRef = useRef(false);

  // WebRTC PeerJS Smartphone Remote Controller State
  const [peerRoomId, setPeerRoomId] = useState('8492');
  const [isPeerConnected, setIsPeerConnected] = useState(false);
  const [goalBannerText, setGoalBannerText] = useState<string | null>(null);
  const peerServiceRef = useRef<HostPeerService | null>(null);
  const remoteGamepadStateRef = useRef<GamepadState | null>(null);

  // Smooth Camera Position Tracking State
  const cameraRef = useRef({
    x: WORLD_WIDTH * 0.5,
    y: WORLD_HEIGHT * 0.5
  });

  // Core Game Engine instances (Large World Pitch)
  const fieldRef = useRef(new Field(WORLD_WIDTH, WORLD_HEIGHT));
  const ballRef = useRef(new Ball(WORLD_WIDTH * 0.5, WORLD_HEIGHT * 0.5));
  const matchRulesRef = useRef(new MatchRules('1v1_local'));

  // 3 Team Players (P1 User, P2 Teammate, P3 Enemy Bot) in World Space
  const playersRef = useRef<Player[]>([
    new Player('p1', 'Player 1 (Kamu)', 'home', 0, '#06b6d4', WORLD_WIDTH * 0.35, WORLD_HEIGHT * 0.5),
    new Player('p2', 'Player 2 (Rekan)', 'home', 1, '#34d399', WORLD_WIDTH * 0.35, WORLD_HEIGHT * 0.35),
    new Player('p3', 'Musuh (P3)', 'away', null, '#f59e0b', WORLD_WIDTH * 0.46, WORLD_HEIGHT * 0.5)
  ]);

  const [matchState, setMatchState] = useState<MatchRulesState>(matchRulesRef.current.state);

  // Initialize WebRTC Host PeerJS Service for HP Remote Gamepad
  useEffect(() => {
    const hostService = new HostPeerService();
    peerServiceRef.current = hostService;

    hostService.onConnectionStateChange = (connected) => {
      setIsPeerConnected(connected);
    };

    hostService.onInputReceived = (input) => {
      if (input) {
        remoteGamepadStateRef.current = {
          index: 99,
          id: 'Smartphone Remote Controller',
          connected: true,
          axes: {
            leftStickX: input.axes?.leftStickX || 0,
            leftStickY: input.axes?.leftStickY || 0,
            rightStickX: 0,
            rightStickY: 0,
          },
          buttons: {
            a: input.buttons?.a || false,
            b: input.buttons?.b || false,
            x: input.buttons?.x || false,
            y: input.buttons?.y || false,
            lb: input.buttons?.lb || false,
            rb: input.buttons?.rb || false,
            lt: 0,
            rt: input.buttons?.rt || 0,
            back: false,
            start: input.buttons?.start || false,
            lsClick: false,
            rsClick: false,
          },
        };
      }
    };

    hostService.init().then((roomId) => {
      setPeerRoomId(roomId);
    });

    return () => {
      hostService.destroy();
    };
  }, []);

  // Window Resize & Keyboard Ctrl Listener for Cursor Visibility
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

  const resetMatchPositions = useCallback(() => {
    ballRef.current.reset(WORLD_WIDTH * 0.46, WORLD_HEIGHT * 0.5);
    playersRef.current[0].reset(WORLD_WIDTH * 0.35, WORLD_HEIGHT * 0.5);
    playersRef.current[1].reset(WORLD_WIDTH * 0.35, WORLD_HEIGHT * 0.35);

    // Reset P3 Enemy Bot right in front of P1 with Initial Ball Possession!
    const p3 = playersRef.current[2];
    p3.reset(WORLD_WIDTH * 0.46, WORLD_HEIGHT * 0.5);
    p3.hasPossession = true;
    ballRef.current.attachToPlayer(p3.pos, p3.facingAngle, p3.radius, p3.vel, 'p3');

    cameraRef.current = {
      x: WORLD_WIDTH * 0.5,
      y: WORLD_HEIGHT * 0.5
    };
  }, []);

  // Mount initial positions with P3 starting with ball
  useEffect(() => {
    resetMatchPositions();
  }, [resetMatchPositions]);

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

  // Main 60 FPS Game Loop with Accelerating Homing Pass & Frame-Perfect Possession Attachment
  useGameLoop((dt) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const field = fieldRef.current;
    const ball = ballRef.current;
    const rules = matchRulesRef.current;
    const players = playersRef.current;
    const player1 = players[0];
    const player2 = players[1];
    const player3 = players[2]; // P3 Enemy Bot

    // Check Controller 0 Back Button for Cursor Toggle
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
      // 2. Update All 3 Players (P1 User, P2 Teammate, P3 Enemy Bot)
      players.forEach((player) => {
        const teammates = players.filter((p) => p.team === player.team && p.id !== player.id);
        const opponents = players.filter((p) => p.team !== player.team);

        const isKeyboardActive =
          keyboardGamepadState.axes.leftStickX !== 0 ||
          keyboardGamepadState.axes.leftStickY !== 0 ||
          keyboardGamepadState.buttons.a ||
          keyboardGamepadState.buttons.b ||
          keyboardGamepadState.buttons.x ||
          keyboardGamepadState.buttons.y ||
          keyboardGamepadState.buttons.rt > 0 ||
          keyboardGamepadState.buttons.lb ||
          keyboardGamepadState.buttons.rb;

        let activeGp: GamepadState | null = null;
        if (player.id === 'p1') {
          if (isKeyboardActive) {
            activeGp = keyboardGamepadState;
          } else if (remoteGamepadStateRef.current && isPeerConnected) {
            activeGp = remoteGamepadStateRef.current;
          } else if (player.controllerIndex !== null && gamepads[player.controllerIndex]) {
            activeGp = gamepads[player.controllerIndex];
          } else {
            activeGp = keyboardGamepadState;
          }
        } else if (player.controllerIndex !== null && gamepads[player.controllerIndex]) {
          activeGp = gamepads[player.controllerIndex];
        }

        if (activeGp) {
          const { toggleHUDRequested } = player.updateFromGamepad(activeGp, ball, field, teammates, opponents);
          if (toggleHUDRequested) {
            setShowHUD((prev) => !prev);
          }
        } else if (player.id === 'p3') {
          // AI Enemy Bot (P3) Intelligence Loop
          player.updateEnemyBotAI(ball, field, opponents);
        } else {
          player.updatePassiveReception(ball, field);
        }
      });

      // 3. FRAME-PERFECT RECEPTION POSSESSION ATTACHMENT SOLVER & SINGLE SOURCE OF TRUTH
      players.forEach((p) => {
        const distToBall = Math.hypot(p.pos.x - ball.pos.x, p.pos.y - ball.pos.y);
        const receptionRadius = p.radius + ball.radius + 22;

        if (ball.releaseTimer <= 0 && distToBall < receptionRadius) {
          // Case A: Ball was homing to this receiver via Pass or R1 Request
          if (ball.homingTargetPlayer && ball.homingTargetPlayer.id === p.id) {
            p.hasPossession = true;
            ball.homingTargetPlayer = null;
            ball.throughPassTargetPos = null;
            ball.attachToPlayer(p.pos, p.facingAngle, p.radius, p.vel, p.id);
          }
          // Case B: Loose ball is claimed by player
          else if (!ball.homingTargetPlayer && !ball.attachedPlayerId) {
            p.hasPossession = true;
            ball.attachToPlayer(p.pos, p.facingAngle, p.radius, p.vel, p.id);
          }
        }

        // Enforce Single Source of Truth: player.hasPossession MUST match ball.attachedPlayerId
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

          // Prevent rapid 60FPS back-and-forth dispossess jittering using dispossessProtectionTimer
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
              tackler.dispossessProtectionTimer = 0.60; // 0.6s possession protection timer!

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

      // 5b. Sandwiched Loose Ball Squeeze Pop-Out Solver (Prevents ball vibration when squished)
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

      // 6. Check Loose Ball Collision Bounce for all Non-Carrying Players
      players.forEach((p) => {
        if (!p.hasPossession && ball.releaseTimer <= 0) {
          ball.checkPlayerCollision(p);
        }
      });

      const controllerSource = isPeerConnected ? '📱 HP Remote' : 'P1 Controller 0';
      rules.state.debugInputText = `${players[0].debugInputString} | SRC: ${controllerSource}`;

      // 7. Update Ball Physics & Shift Deflection
      ball.update(dt, field);
    }

    setMatchState({ ...rules.state });

    // 8. Tactical Broadcast Camera Target (Tracks P1, P3, & Ball)
    const targetCamX = player1.pos.x * 0.40 + (player3 ? player3.pos.x * 0.30 : 0) + ball.pos.x * 0.30;
    const targetCamY = player1.pos.y * 0.40 + (player3 ? player3.pos.y * 0.30 : 0) + ball.pos.y * 0.30;

    // Smooth Lerp Camera Follow (Ultra-fluid cinematic trailing)
    cameraRef.current.x = cameraRef.current.x * 0.92 + targetCamX * 0.08;
    cameraRef.current.y = cameraRef.current.y * 0.92 + targetCamY * 0.08;

    const viewW = dimensions.width;
    const viewH = dimensions.height;
    const halfVisibleW = viewW / (2 * CAMERA_ZOOM);
    const halfVisibleH = viewH / (2 * CAMERA_ZOOM);

    const clampedCamX = Math.max(halfVisibleW, Math.min(WORLD_WIDTH - halfVisibleW, cameraRef.current.x));
    const clampedCamY = Math.max(halfVisibleH, Math.min(WORLD_HEIGHT - halfVisibleH, cameraRef.current.y));

    // 9. Render World with Camera Transform & Dynamic Passing Grid
    ctx.clearRect(0, 0, viewW, viewH);

    ctx.save();
    ctx.translate(viewW / 2, viewH / 2);
    ctx.scale(CAMERA_ZOOM, CAMERA_ZOOM);
    ctx.translate(-clampedCamX, -clampedCamY);

    field.draw(ctx);

    if (showHUD) {
      const passer = player1.hasPossession ? player1 : player2.hasPossession ? player2 : null;

      if (passer) {
        const ranges = [140, 280, 420];
        ranges.forEach((r, idx) => {
          ctx.strokeStyle = idx === 0 ? 'rgba(56, 189, 248, 0.35)' : idx === 1 ? 'rgba(52, 211, 153, 0.25)' : 'rgba(168, 85, 247, 0.20)';
          ctx.lineWidth = 1.5;
          ctx.setLineDash([6, 6]);
          ctx.beginPath();
          ctx.arc(passer.pos.x, passer.pos.y, r, 0, Math.PI * 2);
          ctx.stroke();
        });
        ctx.setLineDash([]);

        const coneAngle = Math.PI / 3;
        const startAngle = passer.facingAngle - coneAngle / 2;
        const endAngle = passer.facingAngle + coneAngle / 2;
        const coneRadius = 320;

        ctx.fillStyle = 'rgba(6, 182, 212, 0.08)';
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.3)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(passer.pos.x, passer.pos.y);
        ctx.arc(passer.pos.x, passer.pos.y, coneRadius, startAngle, endAngle);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        const teammates = players.filter((p) => p.team === passer.team && p.id !== passer.id);
        const targetedTeammate = passer.findBestPassTarget(teammates, passer.facingAngle);

        if (targetedTeammate) {
          const dx = targetedTeammate.pos.x - passer.pos.x;
          const dy = targetedTeammate.pos.y - passer.pos.y;
          const dist = Math.hypot(dx, dy) || 1;

          ctx.strokeStyle = '#06b6d4';
          ctx.lineWidth = 2.5;
          ctx.setLineDash([8, 6]);
          ctx.beginPath();
          ctx.moveTo(passer.pos.x, passer.pos.y);
          ctx.lineTo(targetedTeammate.pos.x, targetedTeammate.pos.y);
          ctx.stroke();
          ctx.setLineDash([]);

          const stepCount = Math.floor(dist / 50);
          ctx.strokeStyle = '#38bdf8';
          ctx.lineWidth = 2;

          for (let i = 1; i <= stepCount; i++) {
            const tickX = passer.pos.x + (dx / dist) * (i * 50);
            const tickY = passer.pos.y + (dy / dist) * (i * 50);

            const perpX = -(dy / dist) * 6;
            const perpY = (dx / dist) * 6;

            ctx.beginPath();
            ctx.moveTo(tickX - perpX, tickY - perpY);
            ctx.lineTo(tickX + perpX, tickY + perpY);
            ctx.stroke();
          }

          const recX = targetedTeammate.pos.x;
          const recY = targetedTeammate.pos.y;
          const boxSize = 22;

          ctx.strokeStyle = '#34d399';
          ctx.lineWidth = 2.5;

          ctx.beginPath();
          ctx.moveTo(recX - boxSize, recY - boxSize + 6);
          ctx.lineTo(recX - boxSize, recY - boxSize);
          ctx.lineTo(recX - boxSize + 6, recY - boxSize);

          ctx.moveTo(recX + boxSize - 6, recY - boxSize);
          ctx.lineTo(recX + boxSize, recY - boxSize);
          ctx.lineTo(recX + boxSize, recY - boxSize + 6);

          ctx.moveTo(recX - boxSize, recY + boxSize - 6);
          ctx.lineTo(recX - boxSize, recY + boxSize);
          ctx.lineTo(recX - boxSize + 6, recY + boxSize);

          ctx.moveTo(recX + boxSize - 6, recY + boxSize);
          ctx.lineTo(recX + boxSize, recY + boxSize);
          ctx.lineTo(recX + boxSize, recY + boxSize - 6);
          ctx.stroke();
        }
      }

      if (ball.homingTargetPlayer) {
        const receiver = ball.homingTargetPlayer;

        ctx.strokeStyle = ball.throughPassTargetPos ? '#f59e0b' : '#a855f7';
        ctx.lineWidth = 3;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(ball.pos.x, ball.pos.y);
        ctx.lineTo(receiver.pos.x, receiver.pos.y);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      const speed = Math.hypot(ball.vel.x, ball.vel.y);
      if (speed > 0.2) {
        const arrowLen = Math.min(speed * 8, 40);
        const arrowX = ball.pos.x + (ball.vel.x / speed) * arrowLen;
        const arrowY = ball.pos.y + (ball.vel.y / speed) * arrowLen;

        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(ball.pos.x, ball.pos.y);
        ctx.lineTo(arrowX, arrowY);
        ctx.stroke();
      }
    }

    players.forEach((p) => p.draw(ctx));
    ball.draw(ctx);

    ctx.restore();
  });

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden bg-slate-950 flex flex-col items-center justify-center">
      {/* Floating Toggleable HUD Overlay */}
      <HUDOverlay
        matchState={matchState}
        showHUD={showHUD}
        onToggleHUD={handleToggleHUD}
        onResetMatch={handleResetMatch}
        onToggleMode={handleToggleMode}
        peerRoomId={peerRoomId}
        isPeerConnected={isPeerConnected}
        goalBannerText={goalBannerText}
      />

      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        className={`w-full h-full block ${showCursor ? 'cursor-default' : 'cursor-none'}`}
      />
    </div>
  );
};
