import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swords, Bot, X, Gamepad } from 'lucide-react';

interface MatchModeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMode: (mode: '1v1' | '1vBot' | '2vBot') => void;
}

export const MatchModeModal: React.FC<MatchModeModalProps> = ({
  isOpen,
  onClose,
  onSelectMode,
}) => {
  const [selectedCard, setSelectedCard] = useState<'1v1' | '1vBot' | '2vBot'>('1vBot');

  // Keyboard D-Pad Navigation Support (ArrowLeft, ArrowRight, Enter, Escape)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        setSelectedCard((prev) => prev === '2vBot' ? '1vBot' : '1v1');
      } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        setSelectedCard((prev) => prev === '1v1' ? '1vBot' : '2vBot');
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onSelectMode(selectedCard);
      } else if (e.key === 'Escape' || e.key === 'Backspace') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedCard, onSelectMode, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-[#05090C]/94 flex items-center justify-center p-4 sm:p-6 select-none font-['Poppins',sans-serif]">
          {/* 100% PES CONSOLE CARD SELECTOR MODAL CONTAINER WITH NEUTRAL DARK GRAPHITE PALETTE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 80 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: 'transform, opacity' }}
            className="bg-[#151917] border border-white/10 max-w-4xl w-full shadow-2xl flex flex-col overflow-hidden relative font-['Poppins',sans-serif] will-change-transform transform-gpu"
          >
            
            {/* TOP HEADER SECTION */}
            <div className="bg-[#1b201d] p-6 sm:p-8 border-b border-white/10 flex flex-col gap-1.5 relative">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 bg-[#0c100e] border border-white/10 text-slate-400 hover:text-white transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-['Outfit',sans-serif] tracking-tight">
                Match Mode
              </h2>
              <p className="text-sm text-slate-400 font-normal">
                Select the type of match mode you want to use in Kick Off.
              </p>
            </div>

            {/* CENTER CARDS BODY: 3 HORIZONTAL SELECTOR CARDS */}
            <div className="p-6 sm:p-10 grid grid-cols-1 sm:grid-cols-3 gap-5 bg-[#111513]">
              
              {/* CARD 1: PLAYER VS PLAYER */}
              <div
                onMouseEnter={() => setSelectedCard('1v1')}
                onClick={() => onSelectMode('1v1')}
                className={`cursor-pointer p-5 flex flex-col items-center text-center gap-3 relative rounded-none border-2 ${
                  selectedCard === '1v1'
                    ? 'bg-[#141e2e] text-white border-[#3B82F6]'
                    : 'bg-[#171d1a] text-white border-white/10 hover:border-white/30'
                }`}
              >
                <div
                  className={`w-full h-40 rounded-2xl flex flex-col items-center justify-center p-4 border ${
                    selectedCard === '1v1'
                      ? 'bg-gradient-to-br from-[#0c1426] via-[#121c33] to-[#0a1020] border-[#3B82F6]/80 text-white'
                      : 'bg-[#0e1311] border-white/10 text-slate-300'
                  }`}
                >
                  <div className="w-12 h-12 rounded-full border-2 border-current flex items-center justify-center mb-2">
                    <Swords className="w-6 h-6 text-[#3B82F6]" />
                  </div>
                  <span className="text-lg font-black italic tracking-tighter font-['Outfit',sans-serif] uppercase">KICK OFF</span>
                  <span className="text-xs font-mono font-bold tracking-widest text-[#3B82F6] mt-0.5">PLAYER VS PLAYER</span>
                </div>
                <div className="flex flex-col items-center gap-1 mt-1">
                  <h3 className="text-lg font-bold font-['Outfit',sans-serif] text-white">Player vs Player</h3>
                  <p className="text-xs max-w-xs font-normal leading-relaxed text-slate-300">Local & remote PVP match with friends.</p>
                </div>
              </div>

              {/* CARD 2: PLAYER VS 1 BOT */}
              <div
                onMouseEnter={() => setSelectedCard('1vBot')}
                onClick={() => onSelectMode('1vBot')}
                className={`cursor-pointer p-5 flex flex-col items-center text-center gap-3 relative rounded-none border-2 ${
                  selectedCard === '1vBot'
                    ? 'bg-[#1e1a09] text-white border-[#FFD13B]'
                    : 'bg-[#171d1a] text-white border-white/10 hover:border-white/30'
                }`}
              >
                <div
                  className={`w-full h-40 rounded-2xl flex flex-col items-center justify-center p-4 border ${
                    selectedCard === '1vBot'
                      ? 'bg-gradient-to-br from-[#201600] via-[#1a1000] to-[#0e0900] border-[#FFD13B]/80 text-white'
                      : 'bg-[#0e1311] border-white/10 text-slate-300'
                  }`}
                >
                  <div className="w-12 h-12 rounded-full border-2 border-current flex items-center justify-center mb-2">
                    <Bot className="w-6 h-6 text-[#FFD13B]" />
                  </div>
                  <span className="text-lg font-black italic tracking-tighter font-['Outfit',sans-serif] uppercase">SOLO CLASH</span>
                  <span className="text-xs font-mono font-bold tracking-widest text-[#FFD13B] mt-0.5">PLAYER VS BOT</span>
                </div>
                <div className="flex flex-col items-center gap-1 mt-1">
                  <h3 className="text-lg font-bold font-['Outfit',sans-serif] text-white">Player vs Bot</h3>
                  <p className="text-xs max-w-xs font-normal leading-relaxed text-slate-300">1 player vs 1 AI enemy bot.</p>
                </div>
              </div>

              {/* CARD 3: 2 PLAYERS VS 2 BOTS CO-OP */}
              <div
                onMouseEnter={() => setSelectedCard('2vBot')}
                onClick={() => onSelectMode('2vBot')}
                className={`cursor-pointer p-5 flex flex-col items-center text-center gap-3 relative rounded-none border-2 ${
                  selectedCard === '2vBot'
                    ? 'bg-[#0e1a0e] text-white border-[#10b981]'
                    : 'bg-[#171d1a] text-white border-white/10 hover:border-white/30'
                }`}
              >
                <div
                  className={`w-full h-40 rounded-2xl flex flex-col items-center justify-center p-4 border ${
                    selectedCard === '2vBot'
                      ? 'bg-gradient-to-br from-[#031a0c] via-[#021408] to-[#010a04] border-[#10b981]/80 text-white'
                      : 'bg-[#0e1311] border-white/10 text-slate-300'
                  }`}
                >
                  <div className="w-12 h-12 rounded-full border-2 border-current flex items-center justify-center mb-2">
                    <Gamepad className="w-6 h-6 text-[#10b981]" />
                  </div>
                  <span className="text-lg font-black italic tracking-tighter font-['Outfit',sans-serif] uppercase">CO-OP</span>
                  <span className="text-xs font-mono font-bold tracking-widest text-[#10b981] mt-0.5">2 PLAYERS VS 2 BOTS</span>
                </div>
                <div className="flex flex-col items-center gap-1 mt-1">
                  <h3 className="text-lg font-bold font-['Outfit',sans-serif] text-white">Co-op vs Bots</h3>
                  <p className="text-xs max-w-xs font-normal leading-relaxed text-slate-300">2 players team up vs 2 AI enemy bots.</p>
                </div>
              </div>

            </div>

            {/* BOTTOM HELPER BAR */}
            <div className="bg-[#1b201d] px-8 py-4 border-t border-white/10 flex justify-end items-center text-xs font-mono">
              <button
                onClick={() => onSelectMode(selectedCard)}
                className="py-2.5 px-6 clip-parallelogram bg-[#2563EB] hover:bg-[#3B82F6] text-white font-mono font-black text-xs tracking-wider transition cursor-pointer flex items-center gap-2"
              >
                <span className="w-4.5 h-4.5 rounded-full bg-[#10b981] text-white font-black flex items-center justify-center text-[10px] shadow leading-none border border-emerald-400/50">
                  A
                </span>
                <span>SELECT MODE ➔</span>
              </button>
            </div>
          </motion.div>

          {/* AUTHENTIC PES CONSOLE INFO CONTROL BAR (OUTSIDE DIV CONTAINER - FIXED AT BOTTOM LEFT SCREEN) */}
          <div className="fixed bottom-6 left-8 z-50 flex items-center gap-6 text-xs font-sans text-slate-200 select-none pointer-events-auto">
            <div className="flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-[#10b981] text-white font-black flex items-center justify-center text-[10px] shadow">
                A
              </span>
              <span className="font-semibold text-white">Confirm</span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-[#FF4655] text-white font-black flex items-center justify-center text-[10px] shadow">
                B
              </span>
              <span className="font-semibold text-slate-300">Return</span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-[#00D8F6] text-[#05090C] font-black flex items-center justify-center text-[10px] shadow">
                X
              </span>
              <span className="font-semibold text-slate-300">Edit Personal Preset</span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-[#FFD13B] text-[#05090C] font-black flex items-center justify-center text-[10px] shadow">
                Y
              </span>
              <span className="font-semibold text-slate-300">Coach Mode</span>
            </div>

            <div className="flex items-center gap-1.5">
              <div className="flex items-center gap-1 bg-[#1a232b] border border-white/20 px-2 py-0.5 rounded text-[10px] font-mono font-bold text-white">
                <span>LT</span>
                <span>RT</span>
              </div>
              <span className="font-semibold text-slate-300">Select Personal Preset</span>
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
