import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swords, Shield, Zap, Target, CheckCircle2, ChevronLeft, ChevronRight, Play, ArrowLeft } from 'lucide-react';
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
    color: '#FF4655',
    kitHex: '#FF4655',
    stats: { speed: 92, shot: 95, defense: 60, dribble: 88 }
  },
  {
    id: 'mint_playmaker',
    name: 'MINT MASTER',
    club: 'ELECTRIC MINT FC',
    role: 'TACTICAL PLAYMAKER',
    avatar: '⚽',
    color: '#17FFBF',
    kitHex: '#17FFBF',
    stats: { speed: 89, shot: 88, defense: 75, dribble: 96 }
  },
  {
    id: 'blue_titan',
    name: 'TITAN GUARDIAN',
    club: 'BLUE SHIELD FC',
    role: 'DEFENSIVE TANK',
    avatar: '🛡️',
    color: '#00D8F6',
    kitHex: '#00D8F6',
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
    <div className="relative w-screen h-screen bg-[#060D17] bg-stadium-pattern text-[#E2F1F8] flex flex-col justify-between p-6 sm:p-10 select-none overflow-hidden font-['Inter',sans-serif]">
      {/* TOP HEADER */}
      <div className="relative z-10 w-full flex justify-between items-center">
        <button
          onClick={onBackToControllers}
          className="flex items-center gap-2 bg-[#0A1526] border border-[#142840] hover:border-[#17FFBF] text-slate-300 hover:text-white px-4 py-2 font-mono text-xs font-bold cursor-pointer transition"
        >
          <ArrowLeft className="w-4 h-4" /> BACK TO CONTROLLERS
        </button>

        <div className="flex flex-col items-center">
          <h2 className="text-2xl sm:text-4xl font-black italic tracking-tighter text-white font-['Plus_Jakarta_Sans',sans-serif] uppercase">
            CHARACTER & TEAM SELECT ({mode.toUpperCase()})
          </h2>
          <span className="text-xs font-mono text-[#17FFBF] tracking-widest uppercase">
            PES SPLIT-SCREEN ARENA
          </span>
        </div>

        <div className="text-xs font-mono font-bold text-slate-400">
          STEP 2 OF 2
        </div>
      </div>

      {/* SPLIT SCREEN CARDS (P1 HOME LEFT vs P2 AWAY RIGHT) */}
      <div className="relative z-10 my-auto grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
        {/* PLAYER 1 (HOME / RED-CYAN TEAM) */}
        <div className="bg-[#0A1526] border-2 border-[#17FFBF]/60 p-6 flex flex-col justify-between relative clip-parallelogram shadow-xl">
          <div className="flex justify-between items-center border-b border-[#142840] pb-3 mb-4">
            <span className="text-sm font-mono font-black text-[#17FFBF] tracking-wider uppercase">
              PLAYER 1 (HOME)
            </span>
            <span className="text-xs font-mono text-slate-400">DEV: {p1Device.toUpperCase()}</span>
          </div>

          <div className="flex items-center justify-between gap-4 my-2">
            <button
              disabled={p1Ready}
              onClick={() => setP1Index((prev) => (prev - 1 + CHARACTERS.length) % CHARACTERS.length)}
              className="w-10 h-10 bg-[#060D17] border border-[#142840] hover:border-[#17FFBF] flex items-center justify-center cursor-pointer disabled:opacity-30"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={p1Char.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={FIFA_SPRING}
                className="flex flex-col items-center text-center"
              >
                <div className="text-7xl mb-2">{p1Char.avatar}</div>
                <h3 className="text-2xl font-black italic uppercase text-white font-['Plus_Jakarta_Sans',sans-serif]">
                  {p1Char.name}
                </h3>
                <span
                  className="text-xs font-mono font-bold uppercase tracking-widest px-3 py-0.5 mt-1 border"
                  style={{ color: p1Char.color, borderColor: p1Char.color }}
                >
                  {p1Char.role}
                </span>
              </motion.div>
            </AnimatePresence>

            <button
              disabled={p1Ready}
              onClick={() => setP1Index((prev) => (prev + 1) % CHARACTERS.length)}
              className="w-10 h-10 bg-[#060D17] border border-[#142840] hover:border-[#17FFBF] flex items-center justify-center cursor-pointer disabled:opacity-30"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* STATS BARS */}
          <div className="flex flex-col gap-2 my-4 bg-[#060D17] p-4 border border-[#142840] text-xs font-mono">
            <div className="flex justify-between items-center">
              <span className="text-slate-400">SPEED</span>
              <span className="font-bold text-[#17FFBF]">{p1Char.stats.speed}</span>
            </div>
            <div className="w-full bg-[#0A1526] h-1.5 overflow-hidden">
              <div className="bg-[#17FFBF] h-full" style={{ width: `${p1Char.stats.speed}%` }} />
            </div>

            <div className="flex justify-between items-center mt-1">
              <span className="text-slate-400">SHOT POWER</span>
              <span className="font-bold text-amber-400">{p1Char.stats.shot}</span>
            </div>
            <div className="w-full bg-[#0A1526] h-1.5 overflow-hidden">
              <div className="bg-amber-400 h-full" style={{ width: `${p1Char.stats.shot}%` }} />
            </div>
          </div>

          {/* READY BUTTON P1 */}
          <button
            onClick={() => setP1Ready(!p1Ready)}
            className={`w-full py-3 font-mono font-black text-sm tracking-widest uppercase cursor-pointer transition clip-parallelogram ${
              p1Ready
                ? 'bg-[#17FFBF] text-[#060D17]'
                : 'bg-[#060D17] border border-[#17FFBF] text-[#17FFBF] hover:bg-[#17FFBF]/10'
            }`}
          >
            {p1Ready ? '✓ PLAYER 1 READY' : 'PRESS SPACE TO READY'}
          </button>
        </div>

        {/* PLAYER 2 (AWAY / BLUE-AMBER TEAM OR BOT) */}
        <div className="bg-[#0A1526] border-2 border-amber-400/60 p-6 flex flex-col justify-between relative clip-parallelogram shadow-xl">
          <div className="flex justify-between items-center border-b border-[#142840] pb-3 mb-4">
            <span className="text-sm font-mono font-black text-amber-400 tracking-wider uppercase">
              {mode === '2vBot' ? 'AI ENEMY BOT' : 'PLAYER 2 (AWAY)'}
            </span>
            <span className="text-xs font-mono text-slate-400">
              {mode === '2vBot' ? 'AUTO BOT' : `DEV: ${p2Device.toUpperCase()}`}
            </span>
          </div>

          <div className="flex items-center justify-between gap-4 my-2">
            <button
              disabled={p2Ready || mode === '2vBot'}
              onClick={() => setP2Index((prev) => (prev - 1 + CHARACTERS.length) % CHARACTERS.length)}
              className="w-10 h-10 bg-[#060D17] border border-[#142840] hover:border-amber-400 flex items-center justify-center cursor-pointer disabled:opacity-30"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={p2Char.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={FIFA_SPRING}
                className="flex flex-col items-center text-center"
              >
                <div className="text-7xl mb-2">{p2Char.avatar}</div>
                <h3 className="text-2xl font-black italic uppercase text-white font-['Plus_Jakarta_Sans',sans-serif]">
                  {p2Char.name}
                </h3>
                <span
                  className="text-xs font-mono font-bold uppercase tracking-widest px-3 py-0.5 mt-1 border"
                  style={{ color: p2Char.color, borderColor: p2Char.color }}
                >
                  {p2Char.role}
                </span>
              </motion.div>
            </AnimatePresence>

            <button
              disabled={p2Ready || mode === '2vBot'}
              onClick={() => setP2Index((prev) => (prev + 1) % CHARACTERS.length)}
              className="w-10 h-10 bg-[#060D17] border border-[#142840] hover:border-amber-400 flex items-center justify-center cursor-pointer disabled:opacity-30"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* STATS BARS */}
          <div className="flex flex-col gap-2 my-4 bg-[#060D17] p-4 border border-[#142840] text-xs font-mono">
            <div className="flex justify-between items-center">
              <span className="text-slate-400">SPEED</span>
              <span className="font-bold text-amber-400">{p2Char.stats.speed}</span>
            </div>
            <div className="w-full bg-[#0A1526] h-1.5 overflow-hidden">
              <div className="bg-amber-400 h-full" style={{ width: `${p2Char.stats.speed}%` }} />
            </div>

            <div className="flex justify-between items-center mt-1">
              <span className="text-slate-400">SHOT POWER</span>
              <span className="font-bold text-cyan-400">{p2Char.stats.shot}</span>
            </div>
            <div className="w-full bg-[#0A1526] h-1.5 overflow-hidden">
              <div className="bg-cyan-400 h-full" style={{ width: `${p2Char.stats.shot}%` }} />
            </div>
          </div>

          {/* READY BUTTON P2 */}
          <button
            disabled={mode === '2vBot'}
            onClick={() => setP2Ready(!p2Ready)}
            className={`w-full py-3 font-mono font-black text-sm tracking-widest uppercase cursor-pointer transition clip-parallelogram ${
              p2Ready
                ? 'bg-amber-400 text-[#060D17]'
                : 'bg-[#060D17] border border-amber-400 text-amber-400 hover:bg-amber-400/10'
            }`}
          >
            {p2Ready ? '✓ READY' : 'PRESS ENTER TO READY'}
          </button>
        </div>
      </div>

      {/* BOTTOM ACTION BAR */}
      <div className="relative z-10 w-full flex justify-between items-center pt-4 border-t border-[#142840]/80 font-mono text-xs">
        <div className="flex items-center gap-6 text-slate-400 font-bold">
          <span>P1 NAV: A / D | READY: SPACE</span>
          <span>P2 NAV: ◄ / ► | READY: ENTER</span>
        </div>

        <button
          disabled={!bothReady}
          onClick={handleStart}
          className={`px-8 py-3.5 font-mono font-black text-sm tracking-widest uppercase transition clip-parallelogram ${
            bothReady
              ? 'bg-[#17FFBF] text-[#060D17] hover:bg-[#4BFFCE] cursor-pointer shadow-lg shadow-[#17FFBF]/30'
              : 'bg-[#0A1526] border border-[#142840] text-slate-500 cursor-not-allowed opacity-50'
          }`}
        >
          KICK OFF MATCH ⚽ ➔
        </button>
      </div>
    </div>
  );
};
