import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Keyboard, Gamepad, Smartphone, Bot, RotateCcw } from 'lucide-react';
import { DeviceType } from './ControllerSelectModal';

export interface SquadPlayer {
  pos: 'GK' | 'CB' | 'LB' | 'RB' | 'DMF' | 'CMF' | 'LWF' | 'RWF' | 'CF' | 'SS';
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
    name: 'VALOR STRIKER',
    club: 'RED CYBER FC',
    role: 'POWER FORWARD',
    avatar: '⚡',
    flag: '🇫🇷',
    formation: '4-3-3',
    color: '#3B82F6',
    kitHex: '#3B82F6',
    stats: { speed: 92, shot: 95, defense: 60, dribble: 88 },
    roster: [
      { pos: 'GK', name: 'M. Maignan', rating: 85 },
      { pos: 'CB', name: 'W. Saliba', rating: 86 },
      { pos: 'CB', name: 'B. Pavard', rating: 84 },
      { pos: 'LB', name: 'T. Hernández', rating: 85 },
      { pos: 'RB', name: 'J. Koundé', rating: 84 },
      { pos: 'DMF', name: 'N. Kanté', rating: 86 },
      { pos: 'CMF', name: 'A. Rabiot', rating: 83 },
      { pos: 'LWF', name: 'O. Dembélé', rating: 83 },
      { pos: 'RWF', name: 'B. Barcola', rating: 81 },
      { pos: 'CF', name: 'K. Mbappé', rating: 89 }
    ]
  },
  {
    id: 'mint_playmaker',
    name: 'MINT MASTER',
    club: 'ELECTRIC MINT FC',
    role: 'TACTICAL PLAYMAKER',
    avatar: '⚽',
    flag: '🇮🇩',
    formation: '5-3-2',
    color: '#3B82F6',
    kitHex: '#3B82F6',
    stats: { speed: 89, shot: 88, defense: 75, dribble: 96 },
    roster: [
      { pos: 'GK', name: 'M. Paes', rating: 78 },
      { pos: 'CB', name: 'J. Idzes', rating: 74 },
      { pos: 'CB', name: 'K. Diks', rating: 70 },
      { pos: 'CB', name: 'M. Hilgers', rating: 74 },
      { pos: 'LB', name: 'C. Verdonk', rating: 80 },
      { pos: 'RB', name: 'S. Walsh', rating: 76 },
      { pos: 'CMF', name: 'T. Haye', rating: 79 },
      { pos: 'CMF', name: 'Marselino', rating: 71 },
      { pos: 'RWF', name: 'Egy Maulana', rating: 72 },
      { pos: 'CF', name: 'Rafael S.', rating: 69 }
    ]
  }
];

interface PlayerNode {
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
  onConfirmStartGame: (p1Char: CharacterData, p2Char: CharacterData) => void;
}

// Auto role detection based on Y-coordinate percentage (Own Half: 42% - 92%)
const getAutoRole = (yPercent: number): { code: 'FWD' | 'MID' | 'DEF' | 'GK'; bg: string } => {
  if (yPercent < 55) return { code: 'FWD', bg: 'bg-[#ef4444] text-white' };
  if (yPercent < 72) return { code: 'MID', bg: 'bg-[#10b981] text-white' };
  if (yPercent < 86) return { code: 'DEF', bg: 'bg-[#2563EB] text-white' };
  return { code: 'GK', bg: 'bg-[#FFD13B] text-[#05090C] font-bold' };
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

  // Initial Player Spawn Position Nodes (Placed inside Own Half: Y >= 45%)
  const [nodes, setNodes] = useState<PlayerNode[]>([
    { id: 'p1', name: 'User 1 (HOME)', devType: p1Device, team: 'home', x: 50, y: 48 },
    { id: 'p1_sub', name: 'User 3 (HOME)', devType: 'keyboard2', team: 'home', x: 30, y: 68 },
    { id: 'p2', name: mode === '2vBot' ? 'AI BOT 1' : 'User 2 (AWAY)', devType: mode === '2vBot' ? 'ai_bot' : p2Device, team: 'away', x: 50, y: 48 },
    { id: 'p2_sub', name: mode === '2vBot' ? 'AI BOT 2' : 'User 4 (AWAY)', devType: mode === '2vBot' ? 'ai_bot' : 'gamepad1', team: 'away', x: 70, y: 68 }
  ]);

  const p1Char = CHARACTERS[0];
  const p2Char = CHARACTERS[1];

  // Reset positions to default
  const handleResetPositions = () => {
    setNodes([
      { id: 'p1', name: 'User 1 (HOME)', devType: p1Device, team: 'home', x: 50, y: 48 },
      { id: 'p1_sub', name: 'User 3 (HOME)', devType: 'keyboard2', team: 'home', x: 30, y: 68 },
      { id: 'p2', name: mode === '2vBot' ? 'AI BOT 1' : 'User 2 (AWAY)', devType: mode === '2vBot' ? 'ai_bot' : p2Device, team: 'away', x: 50, y: 48 },
      { id: 'p2_sub', name: mode === '2vBot' ? 'AI BOT 2' : 'User 4 (AWAY)', devType: mode === '2vBot' ? 'ai_bot' : 'gamepad1', team: 'away', x: 70, y: 68 }
    ]);
  };

  // Keyboard navigation support for P1 (WASD) and P2 (Arrows) node movement (Own Half constrained)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const step = 5; // move step percentage

      setNodes((prevNodes) =>
        prevNodes.map((node) => {
          if (node.id === 'p1') {
            let newX = node.x;
            let newY = node.y;
            if (e.key === 'a' || e.key === 'A') newX = Math.max(10, node.x - step);
            if (e.key === 'd' || e.key === 'D') newX = Math.min(90, node.x + step);
            if (e.key === 'w' || e.key === 'W') newY = Math.max(42, node.y - step);
            if (e.key === 's' || e.key === 'S') newY = Math.min(92, node.y + step);
            return { ...node, x: newX, y: newY };
          }

          if (node.id === 'p2' && mode === '1v1') {
            let newX = node.x;
            let newY = node.y;
            if (e.key === 'ArrowLeft') newX = Math.max(10, node.x - step);
            if (e.key === 'ArrowRight') newX = Math.min(90, node.x + step);
            if (e.key === 'ArrowUp') newY = Math.max(42, node.y - step);
            if (e.key === 'ArrowDown') newY = Math.min(92, node.y + step);
            return { ...node, x: newX, y: newY };
          }

          return node;
        })
      );
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mode]);

  const renderDevIcon = (devType: DeviceType) => {
    switch (devType) {
      case 'keyboard1':
      case 'keyboard2':
        return <Keyboard className="w-6 h-6 text-white" />;
      case 'gamepad0':
      case 'gamepad1':
        return <Gamepad className="w-6 h-6 text-white" />;
      case 'hp_remote':
        return <Smartphone className="w-6 h-6 text-[#3B82F6]" />;
      case 'ai_bot':
        return <Bot className="w-6 h-6 text-amber-400" />;
      default:
        return <Gamepad className="w-6 h-6 text-white" />;
    }
  };

  const handleDragEndNode = (id: string, pitchRef: React.RefObject<HTMLDivElement | null>, info: { point: { x: number; y: number } }) => {
    if (!pitchRef.current) return;
    const rect = pitchRef.current.getBoundingClientRect();
    const relX = Math.max(10, Math.min(90, ((info.point.x - rect.left) / rect.width) * 100));
    const relY = Math.max(42, Math.min(92, ((info.point.y - rect.top) / rect.height) * 100));

    setNodes((prev) =>
      prev.map((n) => (n.id === id ? { ...n, x: relX, y: relY } : n))
    );
  };

  return (
    <div className="relative w-screen h-screen bg-[#070b0e] text-[#E2F1F8] flex flex-col justify-between select-none overflow-hidden font-['Inter',sans-serif]">
      {/* FLOATING TOP-LEFT BACK BUTTON */}
      <button
        onClick={onBackToControllers}
        className="fixed top-4 left-6 z-30 bg-[#151917]/90 backdrop-blur border border-white/10 hover:border-white/30 text-slate-300 hover:text-white px-4 py-2 font-mono text-xs font-bold cursor-pointer transition flex items-center gap-2 shadow-2xl"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>BACK TO CONTROLLERS</span>
      </button>

      {/* FLOATING TOP-CENTER INSTRUCTION BADGE */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-30 bg-[#111513]/90 backdrop-blur border border-white/10 px-5 py-2 shadow-2xl flex items-center gap-3 text-xs font-mono">
        <span className="font-black italic text-white uppercase font-['Outfit',sans-serif] text-sm tracking-tight">
          POSITION SETUP ({mode.toUpperCase()})
        </span>
        <span className="text-[#3B82F6] font-bold tracking-wider uppercase border-l border-white/10 pl-3">
          DRAG NODE TO SET SPAWN LOCATION
        </span>
        <button
          onClick={handleResetPositions}
          className="ml-2 flex items-center gap-1 text-[10px] text-slate-400 hover:text-white underline cursor-pointer"
          title="Reset Posisi Default"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset</span>
        </button>
      </div>

      {/* FULLSCREEN SPLIT PITCHES (LEFT = HOME PITCH, RIGHT = AWAY PITCH) */}
      <div className="relative z-10 w-full h-full grid grid-cols-2 divide-x divide-white/10 pt-16 pb-16">
        {/* LEFT HOME PITCH COLUMN */}
        <div className="flex items-center justify-center p-4 sm:p-6 h-full w-full">
          <div
            ref={homePitchRef}
            className="relative w-full max-w-[440px] h-full bg-gradient-to-b from-[#15803d] via-[#16a34a] to-[#15803d] p-4 flex flex-col justify-between overflow-hidden shadow-2xl rounded-xl border-2 border-emerald-400/40"
          >
            {/* PITCH FIELD LINES SVG OVERLAY */}
            <svg className="absolute inset-0 w-full h-full stroke-white/30 stroke-[2] fill-none pointer-events-none">
              <rect x="6" y="6" width="calc(100% - 12px)" height="calc(100% - 12px)" rx="6" />
              <line x1="6" y1="50%" x2="calc(100% - 6px)" y2="50%" />
              <circle cx="50%" cy="50%" r="45" />
              {/* Top Penalty Box */}
              <rect x="22%" y="6" width="56%" height="25%" />
              {/* Bottom Penalty Box */}
              <rect x="22%" y="75%" width="56%" height="25%" />
            </svg>

            {/* RESTRICTED OPPONENT HALF UI OVERLAY (Top 42%) */}
            <div className="absolute top-0 left-0 right-0 h-[42%] bg-red-950/40 backdrop-blur-[1px] border-b-2 border-dashed border-red-500/60 pointer-events-none z-10 flex flex-col items-center justify-center p-2 text-center">
              <span className="text-[11px] font-mono font-black tracking-widest text-red-400/90 bg-red-950/90 px-3 py-1 rounded border border-red-500/40 uppercase shadow-lg">
                🚫 OPPONENT HALF (RESTRICTED)
              </span>
              <span className="text-[9px] font-mono font-bold text-red-300/60 mt-1 uppercase tracking-wider">
                NO SPAWN ALLOWED HERE
              </span>
            </div>

            {/* VALID SPAWN ZONE LABEL AT BOTTOM */}
            <div className="absolute bottom-2 left-0 right-0 text-center pointer-events-none z-10">
              <span className="text-[9px] font-mono font-bold text-emerald-300/70 uppercase tracking-widest bg-emerald-950/60 px-2.5 py-0.5 rounded border border-emerald-500/30">
                ✅ YOUR TEAM SPAWN ZONE
              </span>
            </div>

            {/* HOME TEAM WATERMARK LABEL */}
            <div className="absolute top-3 left-4 z-20 flex flex-col pointer-events-none">
              <span className="text-xl sm:text-2xl font-black italic uppercase text-white/40 font-['Outfit',sans-serif]">
                HOME TEAM
              </span>
              <span className="text-[10px] font-mono font-bold text-[#3B82F6] tracking-widest uppercase">
                RED CYBER FC 🇫🇷
              </span>
            </div>

            {/* HOME PLAYER NODES */}
            {nodes
              .filter((n) => n.team === 'home')
              .map((node) => {
                const role = getAutoRole(node.y);
                return (
                  <motion.div
                    key={node.id}
                    drag
                    dragSnapToOrigin={false}
                    onDragEnd={(_, info) => handleDragEndNode(node.id, homePitchRef, info)}
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    className="absolute z-20 -translate-x-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing flex flex-col items-center group touch-none"
                  >
                    {/* USER LABEL BADGE */}
                    <span className="text-[10px] font-mono font-bold text-white bg-[#0c100e]/90 border border-blue-500/50 px-2 py-0.5 rounded shadow-lg uppercase mb-1 tracking-wider whitespace-nowrap">
                      {node.name}
                    </span>

                    {/* MAIN AVATAR CIRCLE NODE */}
                    <div className="w-14 h-14 rounded-full bg-[#111513] border-2 border-[#3B82F6] shadow-xl shadow-blue-500/30 flex items-center justify-center relative group-hover:scale-110 transition-transform">
                      {renderDevIcon(node.devType)}
                    </div>

                    {/* AUTO ROLE BADGE */}
                    <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded shadow mt-1 uppercase ${role.bg}`}>
                      {role.code}
                    </span>
                  </motion.div>
                );
              })}
          </div>
        </div>

        {/* RIGHT AWAY PITCH COLUMN */}
        <div className="flex items-center justify-center p-4 sm:p-6 h-full w-full">
          <div
            ref={awayPitchRef}
            className="relative w-full max-w-[440px] h-full bg-gradient-to-b from-[#15803d] via-[#16a34a] to-[#15803d] p-4 flex flex-col justify-between overflow-hidden shadow-2xl rounded-xl border-2 border-emerald-400/40"
          >
            {/* PITCH FIELD LINES SVG OVERLAY */}
            <svg className="absolute inset-0 w-full h-full stroke-white/30 stroke-[2] fill-none pointer-events-none">
              <rect x="6" y="6" width="calc(100% - 12px)" height="calc(100% - 12px)" rx="6" />
              <line x1="6" y1="50%" x2="calc(100% - 6px)" y2="50%" />
              <circle cx="50%" cy="50%" r="45" />
              {/* Top Penalty Box */}
              <rect x="22%" y="6" width="56%" height="25%" />
              {/* Bottom Penalty Box */}
              <rect x="22%" y="75%" width="56%" height="25%" />
            </svg>

            {/* RESTRICTED OPPONENT HALF UI OVERLAY (Top 42%) */}
            <div className="absolute top-0 left-0 right-0 h-[42%] bg-red-950/40 backdrop-blur-[1px] border-b-2 border-dashed border-red-500/60 pointer-events-none z-10 flex flex-col items-center justify-center p-2 text-center">
              <span className="text-[11px] font-mono font-black tracking-widest text-red-400/90 bg-red-950/90 px-3 py-1 rounded border border-red-500/40 uppercase shadow-lg">
                🚫 OPPONENT HALF (RESTRICTED)
              </span>
              <span className="text-[9px] font-mono font-bold text-red-300/60 mt-1 uppercase tracking-wider">
                NO SPAWN ALLOWED HERE
              </span>
            </div>

            {/* VALID SPAWN ZONE LABEL AT BOTTOM */}
            <div className="absolute bottom-2 left-0 right-0 text-center pointer-events-none z-10">
              <span className="text-[9px] font-mono font-bold text-emerald-300/70 uppercase tracking-widest bg-emerald-950/60 px-2.5 py-0.5 rounded border border-emerald-500/30">
                ✅ YOUR TEAM SPAWN ZONE
              </span>
            </div>

            {/* AWAY TEAM WATERMARK LABEL */}
            <div className="absolute top-3 right-4 z-20 flex flex-col items-end pointer-events-none">
              <span className="text-xl sm:text-2xl font-black italic uppercase text-white/40 font-['Outfit',sans-serif]">
                AWAY TEAM
              </span>
              <span className="text-[10px] font-mono font-bold text-amber-400 tracking-widest uppercase">
                {mode === '2vBot' ? 'AI ENEMY BOTS 🤖' : 'ELECTRIC MINT FC 🇮🇩'}
              </span>
            </div>

            {/* AWAY PLAYER NODES */}
            {nodes
              .filter((n) => n.team === 'away')
              .map((node) => {
                const role = getAutoRole(node.y);
                return (
                  <motion.div
                    key={node.id}
                    drag={mode !== '2vBot'}
                    dragSnapToOrigin={false}
                    onDragEnd={(_, info) => handleDragEndNode(node.id, awayPitchRef, info)}
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    className={`absolute z-20 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group touch-none ${
                      mode === '2vBot' ? 'cursor-default' : 'cursor-grab active:cursor-grabbing'
                    }`}
                  >
                    {/* USER LABEL BADGE */}
                    <span className="text-[10px] font-mono font-bold text-white bg-[#0c100e]/90 border border-amber-500/50 px-2 py-0.5 rounded shadow-lg uppercase mb-1 tracking-wider whitespace-nowrap">
                      {node.name}
                    </span>

                    {/* MAIN AVATAR CIRCLE NODE */}
                    <div className="w-14 h-14 rounded-full bg-[#111513] border-2 border-amber-400 shadow-xl shadow-amber-500/30 flex items-center justify-center relative group-hover:scale-110 transition-transform">
                      {renderDevIcon(node.devType)}
                    </div>

                    {/* AUTO ROLE BADGE */}
                    <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded shadow mt-1 uppercase ${role.bg}`}>
                      {role.code}
                    </span>
                  </motion.div>
                );
              })}
          </div>
        </div>
      </div>

      {/* FIXED BOTTOM ACTION BAR - CONSOLE DESIGN SYSTEM */}
      <div className="fixed bottom-4 left-6 right-6 z-30 flex justify-between items-center bg-[#111513]/90 backdrop-blur border border-white/10 px-6 py-3 font-mono text-xs shadow-2xl">
        <div className="flex items-center gap-6 text-slate-300 font-bold">
          <span>P1 MOVE: W / A / S / D</span>
          {mode === '1v1' && <span>P2 MOVE: ◄ / ▲ / ▼ / ►</span>}
        </div>

        <button
          onClick={() => onConfirmStartGame(p1Char, p2Char)}
          className="py-2.5 px-8 clip-parallelogram bg-[#2563EB] hover:bg-[#3B82F6] text-white font-mono font-black text-xs tracking-wider transition cursor-pointer flex items-center gap-2.5 shadow-lg shadow-blue-500/20"
        >
          <span className="w-4.5 h-4.5 rounded-full bg-[#10b981] text-white font-black flex items-center justify-center text-[10px] shadow leading-none border border-emerald-400/50">
            A
          </span>
          <span>KICK OFF MATCH ➔</span>
        </button>
      </div>
    </div>
  );
};
