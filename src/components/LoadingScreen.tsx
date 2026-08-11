import React, { useEffect, useState } from 'react';
import { Shield, Sparkles, Activity } from 'lucide-react';

interface LoadingScreenProps {
  onComplete?: () => void;
  durationMs?: number;
}

const TIPS = [
  "Match Centre: Gunakan tombol Space atau K untuk melepaskan tembakan presisi!",
  "Co-Op Arena: Mode 2vBOT mendukung 2 pemain lokal melawan tim AI musuh!",
  "HP Controller: Hubungkan smartphone dengan scan QR Code secara cepat!",
  "Audio & Haptics: Dukungan penuh untuk joystick USB Plug & Play."
];

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  onComplete,
  durationMs = 1500
}) => {
  const [progress, setProgress] = useState(0);
  const [tipIndex, setTipIndex] = useState(0);

  useEffect(() => {
    setTipIndex(Math.floor(Math.random() * TIPS.length));

    const intervalTime = 25;
    const increment = (100 / (durationMs / intervalTime));

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 150);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [durationMs, onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-[#090C10] text-white flex flex-col items-center justify-between p-6 select-none font-['Inter',sans-serif]">
      {/* Top Header Pill */}
      <div className="w-full flex justify-between items-center max-w-lg pt-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
            <Shield className="w-4 h-4" />
          </div>
          <span className="text-xs font-black tracking-wider text-slate-200 uppercase font-['Plus_Jakarta_Sans',sans-serif]">
            SOCCER MATCH CENTRE
          </span>
        </div>
        <div className="badge-blue-pill px-3.5 py-1 text-[11px] flex items-center gap-1.5 shadow-lg shadow-blue-500/20">
          <Activity className="w-3 h-3 text-white" />
          <span>BROADCAST V1.5</span>
        </div>
      </div>

      {/* Center Spotlight & Crest */}
      <div className="my-auto flex flex-col items-center gap-8 text-center max-w-sm">
        {/* Glowing Crest Container */}
        <div className="relative flex items-center justify-center">
          {/* Radial Blue Backdrop Glow */}
          <div className="absolute w-44 h-44 bg-blue-600/20 rounded-full blur-2xl animate-pulse-slow" />
          
          <div className="relative w-28 h-28 rounded-3xl bg-[#121721] border-2 border-[#1E2638] flex flex-col items-center justify-center shadow-2xl shadow-blue-900/40">
            <span className="text-5xl">⚽</span>
            <div className="absolute -bottom-2 bg-blue-600 text-[9px] font-black tracking-widest px-2.5 py-0.5 rounded-full uppercase border border-blue-400">
              NEXT-GEN
            </div>
          </div>
        </div>

        {/* Status Text & Progress */}
        <div className="w-full flex flex-col items-center gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-black tracking-tight text-white font-['Plus_Jakarta_Sans',sans-serif]">
              {progress < 40
                ? 'INITIALIZING MATCH CENTRE'
                : progress < 80
                ? 'LOADING STADIUM ENGINE'
                : 'READY FOR KICK-OFF'}
            </h2>
            <p className="text-xs text-slate-400 font-medium">
              Connecting PeerJS Telemetry & Controller Mapping
            </p>
          </div>

          {/* Progress Bar Container */}
          <div className="w-full max-w-xs flex flex-col gap-2 mt-2">
            <div className="w-full h-3 bg-[#121721] border border-[#1E2638] rounded-full p-0.5 relative overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 rounded-full transition-all duration-75 shadow-sm shadow-blue-500/50"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between items-center px-1 text-[11px] font-bold text-slate-400">
              <span className="tracking-wider">STATUS: LOADING</span>
              <span className="font-mono text-blue-400 font-extrabold">{Math.round(progress)}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Broadcast Banner */}
      <div className="w-full max-w-lg bg-[#121721] border border-[#1E2638] rounded-2xl p-4 text-center shadow-xl">
        <p className="text-xs text-slate-300 font-semibold leading-relaxed">
          {TIPS[tipIndex]}
        </p>
      </div>
    </div>
  );
};
