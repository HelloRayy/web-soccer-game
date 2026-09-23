import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useGamepad } from '../hooks/useGamepad';
import { useKeyboardInput } from '../hooks/useKeyboardInput';
import { useGameLoop } from '../hooks/useGameLoop';
import { Field } from '../game/Field';
import { Ball } from '../game/Ball';
import { Player } from '../game/Player';
import { MatchRules } from '../game/MatchRules';
import { HUDOverlay } from './HUDOverlay';
import { MatchMode, MatchRulesState, GamepadState, RadarData, OffScreenBallData, TeamType, ActivePlayerData, ArcadeCallout } from '../types/game';
import { HostPeerService } from '../services/peerService';
import { PixelSpriteRenderer } from '../game/PixelSpriteRenderer';
import { DeviceType } from './ControllerSelectModal';
import { PlayerNode } from './TeamSelectView';
import { audioService } from '../services/audioService';

// Large Virtual Stadium World Dimensions
const WORLD_WIDTH = 2200;
const WORLD_HEIGHT = 1350;

// Coordinate Mapping from Setup View (Vertical) to Match Stadium Canvas (Horizontal)
function mapSpawnCoords(node: PlayerNode, worldWidth: number, worldHeight: number): { x: number; y: number } {
  if (node.team === 'home') {
    // Width X in setup (10% - 90%) -> Stadium Flank Y (0 Top to 1350 Bottom)
    const gameY = Math.max(120, Math.min(worldHeight - 120, (node.x / 100) * worldHeight));
    // Depth Y in setup (50% Center Line -> 92% Goal Line) -> Stadium Length X (1040 down to 260)
    const depthFrac = Math.max(0, Math.min(1, (node.y - 50) / 42));
    const gameX = Math.max(260, Math.min(worldWidth * 0.5 - 60, (worldWidth * 0.5 - 60) - depthFrac * (worldWidth * 0.36)));
    return { x: gameX, y: gameY };
  } else {
    // Away team (attacks to left). Mirror setup width X so right flank corresponds to bottom flank in stadium
    const gameY = Math.max(120, Math.min(worldHeight - 120, (1 - node.x / 100) * worldHeight));
    // Depth Y in setup (50% Center Line -> 92% Goal Line) -> Stadium Length X (1160 up to 1940)
    const depthFrac = Math.max(0, Math.min(1, (node.y - 50) / 42));
    const gameX = Math.max(worldWidth * 0.5 + 60, Math.min(worldWidth - 260, (worldWidth * 0.5 + 60) + depthFrac * (worldWidth * 0.36)));
    return { x: gameX, y: gameY };
  }
}
function drawTacticalPassingGrid(
  _ctx: CanvasRenderingContext2D,
  _players: Player[],
  _ball: Ball
) {
  // Visual Clean-up: Disabled aiming arrow / cone / dashed lines for clean pitch visuals as specified in rekruitmen.md
}

interface GameViewProps {
  selectedMode?: '1v1' | '2vBot';
  p1Device?: DeviceType;
  p2Device?: DeviceType;
  customSpawns?: PlayerNode[] | null;
  onReturnToLobby?: () => void;
  peerRoomId?: string;
  isPeerConnected?: boolean;
  hostPeerService?: HostPeerService | null;
}

export const GameView: React.FC<GameViewProps> = ({
  selectedMode = '1v1',
  p1Device = 'keyboard1',
  p2Device = 'keyboard2',
  customSpawns = null,
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
  const [radarData, setRadarData] = useState<RadarData | null>(null);
  const [offScreenBall, setOffScreenBall] = useState<OffScreenBallData | null>(null);
  const [isGoalShaking, setIsGoalShaking] = useState(false);
  const [isReplayActive, setIsReplayActive] = useState(false);
  const cameraShakeRef = useRef(0);
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
  const [whistleBannerText, setWhistleBannerText] = useState<string | null>(null);
  const [isCrowdSurging, setIsCrowdSurging] = useState<boolean>(false);
  const [activePlayerData, setActivePlayerData] = useState<ActivePlayerData | null>(null);
  const [arcadeCallouts, setArcadeCallouts] = useState<ArcadeCallout[]>([]);
  const lastCalloutTimeRef = useRef<number>(0);

  // 240-Frame Circular Snapshot Buffer for Automatic Instant Goal Replay System
  const replayBufferRef = useRef<Array<{
    ballPos: { x: number; y: number; z: number };
    ballRotation: number;
    players: Array<{ id: string; pos: { x: number; y: number }; facingAngle: number; isTackling?: boolean; isStandingTackling?: boolean; isKicking?: boolean; isDiving?: boolean }>;
  }>>([]);
  const isReplayActiveRef = useRef<boolean>(false);
  const replayFramesRef = useRef<Array<{
    ballPos: { x: number; y: number; z: number };
    ballRotation: number;
    players: Array<{ id: string; pos: { x: number; y: number }; facingAngle: number; isTackling?: boolean; isStandingTackling?: boolean; isKicking?: boolean; isDiving?: boolean }>;
  }>>([]);
  const replayFrameIndexRef = useRef<number>(0);

  const triggerCallout = useCallback((type: ArcadeCallout['type'], text: string, subtext?: string) => {
    const now = Date.now();
    // Debounce fast repeated callouts within 350ms so notifications don't flicker or stack
    if (now - lastCalloutTimeRef.current < 350) return;
    lastCalloutTimeRef.current = now;

    const callout: ArcadeCallout = {
      id: `${now}_${Math.random()}`,
      text,
      subtext,
      type,
      timestamp: now,
    };
    // Keep only 1 single active callout banner at a time to prevent overlapping notification cards
    setArcadeCallouts([callout]);
    setTimeout(() => {
      setArcadeCallouts((prev) => prev.filter((c) => c.id !== callout.id));
    }, 1800);
  }, []);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as unknown as Record<string, unknown>).__SOCCER_GAME__ = {
        ball: ballRef.current,
        players: playersRef.current,
        field: fieldRef.current,
        camera: cameraRef.current,
      };
    }

    // Wire woodwork clatter and kick statistics
    ballRef.current.woodworkHitListener = (type) => {
      cameraShakeRef.current = 24;
      setIsCrowdSurging(true);
      setWhistleBannerText(type === 'crossbar' ? '⚡ MISTAR GAWANG!' : '⚡ TIANG GAWANG!');
      triggerCallout('woodwork', '⚡ WOODWORK CRUNCH!', 'Denting Keras Membentur Mistar Gawang');
      setTimeout(() => {
        setIsCrowdSurging(false);
        setWhistleBannerText(null);
      }, 1800);
    };

    ballRef.current.kickListener = (kickerId, power) => {
      const kicker = playersRef.current.find((p) => p.id === kickerId);
      if (kicker) {
        if (power >= 14.0) {
          matchRulesRef.current.recordShot(kicker.team, true);
          triggerCallout('skill', '⚽ THUNDERBOLT SHOT!', 'Tembakan Gelegar Meluncur');
        } else if (power >= 11.5) {
          matchRulesRef.current.recordShot(kicker.team, true);
        } else {
          matchRulesRef.current.recordPass(kicker.team);
        }
      }
    };
  }, [triggerCallout]);

  const resetMatchPositions = useCallback((kickingTeam: TeamType = 'home') => {
    ballRef.current.reset(WORLD_WIDTH * 0.5, WORLD_HEIGHT * 0.5);

    const players = playersRef.current;
    players.forEach((p) => {
      p.hasPossession = false;
    });
    if (customSpawns && customSpawns.length > 0) {
      // Map customized spawn positions directly to each player
      const homeNodes = customSpawns.filter((n) => n.team === 'home');
      const awayNodes = customSpawns.filter((n) => n.team === 'away');

      let homeIdx = 0;
      let awayIdx = 0;

      players.forEach((player) => {
        if (player.team === 'home') {
          const node = homeNodes[homeIdx] || homeNodes[0];
          if (node) {
            const coords = mapSpawnCoords(node, WORLD_WIDTH, WORLD_HEIGHT);
            player.reset(coords.x, coords.y);
          }
          homeIdx++;
        } else {
          const node = awayNodes[awayIdx] || awayNodes[0];
          if (node) {
            const coords = mapSpawnCoords(node, WORLD_WIDTH, WORLD_HEIGHT);
            player.reset(coords.x, coords.y);
          }
          awayIdx++;
        }
      });
    } else {
      // Default Fallback Formations
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
    }

    // Position kickoff kicker directly at the center circle
    const kicker = players.find((p) => p.team === kickingTeam && (p.role === 'ST' || p.role === 'MF'))
      || players.find((p) => p.team === kickingTeam);
    if (kicker) {
      const kickerX = kickingTeam === 'home' ? WORLD_WIDTH * 0.486 : WORLD_WIDTH * 0.514;
      kicker.reset(kickerX, WORLD_HEIGHT * 0.5);
      kicker.facingAngle = kickingTeam === 'home' ? 0 : Math.PI;
    }

    cameraRef.current = {
      x: WORLD_WIDTH * 0.5,
      y: WORLD_HEIGHT * 0.5
    };
  }, [selectedMode, customSpawns]);

  const skipReplay = useCallback(() => {
    if (!isReplayActiveRef.current) return;
    isReplayActiveRef.current = false;
    setIsReplayActive(false);
    matchRulesRef.current.celebrationTimer = 0;
    matchRulesRef.current.state.phase = 'PHASE_KICKOFF';
    resetMatchPositions(matchRulesRef.current.kickoffTeam);
    setGoalBannerText(null);
    setIsGoalShaking(false);
    setIsCrowdSurging(false);
    setWhistleBannerText('KICK-OFF!');
    audioService.playWhistleSFX('short');
    setTimeout(() => {
      setWhistleBannerText(null);
    }, 1500);
  }, [resetMatchPositions]);

  // Re-instantiate players whenever selectedMode or customSpawns changes
  useEffect(() => {
    if (customSpawns && customSpawns.length > 0) {
      const homeCount = customSpawns.filter((n) => n.team === 'home').length;
      let currentHomeIdx = 0;
      let currentAwayIdx = 0;

      playersRef.current = customSpawns.map((node) => {
        const coords = mapSpawnCoords(node, WORLD_WIDTH, WORLD_HEIGHT);
        let controllerIdx: number | null = null;
        if (node.devType === 'gamepad0') controllerIdx = 0;
        else if (node.devType === 'gamepad1') controllerIdx = 1;
        else if (node.devType === 'keyboard1') controllerIdx = 0;
        else if (node.devType === 'keyboard2') controllerIdx = 1;
        else if (node.devType === 'hp_remote') controllerIdx = 99;

        const isBot = node.devType === 'ai_bot';
        
        let playerId = node.id;
        let displayName = node.name;

        if (node.team === 'home') {
          currentHomeIdx++;
          playerId = currentHomeIdx === 1 ? 'p1' : `p1_${currentHomeIdx}`;
          displayName = `Player ${currentHomeIdx} (Home)`;
        } else {
          currentAwayIdx++;
          playerId = currentAwayIdx === 1 ? 'p2' : `p2_${currentAwayIdx}`;
          displayName = isBot ? `Bot AI ${currentAwayIdx} (Away)` : `Player ${currentAwayIdx} (Away)`;
        }

        const color = node.team === 'home'
          ? (currentHomeIdx === 1 ? '#06b6d4' : '#34d399')
          : (currentAwayIdx === 1 ? '#f59e0b' : '#ef4444');

        const p = new Player(playerId, displayName, node.team, isBot ? null : controllerIdx, color, coords.x, coords.y);
        p.devType = node.devType;
        if (isBot) p.isAI = true;
        return p;
      });
    } else if (selectedMode === '1v1') {
      const isP1Bot = p1Device === 'ai_bot';
      const p1 = new Player('p1', isP1Bot ? 'Bot AI (Home)' : 'Player 1 (Home)', 'home', isP1Bot ? null : 0, '#06b6d4', WORLD_WIDTH * 0.35, WORLD_HEIGHT * 0.5);
      p1.devType = p1Device;
      if (isP1Bot) p1.isAI = true;

      const isP2Bot = p2Device === 'ai_bot';
      const p2 = new Player('p2', isP2Bot ? 'Bot AI (Away)' : 'Player 2 (Away)', 'away', isP2Bot ? null : 1, '#f59e0b', WORLD_WIDTH * 0.65, WORLD_HEIGHT * 0.5);
      p2.devType = p2Device;
      if (isP2Bot) p2.isAI = true;

      playersRef.current = [p1, p2];
    } else {
      // 2 vs BOT Mode
      const p1 = new Player('p1', 'Player 1 (Home)', 'home', 0, '#06b6d4', WORLD_WIDTH * 0.35, WORLD_HEIGHT * 0.42);
      p1.devType = p1Device;
      const p2 = new Player('p2', 'Player 2 (Home)', 'home', 1, '#34d399', WORLD_WIDTH * 0.35, WORLD_HEIGHT * 0.58);
      p2.devType = p2Device;
      const p3 = new Player('p3', 'Bot AI 1 (Away)', 'away', null, '#f59e0b', WORLD_WIDTH * 0.65, WORLD_HEIGHT * 0.42);
      p3.devType = 'ai_bot';
      p3.isAI = true;
      const p4 = new Player('p4', 'Bot AI 2 (Away)', 'away', null, '#ef4444', WORLD_WIDTH * 0.65, WORLD_HEIGHT * 0.58);
      p4.devType = 'ai_bot';
      p4.isAI = true;
      playersRef.current = [p1, p2, p3, p4];
    }
    matchRulesRef.current.resetMatch();
    resetMatchPositions();
  }, [selectedMode, customSpawns, p1Device, p2Device, resetMatchPositions]);

  // Match Start Audio Lifecycle (Stop Menu BGM, Start Stadium Crowd, Whistle Kickoff)
  useEffect(() => {
    audioService.stopMenuBGM();
    audioService.startCrowdAmbience();
    audioService.playWhistleSFX('short');

    return () => {
      audioService.stopCrowdAmbience();
    };
  }, []);

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
      if ((e.key === 'Escape' || e.key === 'Enter') && isReplayActiveRef.current) {
        skipReplay();
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
  useGameLoop((rawDt) => {
    // Keep simulation stable after tab switches or temporary frame drops.
    const dt = Math.min(0.05, Math.max(0, rawDt));
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

    // 1. Record 240-Frame Circular Match Buffer (if not currently in Replay Mode)
    if (!isReplayActiveRef.current) {
      replayBufferRef.current.push({
        ballPos: { x: ball.pos.x, y: ball.pos.y, z: ball.z },
        ballRotation: ball.rotationAngle,
        players: players.map((p) => ({
          id: p.id,
          pos: { x: p.pos.x, y: p.pos.y },
          facingAngle: p.facingAngle,
          isTackling: p.isTackling,
          isStandingTackling: p.isStandingTackling,
          isKicking: p.isKickingTimer > 0 || p.isVolleying || p.isHeading,
          isDiving: p.isDiving,
        })),
      });
      if (replayBufferRef.current.length > 240) {
        replayBufferRef.current.shift();
      }
    }

    // Handle 0.6x Slow-Motion Replay Playback Mode
    if (isReplayActiveRef.current) {
      // Prevent held shot/pass buttons from immediately skipping replay on frame 0/1.
      // Require replay to play for at least 30 frames (~0.5s) before gamepad button skip is accepted.
      if (replayFrameIndexRef.current > 30) {
        if (gamepads[0]?.buttons.a || gamepads[1]?.buttons.a) {
          skipReplay();
          return;
        }
      }

      replayFrameIndexRef.current += 0.6;
      if (replayFrameIndexRef.current >= replayFramesRef.current.length) {
        skipReplay();
        return;
      }

      const totalFrames = replayFramesRef.current.length;
      const currIdx = Math.floor(replayFrameIndexRef.current);
      const nextIdx = Math.min(totalFrames - 1, currIdx + 1);
      const frac = replayFrameIndexRef.current - currIdx;

      const currFrame = replayFramesRef.current[currIdx];
      const nextFrame = replayFramesRef.current[nextIdx];

      if (currFrame && nextFrame) {
        // 1. Silky Smooth Lerp Ball Position & Height
        ball.pos.x = currFrame.ballPos.x + (nextFrame.ballPos.x - currFrame.ballPos.x) * frac;
        ball.pos.y = currFrame.ballPos.y + (nextFrame.ballPos.y - currFrame.ballPos.y) * frac;
        ball.z = currFrame.ballPos.z + (nextFrame.ballPos.z - currFrame.ballPos.z) * frac;
        ball.rotationAngle = currFrame.ballRotation + (nextFrame.ballRotation - currFrame.ballRotation) * frac;

        // 2. Silky Smooth Lerp Player Positions, Facing Angles & Running Animations
        currFrame.players.forEach((pf) => {
          const p = players.find((pl) => pl.id === pf.id);
          const npf = nextFrame.players.find((pl) => pl.id === pf.id);
          if (p) {
            const nextX = npf ? npf.pos.x : pf.pos.x;
            const nextY = npf ? npf.pos.y : pf.pos.y;
            const nextAngle = npf ? npf.facingAngle : pf.facingAngle;

            const deltaX = nextX - pf.pos.x;
            const deltaY = nextY - pf.pos.y;
            const spd = Math.hypot(deltaX, deltaY);

            p.pos.x = pf.pos.x + deltaX * frac;
            p.pos.y = pf.pos.y + deltaY * frac;

            // Interpolate facing angle smoothly
            let diff = nextAngle - pf.facingAngle;
            while (diff < -Math.PI) diff += Math.PI * 2;
            while (diff > Math.PI) diff -= Math.PI * 2;
            p.facingAngle = pf.facingAngle + diff * frac;

            // Replay-controlled animation states (from snapshot buffer)
            p.isTackling = pf.isTackling || false;
            p.isStandingTackling = pf.isStandingTackling || false;
            p.isKickingTimer = pf.isKicking ? 0.1 : 0;
            p.isDiving = pf.isDiving || false;

            // --- RESET all stale timers/states from the live game so they
            //     cannot bleed into the replay visuals ---
            if (!p.isTackling) p.tackleTimer = 0;
            if (!p.isStandingTackling) p.standingTackleTimer = 0;
            p.duelFeedbackTimer = 0;        // Hide all floating feedback badges
            p.duelFeedbackText = '';
            p.duelFeedbackYOffset = 0;
            p.isChargingShot = false;       // Hide shot power meter
            p.isChargingSlide = false;      // Hide slide power meter
            p.shotPower = 0;
            p.slidePower = 0;
            p.isSprinting = false;          // Hide sprint stamina effects
            p.skillDodgeInvincibleTimer = 0;// Hide dodge invincible ring

            // Compute replay velocity & step animation phase for smooth leg strides
            p.vel.x = deltaX * 0.6;
            p.vel.y = deltaY * 0.6;
            if (spd > 0.1) {
              p.stepPhase = (p.stepPhase + spd * 0.05) % 1;
            }
          }
        });
      }

      // Clear all player & ball particle effects each replay frame so live-game
      // particles (slide dust, kick sparks) are never visible during the replay
      players.forEach((p) => { p.turfParticles = []; });
      ball.turfGrassParticles = [];
      ball.burstShockwaves = [];
      ball.trailHistory = [];

      // Smooth camera follow during replay
      cameraRef.current.x = cameraRef.current.x * 0.88 + ball.pos.x * 0.12;
      cameraRef.current.y = cameraRef.current.y * 0.88 + ball.pos.y * 0.12;
    } else {

    // 2. Update Match Rules, Statistics & Match Engine Phases
    const matchResult = rules.update(dt, ball, field, players);
    if (matchResult.goalScored) {
      const shotSpeedKmH = rules.lastGoalShotSpeed;
      cameraShakeRef.current = 28;
      setIsGoalShaking(true);
      setIsCrowdSurging(true);
      setGoalBannerText(`⚽ GOAL! 🚀 ${shotSpeedKmH} KM/H THUNDERBOLT!`);
      setWhistleBannerText('GOAL!');
      triggerCallout('goal', '🎉 GOAL GOAL GOAL!', `🚀 ${shotSpeedKmH} KM/H Thunderbolt Strike`);
      audioService.playGoalSound();

      // Trigger 240-frame 0.6x Slow-Motion Replay System
      if (replayBufferRef.current.length > 30) {
        replayFramesRef.current = [...replayBufferRef.current];
        replayFrameIndexRef.current = 0;
        isReplayActiveRef.current = true;
        setIsReplayActive(true);

        // Clear all live-game particle effects so they don't bleed into replay visuals
        players.forEach((p) => { p.turfParticles = []; });
        ball.turfGrassParticles = [];
        ball.burstShockwaves = [];
        ball.trailHistory = [];
      }

      // Snappy 1.0-second auto-clear for goal notification banners
      setTimeout(() => {
        setGoalBannerText(null);
        setWhistleBannerText(null);
        setIsGoalShaking(false);
        setIsCrowdSurging(false);
      }, 1000);
    }

    if (matchResult.needsKickoffReset) {
      resetMatchPositions(rules.kickoffTeam);
      setGoalBannerText(null);
      setIsGoalShaking(false);
      setIsCrowdSurging(false);
      setWhistleBannerText('KICK-OFF!');
      audioService.playWhistleSFX('short');
      setTimeout(() => {
        setWhistleBannerText(null);
      }, 1500);
    }

    if (matchResult.phaseChanged) {
      if (rules.state.phase === 'PHASE_HALF_TIME') {
        setIsCrowdSurging(true);
        setWhistleBannerText('HALF TIME!');
        audioService.playWhistleSFX('double');
      } else if (rules.state.phase === 'PHASE_FULL_TIME') {
        setIsCrowdSurging(true);
        setWhistleBannerText('FULL TIME!');
        audioService.playWhistleSFX('double');
      }
    }
    if (rules.state.state !== 'GAME_OVER') {
      // 2. Update Players (P1, P2, AI Bots) with Configured Controllers & Devices
      players.forEach((player) => {
        const teammates = players.filter((p) => p.team === player.team && p.id !== player.id);
        const opponents = players.filter((p) => p.team !== player.team);

        let activeGp: GamepadState | null = null;
        const devType = player.devType || (player.team === 'home' ? p1Device : p2Device);

        // Multi-Controller Device Input Resolver (Keyboard WASD, Arrows, USB Gamepads, HP Remote)
        if (devType === 'hp_remote' || player.controllerIndex === 99) {
          activeGp = remoteGamepadStateRef.current || (player.team === 'home' ? p1Input : p2Input);
        } else if (devType === 'keyboard1') {
          activeGp = p1Input;
        } else if (devType === 'keyboard2') {
          activeGp = p2Input;
        } else if (devType === 'gamepad0') {
          activeGp = gamepads[0] || (player.team === 'home' ? p1Input : p2Input);
        } else if (devType === 'gamepad1') {
          activeGp = gamepads[1] || gamepads[0] || (player.team === 'away' ? p2Input : p1Input);
        } else if (player.id.startsWith('p1')) {
          if (p1Device === 'hp_remote') activeGp = remoteGamepadStateRef.current || p1Input;
          else if (p1Device === 'gamepad0') activeGp = gamepads[0] || p1Input;
          else activeGp = p1Input;
        } else if (player.id.startsWith('p2')) {
          if (p2Device === 'hp_remote') activeGp = remoteGamepadStateRef.current || p2Input;
          else if (p2Device === 'gamepad1') activeGp = gamepads[1] || gamepads[0] || p2Input;
          else activeGp = p2Input;
        }

        if (activeGp && !player.isAI && devType !== 'ai_bot') {
          const { toggleHUDRequested } = player.updateFromGamepad(activeGp, ball, field, teammates, opponents, dt);
          if (toggleHUDRequested) {
            setShowHUD((prev) => !prev);
          }
        } else if (player.isAI || devType === 'ai_bot') {
          // AI Enemy Bot Intelligence Loop
          player.updateEnemyBotAI(ball, field, opponents, teammates, dt);
        } else {
          player.updatePassiveReception(ball, field, dt);
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

          const tacklerSpeed = Math.hypot(tackler.vel.x, tackler.vel.y);
          const carrierSpeed = Math.hypot(ballCarrier.vel.x, ballCarrier.vel.y);

          const isTacklerMoving = tacklerSpeed > 0.6;
          const isCarrierMoving = carrierSpeed > 0.6;

          const ballHitboxRadius = tackler.radius + ball.radius + 22;
          const bodyHitboxRadius = tackler.radius + ballCarrier.radius + 20;
          const slideHitboxRadius = tackler.radius + ballCarrier.radius + 80;
          const pokeHitboxRadius = tackler.radius + ballCarrier.radius + (tackler.standingTackleReach || 36);

          // Body contact or direct ball steal requires either active movement or an intentional tackle attempt.
          const isDirectBallHit = distToBall < ballHitboxRadius && (isTacklerMoving || isCarrierMoving || tackler.isTackling || tackler.isStandingTackling);
          const isBodyContactHit = distToCarrier < bodyHitboxRadius && (isTacklerMoving || isCarrierMoving || tackler.isTackling || tackler.isStandingTackling);
          const isSlideHit = tackler.isTackling && (distToCarrier < slideHitboxRadius || distToBall < slideHitboxRadius);
          const isPokeHit = tackler.isStandingTackling && (distToCarrier < pokeHitboxRadius || distToBall < pokeHitboxRadius + 14);

          const canDispossess = (isDirectBallHit || isBodyContactHit || isSlideHit || isPokeHit) &&
            ballCarrier.dispossessProtectionTimer <= 0 &&
            tackler.dispossessProtectionTimer <= 0;

          if (canDispossess) {
            let stealChance = 0.88;
            if (isSlideHit) stealChance = 0.95;
            else if (isPokeHit) stealChance = 0.94;

            if (Math.random() < stealChance) {
              ballCarrier.hasPossession = false;
              ball.attachedPlayerId = null;
              ballCarrier.dispossessProtectionTimer = 0.35;
              ballCarrier.stumbleTimer = 0.35;
              tackler.dispossessProtectionTimer = 0.35;
              tackler.hasPossession = true;
              ball.attachedPlayerId = tackler.id;
              ball.attachToPlayer(tackler.pos, tackler.facingAngle, tackler.radius, tackler.vel, tackler.id, tackler.isCloseControl);
              ball.releaseTimer = 0.15;

              // Physical separation nudge to break contact boundary cleanly
              const sepX = (ballCarrier.pos.x - tackler.pos.x) || (Math.random() - 0.5);
              const sepY = (ballCarrier.pos.y - tackler.pos.y) || (Math.random() - 0.5);
              const sepDist = Math.hypot(sepX, sepY) || 1;
              ballCarrier.pos.x += (sepX / sepDist) * 14;
              ballCarrier.pos.y += (sepY / sepDist) * 14;

              rules.recordTackle(tackler.team);

              if (isPokeHit) {
                triggerCallout('tackle', '👟 POKE TACKLE!', 'Tekel Berdiri Cepat & Bersih');
                tackler.triggerFeedback('👟 POKE STEAL!');
                tackler.isStandingTackling = false;
              } else {
                triggerCallout('tackle', '🛡️ CLEAN TACKLE!', 'Rebutan Bola Sukses');
                tackler.triggerFeedback('🛡️ TACKLE!');
                tackler.isTackling = false;
              }
              ballCarrier.triggerFeedback('💥 REBUT!');
              audioService.playTackleSFX();
            }
          } else if (distToCarrier < bodyHitboxRadius + 10 && !tackler.isTackling && !tackler.isStandingTackling) {
            // Physical Shoulder Charge / Body Barge duel
            const tacklerSpd = Math.hypot(tackler.vel.x, tackler.vel.y);
            if (tacklerSpd > 1.2) {
              const toCarrierX = ballCarrier.pos.x - tackler.pos.x;
              const toCarrierY = ballCarrier.pos.y - tackler.pos.y;
              const toDist = Math.hypot(toCarrierX, toCarrierY) || 1;
              const moveDot = (tackler.vel.x * toCarrierX + tackler.vel.y * toCarrierY) / (tacklerSpd * toDist);

              if (moveDot > 0.25 && ballCarrier.stumbleTimer <= 0) {
                ballCarrier.stumbleTimer = 0.35;
                ballCarrier.triggerFeedback('💥 BODY CHARGE!');
                audioService.playTackleSFX();
                // Nudge carrier away physically
                ballCarrier.pos.x += (toCarrierX / toDist) * 8;
                ballCarrier.pos.y += (toCarrierY / toDist) * 8;

                // Physical scramble: chance to pop ball loose
                if (ballCarrier.isExhausted || Math.random() < 0.45) {
                  ballCarrier.hasPossession = false;
                  ball.attachedPlayerId = null;
                  ball.vel.x = tackler.vel.x * 0.7 + (Math.random() - 0.5) * 4;
                  ball.vel.y = tackler.vel.y * 0.7 + (Math.random() - 0.5) * 4;
                  ball.releaseTimer = 0.20;
                  triggerCallout('tackle', '💥 SHOULDER BARGE!', 'Perebutan Fisik Memenangkan Bola');
                  rules.recordTackle(tackler.team);
                }
              }
            } else if (Math.random() < 0.08) {
              ballCarrier.triggerFeedback('🛡️ BODY SHIELD!');
            }
          }
        }
      });

      // 5. FRAME-PERFECT RECEPTION POSSESSION ATTACHMENT SOLVER
      players.forEach((p) => {
        if (ball.attachedPlayerId === p.id) {
          p.hasPossession = true;
          ball.attachToPlayer(p.pos, p.facingAngle, p.radius, p.vel, p.id, p.isCloseControl);
        } else {
          const distToBall = Math.hypot(p.pos.x - ball.pos.x, p.pos.y - ball.pos.y);
          const receptionRadius = p.radius + ball.radius + 28;

          // Task 2 Fix: Ground ball reception requires ball.z <= 12 and allows any player (teammate or opponent interceptor) to catch the ball
          if (ball.releaseTimer <= 0 && p.dispossessProtectionTimer <= 0 && distToBall < receptionRadius) {
            if (ball.z <= 12) {
              p.hasPossession = true;
              ball.homingTargetPlayer = null;
              ball.throughPassTargetPos = null;
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

      const tiltY = PixelSpriteRenderer.PITCH_TILT_Y;
      const padding = 280;
      const spanX = Math.max(500, (maxX - minX) + padding);
      const spanY = Math.max(350, (maxY - minY) + padding);

      const viewW = dimensions.width;
      const viewH = dimensions.height;

      const reqZoomX = viewW / spanX;
      const reqZoomY = viewH / (spanY * tiltY);

      const targetZoomRaw = Math.min(reqZoomX, reqZoomY);
      const targetZoom = Math.max(0.52, Math.min(0.92, targetZoomRaw));

      // Dramatic zoom in during Goal Celebration phase
      if (rules.state.phase === 'PHASE_GOAL_CELEBRATION') {
        const scorer = players.find((p) => p.team === rules.lastGoalScorerTeam && !p.isGoalkeeper) || players[0];
        if (scorer) {
          cameraRef.current.x = cameraRef.current.x * 0.90 + scorer.pos.x * 0.10;
          cameraRef.current.y = cameraRef.current.y * 0.90 + scorer.pos.y * 0.10;
          zoomRef.current = zoomRef.current * 0.92 + 1.15 * 0.08;
        }
      } else {
        cameraRef.current.x = cameraRef.current.x * 0.90 + targetCamX * 0.10;
        cameraRef.current.y = cameraRef.current.y * 0.90 + targetCamY * 0.10;
        zoomRef.current = zoomRef.current * 0.92 + targetZoom * 0.08;
      }
    }
  }

    // Compute real-time Active Player Data for PES/FIFA Player Card Widget
    const activeP = players.find((p) => p.hasPossession)
      || players.find((p) => !p.isAI && (p.controllerIndex !== null || p.devType !== 'ai_bot'))
      || players[0];

    if (activeP) {
      const pIdx = activeP.id.includes('p1') ? 10 : activeP.id.includes('p2') ? 9 : activeP.id.includes('p3') ? 4 : 7;
      setActivePlayerData({
        id: activeP.id,
        name: activeP.name,
        squadNumber: pIdx,
        team: activeP.team,
        role: activeP.role || 'MF',
        stamina: activeP.stamina,
        isSprinting: activeP.isSprinting,
        isExhausted: activeP.isExhausted,
        isTackling: activeP.isTackling,
        isChargingShot: activeP.isChargingShot,
        shotPower: activeP.shotPower,
        hasPossession: activeP.hasPossession,
        skinColor: activeP.skinColor,
        hairColor: activeP.hairColor,
        jerseyColor: activeP.color,
      });
    }

    setMatchState({ ...matchRulesRef.current.state });

    const tiltY = PixelSpriteRenderer.PITCH_TILT_Y;
    const viewW = canvas.clientWidth || dimensions.width;
    const viewH = canvas.clientHeight || dimensions.height;
    if (canvas.width !== viewW || canvas.height !== viewH) {
      canvas.width = viewW;
      canvas.height = viewH;
    }
    const currentZoom = zoomRef.current;
    const halfVisibleW = viewW / (2 * currentZoom);
    const halfVisibleH = viewH / (2 * currentZoom * tiltY);

    const camMarginX = 140;
    const camMarginY = 120;
    const clampedCamX = Math.max(halfVisibleW - camMarginX, Math.min(WORLD_WIDTH - halfVisibleW + camMarginX, cameraRef.current.x));
    const clampedCamY = Math.max(halfVisibleH - camMarginY, Math.min(WORLD_HEIGHT - halfVisibleH + camMarginY, cameraRef.current.y));

    // Camera Shake Decay
    if (cameraShakeRef.current > 0.4) {
      cameraShakeRef.current *= 0.88;
    } else {
      cameraShakeRef.current = 0;
    }
    const shakeX = cameraShakeRef.current > 0 ? (Math.random() - 0.5) * cameraShakeRef.current : 0;
    const shakeY = cameraShakeRef.current > 0 ? (Math.random() - 0.5) * cameraShakeRef.current : 0;

    // Real-time Off-Screen Ball Tracking
    const screenBallX = viewW / 2 + (ball.pos.x - clampedCamX) * currentZoom;
    const screenBallY = viewH / 2 + (ball.pos.y - clampedCamY) * currentZoom * tiltY;
    const margin = 42;
    const isBallOffScreen = screenBallX < margin || screenBallX > viewW - margin || screenBallY < margin || screenBallY > viewH - margin;

    if (isBallOffScreen) {
      const dx = screenBallX - viewW / 2;
      const dy = screenBallY - viewH / 2;
      const angle = Math.atan2(dy, dx);
      const edgeX = Math.max(margin, Math.min(viewW - margin, screenBallX));
      const edgeY = Math.max(margin, Math.min(viewH - margin, screenBallY));
      const distPx = Math.hypot(ball.pos.x - clampedCamX, ball.pos.y - clampedCamY);
      const distanceMeters = Math.max(1, Math.round(distPx / 22));

      setOffScreenBall({
        isOffScreen: true,
        edgeX,
        edgeY,
        angle,
        distanceMeters
      });
    } else {
      setOffScreenBall(null);
    }

    // Real-time Radar Mini-Map State Telemetry
    setRadarData({
      fieldWidth: WORLD_WIDTH,
      fieldHeight: WORLD_HEIGHT,
      ball: { x: ball.pos.x, y: ball.pos.y },
      players: players.map((p) => ({
        id: p.id,
        name: p.name,
        team: p.team,
        role: p.role,
        x: p.pos.x,
        y: p.pos.y,
        color: p.color,
        hasPossession: p.hasPossession,
        isActiveUser: !p.isAI && (p.controllerIndex !== null || p.devType !== 'ai_bot')
      })),
      camera: {
        x: clampedCamX,
        y: clampedCamY,
        zoom: currentZoom,
        viewWidth: viewW,
        viewHeight: viewH
      }
    });

    // Render Canvas in Authentic 2.5D Isometric Pitch Projection
    ctx.clearRect(0, 0, viewW, viewH);

    ctx.save();
    ctx.translate(viewW / 2, viewH / 2);
    ctx.scale(currentZoom, currentZoom * tiltY);
    ctx.translate(-clampedCamX + shakeX, -clampedCamY + shakeY);

    field.draw(ctx, isGoalShaking, isCrowdSurging || isGoalShaking);

    // Tactical Passing Grid, Vision Cone & Receiver Reticle
    drawTacticalPassingGrid(ctx, players, ball);

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
        radarData={radarData}
        offScreenBall={offScreenBall}
        isGoalShaking={isGoalShaking}
        whistleBannerText={whistleBannerText}
        activePlayer={activePlayerData}
        arcadeCallouts={arcadeCallouts}
        isReplayActive={isReplayActive}
        onSkipReplay={skipReplay}
        onResumeSecondHalf={() => {
          matchRulesRef.current.resumeFromHalfTime();
          resetMatchPositions(matchRulesRef.current.kickoffTeam);
          setWhistleBannerText('2ND HALF KICK-OFF!');
          setTimeout(() => setWhistleBannerText(null), 1500);
        }}
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
