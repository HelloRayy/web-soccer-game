import React, { useState, useEffect } from 'react';
import { MatchRulesState } from '../types/game';
import { Maximize, Minimize, RotateCcw, Eye, EyeOff, Smartphone, Home } from 'lucide-react';
import { QRCodeModal } from './QRCodeModal';

interface HUDOverlayProps {
  matchState: MatchRulesState;
  showHUD: boolean;
  onToggleHUD: () => void;
  onResetMatch: () => void;
  onToggleMode: (mode: '1v1_local' | '2v2_coop') => void;
  onReturnToLobby?: () => void;
  peerRoomId?: string;
  isPeerConnected?: boolean;
  goalBannerText?: string | null;
}

export const HUDOverlay: React.FC<HUDOverlayProps> = ({
  matchState,
  showHUD,
  onToggleHUD,
  onResetMatch,
  onReturnToLobby,
  peerRoomId = '8492',
  isPeerConnected = false,
  goalBannerText = null,
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

          {/* Return to Lobby Button */}
          {onReturnToLobby && (
            <button
              onClick={onReturnToLobby}
              className="glass-card w-11 h-11 rounded-2xl border border-amber-500/40 bg-[#0b0f0c]/90 text-amber-400 hover:bg-amber-500 hover:text-slate-950 transition cursor-pointer shadow-2xl flex items-center justify-center"
              title="Kembali ke Lobby"
            >
              <Home className="w-5 h-5" />
            </button>
          )}

          {/* Reset Match SVG Icon Button */}
          <button
            onClick={onResetMatch}
            className="w-11 h-11 bg-gradient-to-r from-emerald-500 to-teal-500 hover:brightness-110 text-slate-950 font-bold rounded-2xl shadow-2xl transition cursor-pointer flex items-center justify-center"
            title="Reset Match"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>

        {/* Compact Neon Text Pill Live Input Banner (Autohide / Shrink on Idle) */}
        {showHUD && (
          <div className="flex flex-col items-center gap-1.5 mt-0.5 pointer-events-auto transition-all duration-200">
            {matchState.debugInputText && !matchState.debugInputText.includes('Menunggu') ? (
              /* Active Input Glow Badge */
              <div className="bg-[#0b0f0c]/95 border-2 border-cyan-400/90 px-4 py-1.5 rounded-full text-cyan-300 font-mono text-xs font-extrabold tracking-wide backdrop-blur-xl transition-all duration-150 flex items-center gap-2 shadow-2xl shadow-cyan-500/30 animate-in fade-in zoom-in-95">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400 animate-pulse" />
                <span className="text-emerald-300 font-bold bg-slate-950/90 border border-emerald-500/60 px-3 py-0.5 rounded-lg shadow-inner">
                  {matchState.debugInputText}
                </span>
                <span className="text-slate-400 text-[10px] font-semibold ml-1">
                  {isPeerConnected ? '📱 HP Remote' : '🎮 Xbox Ctrl'}
                </span>
              </div>
            ) : (
              /* Idle Subtle Ready Pill */
              <div className="bg-[#0b0f0c]/60 border border-slate-800/80 px-3 py-0.5 rounded-full text-slate-500 font-mono text-[11px] font-medium tracking-wider backdrop-blur-md transition-all duration-300 flex items-center gap-1.5 shadow-sm opacity-75 hover:opacity-100">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60" />
                <span>[READY]</span>
              </div>
            )}

            {/* Sub-log Bar */}
            {matchState.logMessage && (
              <div className="bg-[#0b0f0c]/80 border border-slate-800/90 rounded-lg px-3 py-0.5 font-mono text-[10px] text-slate-400 flex items-center gap-3 shadow-md backdrop-blur-md">
                <span className="font-medium text-slate-300">[LOG]: {matchState.logMessage}</span>
                <span className="text-amber-400/90 font-semibold hidden sm:inline">RB/R1/LB = ReqPass</span>
              </div>
            )}

            {/* Keyboard Controls Quick Legend */}
            <div className="bg-[#0b0f0c]/85 border border-slate-800/90 rounded-lg px-3 py-0.5 font-mono text-[10px] text-slate-300 flex flex-wrap items-center justify-center gap-2 shadow-md backdrop-blur-md">
              <span className="text-cyan-400 font-bold flex items-center gap-1">⌨️ Keyboard:</span>
              <span><strong className="text-emerald-400">WASD</strong> Move</span>
              <span>•</span>
              <span><strong className="text-emerald-400">J</strong> Pass</span>
              <span>•</span>
              <span><strong className="text-cyan-400">K</strong> Shoot</span>
              <span>•</span>
              <span><strong className="text-amber-400">L</strong> Through</span>
              <span>•</span>
              <span><strong className="text-teal-400">Shift</strong> Sprint</span>
            </div>
          </div>
        )}

        {/* 2-Second Goal Celebration Banner Overlay */}
        {goalBannerText && (
          <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center p-4">
            <div className="bg-[#0b0f0c]/95 border-4 border-emerald-400 px-10 py-6 rounded-3xl shadow-2xl backdrop-blur-2xl flex flex-col items-center gap-2 animate-in zoom-in-75 duration-200">
              <span className="text-6xl animate-bounce">⚽</span>
              <span className="text-3xl font-black text-emerald-400 font-mono tracking-wider drop-shadow-xl">
                {goalBannerText}
              </span>
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

              <h2 className="text-2xl font-extrabold text-slate-100 tracking-tight">FULL TIME - GAME OVER</h2>
              <p className="text-lg font-bold text-emerald-400 font-mono">{matchState.winnerTitle}</p>

              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 w-full text-center font-mono text-sm">
                <div className="text-slate-500 text-xs font-bold mb-1.5">SKOR AKHIR PERTANDINGAN</div>
                <div className="text-3xl font-black tracking-wider flex items-center justify-center gap-4">
                  <span className="text-red-500">{matchState.scoreHome}</span>
                  <span className="text-slate-400">-</span>
                  <span className="text-blue-400">{matchState.scoreAway}</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 w-full">
                <button
                  onClick={onResetMatch}
                  className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-extrabold rounded-xl text-sm shadow-xl hover:brightness-110 transition cursor-pointer"
                >
                  🎮 Main Lagi
                </button>
                {onReturnToLobby && (
                  <button
                    onClick={onReturnToLobby}
                    className="w-full py-3 bg-slate-900 border border-slate-700 text-slate-200 font-extrabold rounded-xl text-sm shadow-xl hover:bg-slate-800 transition cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Home className="w-4 h-4 text-amber-400" />
                    <span>Kembali ke Lobby</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
