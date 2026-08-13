import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowLeft, Check, Play } from 'lucide-react';
import { DeviceType } from './ControllerSelectModal';

export interface CharacterData {
  id: string;
  name: string;
  club: string;
  role: string;
  avatar: string;
  color: string;
  kitHex: string;
  stats: {
    speed: number;
    shot: number;
    defense: number;
    dribble: number;
  };
}

export const CHARACTERS: CharacterData[] = [
  {
    id: 'striker_red',
    name: 'VALOR STRIKER',
    club: 'RED CYBER FC',
    role: 'POWER FORWARD',
    avatar: '⚡',
    color: '#3B82F6',
    kitHex: '#3B82F6',
    stats: { speed: 92, shot: 95, defense: 60, dribble: 88 }
  },
  {
    id: 'mint_playmaker',
    name: 'MINT MASTER',
    club: 'ELECTRIC MINT FC',
    role: 'TACTICAL PLAYMAKER',
    avatar: '⚽',
    color: '#3B82F6',
    kitHex: '#3B82F6',
    stats: { speed: 89, shot: 88, defense: 75, dribble: 96 }
  },
  {
    id: 'blue_titan',
    name: 'TITAN GUARDIAN',
    club: 'BLUE SHIELD FC',
    role: 'DEFENSIVE TANK',
    avatar: '🛡️',
    color: '#3B82F6',
    kitHex: '#3B82F6',
    stats: { speed: 78, shot: 82, defense: 96, dribble: 75 }
  },
  {
    id: 'gold_legend',
    name: 'GOLDEN LEGEND',
    club: 'CHAMPIONS GOLD FC',
    role: 'ALL-AROUND CAPTAIN',
    avatar: '🏆',
    color: '#FFD13B',
    kitHex: '#FFD13B',
    stats: { speed: 90, shot: 92, defense: 85, dribble: 90 }
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
    <div className="relative w-screen h-screen bg-[#070b0e] text-[#E2F1F8] flex flex-col justify-between p-6 sm:p-10 select-none overflow-hidden font-['Inter',sans-serif]">
      {/* TOP HEADER - DARK OBSIDIAN CONSOLE BANNER */}
      <div className="relative z-10 w-full flex justify-between items-center bg-[#111513] border border-white/10 p-4 shadow-2xl">
        <button
          onClick={onBackToControllers}
          className="flex items-center gap-2 bg-[#151917] border border-white/10 hover:border-white/30 text-slate-300 hover:text-white px-4 py-2 font-mono text-xs font-bold cursor-pointer transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO CONTROLLERS</span>
        </button>

        <div className="flex flex-col items-center">
          <h2 className="text-xl sm:text-3xl font-black italic tracking-tighter text-white font-['Outfit',sans-serif] uppercase">
            CHARACTER & TEAM SELECT ({mode.toUpperCase()})
          </h2>
          <span className="text-xs font-mono text-[#3B82F6] tracking-widest uppercase font-bold mt-0.5">
            PES SPLIT-SCREEN ARENA
          </span>
        </div>

        <div className="text-xs font-mono font-bold text-slate-400 bg-white/5 px-3 py-1.5 border border-white/10">
          STEP 2 OF 2
        </div>
      </div>

      {/* SPLIT SCREEN CARDS (P1 HOME LEFT vs P2 AWAY RIGHT) */}
      <div className="relative z-10 my-auto grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
        {/* PLAYER 1 (HOME / BLUE TEAM) */}
        <div
          className={`bg-[#111513] p-6 flex flex-col justify-between relative shadow-2xl transition-all border-2 ${
            p1Ready ? 'border-[#10b981] shadow-emerald-500/10' : 'border-[#3B82F6]'
          }`}
        >
          <div className="flex justify-between items-center border-b border-white/10 pb-3 mb-4 font-mono">
            <span className="text-xs font-bold text-[#3B82F6] tracking-wider uppercase">
              PLAYER 1 (HOME)
            </span>
            <span className="text-xs text-slate-400">DEV: {p1Device.toUpperCase()}</span>
          </div>

          <div className="flex items-center justify-between gap-4 my-2 relative px-8">
            <button
              disabled={p1Ready}
              onClick={() => setP1Index((prev) => (prev - 1 + CHARACTERS.length) % CHARACTERS.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-white transition cursor-pointer disabled:opacity-30"
            >
              <ChevronLeft className="w-8 h-8 stroke-[2.5]" />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={p1Char.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={FIFA_SPRING}
                className="flex flex-col items-center text-center w-full"
              >
                <div className="text-7xl mb-2">{p1Char.avatar}</div>
                <h3 className="text-2xl font-black italic uppercase text-white font-['Outfit',sans-serif] tracking-tight">
                  {p1Char.name}
                </h3>
                <span className="text-xs font-mono font-bold uppercase tracking-widest px-3 py-1 mt-2 bg-[#1e293b] border border-white/10 text-slate-200 rounded">
                  {p1Char.role}
                </span>
              </motion.div>
            </AnimatePresence>

            <button
              disabled={p1Ready}
              onClick={() => setP1Index((prev) => (prev + 1) % CHARACTERS.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-white transition cursor-pointer disabled:opacity-30"
            >
              <ChevronRight className="w-8 h-8 stroke-[2.5]" />
            </button>
          </div>

          {/* STATS BARS */}
          <div className="flex flex-col gap-3 my-4 bg-[#0c100e] p-4 border border-white/10 text-xs font-mono">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-slate-400">SPEED</span>
                <span className="font-bold text-[#3B82F6]">{p1Char.stats.speed}</span>
              </div>
              <div className="w-full bg-white/10 h-2 overflow-hidden rounded-full">
                <div className="bg-[#3B82F6] h-full transition-all duration-300" style={{ width: `${p1Char.stats.speed}%` }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-slate-400">SHOT POWER</span>
                <span className="font-bold text-amber-400">{p1Char.stats.shot}</span>
              </div>
              <div className="w-full bg-white/10 h-2 overflow-hidden rounded-full">
                <div className="bg-amber-400 h-full transition-all duration-300" style={{ width: `${p1Char.stats.shot}%` }} />
              </div>
            </div>
          </div>

          {/* READY BUTTON P1 */}
          <button
            onClick={() => setP1Ready(!p1Ready)}
            className={`w-full py-3 font-mono font-black text-xs tracking-wider uppercase cursor-pointer transition clip-parallelogram flex items-center justify-center gap-2 ${
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

        {/* PLAYER 2 (AWAY / BLUE TEAM OR BOT) */}
        <div
          className={`bg-[#111513] p-6 flex flex-col justify-between relative shadow-2xl transition-all border-2 ${
            p2Ready ? 'border-[#10b981] shadow-emerald-500/10' : 'border-[#3B82F6]'
          }`}
        >
          <div className="flex justify-between items-center border-b border-white/10 pb-3 mb-4 font-mono">
            <span className="text-xs font-bold text-[#3B82F6] tracking-wider uppercase">
              {mode === '2vBot' ? 'AI ENEMY BOT' : 'PLAYER 2 (AWAY)'}
            </span>
            <span className="text-xs text-slate-400">
              {mode === '2vBot' ? 'AUTO BOT' : `DEV: ${p2Device.toUpperCase()}`}
            </span>
          </div>

          <div className="flex items-center justify-between gap-4 my-2 relative px-8">
            {mode !== '2vBot' && (
              <button
                disabled={p2Ready}
                onClick={() => setP2Index((prev) => (prev - 1 + CHARACTERS.length) % CHARACTERS.length)}
                className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-white transition cursor-pointer disabled:opacity-30"
              >
                <ChevronLeft className="w-8 h-8 stroke-[2.5]" />
              </button>
            )}

            <AnimatePresence mode="wait">
              <motion.div
                key={p2Char.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={FIFA_SPRING}
                className="flex flex-col items-center text-center w-full"
              >
                <div className="text-7xl mb-2">{p2Char.avatar}</div>
                <h3 className="text-2xl font-black italic uppercase text-white font-['Outfit',sans-serif] tracking-tight">
                  {p2Char.name}
                </h3>
                <span className="text-xs font-mono font-bold uppercase tracking-widest px-3 py-1 mt-2 bg-[#1e293b] border border-white/10 text-slate-200 rounded">
                  {p2Char.role}
                </span>
              </motion.div>
            </AnimatePresence>

            {mode !== '2vBot' && (
              <button
                disabled={p2Ready}
                onClick={() => setP2Index((prev) => (prev + 1) % CHARACTERS.length)}
                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-white transition cursor-pointer disabled:opacity-30"
              >
                <ChevronRight className="w-8 h-8 stroke-[2.5]" />
              </button>
            )}
          </div>

          {/* STATS BARS */}
          <div className="flex flex-col gap-3 my-4 bg-[#0c100e] p-4 border border-white/10 text-xs font-mono">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-slate-400">SPEED</span>
                <span className="font-bold text-[#3B82F6]">{p2Char.stats.speed}</span>
              </div>
              <div className="w-full bg-white/10 h-2 overflow-hidden rounded-full">
                <div className="bg-[#3B82F6] h-full transition-all duration-300" style={{ width: `${p2Char.stats.speed}%` }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-slate-400">SHOT POWER</span>
                <span className="font-bold text-amber-400">{p2Char.stats.shot}</span>
              </div>
              <div className="w-full bg-white/10 h-2 overflow-hidden rounded-full">
                <div className="bg-amber-400 h-full transition-all duration-300" style={{ width: `${p2Char.stats.shot}%` }} />
              </div>
            </div>
          </div>

          {/* READY BUTTON P2 */}
          <button
            disabled={mode === '2vBot'}
            onClick={() => setP2Ready(!p2Ready)}
            className={`w-full py-3 font-mono font-black text-xs tracking-wider uppercase transition clip-parallelogram flex items-center justify-center gap-2 ${
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
      <div className="relative z-10 w-full flex justify-between items-center bg-[#111513] border border-white/10 px-6 py-4 font-mono text-xs shadow-2xl">
        <div className="flex items-center gap-6 text-slate-300 font-bold">
          <span>P1: A / D (SPACE)</span>
          {mode === '1v1' && <span>P2: ◄ / ► (ENTER)</span>}
        </div>

        <button
          disabled={!bothReady}
          onClick={handleStart}
          className={`py-3 px-8 clip-parallelogram font-mono font-black text-xs tracking-wider uppercase transition cursor-pointer flex items-center gap-2.5 ${
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
