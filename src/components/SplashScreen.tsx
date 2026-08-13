import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface SplashScreenProps {
  onStartGame: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onStartGame }) => {
  // Listen to any keypress (Enter, Space, etc.) to trigger start
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      onStartGame();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onStartGame]);

  return (
    <div
      onClick={onStartGame}
      className="relative w-screen h-screen bg-[#05090D] text-[#E2F1F8] flex flex-col justify-between p-8 sm:p-12 select-none overflow-hidden font-['Poppins',sans-serif] cursor-pointer"
    >
      {/* VIBRANT AURORA MESH BACKGROUND GRADIENT BLOBS (Presisi 100% dari Gambar Acuan) */}
      <div className="absolute -top-32 -left-32 w-[550px] h-[550px] bg-gradient-to-br from-[#17FFBF]/40 via-[#00E676]/20 to-transparent rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-gradient-to-tl from-[#00E676]/35 via-[#17FFBF]/20 to-transparent rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-emerald-900/10 via-cyan-900/10 to-transparent rounded-full blur-[140px] pointer-events-none z-0" />

      {/* ORGANIC WAVE/CONTOUR LINE OVERLAY TEXTURE */}
      <div className="absolute inset-0 bg-[radial-gradient(#17FFBF_1px,transparent_1px)] [background-size:40px_40px] opacity-10 pointer-events-none z-0" />

      {/* 1. TOP CENTER LOGO BRANDING (PES 26) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="relative z-10 w-full flex justify-center items-center pt-2"
      >
        <h1 className="text-3xl sm:text-4xl font-black italic tracking-tighter text-white font-['Outfit',sans-serif] uppercase drop-shadow-md">
          PES<span className="text-white">26</span>
        </h1>
      </motion.div>

      {/* 2. CENTER HEADLINE & PRESS START PILL BUTTON */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, delay: 0.05 }}
        className="relative z-10 my-auto w-full flex flex-col items-center justify-center text-center gap-8"
      >
        {/* Main Slogan: THE CLUB IS YOURS */}
        <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white font-['Outfit',sans-serif] uppercase leading-[0.95] drop-shadow-2xl max-w-4xl">
          THE CLUB <br />
          <span className="text-white">IS YOURS</span>
        </h2>

        {/* Glowing Glassmorphism Pill Button: Let's Play! */}
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          onClick={(e) => {
            e.stopPropagation();
            onStartGame();
          }}
          className="mt-2 px-10 py-3.5 bg-gradient-to-r from-[#3A3897] to-[#4537B8] hover:from-[#4537B8] hover:to-[#5545D8] border border-indigo-400/40 rounded-full text-white font-bold text-base sm:text-lg tracking-wide shadow-xl shadow-indigo-600/30 transition cursor-pointer flex items-center justify-center"
        >
          Let's Play!
        </motion.button>
      </motion.div>

      {/* 3. FOOTER INFO & COPYRIGHT NOTICES */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="relative z-10 w-full flex flex-col items-center gap-3 text-center text-slate-400 font-sans text-[11px] sm:text-xs pt-4"
      >
        <div className="flex flex-col items-center gap-0.5 max-w-xl text-slate-400/80 leading-relaxed font-mono text-[10px] sm:text-[11px]">
          <p>© 2026 EFERQ. All rights reserved.</p>
          <p>The use certain player names, images, and likenesses on a collective basis is authorised by KONAMI.</p>
          <p className="text-slate-400 underline decoration-slate-600">https://www.youtube.com/@eferq</p>
        </div>

        <div className="w-full flex justify-between items-center text-slate-400 font-mono text-[11px] sm:text-xs pt-2 border-t border-white/5">
          <span className="font-bold text-slate-300">Version 1.01.00 Data Pack 10.00</span>
          <span>©2020 Konami Digital Entertainment</span>
        </div>
      </motion.div>
    </div>
  );
};
