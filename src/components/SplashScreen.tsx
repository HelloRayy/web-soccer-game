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
      className="relative w-screen h-screen bg-[#070b0e] text-[#E2F1F8] flex flex-col justify-between p-6 sm:p-10 select-none overflow-hidden font-['Poppins',sans-serif] cursor-pointer"
    >
      {/* VIBRANT MESH BACKGROUND GRADIENT BLOBS */}
      <div className="absolute top-1/4 -left-24 w-[650px] h-[650px] bg-gradient-to-br from-[#10E894]/35 via-[#00E676]/20 to-transparent rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 -right-24 w-[650px] h-[650px] bg-gradient-to-tl from-[#00E676]/30 via-[#17FFBF]/20 to-transparent rounded-full blur-[140px] pointer-events-none z-0" />

      {/* WAVE LINE OVERLAY TEXTURE */}
      <div className="absolute inset-0 bg-[radial-gradient(#17FFBF_1px,transparent_1px)] [background-size:36px_36px] opacity-10 pointer-events-none z-0" />

      {/* CENTER EYE UNIFIED CLUSTER */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="relative z-10 my-auto w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center gap-6 sm:gap-7"
      >
        {/* 1. Logo Branding: PES 26 */}
        <h1 className="text-3xl sm:text-4xl font-black italic tracking-tighter text-white font-['Outfit',sans-serif] uppercase drop-shadow-md">
          PES<span className="text-[#17FFBF]">26</span>
        </h1>

        {/* 2. Main Headline: THE CLUB IS YOURS */}
        <h2 className="text-5xl sm:text-7xl lg:text-[84px] font-black tracking-tight text-white font-['Outfit',sans-serif] uppercase leading-[0.95] drop-shadow-2xl">
          THE CLUB <br />
          <span className="text-[#17FFBF]">IS YOURS</span>
        </h2>

        {/* 3. Sleek Button: Let's Play! */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.stopPropagation();
            onStartGame();
          }}
          className="mt-2 px-9 py-2.5 bg-[#17FFBF] hover:bg-[#4BFFCE] text-[#05090C] font-bold text-sm sm:text-base tracking-wide rounded-full shadow-xl shadow-[#17FFBF]/20 transition cursor-pointer flex items-center justify-center"
        >
          Let's Play!
        </motion.button>

        {/* 4. Copyright Block directly under Button */}
        <div className="flex flex-col items-center gap-0.5 max-w-xl text-slate-400 font-sans text-[10px] sm:text-[11px] leading-relaxed pt-2">
          <p>©2026 EFERQ. All rights reserved.</p>
          <p>The use certain player names, images, and likenesses on a collective basis is authorised by KONAMI.</p>
        </div>
      </motion.div>

      {/* BOTTOM-MOST ROW: Version (Left) & Konami Legal Notice (Right) */}
      <div className="relative z-10 w-full flex justify-between items-center text-slate-400 font-mono text-[11px] sm:text-xs pt-4 border-t border-white/10 px-2 sm:px-4">
        <span className="font-semibold">Version 1.01.00 Data Pack 10.00</span>
        <span>©2020 Konami Digital Entertainment</span>
      </div>
    </div>
  );
};
