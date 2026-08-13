import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Keyboard, Gamepad, Smartphone, Bot, RotateCcw, Lock, CheckCircle2 } from 'lucide-react';
import { DeviceType } from './ControllerSelectModal';

export interface SquadPlayer {
  pos: 'GK' | 'CB' | 'LB' | 'RB' | 'DMF' | 'CMF' | 'LWF' | 'RWF' | 'CF' | 'SS' | 'RMF';
  name: string;
  rating: number;
}

export interface CharacterData {
  id: string;
  name: string;
  club: string;
  role: string;
  avatar: string;
  flag: string;
  formation: string;
  color: string;
  kitHex: string;
  stats: {
    speed: number;
    shot: number;
    defense: number;
    dribble: number;
  };
  roster: SquadPlayer[];
}

export const CHARACTERS: CharacterData[] = [
  {
    id: 'striker_red',
    name: 'France',
    club: 'RED CYBER FC',
    role: 'POWER FORWARD',
    avatar: '⚡',
    flag: '🇫🇷',
    formation: '4-3-3',
    color: '#3B82F6',
    kitHex: '#3B82F6',
    stats: { speed: 92, shot: 95, defense: 60, dribble: 88 },
    roster: []
  },
  {
    id: 'mint_playmaker',
    name: 'Indonesia',
    club: 'ELECTRIC MINT FC',
    role: 'TACTICAL PLAYMAKER',
    avatar: '⚽',
    flag: '🇮🇩',
    formation: '5-3-2',
    color: '#3B82F6',
    kitHex: '#3B82F6',
    stats: { speed: 89, shot: 88, defense: 75, dribble: 96 },
    roster: []
  }
];

export interface PlayerNode {
  id: string;
  name: string;
  devType: DeviceType;
  team: 'home' | 'away';
  x: number; // 0 - 100%
  y: number; // 0 - 100%
}

interface TeamSelectViewProps {
  mode: '1v1' | '2vBot';
  p1Device: DeviceType;
  p2Device: DeviceType;
  onBackToControllers: () => void;
  onConfirmStartGame: (p1Char: CharacterData, p2Char: CharacterData, customSpawns: PlayerNode[]) => void;
}

// Auto role detection based on Y-coordinate percentage (Own Half: 50% - 92%)
const getAutoRole = (yPercent: number): { code: 'FWD' | 'MID' | 'DEF' | 'GK'; label: string; bg: string } => {
  if (yPercent < 62) return { code: 'FWD', label: 'Penyerang', bg: 'bg-rose-500 text-white shadow-rose-500/30' };
  if (yPercent < 78) return { code: 'MID', label: 'Gelandang', bg: 'bg-emerald-500 text-white shadow-emerald-500/30' };
  if (yPercent < 88) return { code: 'DEF', label: 'Bek Bertahan', bg: 'bg-blue-600 text-white shadow-blue-600/30' };
  return { code: 'GK', label: 'Penjaga Gawang', bg: 'bg-amber-400 text-slate-950 shadow-amber-400/30 font-black' };
};

export const TeamSelectView: React.FC<TeamSelectViewProps> = ({
  mode,
  p1Device,
  p2Device,
  onBackToControllers,
  onConfirmStartGame
}) => {
  const homePitchRef = useRef<HTMLDivElement>(null);
  const awayPitchRef = useRef<HTMLDivElement>(null);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  // Initial Player Spawn Position Nodes (Placed strictly inside Own Half: Y >= 50%)
  const [nodes, setNodes] = useState<PlayerNode[]>([
    { id: 'p1', name: 'Player 1', devType: p1Device, team: 'home', x: 50, y: 55 },
    { id: 'p1_sub', name: 'Player 2', devType: 'keyboard2', team: 'home', x: 30, y: 72 },
    { id: 'p2', name: mode === '2vBot' ? 'AI Bot 1' : 'Player 1', devType: mode === '2vBot' ? 'ai_bot' : p2Device, team: 'away', x: 50, y: 55 },
    { id: 'p2_sub', name: mode === '2vBot' ? 'AI Bot 2' : 'Player 2', devType: mode === '2vBot' ? 'ai_bot' : 'gamepad1', team: 'away', x: 70, y: 72 }
  ]);

  const p1Char = CHARACTERS[0];
  const p2Char = CHARACTERS[1];

  // Reset positions to default
  const handleResetPositions = () => {
    setNodes([
      { id: 'p1', name: 'Player 1', devType: p1Device, team: 'home', x: 50, y: 55 },
      { id: 'p1_sub', name: 'Player 2', devType: 'keyboard2', team: 'home', x: 30, y: 72 },
      { id: 'p2', name: mode === '2vBot' ? 'AI Bot 1' : 'Player 1', devType: mode === '2vBot' ? 'ai_bot' : p2Device, team: 'away', x: 50, y: 55 },
      { id: 'p2_sub', name: mode === '2vBot' ? 'AI Bot 2' : 'Player 2', devType: mode === '2vBot' ? 'ai_bot' : 'gamepad1', team: 'away', x: 70, y: 72 }
    ]);
  };

  // Continuous Smooth Sliding Game Loop for Keyboard (WASD & Arrows) and Gamepads
  const pressedKeysRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      pressedKeysRef.current.add(e.key.toLowerCase());
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      pressedKeysRef.current.delete(e.key.toLowerCase());
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    let animationId: number;

    const gameLoop = () => {
      const keys = pressedKeysRef.current;
      const speed = 0.6; // percentage per frame for fluid 60fps sliding
      const rawGamepads = typeof navigator !== 'undefined' && navigator.getGamepads ? navigator.getGamepads() : [];

      setNodes((prevNodes) => {
        let changed = false;

        const nextNodes = prevNodes.map((node) => {
          let dx = 0;
          let dy = 0;

          // 1. Keyboard P1 Inputs (WASD)
          if (node.id === 'p1') {
            if (keys.has('a')) dx -= speed;
            if (keys.has('d')) dx += speed;
            if (keys.has('w')) dy -= speed;
            if (keys.has('s')) dy += speed;
          }

          // 2. Keyboard P1 Sub & P2 Inputs (Arrow Keys)
          if ((node.id === 'p2' && mode === '1v1') || node.id === 'p1_sub') {
            if (keys.has('arrowleft')) dx -= speed;
            if (keys.has('arrowright')) dx += speed;
            if (keys.has('arrowup')) dy -= speed;
            if (keys.has('arrowdown')) dy += speed;
          }

          // 3. Gamepad Analog Stick & D-Pad Inputs
          let gpIndex = -1;
          if (node.devType === 'gamepad0') gpIndex = 0;
          else if (node.devType === 'gamepad1') gpIndex = 1;

          if (gpIndex >= 0 && rawGamepads[gpIndex]) {
            const gp = rawGamepads[gpIndex];
            if (gp) {
              const leftStickX = Math.abs(gp.axes[0] || 0) > 0.15 ? gp.axes[0] : 0;
              const leftStickY = Math.abs(gp.axes[1] || 0) > 0.15 ? gp.axes[1] : 0;
              const dpadLeft = gp.buttons[14]?.pressed ? -1 : 0;
              const dpadRight = gp.buttons[15]?.pressed ? 1 : 0;
              const dpadUp = gp.buttons[12]?.pressed ? -1 : 0;
              const dpadDown = gp.buttons[13]?.pressed ? 1 : 0;

              dx += (leftStickX + dpadLeft + dpadRight) * speed;
              dy += (leftStickY + dpadUp + dpadDown) * speed;
            }
          }

          if (dx !== 0 || dy !== 0) {
            changed = true;
            const newX = Math.max(10, Math.min(90, node.x + dx));
            const newY = Math.max(50, Math.min(92, node.y + dy));
            return { ...node, x: newX, y: newY };
          }

          return node;
        });

        return changed ? nextNodes : prevNodes;
      });

      animationId = requestAnimationFrame(gameLoop);
    };

    animationId = requestAnimationFrame(gameLoop);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      cancelAnimationFrame(animationId);
    };
  }, [mode]);

  const renderDevIcon = (devType: DeviceType) => {
    switch (devType) {
      case 'keyboard1':
      case 'keyboard2':
        return <Keyboard className="w-5 h-5 text-white" />;
      case 'gamepad0':
      case 'gamepad1':
        return <Gamepad className="w-5 h-5 text-white" />;
      case 'hp_remote':
        return <Smartphone className="w-5 h-5 text-sky-400" />;
      case 'ai_bot':
        return <Bot className="w-5 h-5 text-amber-400" />;
      default:
        return <Gamepad className="w-5 h-5 text-white" />;
    }
  };

  const getDevLabel = (devType: DeviceType) => {
    switch (devType) {
      case 'keyboard1':
        return 'Keyboard WASD';
      case 'keyboard2':
        return 'Keyboard Arrow';
      case 'gamepad0':
        return 'Gamepad Stik 1';
      case 'gamepad1':
        return 'Gamepad Stik 2';
      case 'hp_remote':
        return 'HP Wireless Controller';
      case 'ai_bot':
        return 'Auto Bot AI';
      default:
        return 'Gamepad';
    }
  };

  // Robust, Direct Pointer Drag Handler (Zero Transform Conflict, Zero Random Sliding)
  const handlePointerDownNode = (
    id: string,
    team: 'home' | 'away',
    e: React.PointerEvent<HTMLDivElement>
  ) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    if (team === 'away' && mode === '2vBot') return; // AI Bot not manually draggable

    e.preventDefault();
    e.stopPropagation();

    const pitchRef = team === 'home' ? homePitchRef : awayPitchRef;
    if (!pitchRef.current) return;

    const updatePos = (clientX: number, clientY: number) => {
      if (!pitchRef.current) return;
      const rect = pitchRef.current.getBoundingClientRect();
      const relX = Math.max(10, Math.min(90, ((clientX - rect.left) / rect.width) * 100));
      const relY = Math.max(50, Math.min(92, ((clientY - rect.top) / rect.height) * 100));

      setNodes((prev) =>
        prev.map((n) => (n.id === id ? { ...n, x: relX, y: relY } : n))
      );
    };

    const onPointerMove = (ev: PointerEvent) => {
      updatePos(ev.clientX, ev.clientY);
    };

    const onPointerUp = (ev: PointerEvent) => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
  };

  return (
    <div className="relative w-screen h-screen bg-[#070b0e] text-[#E2F1F8] flex flex-col justify-between p-3 sm:p-5 select-none overflow-hidden font-['Inter',sans-serif]">
      {/* FLOATING TOP-LEFT BACK BUTTON */}
      <button
        onClick={onBackToControllers}
        className="fixed top-4 left-6 z-30 bg-[#111513]/90 backdrop-blur border border-white/10 hover:border-white/30 text-slate-300 hover:text-white px-4 py-2 rounded-lg text-xs font-semibold cursor-pointer transition flex items-center gap-2 shadow-2xl"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Ganti Controller</span>
      </button>

      {/* FULLSCREEN eFOOTBALL / PES TEAM SHEET CARDS (HOME LEFT vs AWAY RIGHT) */}
      <div className="relative z-10 w-full h-[calc(100vh-80px)] my-auto mt-6 mb-12 px-2 sm:px-4 grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
        
        {/* ==================== HOME TEAM CARD ==================== */}
        <div className="bg-[#111513] border border-white/10 p-5 rounded-2xl shadow-2xl flex flex-col justify-between h-full">
          {/* HEADER: FLAG + TEAM NAME + SUBHEADER */}
          <div className="border-b border-white/10 pb-3 mb-3 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="text-3xl sm:text-4xl filter drop-shadow">{p1Char.flag}</span>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-black uppercase text-white font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
                    {p1Char.name}
                  </h3>
                  <span className="text-[11px] font-bold text-sky-400 bg-sky-950/80 border border-sky-500/30 px-2 py-0.5 rounded-full">
                    HOME
                  </span>
                </div>
                <p className="text-xs font-medium text-slate-400 mt-0.5">
                  Atur Titik Spawn Tim Tuan Rumah
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-sky-300 bg-[#162133] px-3 py-1.5 rounded-lg border border-sky-500/20">
                {getDevLabel(p1Device)}
              </span>
              <button
                onClick={handleResetPositions}
                className="p-2 bg-[#171d1a] border border-white/10 hover:border-white/30 text-slate-400 hover:text-white rounded-lg cursor-pointer transition flex items-center gap-1 text-xs font-medium"
                title="Reset Posisi Default"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            </div>
          </div>

          {/* MAIN CARD BODY: PITCH (LEFT 7 COLS) + CONNECTED PLAYERS ROSTER (RIGHT 5 COLS) */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-stretch my-1 flex-1">
            
            {/* LEFT 7 COLS: FIELD PITCH WITH DRAGGABLE NODES */}
            <div className="sm:col-span-7 flex flex-col h-full">
              <div
                ref={homePitchRef}
                className="relative w-full h-[450px] sm:h-[490px] lg:h-[calc(100vh-220px)] bg-[#15803d] p-3 flex flex-col justify-between overflow-hidden shadow-xl rounded-2xl border-2 border-emerald-500/30 select-none"
                style={{
                  backgroundImage: `repeating-linear-gradient(to bottom, #16a34a 0px, #16a34a 45px, #15803d 45px, #15803d 90px)`
                }}
              >
                {/* PITCH FIELD LINES SVG OVERLAY */}
                <svg className="absolute inset-0 w-full h-full stroke-white/40 stroke-[2] fill-none pointer-events-none">
                  <rect x="6" y="6" width="calc(100% - 12px)" height="calc(100% - 12px)" rx="10" />
                  <line x1="6" y1="50%" x2="calc(100% - 6px)" y2="50%" />
                  <circle cx="50%" cy="50%" r="42" />
                  {/* Top Penalty Box */}
                  <rect x="20%" y="6" width="60%" height="25%" />
                  <rect x="33%" y="6" width="34%" height="10%" />
                  {/* Bottom Penalty Box */}
                  <rect x="20%" y="75%" width="60%" height="25%" />
                  <rect x="33%" y="90%" width="34%" height="10%" />
                </svg>

                {/* OPPONENT HALF (TOP 50%) - CLEAN & ELEGANT TINT */}
                <div className="absolute top-0 left-0 right-0 h-[50%] bg-[#05090c]/45 backdrop-blur-[1px] border-b-2 border-dashed border-white/20 pointer-events-none z-10 flex flex-col items-center justify-center">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#090e12]/80 border border-white/10 text-slate-400 shadow-md">
                    <Lock className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-[11px] font-semibold tracking-wider uppercase font-['Plus_Jakarta_Sans',sans-serif]">
                      Daerah Lawan
                    </span>
                  </div>
                </div>

                {/* VALID SPAWN ZONE INDICATOR (BOTTOM) */}
                <div className="absolute bottom-2.5 left-0 right-0 flex justify-center pointer-events-none z-10">
                  <span className="text-[10px] font-bold text-emerald-200 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/40 shadow flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Area Spawn Tim Anda
                  </span>
                </div>

                {/* HOME PLAYER NODES */}
                {nodes
                  .filter((n) => n.team === 'home')
                  .map((node) => {
                    const role = getAutoRole(node.y);
                    const isHovered = hoveredNodeId === node.id;
                    return (
                      <div
                        key={node.id}
                        onPointerDown={(e) => handlePointerDownNode(node.id, 'home', e)}
                        onMouseEnter={() => setHoveredNodeId(node.id)}
                        onMouseLeave={() => setHoveredNodeId(null)}
                        style={{ left: `${node.x}%`, top: `${node.y}%` }}
                        className="absolute z-20 -translate-x-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing flex flex-col items-center group touch-none select-none"
                      >
                        {/* USER LABEL BADGE */}
                        <div className="flex items-center gap-1 bg-[#0c100e]/95 border border-sky-500/60 px-2 py-0.5 rounded-full shadow-lg mb-1 whitespace-nowrap pointer-events-none">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                          <span className="text-[10px] font-bold text-white font-['Plus_Jakarta_Sans',sans-serif]">
                            {node.name}
                          </span>
                        </div>

                        {/* MAIN AVATAR CIRCLE NODE */}
                        <div className={`w-12 h-12 rounded-full bg-[#0c100e] border-2 border-sky-400 shadow-xl flex items-center justify-center relative transition-all duration-150 pointer-events-none ${
                          isHovered ? 'scale-125 shadow-sky-500/60 ring-4 ring-sky-400/30' : 'group-hover:scale-110 shadow-sky-500/30'
                        }`}>
                          {renderDevIcon(node.devType)}
                        </div>

                        {/* AUTO ROLE BADGE */}
                        <span className={`text-[9px] font-black px-2 py-0.5 rounded-md shadow-md mt-1 uppercase font-['Plus_Jakarta_Sans',sans-serif] pointer-events-none ${role.bg}`}>
                          {role.code}
                        </span>
                      </div>
                    );
                  })}
              </div>
            </div>

            {/* RIGHT 5 COLS: CONNECTED PLAYERS SQUAD ROSTER PANEL */}
            <div className="sm:col-span-5 bg-[#0c100e] p-4 rounded-xl border border-white/10 flex flex-col justify-between h-full">
              <div>
                <div className="border-b border-white/10 pb-3 mb-3 flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-bold text-white font-['Plus_Jakarta_Sans',sans-serif]">
                      Pemain Terkoneksi
                    </h4>
                    <p className="text-[11px] text-slate-400">
                      Geser ikon di lapangan untuk ubah posisi
                    </p>
                  </div>
                  <span className="text-sky-400 text-xs font-bold bg-sky-950/80 px-3 py-1 rounded-full border border-sky-500/30 whitespace-nowrap shrink-0">
                    {nodes.filter((n) => n.team === 'home').length} Pemain
                  </span>
                </div>

                <div className="flex flex-col gap-2.5 overflow-y-auto max-h-[400px] lg:max-h-[calc(100vh-280px)] pr-1 custom-scrollbar">
                  {nodes
                    .filter((n) => n.team === 'home')
                    .map((node) => {
                      const role = getAutoRole(node.y);
                      const isHovered = hoveredNodeId === node.id;
                      return (
                        <div
                          key={node.id}
                          onMouseEnter={() => setHoveredNodeId(node.id)}
                          onMouseLeave={() => setHoveredNodeId(null)}
                          className={`flex items-center justify-between p-3 rounded-xl border transition-all duration-150 ${
                            isHovered
                              ? 'bg-sky-950/40 border-sky-500/80 shadow-lg shadow-sky-500/10'
                              : 'bg-white/5 border-white/10 hover:border-sky-500/40'
                          }`}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-10 h-10 rounded-full bg-[#111513] border-2 border-sky-400 flex items-center justify-center shrink-0 shadow">
                              {renderDevIcon(node.devType)}
                            </div>
                            <div className="flex flex-col truncate">
                              <span className="text-xs font-bold text-white truncate font-['Plus_Jakarta_Sans',sans-serif]">
                                {node.name}
                              </span>
                              <span className="text-[11px] text-slate-400">
                                {getDevLabel(node.devType)}
                              </span>
                            </div>
                          </div>

                          <div className="flex flex-col items-end shrink-0 gap-1">
                            <span className={`px-2.5 py-0.5 rounded-md text-[10px] uppercase font-black font-['Plus_Jakarta_Sans',sans-serif] ${role.bg}`}>
                              {role.code}
                            </span>
                            <span className="text-[10px] text-slate-400 font-medium">
                              {role.label}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-white/10 text-xs text-slate-400 flex justify-between items-center">
                <span>Status Posisi:</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Siap Bertanding
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* ==================== AWAY TEAM CARD ==================== */}
        <div className="bg-[#111513] border border-white/10 p-5 rounded-2xl shadow-2xl flex flex-col justify-between h-full">
          {/* HEADER: FLAG + TEAM NAME + SUBHEADER */}
          <div className="border-b border-white/10 pb-3 mb-3 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="text-3xl sm:text-4xl filter drop-shadow">{p2Char.flag}</span>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-black uppercase text-white font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
                    {p2Char.name}
                  </h3>
                  <span className="text-[11px] font-bold text-amber-400 bg-amber-950/80 border border-amber-500/30 px-2 py-0.5 rounded-full">
                    AWAY
                  </span>
                </div>
                <p className="text-xs font-medium text-slate-400 mt-0.5">
                  Atur Titik Spawn Tim Tamu
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-amber-300 bg-[#261f14] px-3 py-1.5 rounded-lg border border-amber-500/20">
                {mode === '2vBot' ? 'Auto Bot AI' : getDevLabel(p2Device)}
              </span>
              <button
                onClick={handleResetPositions}
                className="p-2 bg-[#171d1a] border border-white/10 hover:border-white/30 text-slate-400 hover:text-white rounded-lg cursor-pointer transition flex items-center gap-1 text-xs font-medium"
                title="Reset Posisi Default"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            </div>
          </div>

          {/* MAIN CARD BODY: PITCH (LEFT 7 COLS) + CONNECTED PLAYERS ROSTER (RIGHT 5 COLS) */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-stretch my-1 flex-1">
            
            {/* LEFT 7 COLS: FIELD PITCH WITH DRAGGABLE NODES */}
            <div className="sm:col-span-7 flex flex-col h-full">
              <div
                ref={awayPitchRef}
                className="relative w-full h-[450px] sm:h-[490px] lg:h-[calc(100vh-220px)] bg-[#15803d] p-3 flex flex-col justify-between overflow-hidden shadow-xl rounded-2xl border-2 border-emerald-500/30 select-none"
                style={{
                  backgroundImage: `repeating-linear-gradient(to bottom, #16a34a 0px, #16a34a 45px, #15803d 45px, #15803d 90px)`
                }}
              >
                {/* PITCH FIELD LINES SVG OVERLAY */}
                <svg className="absolute inset-0 w-full h-full stroke-white/40 stroke-[2] fill-none pointer-events-none">
                  <rect x="6" y="6" width="calc(100% - 12px)" height="calc(100% - 12px)" rx="10" />
                  <line x1="6" y1="50%" x2="calc(100% - 6px)" y2="50%" />
                  <circle cx="50%" cy="50%" r="42" />
                  {/* Top Penalty Box */}
                  <rect x="20%" y="6" width="60%" height="25%" />
                  <rect x="33%" y="6" width="34%" height="10%" />
                  {/* Bottom Penalty Box */}
                  <rect x="20%" y="75%" width="60%" height="25%" />
                  <rect x="33%" y="90%" width="34%" height="10%" />
                </svg>

                {/* OPPONENT HALF (TOP 50%) - CLEAN & ELEGANT TINT */}
                <div className="absolute top-0 left-0 right-0 h-[50%] bg-[#05090c]/45 backdrop-blur-[1px] border-b-2 border-dashed border-white/20 pointer-events-none z-10 flex flex-col items-center justify-center">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#090e12]/80 border border-white/10 text-slate-400 shadow-md">
                    <Lock className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-[11px] font-semibold tracking-wider uppercase font-['Plus_Jakarta_Sans',sans-serif]">
                      Daerah Lawan
                    </span>
                  </div>
                </div>

                {/* VALID SPAWN ZONE INDICATOR (BOTTOM) */}
                <div className="absolute bottom-2.5 left-0 right-0 flex justify-center pointer-events-none z-10">
                  <span className="text-[10px] font-bold text-emerald-200 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/40 shadow flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Area Spawn Tim Anda
                  </span>
                </div>

                {/* AWAY PLAYER NODES */}
                {nodes
                  .filter((n) => n.team === 'away')
                  .map((node) => {
                    const role = getAutoRole(node.y);
                    const isHovered = hoveredNodeId === node.id;
                    return (
                      <div
                        key={node.id}
                        onPointerDown={(e) => handlePointerDownNode(node.id, 'away', e)}
                        onMouseEnter={() => setHoveredNodeId(node.id)}
                        onMouseLeave={() => setHoveredNodeId(null)}
                        style={{ left: `${node.x}%`, top: `${node.y}%` }}
                        className={`absolute z-20 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group touch-none select-none ${
                          mode === '2vBot' ? 'cursor-default' : 'cursor-grab active:cursor-grabbing'
                        }`}
                      >
                        {/* USER LABEL BADGE */}
                        <div className="flex items-center gap-1 bg-[#0c100e]/95 border border-amber-500/60 px-2 py-0.5 rounded-full shadow-lg mb-1 whitespace-nowrap pointer-events-none">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                          <span className="text-[10px] font-bold text-white font-['Plus_Jakarta_Sans',sans-serif]">
                            {node.name}
                          </span>
                        </div>

                        {/* MAIN AVATAR CIRCLE NODE */}
                        <div className={`w-12 h-12 rounded-full bg-[#0c100e] border-2 border-amber-400 shadow-xl flex items-center justify-center relative transition-all duration-150 pointer-events-none ${
                          isHovered ? 'scale-125 shadow-amber-500/60 ring-4 ring-amber-400/30' : 'group-hover:scale-110 shadow-amber-500/30'
                        }`}>
                          {renderDevIcon(node.devType)}
                        </div>

                        {/* AUTO ROLE BADGE */}
                        <span className={`text-[9px] font-black px-2 py-0.5 rounded-md shadow-md mt-1 uppercase font-['Plus_Jakarta_Sans',sans-serif] pointer-events-none ${role.bg}`}>
                          {role.code}
                        </span>
                      </div>
                    );
                  })}
              </div>
            </div>

            {/* RIGHT 5 COLS: CONNECTED PLAYERS SQUAD ROSTER PANEL */}
            <div className="sm:col-span-5 bg-[#0c100e] p-4 rounded-xl border border-white/10 flex flex-col justify-between h-full">
              <div>
                <div className="border-b border-white/10 pb-3 mb-3 flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-bold text-white font-['Plus_Jakarta_Sans',sans-serif]">
                      Pemain Terkoneksi
                    </h4>
                    <p className="text-[11px] text-slate-400">
                      {mode === '2vBot' ? 'Posisi spawn otomatis diatur' : 'Geser ikon di lapangan untuk ubah posisi'}
                    </p>
                  </div>
                  <span className="text-amber-400 text-xs font-bold bg-amber-950/80 px-3 py-1 rounded-full border border-amber-500/30 whitespace-nowrap shrink-0">
                    {nodes.filter((n) => n.team === 'away').length} Pemain
                  </span>
                </div>

                <div className="flex flex-col gap-2.5 overflow-y-auto max-h-[400px] lg:max-h-[calc(100vh-280px)] pr-1 custom-scrollbar">
                  {nodes
                    .filter((n) => n.team === 'away')
                    .map((node) => {
                      const role = getAutoRole(node.y);
                      const isHovered = hoveredNodeId === node.id;
                      return (
                        <div
                          key={node.id}
                          onMouseEnter={() => setHoveredNodeId(node.id)}
                          onMouseLeave={() => setHoveredNodeId(null)}
                          className={`flex items-center justify-between p-3 rounded-xl border transition-all duration-150 ${
                            isHovered
                              ? 'bg-amber-950/40 border-amber-500/80 shadow-lg shadow-amber-500/10'
                              : 'bg-white/5 border-white/10 hover:border-amber-500/40'
                          }`}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-10 h-10 rounded-full bg-[#111513] border-2 border-amber-400 flex items-center justify-center shrink-0 shadow">
                              {renderDevIcon(node.devType)}
                            </div>
                            <div className="flex flex-col truncate">
                              <span className="text-xs font-bold text-white truncate font-['Plus_Jakarta_Sans',sans-serif]">
                                {node.name}
                              </span>
                              <span className="text-[11px] text-slate-400">
                                {mode === '2vBot' ? 'Auto AI Player' : getDevLabel(node.devType)}
                              </span>
                            </div>
                          </div>

                          <div className="flex flex-col items-end shrink-0 gap-1">
                            <span className={`px-2.5 py-0.5 rounded-md text-[10px] uppercase font-black font-['Plus_Jakarta_Sans',sans-serif] ${role.bg}`}>
                              {role.code}
                            </span>
                            <span className="text-[10px] text-slate-400 font-medium">
                              {role.label}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-white/10 text-xs text-slate-400 flex justify-between items-center">
                <span>Status Posisi:</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Siap Bertanding
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* FLOATING CORNER MOVEMENT HINTS (BOTTOM-LEFT) */}
      <div className="fixed bottom-4 left-6 z-30 bg-[#111513]/90 backdrop-blur border border-white/10 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 shadow-2xl flex items-center gap-4">
        <span className="flex items-center gap-1.5">
          <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-[10px] font-bold">W A S D</kbd>
          <span>P1 Geser</span>
        </span>
        {mode === '1v1' && (
          <span className="border-l border-white/10 pl-4 flex items-center gap-1.5">
            <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-[10px] font-bold">▲ ◄ ▼ ►</kbd>
            <span>P2 Geser</span>
          </span>
        )}
      </div>

      {/* FLOATING CORNER KICK-OFF BUTTON (BOTTOM-RIGHT) */}
      <button
        onClick={() => onConfirmStartGame(p1Char, p2Char, nodes)}
        className="fixed bottom-4 right-6 z-30 py-3.5 px-8 clip-parallelogram bg-[#2563EB] hover:bg-[#3B82F6] text-white font-['Plus_Jakarta_Sans',sans-serif] font-black text-xs tracking-wider transition cursor-pointer flex items-center gap-2.5 shadow-2xl shadow-blue-500/30 border border-blue-400/40 hover:scale-105 active:scale-95"
      >
        <span className="w-5 h-5 rounded-full bg-[#10b981] text-white font-black flex items-center justify-center text-[10px] shadow leading-none border border-emerald-400/50">
          A
        </span>
        <span>MULAI PERTANDINGAN ➔</span>
      </button>
    </div>
  );
};
