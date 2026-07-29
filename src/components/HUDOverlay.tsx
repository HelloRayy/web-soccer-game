import React, { useState, useEffect } from 'react';
import { MatchRulesState } from '../types/game';
import { Maximize, Minimize, RotateCcw, Eye, EyeOff, Smartphone } from 'lucide-react';
import { QRCodeModal } from './QRCodeModal';

interface HUDOverlayProps {
  matchState: MatchRulesState;
  showHUD: boolean;
  onToggleHUD: () => void;
  onResetMatch: () => void;
  onToggleMode: (mode: '1v1_local' | '2v2_coop') => void;
  peerRoomId?: string;
  isPeerConnected?: boolean;
}

export const HUDOverlay: React.FC<HUDOverlayProps> = ({
  matchState,
  showHUD,
  onToggleHUD,
  onResetMatch,
  peerRoomId = '8492',
  isPeerConnected = false,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleBrowserFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.warn('Fullscreen request failed:', err);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch((err) => {
          console.warn('Exit fullscreen failed:', err);
        });
      }
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
      {/* QR Code Connection Modal */}
      <QRCodeModal
        isOpen={isQRModalOpen}
        onClose={() => setIsQRModalOpen(false)}
        roomId={peerRoomId}
        isConnected={isPeerConnected}
      />

      <div className="fixed top-4 left-0 right-0 z-40 pointer-events-none flex flex-col items-center gap-3 px-4">
        {/* Centered Top Floating Control & Score Bar */}
        <div className="flex items-center justify-center gap-3 pointer-events-auto">
          {/* Mobile Controller QR Code Modal Toggle Button */}
          <button
            onClick={() => setIsQRModalOpen(true)}
            className={`glass-card h-11 px-3.5 rounded-2xl border transition cursor-pointer shadow-2xl flex items-center gap-2 font-mono text-xs font-bold ${
              isPeerConnected
                ? 'border-emerald-500/80 bg-emerald-950/80 text-emerald-300'
                : 'border-cyan-500/40 bg-[#0b0f0c]/90 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950'
            }`}
            title="Hubungkan HP sebagai Gamepad"
          >
            <Smartphone className="w-5 h-5" />
            <span className="hidden sm:inline">{isPeerConnected ? 'HP Connected' : 'Connect HP'}</span>
          </button>

          {/* Fullscreen SVG Icon Button */}
          <button
            onClick={toggleBrowserFullscreen}
            className="glass-card w-11 h-11 rounded-2xl border border-emerald-500/40 bg-[#0b0f0c]/90 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 transition cursor-pointer shadow-2xl flex items-center justify-center"
            title={isFullscreen ? 'Exit Fullscreen' : 'Layar Penuh (Fullscreen)'}
          >
            {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
          </button>

          {/* HUD Debug Overlay Toggle SVG Icon Button */}
          <button
            onClick={onToggleHUD}
            className="glass-card w-11 h-11 rounded-2xl border border-slate-700/80 bg-[#0b0f0c]/90 text-slate-200 hover:text-cyan-400 hover:border-cyan-500/50 transition cursor-pointer shadow-2xl flex items-center justify-center"
            title={showHUD ? 'Sembunyikan HUD Debug' : 'Tampilkan HUD Debug'}
          >
            {showHUD ? <EyeOff className="w-5 h-5 text-cyan-400" /> : <Eye className="w-5 h-5 text-slate-400" />}
          </button>

          {/* Center Sleek Scoreboard Badge (Matching Figma Reference Image) */}
          <div className="bg-[#0b0f0c] border border-slate-800/90 px-6 py-2.5 rounded-[22px] shadow-2xl flex flex-col items-center gap-1 font-sans min-w-[130px] border-emerald-500/20 backdrop-blur-md">
            {/* Top Row: Score (Red - White Dash - Blue) */}
            <div className="flex items-center gap-3 text-2xl font-black tracking-tight leading-none">
              <span className="text-[#ef4444]">{matchState.scoreHome}</span>
              <span className="text-slate-100 font-bold text-sm">-</span>
              <span className="text-[#60a5fa]">{matchState.scoreAway}</span>
            </div>

            {/* Middle Row: 3 Goal Dots for Home & Away Teams */}
            <div className="flex items-center gap-2 mt-0.5">
              {/* Home Team Goal Dots (Red) */}
              <div className="flex items-center gap-1">
                {[1, 2, 3].map((num) => (
                  <span
                    key={`home-dot-${num}`}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      matchState.scoreHome >= num
                        ? 'bg-[#ef4444] shadow-sm shadow-red-500/80 scale-105'
                        : 'bg-[#374151]'
                    }`}
                  />
                ))}
              </div>

              {/* Away Team Goal Dots (Blue) */}
              <div className="flex items-center gap-1">
                {[1, 2, 3].map((num) => (
                  <span
                    key={`away-dot-${num}`}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      matchState.scoreAway >= num
                        ? 'bg-[#60a5fa] shadow-sm shadow-blue-500/80 scale-105'
                        : 'bg-[#374151]'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Bottom Row: Clean Timer */}
            <div className="text-slate-100 text-xs font-bold tracking-wider font-mono mt-0.5">
              {formatTime(matchState.timerSeconds)}
            </div>
          </div>

          {/* Reset Match SVG Icon Button */}
          <button
            onClick={onResetMatch}
            className="w-11 h-11 bg-gradient-to-r from-emerald-500 to-teal-500 hover:brightness-110 text-slate-950 font-bold rounded-2xl shadow-2xl transition cursor-pointer flex items-center justify-center"
            title="Reset Match"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>

        {/* High-Contrast Clear Live Debug Input Text Banner */}
        {showHUD && (
          <div className="max-w-xl w-full flex flex-col gap-2 mt-1 pointer-events-auto animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="bg-slate-900/95 border-2 border-cyan-400/80 rounded-xl px-5 py-2.5 font-mono text-xs text-cyan-300 flex items-center justify-between shadow-2xl backdrop-blur-xl">
              <span className="font-extrabold tracking-wide">
                ⚡ [LIVE INPUT]:{' '}
                <span className="text-emerald-300 font-bold bg-slate-950 border border-emerald-500/50 px-2.5 py-0.5 rounded-md ml-1 shadow-inner">
                  {matchState.debugInputText || 'Menunggu Tombol Controller...'}
                </span>
              </span>
              <span className="text-slate-400 text-[11px] font-semibold">
                {isPeerConnected ? '📱 HP Remote Connected!' : 'P1 Ctrl 0 | P2 Teammate'}
              </span>
            </div>

            <div className="bg-slate-900/90 border border-slate-700/80 rounded-xl px-4 py-1.5 font-mono text-[11px] text-slate-300 flex items-center justify-between shadow-xl backdrop-blur-md">
              <span className="font-semibold text-slate-200">[LOG]: {matchState.logMessage}</span>
              <span className="text-amber-400 font-bold">RB/R1/LB = ReqPass | Start = HUD</span>
            </div>
          </div>
        )}

        {/* Game Over Modal */}
        {matchState.state === 'GAME_OVER' && (
          <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-lg z-50 flex items-center justify-center p-4 pointer-events-auto">
            <div className="glass-card max-w-md w-full p-8 rounded-2xl border-2 border-emerald-500/50 text-center flex flex-col items-center gap-5 shadow-2xl animate-in fade-in zoom-in duration-200">
              <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/50 rounded-full flex items-center justify-center text-3xl shadow-lg">
                ⚽
              </div>

              <h2 className="text-2xl font-extrabold text-slate-100 tracking-tight">GAME OVER</h2>
              <p className="text-lg font-bold text-emerald-400 font-mono">{matchState.winnerTitle}</p>

              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 w-full text-center font-mono text-sm">
                <div className="text-slate-500 text-xs font-bold">TOTAL GOALS SCORED</div>
                <div className="text-cyan-400 font-extrabold text-3xl mt-1">{matchState.scoreHome}</div>
              </div>

              <button
                onClick={onResetMatch}
                className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-extrabold rounded-xl text-sm shadow-xl hover:brightness-110 transition cursor-pointer"
              >
                🎮 Reset Arena
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
