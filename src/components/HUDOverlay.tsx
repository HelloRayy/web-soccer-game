import React, { useState, useEffect } from 'react';
import { MatchRulesState, RadarData, OffScreenBallData } from '../types/game';
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
  radarData?: RadarData | null;
  offScreenBall?: OffScreenBallData | null;
  isGoalShaking?: boolean;
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
  radarData = null,
  offScreenBall = null,
  isGoalShaking = false,
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

      {/* Top-Right Discrete Utility Quick-Bar */}
      <div className="fixed top-4 right-4 z-40 flex items-center gap-2 pointer-events-auto">
        {/* Mobile Controller QR Code Button */}
        <button
          onClick={() => setIsQRModalOpen(true)}
          className={`glass-card h-10 px-3 rounded-xl border transition cursor-pointer shadow-xl flex items-center gap-1.5 font-mono text-xs font-bold ${
            isPeerConnected
              ? 'border-emerald-500/80 bg-emerald-950/80 text-emerald-300'
              : 'border-cyan-500/40 bg-[#0b0f0c]/90 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950'
          }`}
          title="Hubungkan HP sebagai Gamepad"
        >
          <Smartphone className="w-4 h-4" />
          <span className="hidden md:inline">{isPeerConnected ? 'HP Connected' : 'HP'}</span>
        </button>

        {/* Fullscreen Button */}
        <button
          onClick={toggleBrowserFullscreen}
          className="glass-card w-10 h-10 rounded-xl border border-emerald-500/40 bg-[#0b0f0c]/90 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 transition cursor-pointer shadow-xl flex items-center justify-center"
          title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
        >
          {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
        </button>

        {/* HUD Toggle Button */}
        <button
          onClick={onToggleHUD}
          className="glass-card w-10 h-10 rounded-xl border border-slate-700/80 bg-[#0b0f0c]/90 text-slate-300 hover:text-cyan-400 transition cursor-pointer shadow-xl flex items-center justify-center"
          title={showHUD ? 'Sembunyikan HUD' : 'Tampilkan HUD'}
        >
          {showHUD ? <EyeOff className="w-4 h-4 text-cyan-400" /> : <Eye className="w-4 h-4 text-slate-400" />}
        </button>

        {/* Return to Lobby Button */}
        {onReturnToLobby && (
          <button
            onClick={onReturnToLobby}
            className="glass-card w-10 h-10 rounded-xl border border-amber-500/40 bg-[#0b0f0c]/90 text-amber-400 hover:bg-amber-500 hover:text-slate-950 transition cursor-pointer shadow-xl flex items-center justify-center"
            title="Kembali ke Lobby"
          >
            <Home className="w-4 h-4" />
          </button>
        )}

        {/* Reset Match Button */}
        <button
          onClick={onResetMatch}
          className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 hover:brightness-110 text-slate-950 font-bold rounded-xl shadow-xl transition cursor-pointer flex items-center justify-center"
          title="Reset Match"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* Centered Top Scoreboard (Clean Broadcast Banner) */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-40 pointer-events-none flex flex-col items-center gap-2">
        <div className="bg-[#0b0f0c]/95 border-2 border-emerald-500/40 px-6 py-2 rounded-2xl shadow-2xl flex flex-col items-center gap-0.5 font-sans min-w-[140px] backdrop-blur-xl pointer-events-auto">
          {/* Top Row: Score (Red - Dash - Blue) */}
          <div className="flex items-center gap-3 text-2xl font-black tracking-tight leading-none">
            <span className="text-[#ef4444] drop-shadow-sm">{matchState.scoreHome}</span>
            <span className="text-slate-300 font-bold text-xs">VS</span>
            <span className="text-[#60a5fa] drop-shadow-sm">{matchState.scoreAway}</span>
          </div>

          {/* Middle Row: 3 Goal Dots for Home & Away Teams */}
          <div className="flex items-center gap-2 mt-0.5">
            <div className="flex items-center gap-1">
              {[1, 2, 3].map((num) => (
                <span
                  key={`home-dot-${num}`}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    matchState.scoreHome >= num
                      ? 'bg-[#ef4444] shadow-sm shadow-red-500/80 scale-110'
                      : 'bg-[#374151]'
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3].map((num) => (
                <span
                  key={`away-dot-${num}`}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    matchState.scoreAway >= num
                      ? 'bg-[#60a5fa] shadow-sm shadow-blue-500/80 scale-110'
                      : 'bg-[#374151]'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Bottom Row: Match Timer */}
          <div className="text-emerald-400 text-xs font-black tracking-wider font-mono mt-0.5">
            ⏱️ {formatTime(matchState.timerSeconds)}
          </div>
        </div>

      </div>

      {/* Bottom-Left Keyboard Controls & Telemetry Legend */}
      {showHUD && (
        <div className="fixed bottom-3 left-4 z-30 pointer-events-auto flex flex-col gap-1 max-w-[280px]">
          {matchState.debugInputText && !matchState.debugInputText.includes('Menunggu') && (
            <div className="bg-[#0b0f0c]/90 border border-cyan-500/50 px-2.5 py-1 rounded-lg text-cyan-300 font-mono text-[10px] font-bold backdrop-blur-md flex items-center gap-1.5 shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="truncate">{matchState.debugInputText}</span>
            </div>
          )}

          {/* Keyboard Controls Quick Legend */}
          <div className="bg-[#0b0f0c]/85 border border-slate-800/90 rounded-lg px-2.5 py-1.5 font-mono text-[10px] text-slate-300 flex flex-wrap items-center gap-1.5 shadow-lg backdrop-blur-md">
            <span className="text-cyan-400 font-bold">⌨️</span>
            <span><strong className="text-emerald-400">WASD</strong> Lari</span>
            <span>•</span>
            <span><strong className="text-emerald-400">J</strong> Umpan</span>
            <span>•</span>
            <span><strong className="text-cyan-400">K</strong> Tembak</span>
            <span>•</span>
            <span><strong className="text-amber-400">L</strong> Terobos</span>
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

      {/* Goal Camera Shake & Screen Flash Edge Vignette */}
      {(isGoalShaking || goalBannerText) && (
        <div className="fixed inset-0 z-40 pointer-events-none border-[10px] border-emerald-400/50 shadow-[inset_0_0_80px_rgba(16,185,129,0.5)] animate-pulse transition-all duration-150" />
      )}

      {/* Off-Screen Ball Directional Indicator Arrow Badge */}
      {offScreenBall && offScreenBall.isOffScreen && (
        <div
          className="fixed z-50 pointer-events-none transition-all duration-75"
          style={{
            left: `${offScreenBall.edgeX}px`,
            top: `${offScreenBall.edgeY}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="flex items-center gap-1.5 bg-[#050b14]/95 border-2 border-cyan-400/90 text-cyan-300 px-3 py-1 rounded-full shadow-2xl backdrop-blur-xl animate-pulse">
            <span
              className="inline-block text-xs font-black text-cyan-400 transition-transform"
              style={{ transform: `rotate(${offScreenBall.angle}rad)` }}
            >
              ➔
            </span>
            <span className="text-xs">⚽</span>
            <span className="font-mono text-[11px] font-extrabold text-white tracking-wide">
              {offScreenBall.distanceMeters}m
            </span>
          </div>
        </div>
      )}

      {/* Real-time Field Mini-Map Radar HUD (Bottom Center) */}
      {showHUD && radarData && (
        <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex flex-col items-center">
          <div className="bg-[#050b14]/85 border border-emerald-500/40 rounded-2xl p-1.5 shadow-2xl backdrop-blur-md w-[220px] h-[135px] sm:w-[250px] sm:h-[154px] flex flex-col pointer-events-auto">
            <div className="flex items-center justify-between px-1.5 py-0.5 text-[9px] font-mono font-bold text-emerald-400/80 leading-none">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                RADAR PITCH
              </span>
              <span className="text-slate-400 text-[8px]">2200x1350</span>
            </div>

            <div className="relative w-full flex-1 rounded-xl overflow-hidden border border-emerald-500/20 bg-[#041f18]/90">
              <svg viewBox="0 0 2200 1350" className="w-full h-full block">
                {/* Playable Outer Boundary */}
                <rect
                  x="154"
                  y="108"
                  width="1892"
                  height="1134"
                  fill="#062920"
                  stroke="rgba(52, 211, 153, 0.45)"
                  strokeWidth="14"
                  rx="20"
                />

                {/* Center Line & Center Circle */}
                <line x1="1100" y1="108" x2="1100" y2="1242" stroke="rgba(52, 211, 153, 0.35)" strokeWidth="12" />
                <circle cx="1100" cy="675" r="230" fill="none" stroke="rgba(52, 211, 153, 0.35)" strokeWidth="12" />
                <circle cx="1100" cy="675" r="28" fill="rgba(52, 211, 153, 0.6)" />

                {/* Penalty Boxes */}
                <rect x="154" y="378" width="374" height="594" fill="none" stroke="rgba(52, 211, 153, 0.35)" strokeWidth="12" />
                <rect x="1672" y="378" width="374" height="594" fill="none" stroke="rgba(52, 211, 153, 0.35)" strokeWidth="12" />

                {/* Goal Post Mouths */}
                <rect x="90" y="460" width="64" height="430" fill="rgba(6, 182, 212, 0.35)" stroke="#06b6d4" strokeWidth="10" />
                <rect x="2046" y="460" width="64" height="430" fill="rgba(245, 158, 11, 0.35)" stroke="#f59e0b" strokeWidth="10" />

                {/* Camera Viewport Frustum Box */}
                {(() => {
                  const camW = radarData.camera.viewWidth / radarData.camera.zoom;
                  const camH = radarData.camera.viewHeight / radarData.camera.zoom;
                  const camX = radarData.camera.x - camW / 2;
                  const camY = radarData.camera.y - camH / 2;
                  return (
                    <rect
                      x={camX}
                      y={camY}
                      width={camW}
                      height={camH}
                      fill="rgba(255, 255, 255, 0.08)"
                      stroke="#ffffff"
                      strokeWidth="14"
                      strokeDasharray="36 24"
                      rx="35"
                    />
                  );
                })()}

                {/* Players */}
                {radarData.players.map((p) => {
                  const isHome = p.team === 'home';
                  const dotColor = p.color || (isHome ? '#00f2fe' : '#fbbf24');
                  return (
                    <g key={p.id}>
                      {p.hasPossession && (
                        <circle cx={p.x} cy={p.y} r="85" fill="none" stroke="#10b981" strokeWidth="16" opacity="0.8" />
                      )}
                      {p.isActiveUser && (
                        <polygon
                          points={`${p.x},${p.y - 75} ${p.x - 35},${p.y - 125} ${p.x + 35},${p.y - 125}`}
                          fill={dotColor}
                          stroke="#000000"
                          strokeWidth="10"
                        />
                      )}
                      <circle cx={p.x} cy={p.y} r="50" fill={dotColor} stroke="#000000" strokeWidth="12" />
                    </g>
                  );
                })}

                {/* Ball */}
                <g>
                  <circle cx={radarData.ball.x} cy={radarData.ball.y} r="75" fill="rgba(255, 255, 255, 0.45)" />
                  <circle cx={radarData.ball.x} cy={radarData.ball.y} r="42" fill="#ffffff" stroke="#000000" strokeWidth="10" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
