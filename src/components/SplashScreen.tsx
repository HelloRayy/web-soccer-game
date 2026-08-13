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
      className="relative w-screen h-screen bg-[#2B4CDE] text-white flex flex-col justify-between p-6 sm:p-10 select-none overflow-hidden font-['Poppins',sans-serif] cursor-pointer"
    >
      {/* PES 2021 RED ACCENT PATTERNS IN CORNERS (Presisi Gambar Acuan 1) */}
      <div className="absolute top-0 left-0 w-44 h-44 bg-[#D90429] clip-path-polygon opacity-90 pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-52 h-52 bg-[#D90429] opacity-80 pointer-events-none z-0" />

      {/* EFOOTBALL WATERMARK WAVE VECTOR BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:40px_40px] opacity-15 pointer-events-none z-0" />

      {/* CENTER EYE UNIFIED CLUSTER (Presisi Gambar Acuan 1 PES 2021) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="relative z-10 my-auto w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center gap-6 sm:gap-7"
      >
        {/* 1. Logo Branding: eFootball PES 2021 / PES 26 */}
        <div className="flex flex-col items-center gap-0.5">
          <span className="text-xs font-semibold text-white/90 tracking-widest uppercase">eFootball</span>
          <h1 className="text-3xl sm:text-4xl font-black italic tracking-tighter text-white font-['Outfit',sans-serif] uppercase drop-shadow-md">
            PES<span className="text-white">2021</span>
          </h1>
        </div>

        {/* 2. Main Headline: THE CLUB IS YOURS */}
        <h2 className="text-5xl sm:text-7xl lg:text-[84px] font-black tracking-tight text-white font-['Outfit',sans-serif] uppercase leading-[0.95] drop-shadow-2xl">
          THE CLUB <br />
          <span className="text-white">IS YOURS</span>
        </h2>

        {/* 3. VIBRANT RED PILL BUTTON: Press Any Button (Presisi Gambar Acuan 1) */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.stopPropagation();
            onStartGame();
          }}
          className="mt-2 px-9 py-2.5 bg-[#D90429] hover:bg-[#F20530] text-white font-bold text-sm sm:text-base tracking-wide rounded-full shadow-xl shadow-red-900/40 transition cursor-pointer flex items-center justify-center"
        >
          Press Any Button
        </motion.button>

        {/* 4. Copyright Block directly under Button */}
        <div className="flex flex-col items-center gap-0.5 max-w-xl text-white/80 font-sans text-[10px] sm:text-[11px] leading-relaxed pt-2">
          <p>©2026 EFERQ. All rights reserved.</p>
          <p>The use certain player names, images, and likenesses on a collective basis is authorised by KONAMI.</p>
        </div>
      </motion.div>

      {/* BOTTOM-MOST ROW: Version (Left) & Konami Legal Notice (Right) */}
      <div className="relative z-10 w-full flex justify-between items-center text-white/90 font-sans text-[11px] sm:text-xs pt-4 border-t border-white/20 px-2 sm:px-4">
        <span className="font-semibold">Version 1.01.00 Data Pack 10.00</span>
        <span>©2020 Konami Digital Entertainment</span>
      </div>
    </div>
  );
};
