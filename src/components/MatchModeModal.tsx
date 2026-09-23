import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swords, Bot, X, Zap, ChevronLeft } from 'lucide-react';
import { BotDifficulty } from '../types/game';

interface MatchModeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMode: (mode: '1v1' | '2vBot', difficulty?: BotDifficulty) => void;
}

export const MatchModeModal: React.FC<MatchModeModalProps> = ({
  isOpen,
  onClose,
  onSelectMode,
}) => {
  const [step, setStep] = useState<'mode' | 'difficulty'>('mode');
  const [selectedCard, setSelectedCard] = useState<'1v1' | '2vBot'>('1v1');
  const [selectedDifficulty, setSelectedDifficulty] = useState<BotDifficulty>('easy');

  // Reset step whenever modal re-opens
  useEffect(() => {
    if (isOpen) {
      setStep('mode');
      setSelectedCard('1v1');
      setSelectedDifficulty('easy');
    }
  }, [isOpen]);

  // Keyboard D-Pad Navigation Support (ArrowLeft, ArrowRight, Enter, Escape, Backspace)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (step === 'mode') {
        if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
          setSelectedCard('1v1');
        } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
          setSelectedCard('2vBot');
        } else if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (selectedCard === '1v1') {
            onSelectMode('1v1');
          } else {
            setStep('difficulty');
          }
        } else if (e.key === 'Escape' || e.key === 'Backspace') {
          onClose();
        }
      } else {
        // Step === 'difficulty'
        if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
          setSelectedDifficulty('easy');
        } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
          setSelectedDifficulty('hard');
        } else if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelectMode('2vBot', selectedDifficulty);
        } else if (e.key === 'Escape' || e.key === 'Backspace') {
          setStep('mode');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, step, selectedCard, selectedDifficulty, onSelectMode, onClose]);

  const handleConfirmAction = () => {
    if (step === 'mode') {
      if (selectedCard === '1v1') {
        onSelectMode('1v1');
      } else {
        setStep('difficulty');
      }
    } else {
      onSelectMode('2vBot', selectedDifficulty);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-[#05090C]/94 flex items-center justify-center p-4 sm:p-6 select-none font-['Poppins',sans-serif]">
          {/* PES CONSOLE CARD SELECTOR MODAL CONTAINER */}
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
              <div className="flex items-center gap-3">
                {step === 'difficulty' && (
                  <button
                    onClick={() => setStep('mode')}
                    className="p-1.5 bg-[#0c100e] border border-white/10 text-slate-400 hover:text-white transition cursor-pointer flex items-center gap-1 text-xs font-semibold px-2.5 rounded"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Kembali</span>
                  </button>
                )}
                <h2 className="text-3xl sm:text-4xl font-bold text-white font-['Outfit',sans-serif] tracking-tight">
                  {step === 'mode' ? 'Match Mode' : 'Bot Difficulty'}
                </h2>
              </div>
              <p className="text-sm text-slate-400 font-normal">
                {step === 'mode'
                  ? 'Pilih tipe pertandingan yang ingin Anda mainkan di Kick Off.'
                  : 'Pilih tingkat kecerdasan, agresivitas tekel, dan ketajaman serangan AI Bot lawan.'}
              </p>

              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 bg-[#0c100e] border border-white/10 text-slate-400 hover:text-white transition cursor-pointer"
                title="Tutup Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* STEP 1: MATCH MODE SELECTION (Player vs Player / Player vs Bot) */}
            {step === 'mode' && (
              <div className="p-6 sm:p-10 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#111513]">
                {/* CARD 1: PLAYER VS PLAYER */}
                <div
                  onMouseEnter={() => setSelectedCard('1v1')}
                  onClick={() => onSelectMode('1v1')}
                  className={`cursor-pointer p-6 flex flex-col items-center text-center gap-4 relative rounded-none border-2 transition-all ${
                    selectedCard === '1v1'
                      ? 'bg-[#141e2e] text-white border-[#3B82F6]'
                      : 'bg-[#171d1a] text-white border-white/10 hover:border-white/30'
                  }`}
                >
                  <div
                    className={`w-full h-44 rounded-2xl flex flex-col items-center justify-center p-4 border transition-all ${
                      selectedCard === '1v1'
                        ? 'bg-gradient-to-br from-[#0c1426] via-[#121c33] to-[#0a1020] border-[#3B82F6]/80 text-white'
                        : 'bg-[#0e1311] border-white/10 text-slate-300'
                    }`}
                  >
                    <div className="w-12 h-12 rounded-full border-2 border-current flex items-center justify-center mb-2">
                      <Swords className="w-6 h-6 text-[#3B82F6]" />
                    </div>
                    <span className="text-xl font-black italic tracking-tighter font-['Outfit',sans-serif] uppercase">
                      KICK OFF
                    </span>
                    <span className="text-xs font-mono font-bold tracking-widest text-[#3B82F6] mt-0.5">
                      PLAYER VS PLAYER
                    </span>
                  </div>

                  <div className="flex flex-col items-center gap-1 mt-1">
                    <h3 className="text-xl font-bold font-['Outfit',sans-serif] text-white">
                      Player vs Player
                    </h3>
                    <p className="text-xs max-w-xs font-normal leading-relaxed text-slate-300">
                      Tanding seru 1 lawan 1 secara lokal & remote bersama teman.
                    </p>
                  </div>
                </div>

                {/* CARD 2: PLAYER VS BOT */}
                <div
                  onMouseEnter={() => setSelectedCard('2vBot')}
                  onClick={() => setStep('difficulty')}
                  className={`cursor-pointer p-6 flex flex-col items-center text-center gap-4 relative rounded-none border-2 transition-all ${
                    selectedCard === '2vBot'
                      ? 'bg-[#141e2e] text-white border-[#3B82F6]'
                      : 'bg-[#171d1a] text-white border-white/10 hover:border-white/30'
                  }`}
                >
                  <div
                    className={`w-full h-44 rounded-2xl flex flex-col items-center justify-center p-4 border transition-all ${
                      selectedCard === '2vBot'
                        ? 'bg-gradient-to-br from-[#0c1426] via-[#121c33] to-[#0a1020] border-[#3B82F6]/80 text-white'
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

                  <div className="flex flex-col items-center gap-1 mt-1">
                    <h3 className="text-xl font-bold font-['Outfit',sans-serif] text-white">
                      Player vs Bot
                    </h3>
                    <p className="text-xs max-w-xs font-normal leading-relaxed text-slate-300">
                      Uji kemampuan bertanding melawan kecerdasan taktik AI Bot.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: BOT DIFFICULTY SELECTION (Easy Bot vs Hard Bot) */}
            {step === 'difficulty' && (
              <div className="p-6 sm:p-10 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#111513]">
                {/* DIFFICULTY CARD 1: EASY BOT */}
                <div
                  onMouseEnter={() => setSelectedDifficulty('easy')}
                  onClick={() => onSelectMode('2vBot', 'easy')}
                  className={`cursor-pointer p-6 flex flex-col items-center text-center gap-4 relative rounded-none border-2 transition-all ${
                    selectedDifficulty === 'easy'
                      ? 'bg-[#0e2118] text-white border-[#10b981]'
                      : 'bg-[#171d1a] text-white border-white/10 hover:border-white/30'
                  }`}
                >
                  <div
                    className={`w-full h-44 rounded-2xl flex flex-col items-center justify-center p-4 border transition-all ${
                      selectedDifficulty === 'easy'
                        ? 'bg-gradient-to-br from-[#061c12] via-[#0b2b1d] to-[#04120b] border-[#10b981]/80 text-white shadow-lg shadow-emerald-500/10'
                        : 'bg-[#0e1311] border-white/10 text-slate-300'
                    }`}
                  >
                    <div className="w-12 h-12 rounded-full border-2 border-emerald-400 flex items-center justify-center mb-2 bg-emerald-950/60 shadow">
                      <Bot className="w-6 h-6 text-[#10b981]" />
                    </div>
                    <span className="text-xl font-black italic tracking-tighter font-['Outfit',sans-serif] uppercase text-white">
                      EASY BOT
                    </span>
                    <span className="text-xs font-mono font-bold tracking-widest text-[#10b981] mt-0.5">
                      PRACTICE ARENA
                    </span>
                  </div>

                  <div className="flex flex-col items-center gap-1 mt-1">
                    <h3 className="text-xl font-bold font-['Outfit',sans-serif] text-emerald-400">
                      Easy Bot (Santai)
                    </h3>
                    <p className="text-xs max-w-xs font-normal leading-relaxed text-slate-300">
                      Reaksi lebih bersahabat, tembakan standar, dan tekel jarang. Sangat cocok untuk latihan & pemanasan!
                    </p>
                  </div>
                </div>

                {/* DIFFICULTY CARD 2: HARD BOT */}
                <div
                  onMouseEnter={() => setSelectedDifficulty('hard')}
                  onClick={() => onSelectMode('2vBot', 'hard')}
                  className={`cursor-pointer p-6 flex flex-col items-center text-center gap-4 relative rounded-none border-2 transition-all ${
                    selectedDifficulty === 'hard'
                      ? 'bg-[#291012] text-white border-[#ef4444]'
                      : 'bg-[#171d1a] text-white border-white/10 hover:border-white/30'
                  }`}
                >
                  <div
                    className={`w-full h-44 rounded-2xl flex flex-col items-center justify-center p-4 border transition-all ${
                      selectedDifficulty === 'hard'
                        ? 'bg-gradient-to-br from-[#240a0c] via-[#330e12] to-[#170507] border-[#ef4444]/80 text-white shadow-lg shadow-red-500/15'
                        : 'bg-[#0e1311] border-white/10 text-slate-300'
                    }`}
                  >
                    <div className="w-12 h-12 rounded-full border-2 border-rose-500 flex items-center justify-center mb-2 bg-rose-950/60 shadow">
                      <Zap className="w-6 h-6 text-[#ef4444]" />
                    </div>
                    <span className="text-xl font-black italic tracking-tighter font-['Outfit',sans-serif] uppercase text-white">
                      HARD BOT
                    </span>
                    <span className="text-xs font-mono font-bold tracking-widest text-[#ef4444] mt-0.5">
                      WORLD CLASS AI
                    </span>
                  </div>

                  <div className="flex flex-col items-center gap-1 mt-1">
                    <h3 className="text-xl font-bold font-['Outfit',sans-serif] text-rose-400">
                      Hard Bot (Tantangan)
                    </h3>
                    <p className="text-xs max-w-xs font-normal leading-relaxed text-slate-300">
                      Sprint kilat, tekel akurat & sleding, tendangan geledek (thunderbolt) tajam ke sudut gawang, dan bisa gocek!
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* BOTTOM HELPER BAR */}
            <div className="bg-[#1b201d] px-8 py-4 border-t border-white/10 flex justify-between items-center text-xs font-mono">
              <div className="text-slate-400 hidden sm:flex items-center gap-2">
                <span>Gunakan D-Pad / Panah Kiri-Kanan untuk memilih</span>
              </div>

              <button
                onClick={handleConfirmAction}
                className="py-2.5 px-6 clip-parallelogram bg-[#2563EB] hover:bg-[#3B82F6] text-white font-mono font-black text-xs tracking-wider transition cursor-pointer flex items-center gap-2"
              >
                <span className="w-4.5 h-4.5 rounded-full bg-[#10b981] text-white font-black flex items-center justify-center text-[10px] shadow leading-none border border-emerald-400/50">
                  A
                </span>
                <span>
                  {step === 'mode'
                    ? selectedCard === '2vBot'
                      ? 'PILIH KESULITAN ➔'
                      : 'CONFIRM SIDES ➔'
                    : 'MULAI TANDING ➔'}
                </span>
              </button>
            </div>
          </motion.div>

          {/* AUTHENTIC PES CONSOLE INFO CONTROL BAR */}
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
              <span className="font-semibold text-slate-300">
                {step === 'difficulty' ? 'Back to Mode' : 'Close'}
              </span>
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
