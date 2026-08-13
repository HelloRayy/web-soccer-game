import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowLeft, Check } from 'lucide-react';
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
  },
  {
    id: 'blue_titan',
    name: 'TITAN GUARDIAN',
    club: 'BLUE SHIELD FC',
    role: 'DEFENSIVE TANK',
    avatar: '🛡️',
    flag: '🇦🇷',
    formation: '4-4-2',
    color: '#3B82F6',
    kitHex: '#3B82F6',
    stats: { speed: 78, shot: 82, defense: 96, dribble: 75 },
    roster: [
      { pos: 'GK', name: 'E. Martínez', rating: 87 },
      { pos: 'CB', name: 'C. Romero', rating: 85 },
      { pos: 'CB', name: 'N. Otamendi', rating: 82 },
      { pos: 'LB', name: 'N. Tagliafico', rating: 81 },
      { pos: 'RB', name: 'N. Molina', rating: 82 },
      { pos: 'CMF', name: 'R. De Paul', rating: 84 },
      { pos: 'CMF', name: 'E. Fernández', rating: 83 },
      { pos: 'LWF', name: 'A. Di María', rating: 85 },
      { pos: 'CF', name: 'L. Messi', rating: 91 },
      { pos: 'CF', name: 'J. Álvarez', rating: 86 }
    ]
  },
  {
    id: 'gold_legend',
    name: 'GOLDEN LEGEND',
    club: 'CHAMPIONS GOLD FC',
    role: 'ALL-AROUND CAPTAIN',
    avatar: '🏆',
    flag: '🇪🇸',
    formation: '4-2-3-1',
    color: '#FFD13B',
    kitHex: '#FFD13B',
    stats: { speed: 90, shot: 92, defense: 85, dribble: 90 },
    roster: [
      { pos: 'GK', name: 'T. Courtois', rating: 89 },
      { pos: 'CB', name: 'A. Rüdiger', rating: 87 },
      { pos: 'CB', name: 'E. Militão', rating: 85 },
      { pos: 'LB', name: 'D. Alaba', rating: 84 },
      { pos: 'RB', name: 'D. Carvajal', rating: 86 },
      { pos: 'DMF', name: 'J. Bellingham', rating: 90 },
      { pos: 'CMF', name: 'F. Valverde', rating: 88 },
      { pos: 'LWF', name: 'Vinícius Jr.', rating: 90 },
      { pos: 'RWF', name: 'Rodrygo', rating: 86 },
      { pos: 'CF', name: 'K. Benzema', rating: 89 }
    ]
  }
];

interface TeamSelectViewProps {
  mode: '1v1' | '2vBot';
  p1Device: DeviceType;
  p2Device: DeviceType;
  onBackToControllers: () => void;
  onConfirmStartGame: (p1Char: CharacterData, p2Char: CharacterData) => void;
}

const FIFA_SPRING = { type: 'spring' as const, stiffness: 950, damping: 45 };

// Helper for Position Badge Styling (PES Gameplan Style)
const getPosBadgeClass = (pos: string) => {
  switch (pos) {
    case 'GK':
      return 'bg-[#FFD13B] text-[#05090C] font-bold';
    case 'CB':
    case 'LB':
    case 'RB':
      return 'bg-[#2563EB] text-white font-bold';
    case 'DMF':
    case 'CMF':
      return 'bg-[#10b981] text-white font-bold';
    case 'CF':
    case 'SS':
    case 'LWF':
    case 'RWF':
      return 'bg-[#ef4444] text-white font-bold';
    default:
      return 'bg-slate-700 text-white font-bold';
  }
};

// MINI TACTICAL FOOTBALL PITCH COMPONENT (eFootball / PES STYLE)
const MiniTacticalPitch: React.FC<{ character: CharacterData }> = ({ character }) => {
  const { roster, avatar, formation } = character;
  const gk = roster.find((p) => p.pos === 'GK') || roster[0];
  const defs = roster.filter((p) => ['CB', 'LB', 'RB'].includes(p.pos));
  const mids = roster.filter((p) => ['CMF', 'DMF'].includes(p.pos));
  const fwds = roster.filter((p) => ['CF', 'SS', 'LWF', 'RWF'].includes(p.pos));

  return (
    <div className="bg-gradient-to-b from-[#15803d] via-[#16a34a] to-[#15803d] rounded border border-emerald-400/40 p-2.5 relative h-[220px] sm:h-[250px] flex flex-col justify-between overflow-hidden shadow-inner select-none">
      {/* PITCH FIELD LINES SVG OVERLAY */}
      <svg className="absolute inset-0 w-full h-full stroke-white/25 stroke-[1.5] fill-none pointer-events-none">
        {/* Outer Boundary */}
        <rect x="4" y="4" width="calc(100% - 8px)" height="calc(100% - 8px)" rx="4" />
        {/* Halfway Line */}
        <line x1="4" y1="50%" x2="calc(100% - 4px)" y2="50%" />
        {/* Center Circle */}
        <circle cx="50%" cy="50%" r="28" />
        {/* Top Penalty Box */}
        <rect x="25%" y="4" width="50%" height="28%" />
        {/* Bottom Penalty Box */}
        <rect x="25%" y="68%" width="50%" height="28%" />
      </svg>

      {/* FORMATION BADGE TOP CORNER */}
      <div className="absolute top-1.5 left-2 z-10 bg-black/50 backdrop-blur px-2 py-0.5 rounded border border-white/20 text-[9px] font-mono font-bold text-white uppercase">
        {formation}
      </div>

      {/* FORWARDS (TOP) */}
      <div className="relative z-10 flex justify-around items-center pt-2">
        {fwds.map((p, idx) => (
          <div key={idx} className="flex flex-col items-center group">
            <div className="w-6 h-6 rounded-full bg-red-600/90 border border-white flex items-center justify-center text-[11px] shadow">
              {avatar}
            </div>
            <span className="text-[9px] font-mono font-bold text-white bg-black/70 px-1 rounded mt-0.5 max-w-[55px] truncate">
              {p.name.split(' ').pop()} {p.rating}
            </span>
          </div>
        ))}
      </div>

      {/* MIDFIELDERS (CENTER) */}
      <div className="relative z-10 flex justify-around items-center my-auto">
        {mids.map((p, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <span className="text-[8px] font-mono font-bold px-1 rounded bg-emerald-900/90 text-emerald-200 border border-emerald-400/40">
              {p.pos} {p.rating}
            </span>
            <span className="text-[8px] font-mono font-semibold text-white bg-black/60 px-1 rounded mt-0.5 max-w-[55px] truncate">
              {p.name.split(' ').pop()}
            </span>
          </div>
        ))}
      </div>

      {/* DEFENDERS (LOWER) */}
      <div className="relative z-10 flex justify-around items-center">
        {defs.slice(0, 4).map((p, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <span className="text-[8px] font-mono font-bold px-1 rounded bg-blue-900/90 text-blue-200 border border-blue-400/40">
              {p.pos} {p.rating}
            </span>
            <span className="text-[8px] font-mono font-semibold text-white bg-black/60 px-1 rounded mt-0.5 max-w-[50px] truncate">
              {p.name.split(' ').pop()}
            </span>
          </div>
        ))}
      </div>

      {/* GOALKEEPER (BOTTOM) */}
      <div className="relative z-10 flex justify-center items-center pb-1">
        <div className="flex flex-col items-center">
          <span className="text-[8px] font-mono font-bold px-1.5 rounded bg-amber-500 text-black">
            GK {gk.rating}
          </span>
          <span className="text-[8px] font-mono font-bold text-white bg-black/70 px-1 rounded mt-0.5">
            {gk.name}
          </span>
        </div>
      </div>
    </div>
  );
};

export const TeamSelectView: React.FC<TeamSelectViewProps> = ({
  mode,
  p1Device,
  p2Device,
  onBackToControllers,
  onConfirmStartGame
}) => {
  const [p1Index, setP1Index] = useState(0);
  const [p2Index, setP2Index] = useState(1);

  const [p1Ready, setP1Ready] = useState(false);
  const [p2Ready, setP2Ready] = useState(mode === '2vBot'); // AI Bot is auto ready in 2vBot mode

  const p1Char = CHARACTERS[p1Index];
  const p2Char = CHARACTERS[p2Index];

  // Keyboard navigation for character selection
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // P1 controls (WASD / A & D)
      if (!p1Ready) {
        if (e.key === 'a' || e.key === 'A') {
          setP1Index((prev) => (prev - 1 + CHARACTERS.length) % CHARACTERS.length);
        } else if (e.key === 'd' || e.key === 'D') {
          setP1Index((prev) => (prev + 1) % CHARACTERS.length);
        } else if (e.key === ' ') {
          setP1Ready(true);
        }
      } else if (e.key === ' ') {
        setP1Ready(false);
      }

      // P2 controls (Arrows / Left & Right)
      if (mode === '1v1') {
        if (!p2Ready) {
          if (e.key === 'ArrowLeft') {
            setP2Index((prev) => (prev - 1 + CHARACTERS.length) % CHARACTERS.length);
          } else if (e.key === 'ArrowRight') {
            setP2Index((prev) => (prev + 1) % CHARACTERS.length);
          } else if (e.key === 'Enter') {
            setP2Ready(true);
          }
        } else if (e.key === 'Enter') {
          setP2Ready(false);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [p1Ready, p2Ready, mode]);

  const bothReady = p1Ready && p2Ready;

  const handleStart = () => {
    if (bothReady) {
      onConfirmStartGame(p1Char, p2Char);
    }
  };

  return (
    <div className="relative w-screen h-screen bg-[#070b0e] text-[#E2F1F8] flex flex-col justify-between p-4 sm:p-6 select-none overflow-hidden font-['Inter',sans-serif]">
      {/* TOP HEADER - DARK OBSIDIAN CONSOLE BANNER */}
      <div className="relative z-10 w-full flex justify-between items-center bg-[#111513] border border-white/10 p-3.5 shadow-2xl">
        <button
          onClick={onBackToControllers}
          className="flex items-center gap-2 bg-[#151917] border border-white/10 hover:border-white/30 text-slate-300 hover:text-white px-4 py-2 font-mono text-xs font-bold cursor-pointer transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO CONTROLLERS</span>
        </button>

        <div className="flex flex-col items-center">
          <h2 className="text-xl sm:text-2xl font-black italic tracking-tighter text-white font-['Outfit',sans-serif] uppercase">
            GAME PLAN & SQUAD SELECT ({mode.toUpperCase()})
          </h2>
          <span className="text-xs font-mono text-[#3B82F6] tracking-widest uppercase font-bold mt-0.5">
            PES CONSOLE GAMEPLAY ARENA
          </span>
        </div>

        <div className="text-xs font-mono font-bold text-slate-400 bg-white/5 px-3 py-1.5 border border-white/10">
          STEP 2 OF 2
        </div>
      </div>

      {/* SPLIT SCREEN CARDS (HOME LEFT vs AWAY RIGHT - eFootball GAME PLAN UI) */}
      <div className="relative z-10 my-auto grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mx-auto">
        {/* PLAYER 1 (HOME GAME PLAN BLOCK) */}
        <div
          className={`bg-[#111513] p-5 flex flex-col justify-between relative shadow-2xl transition-all border-2 rounded-none ${
            p1Ready ? 'border-[#10b981] shadow-emerald-500/10' : 'border-[#3B82F6]'
          }`}
        >
          {/* TEAM HEADER */}
          <div className="flex justify-between items-center border-b border-white/10 pb-3 mb-3">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">{p1Char.flag}</span>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-black uppercase text-white font-['Outfit',sans-serif] tracking-tight">
                    {p1Char.name}
                  </h3>
                  <span className="text-[10px] font-mono font-bold text-[#3B82F6] bg-blue-950/80 px-2 py-0.5 border border-blue-500/30 rounded">
                    User 1 (HOME)
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">{p1Char.club} • DEV: {p1Device.toUpperCase()}</span>
              </div>
            </div>

            {/* SELECTION ARROWS */}
            <div className="flex items-center gap-1">
              <button
                disabled={p1Ready}
                onClick={() => setP1Index((prev) => (prev - 1 + CHARACTERS.length) % CHARACTERS.length)}
                className="p-1.5 bg-[#171d1a] border border-white/10 hover:border-white/40 text-slate-300 hover:text-white transition cursor-pointer disabled:opacity-30"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
              </button>
              <button
                disabled={p1Ready}
                onClick={() => setP1Index((prev) => (prev + 1) % CHARACTERS.length)}
                className="p-1.5 bg-[#171d1a] border border-white/10 hover:border-white/40 text-slate-300 hover:text-white transition cursor-pointer disabled:opacity-30"
              >
                <ChevronRight className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* 2-COLUMN INNER GAME PLAN: PITCH (LEFT) + ROSTER (RIGHT) */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 my-1 items-stretch">
            {/* LEFT 3 COLS: TACTICAL PITCH GRAPHIC */}
            <div className="sm:col-span-3">
              <MiniTacticalPitch character={p1Char} />
            </div>

            {/* RIGHT 2 COLS: SQUAD ROSTER LIST */}
            <div className="sm:col-span-2 bg-[#0c100e] p-2.5 border border-white/10 flex flex-col justify-between">
              <div className="text-[11px] font-mono font-bold text-slate-300 border-b border-white/10 pb-1 mb-2 flex justify-between">
                <span>STARTING SQUAD</span>
                <span className="text-[#3B82F6]">{p1Char.formation}</span>
              </div>

              <div className="flex flex-col gap-1.5 overflow-y-auto max-h-[185px] pr-1 custom-scrollbar text-[10px] font-mono">
                {p1Char.roster.map((player, idx) => (
                  <div key={idx} className="flex items-center justify-between py-0.5 px-1 bg-white/5 rounded border border-white/5">
                    <div className="flex items-center gap-1.5 truncate">
                      <span className={`px-1 rounded text-[9px] min-w-[26px] text-center ${getPosBadgeClass(player.pos)}`}>
                        {player.pos}
                      </span>
                      <span className="text-slate-200 truncate">{player.name}</span>
                    </div>
                    <span className="font-bold text-slate-100 ml-1">{player.rating}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* READY BUTTON P1 */}
          <button
            onClick={() => setP1Ready(!p1Ready)}
            className={`w-full py-2.5 mt-3 font-mono font-black text-xs tracking-wider uppercase cursor-pointer transition clip-parallelogram flex items-center justify-center gap-2 ${
              p1Ready
                ? 'bg-[#10b981] text-white shadow-lg shadow-emerald-500/20'
                : 'bg-[#1a2332] border border-blue-500/40 hover:border-blue-500 hover:bg-blue-600/10 text-[#3B82F6]'
            }`}
          >
            {p1Ready ? (
              <>
                <Check className="w-4 h-4" />
                <span>PLAYER 1 READY</span>
              </>
            ) : (
              <span>PRESS SPACE TO READY</span>
            )}
          </button>
        </div>

        {/* PLAYER 2 (AWAY GAME PLAN BLOCK) */}
        <div
          className={`bg-[#111513] p-5 flex flex-col justify-between relative shadow-2xl transition-all border-2 rounded-none ${
            p2Ready ? 'border-[#10b981] shadow-emerald-500/10' : 'border-[#3B82F6]'
          }`}
        >
          {/* TEAM HEADER */}
          <div className="flex justify-between items-center border-b border-white/10 pb-3 mb-3">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">{p2Char.flag}</span>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-black uppercase text-white font-['Outfit',sans-serif] tracking-tight">
                    {p2Char.name}
                  </h3>
                  <span className="text-[10px] font-mono font-bold text-[#3B82F6] bg-blue-950/80 px-2 py-0.5 border border-blue-500/30 rounded">
                    {mode === '2vBot' ? 'AI ENEMY BOT' : 'User 2 (AWAY)'}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  {p2Char.club} • {mode === '2vBot' ? 'AUTO BOT' : `DEV: ${p2Device.toUpperCase()}`}
                </span>
              </div>
            </div>

            {/* SELECTION ARROWS */}
            {mode !== '2vBot' && (
              <div className="flex items-center gap-1">
                <button
                  disabled={p2Ready}
                  onClick={() => setP2Index((prev) => (prev - 1 + CHARACTERS.length) % CHARACTERS.length)}
                  className="p-1.5 bg-[#171d1a] border border-white/10 hover:border-white/40 text-slate-300 hover:text-white transition cursor-pointer disabled:opacity-30"
                >
                  <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
                </button>
                <button
                  disabled={p2Ready}
                  onClick={() => setP2Index((prev) => (prev + 1) % CHARACTERS.length)}
                  className="p-1.5 bg-[#171d1a] border border-white/10 hover:border-white/40 text-slate-300 hover:text-white transition cursor-pointer disabled:opacity-30"
                >
                  <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>
            )}
          </div>

          {/* 2-COLUMN INNER GAME PLAN: PITCH (LEFT) + ROSTER (RIGHT) */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 my-1 items-stretch">
            {/* LEFT 3 COLS: TACTICAL PITCH GRAPHIC */}
            <div className="sm:col-span-3">
              <MiniTacticalPitch character={p2Char} />
            </div>

            {/* RIGHT 2 COLS: SQUAD ROSTER LIST */}
            <div className="sm:col-span-2 bg-[#0c100e] p-2.5 border border-white/10 flex flex-col justify-between">
              <div className="text-[11px] font-mono font-bold text-slate-300 border-b border-white/10 pb-1 mb-2 flex justify-between">
                <span>STARTING SQUAD</span>
                <span className="text-[#3B82F6]">{p2Char.formation}</span>
              </div>

              <div className="flex flex-col gap-1.5 overflow-y-auto max-h-[185px] pr-1 custom-scrollbar text-[10px] font-mono">
                {p2Char.roster.map((player, idx) => (
                  <div key={idx} className="flex items-center justify-between py-0.5 px-1 bg-white/5 rounded border border-white/5">
                    <div className="flex items-center gap-1.5 truncate">
                      <span className={`px-1 rounded text-[9px] min-w-[26px] text-center ${getPosBadgeClass(player.pos)}`}>
                        {player.pos}
                      </span>
                      <span className="text-slate-200 truncate">{player.name}</span>
                    </div>
                    <span className="font-bold text-slate-100 ml-1">{player.rating}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* READY BUTTON P2 */}
          <button
            disabled={mode === '2vBot'}
            onClick={() => setP2Ready(!p2Ready)}
            className={`w-full py-2.5 mt-3 font-mono font-black text-xs tracking-wider uppercase cursor-pointer transition clip-parallelogram flex items-center justify-center gap-2 ${
              p2Ready
                ? 'bg-[#10b981] text-white shadow-lg shadow-emerald-500/20'
                : 'bg-[#1a2332] border border-blue-500/40 hover:border-blue-500 hover:bg-blue-600/10 text-[#3B82F6]'
            }`}
          >
            {p2Ready ? (
              <>
                <Check className="w-4 h-4" />
                <span>{mode === '2vBot' ? 'AI BOT READY' : 'PLAYER 2 READY'}</span>
              </>
            ) : (
              <span>PRESS ENTER TO READY</span>
            )}
          </button>
        </div>
      </div>

      {/* BOTTOM ACTION BAR - PES CONSOLE DESIGN SYSTEM */}
      <div className="relative z-10 w-full flex justify-between items-center bg-[#111513] border border-white/10 px-6 py-3.5 font-mono text-xs shadow-2xl">
        <div className="flex items-center gap-6 text-slate-300 font-bold">
          <span>P1: A / D (SPACE)</span>
          {mode === '1v1' && <span>P2: ◄ / ► (ENTER)</span>}
        </div>

        <button
          disabled={!bothReady}
          onClick={handleStart}
          className={`py-2.5 px-8 clip-parallelogram font-mono font-black text-xs tracking-wider uppercase transition cursor-pointer flex items-center gap-2.5 ${
            bothReady
              ? 'bg-[#2563EB] hover:bg-[#3B82F6] text-white shadow-lg shadow-blue-500/20'
              : 'bg-[#151917] border border-white/10 text-slate-500 cursor-not-allowed opacity-50'
          }`}
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
