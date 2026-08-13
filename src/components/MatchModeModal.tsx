import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Swords, Bot, X } from 'lucide-react';

interface MatchModeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMode: (mode: '1v1' | '2vBot') => void;
}

export const MatchModeModal: React.FC<MatchModeModalProps> = ({
  isOpen,
  onClose,
  onSelectMode,
}) => {
  const [selectedCard, setSelectedCard] = useState<'1v1' | '2vBot'>('1v1');

  // Keyboard D-Pad Navigation Support (ArrowLeft, ArrowRight, Enter, Escape)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        setSelectedCard('1v1');
      } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        setSelectedCard('2vBot');
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#05090C]/96 backdrop-blur-lg flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150 select-none font-['Poppins',sans-serif]">
      {/* 100% PES 26 CONSOLE CARD SELECTOR MODAL CONTAINER */}
      <div className="bg-[#151917] border border-white/10 max-w-4xl w-full shadow-2xl flex flex-col overflow-hidden relative font-['Poppins',sans-serif]">
        
        {/* TOP HEADER SECTION (Presisi PES 26 Console UI) */}
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

        {/* CENTER CARDS BODY: 2 HORIZONTAL SELECTOR CARDS */}
        <div className="p-6 sm:p-10 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#111513]">
          
          {/* CARD 1: PLAYER VS PLAYER */}
          <div
            onMouseEnter={() => setSelectedCard('1v1')}
            onClick={() => onSelectMode('1v1')}
            className={`cursor-pointer transition-colors duration-100 p-6 flex flex-col items-center text-center gap-4 relative group rounded-none border ${
              selectedCard === '1v1'
                ? 'bg-[#d8e2de] text-[#09100d] border-[#17FFBF] shadow-xl'
                : 'bg-[#171d1a] text-white border-white/10 hover:border-white/30 opacity-75 hover:opacity-100'
            }`}
          >
            {/* INNER LOGO CARD GRAPHIC */}
            <div
              className={`w-full h-44 rounded-2xl flex flex-col items-center justify-center p-4 border transition-colors ${
                selectedCard === '1v1'
                  ? 'bg-gradient-to-br from-[#0c1310] via-[#101b17] to-[#0a120f] border-[#17FFBF]/80 text-white'
                  : 'bg-[#0e1311] border-white/10 text-slate-300'
              }`}
            >
              <div className="w-12 h-12 rounded-full border-2 border-current flex items-center justify-center mb-2">
                <Swords className="w-6 h-6 text-[#17FFBF]" />
              </div>
              <span className="text-xl font-black italic tracking-tighter font-['Outfit',sans-serif] uppercase">
                KICK OFF
              </span>
              <span className="text-xs font-mono font-bold tracking-widest text-[#17FFBF] mt-0.5">
                PLAYER VS PLAYER
              </span>
            </div>

            {/* CARD TITLE & DESCRIPTION */}
            <div className="flex flex-col items-center gap-1 mt-1">
              <h3 className={`text-xl font-bold font-['Outfit',sans-serif] ${
                selectedCard === '1v1' ? 'text-[#09100d]' : 'text-white'
              }`}>
                Player vs Player
              </h3>
              <p className={`text-xs max-w-xs font-normal leading-relaxed ${
                selectedCard === '1v1' ? 'text-slate-800 font-medium' : 'text-slate-400'
              }`}>
                Play local & multi-remote match with your friends in PVP arena.
              </p>
            </div>
          </div>

          {/* CARD 2: PLAYER VS BOT */}
          <div
            onMouseEnter={() => setSelectedCard('2vBot')}
            onClick={() => onSelectMode('2vBot')}
            className={`cursor-pointer transition-colors duration-100 p-6 flex flex-col items-center text-center gap-4 relative group rounded-none border ${
              selectedCard === '2vBot'
                ? 'bg-[#d8e2de] text-[#09100d] border-[#17FFBF] shadow-xl'
                : 'bg-[#171d1a] text-white border-white/10 hover:border-white/30 opacity-75 hover:opacity-100'
            }`}
          >
            {/* INNER LOGO CARD GRAPHIC */}
            <div
              className={`w-full h-44 rounded-2xl flex flex-col items-center justify-center p-4 border transition-colors ${
                selectedCard === '2vBot'
                  ? 'bg-gradient-to-br from-[#0c1310] via-[#101b17] to-[#0a120f] border-[#17FFBF]/60 text-white'
                  : 'bg-[#0e1311] border-white/10 text-slate-300'
              }`}
            >
              <div className="w-12 h-12 rounded-full border-2 border-current flex items-center justify-center mb-2">
                <Bot className="w-6 h-6 text-[#FFD13B]" />
              </div>
              <span className="text-xl font-black italic tracking-tighter font-['Outfit',sans-serif] uppercase">
                KICK OFF
              </span>
              <span className="text-xs font-mono font-bold tracking-widest text-[#FFD13B] mt-0.5">
                REAL BOT AI
              </span>
            </div>

            {/* CARD TITLE & DESCRIPTION */}
            <div className="flex flex-col items-center gap-1 mt-1">
              <h3 className={`text-xl font-bold font-['Outfit',sans-serif] ${
                selectedCard === '2vBot' ? 'text-[#09100d]' : 'text-white'
              }`}>
                Player vs Bot
              </h3>
              <p className={`text-xs max-w-xs font-normal leading-relaxed ${
                selectedCard === '2vBot' ? 'text-slate-700' : 'text-slate-400'
              }`}>
                Team up with friends or play against AI Enemy Bots.
              </p>
            </div>
          </div>

        </div>

        {/* BOTTOM HELPER BAR (Presisi Controller Hints: (A) Confirm (B) Return) */}
        <div className="bg-[#1b201d] px-8 py-4 border-t border-white/10 flex justify-between items-center text-xs font-mono">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#17FFBF] text-[#09100d] font-bold flex items-center justify-center text-[10px]">
                A
              </span>
              <span className="text-slate-200 font-semibold">Confirm</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#FF4655] text-white font-bold flex items-center justify-center text-[10px]">
                B
              </span>
              <span className="text-slate-400">Return</span>
            </div>
          </div>

          <button
            onClick={() => onSelectMode(selectedCard)}
            className="py-2.5 px-6 clip-parallelogram bg-[#17FFBF] hover:bg-[#4BFFCE] text-[#05090C] font-mono font-black text-xs tracking-wider transition cursor-pointer"
          >
            SELECT MODE ➔
          </button>
        </div>
      </div>
    </div>
  );
};
