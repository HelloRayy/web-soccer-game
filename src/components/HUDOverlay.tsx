import React, { useState, useEffect } from 'react';
import { MatchRulesState, RadarData, OffScreenBallData, ActivePlayerData, ArcadeCallout } from '../types/game';
import { Maximize, Minimize, RotateCcw, Eye, EyeOff, Smartphone, Home, Tv } from 'lucide-react';
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
  whistleBannerText?: string | null;
  onResumeSecondHalf?: () => void;
  activePlayer?: ActivePlayerData | null;
  arcadeCallouts?: ArcadeCallout[];
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
  whistleBannerText = null,
  onResumeSecondHalf,
  activePlayer = null,
  arcadeCallouts = [],
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isCRTFilterActive, setIsCRTFilterActive] = useState(false);
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
      {/* Retro CRT Scanlines & TV Vignette Overlay */}
      {isCRTFilterActive && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.32)_50%)] bg-[length:100%_4px] opacity-40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_60%,rgba(0,0,0,0.50)_100%)]" />
        </div>
      )}

      {/* Top-Right Discrete Utility Quick-Bar */}
      <div className="fixed top-4 right-4 z-40 flex items-center gap-2 pointer-events-auto">
        {/* CRT Filter Toggle */}
        <button
          onClick={() => setIsCRTFilterActive((prev) => !prev)}
          className={`glass-card h-10 px-2.5 rounded-xl border transition cursor-pointer shadow-xl flex items-center gap-1 font-mono text-[11px] font-bold ${
            isCRTFilterActive
              ? 'border-amber-400 bg-amber-950/80 text-amber-300 shadow-amber-500/20'
              : 'border-slate-700/80 bg-[#0b0f0c]/90 text-slate-400 hover:text-amber-300'
          }`}
          title="Toggle Filter TV Tabung Retro CRT"
        >
          <Tv className="w-4 h-4" />
          <span className="hidden sm:inline">{isCRTFilterActive ? 'CRT ON' : 'CRT'}</span>
        </button>
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

      {/* Top-Left Authentic Retro Live Broadcast Watermark */}
      <div className="fixed top-4 left-4 z-40 pointer-events-none hidden sm:flex items-center gap-2">
        <div className="bg-[#05090f]/85 border border-slate-800/90 px-3 py-1.5 rounded-xl backdrop-blur-md flex items-center gap-2 text-[10px] font-mono text-slate-300 shadow-xl">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
          <span className="font-black text-slate-100 tracking-wider">RETRO SPORT HD</span>
          <span className="text-slate-600">|</span>
          <span className="text-emerald-400 font-bold">CH-01</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400">60 FPS</span>
        </div>
      </div>

      {/* AUTHENTIC TV BROADCAST SCOREBUG (Console / Champions League Style) */}
      <div className="fixed top-3 left-1/2 -translate-x-1/2 z-40 pointer-events-none flex flex-col items-center">
        {/* Main Score Capsule */}
        <div className="bg-[#070b10]/95 border border-slate-700/80 rounded-2xl shadow-2xl backdrop-blur-2xl flex flex-col items-center overflow-hidden pointer-events-auto min-w-[290px] sm:min-w-[340px]">
          {/* Top Score Row */}
          <div className="flex items-stretch w-full">
            {/* Home Team Tri-code & Crest */}
            <div className="flex-1 flex items-center justify-end gap-2 px-3.5 py-2 bg-gradient-to-l from-red-950/50 to-transparent">
              <span className="font-mono text-xs font-black text-red-300 tracking-wider">HOM</span>
              <div className="w-5 h-5 rounded-full bg-red-600/90 border border-red-400 flex items-center justify-center text-[10px] shadow">
                🛡️
              </div>
            </div>

            {/* Center Digital Score Display */}
            <div className="flex items-center justify-center px-4 py-1 bg-[#03070d] border-x border-slate-800 gap-3 min-w-[90px]">
              <span className="text-2xl font-black font-mono text-white drop-shadow-[0_2px_10px_rgba(239,68,68,0.6)]">
                {matchState.scoreHome}
              </span>
              <span className="text-slate-500 font-bold text-xs">:</span>
              <span className="text-2xl font-black font-mono text-white drop-shadow-[0_2px_10px_rgba(96,165,250,0.6)]">
                {matchState.scoreAway}
              </span>
            </div>

            {/* Away Team Tri-code & Crest */}
            <div className="flex-1 flex items-center justify-start gap-2 px-3.5 py-2 bg-gradient-to-r from-blue-950/50 to-transparent">
              <div className="w-5 h-5 rounded-full bg-blue-600/90 border border-blue-400 flex items-center justify-center text-[10px] shadow">
                ⚡
              </div>
              <span className="font-mono text-xs font-black text-blue-300 tracking-wider">AWY</span>
            </div>
          </div>

          {/* Goal Progression Dots & Period Clock */}
          <div className="w-full flex items-center justify-between px-5 py-1 bg-[#05090f]/90 border-t border-slate-800/70">
            <div className="flex items-center gap-1">
              {[1, 2, 3].map((num) => (
                <span
                  key={`home-dot-${num}`}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    matchState.scoreHome >= num
                      ? 'bg-red-500 shadow-sm shadow-red-500 scale-110'
                      : 'bg-slate-700/60'
                  }`}
                />
              ))}
            </div>
            {/* Live Timer & Period Tag */}
            <div className="flex items-center gap-2 text-[10px] font-mono font-black text-emerald-400">
              <span className="px-1.5 py-0.2 rounded bg-slate-800 text-slate-300 text-[9px] uppercase">
                {matchState.state === 'GOLDEN_GOAL' ? 'GOLDEN GOAL' : matchState.phase === 'PHASE_HALF_TIME' ? 'HT' : matchState.timerSeconds >= 90 ? '2ND' : '1ST'}
              </span>
              <span>⏱️ {formatTime(matchState.timerSeconds)}</span>
              {((matchState.timerSeconds >= 78 && matchState.timerSeconds <= 90) || (matchState.timerSeconds >= 168 && matchState.timerSeconds <= 180)) && (
                <span className="text-amber-300 animate-pulse font-black text-[9px]">+1'</span>
              )}
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3].map((num) => (
                <span
                  key={`away-dot-${num}`}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    matchState.scoreAway >= num
                      ? 'bg-blue-400 shadow-sm shadow-blue-500 scale-110'
                      : 'bg-slate-700/60'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Live Mini Possession Split-Bar */}
          <div className="w-full h-1 bg-slate-800 flex">
            <div
              className="bg-gradient-to-r from-red-600 to-red-400 transition-all duration-300"
              style={{ width: `${matchState.stats.possessionHome}%` }}
              title={`Possession: ${matchState.stats.possessionHome}%`}
            />
            <div
              className="bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300"
              style={{ width: `${matchState.stats.possessionAway}%` }}
              title={`Possession: ${matchState.stats.possessionAway}%`}
            />
          </div>
        </div>
      </div>

      {/* RETRO ARCADE ACTION CALLOUT BANNERS (Retro Goal / Super Sidekicks) */}
      {arcadeCallouts && arcadeCallouts.length > 0 && (
        <div className="fixed top-[72px] left-1/2 -translate-x-1/2 z-40 pointer-events-none flex flex-col items-center">
          {arcadeCallouts.map((callout) => (
            <div
              key={callout.id}
              className={`px-5 py-1.5 rounded-xl shadow-2xl backdrop-blur-xl border-2 flex flex-col items-center animate-in zoom-in-75 slide-in-from-top-1 duration-150 ${
                callout.type === 'save'
                  ? 'bg-amber-950/95 border-amber-400 text-amber-300 shadow-amber-500/30'
                  : callout.type === 'woodwork'
                  ? 'bg-yellow-950/95 border-yellow-400 text-yellow-300 shadow-yellow-500/40'
                  : callout.type === 'chance'
                  ? 'bg-rose-950/95 border-rose-400 text-rose-300 shadow-rose-500/40 animate-pulse'
                  : callout.type === 'tackle'
                  ? 'bg-emerald-950/95 border-emerald-400 text-emerald-300 shadow-emerald-500/30'
                  : callout.type === 'skill'
                  ? 'bg-purple-950/95 border-purple-400 text-purple-300 shadow-purple-500/30'
                  : 'bg-cyan-950/95 border-cyan-400 text-cyan-300 shadow-cyan-500/30'
              }`}
            >
              <div className="font-mono text-xs sm:text-sm font-black tracking-widest uppercase drop-shadow">
                {callout.text}
              </div>
              {callout.subtext && (
                <div className="font-sans text-[10px] font-bold text-slate-300">
                  {callout.subtext}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      {matchState.state === 'GOLDEN_GOAL' && (
        <div className="fixed top-[172px] left-1/2 -translate-x-1/2 z-40 bg-amber-950/90 border-2 border-amber-400 px-5 py-2 rounded-xl shadow-2xl text-amber-300 font-mono text-xs font-black tracking-wider animate-pulse">
          GOLDEN GOAL • NEXT SCORE WINS
        </div>
      )}
      {/* PES / FIFA PRO STYLE ACTIVE PLAYER HUD CARD */}
      {showHUD && activePlayer && (
        <div className="fixed bottom-16 left-4 z-30 pointer-events-auto animate-in slide-in-from-bottom-2 duration-150">
          <div className="bg-[#070b10]/95 border border-slate-700/80 rounded-2xl p-2.5 shadow-2xl backdrop-blur-xl flex items-center gap-3 w-[260px] sm:w-[285px]">
            {/* Pixel Avatar Face */}
            <div className="relative w-11 h-11 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center overflow-hidden shrink-0 shadow-inner">
              <svg viewBox="0 0 24 24" className="w-9 h-9">
                {/* Hair */}
                <rect x="6" y="2" width="12" height="7" rx="2" fill={activePlayer.hairColor} />
                {/* Skin Face */}
                <rect x="7" y="6" width="10" height="9" rx="1" fill={activePlayer.skinColor} />
                {/* Eyes */}
                <rect x="9" y="9" width="2" height="2" fill="#0f172a" />
                <rect x="13" y="9" width="2" height="2" fill="#0f172a" />
                {/* Jersey Collar */}
                <rect x="5" y="15" width="14" height="9" fill={activePlayer.jerseyColor || (activePlayer.team === 'home' ? '#ef4444' : '#3b82f6')} />
                <polygon points="12,15 10,19 14,19" fill="#ffffff" />
              </svg>
              {/* Active Player Squad Number Badge */}
              <span className="absolute bottom-0 right-0 text-[8px] font-black font-mono bg-slate-950/95 px-1 rounded-tl text-cyan-300 border-t border-l border-cyan-500/40">
                #{activePlayer.squadNumber}
              </span>
            </div>

            {/* Player Info & Stamina */}
            <div className="flex-1 flex flex-col gap-1 min-w-0">
              <div className="flex items-center justify-between gap-1">
                <span className="font-mono text-xs font-black text-slate-100 truncate tracking-wide">
                  {activePlayer.name}
                </span>
                <span
                  className={`text-[8px] font-black font-mono px-1.5 py-0.2 rounded border uppercase ${
                    activePlayer.role === 'ST'
                      ? 'bg-red-950/80 border-red-500/60 text-red-300'
                      : activePlayer.role === 'MF'
                      ? 'bg-blue-950/80 border-blue-500/60 text-blue-300'
                      : activePlayer.role === 'DF'
                      ? 'bg-emerald-950/80 border-emerald-500/60 text-emerald-300'
                      : 'bg-amber-950/80 border-amber-500/60 text-amber-300'
                  }`}
                >
                  {activePlayer.role}
                </span>
              </div>

              {/* Dynamic Status / Action Pill */}
              <div className="flex items-center justify-between text-[9px] font-mono">
                <span className="text-slate-400 font-semibold truncate flex items-center gap-1">
                  {activePlayer.isChargingShot ? (
                    <span className="text-amber-400 font-bold animate-pulse">🔥 CHARGING SHOT</span>
                  ) : activePlayer.isTackling ? (
                    <span className="text-cyan-400 font-bold">⚡ SLIDE TACKLE</span>
                  ) : activePlayer.isSprinting ? (
                    <span className="text-teal-300 font-bold">💨 SPRINT</span>
                  ) : activePlayer.hasPossession ? (
                    <span className="text-emerald-400 font-bold">⚽ POSSESSION</span>
                  ) : (
                    <span className="text-slate-400">👟 SUPPORT</span>
                  )}
                </span>
                <span className="text-slate-400 text-[8px] font-mono">
                  {Math.round(activePlayer.stamina * 100)}%
                </span>
              </div>

              {/* Dual-layer Stamina Bar */}
              <div className="w-full h-1.5 bg-slate-800/90 rounded-full overflow-hidden flex">
                <div
                  className={`h-full transition-all duration-100 rounded-full ${
                    activePlayer.isExhausted
                      ? 'bg-red-500 animate-pulse'
                      : activePlayer.stamina < 0.35
                      ? 'bg-amber-400'
                      : 'bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]'
                  }`}
                  style={{ width: `${Math.max(4, Math.round(activePlayer.stamina * 100))}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

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
            <span><strong className="text-amber-400">L</strong> Terobos</span>
            <span>•</span>
            <span><strong className="text-purple-400">Space</strong> Lambung</span>
            <span>•</span>
            <span><strong className="text-cyan-400">K</strong> Tembak</span>
            <span>•</span>
            <span><strong className="text-teal-400">Shift</strong> Sprint</span>
          </div>
        </div>
      )}
        {/* Referee Whistle Flash Banner */}
        {whistleBannerText && (
          <div className="fixed top-[124px] left-1/2 -translate-x-1/2 z-50 pointer-events-none flex flex-col items-center gap-1 animate-in zoom-in-90 duration-150">
            <div className="bg-[#0b0f0c]/95 border-2 border-amber-400/90 text-amber-300 px-6 py-2 rounded-2xl shadow-2xl backdrop-blur-xl flex items-center gap-3">
              <span className="text-xl animate-bounce">📢</span>
              <span className="font-mono text-xs font-black tracking-widest uppercase text-amber-300 drop-shadow">
                {whistleBannerText}
              </span>
              <span className="text-xl animate-pulse">⚡</span>
            </div>
          </div>
        )}

        {/* Half-Time Summary Card Modal */}
        {matchState.phase === 'PHASE_HALF_TIME' && (
          <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-50 flex items-center justify-center p-4 pointer-events-auto">
            <div className="glass-card max-w-md w-full p-6 rounded-2xl border-2 border-cyan-500/60 text-center flex flex-col items-center gap-4 shadow-2xl animate-in zoom-in-95 duration-200">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 font-mono text-[10px] font-black uppercase tracking-widest">
                <span>⏸️</span>
                <span>LAPORAN BABAK PERTAMA (HALF TIME)</span>
              </div>

              {/* Score Display */}
              <div className="flex items-center justify-center gap-6 py-1">
                <div className="flex flex-col items-center">
                  <span className="text-xs font-bold text-slate-300 font-mono">HOME</span>
                  <span className="text-4xl font-black text-red-500">{matchState.scoreHome}</span>
                </div>
                <span className="text-slate-500 text-lg font-bold font-mono">VS</span>
                <div className="flex flex-col items-center">
                  <span className="text-xs font-bold text-slate-300 font-mono">AWAY</span>
                  <span className="text-4xl font-black text-blue-400">{matchState.scoreAway}</span>
                </div>
              </div>

              {/* Match Statistics Table */}
              <div className="w-full bg-slate-900/90 border border-slate-800 rounded-xl p-3 flex flex-col gap-2.5 font-mono text-xs">
                {/* Possession Bar */}
                <div>
                  <div className="flex justify-between text-[10px] text-slate-400 mb-1 font-bold">
                    <span className="text-red-400">{matchState.stats.possessionHome}%</span>
                    <span>PENGUASAAN BOLA</span>
                    <span className="text-blue-400">{matchState.stats.possessionAway}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden flex">
                    <div className="bg-red-500 transition-all duration-300" style={{ width: `${matchState.stats.possessionHome}%` }} />
                    <div className="bg-blue-500 transition-all duration-300" style={{ width: `${matchState.stats.possessionAway}%` }} />
                  </div>
                </div>

                <div className="flex justify-between items-center py-0.5 border-b border-slate-800/80">
                  <span className="font-bold text-red-400">{matchState.stats.shotsHome}</span>
                  <span className="text-slate-400 text-[11px]">Total Tembakan</span>
                  <span className="font-bold text-blue-400">{matchState.stats.shotsAway}</span>
                </div>
                <div className="flex justify-between items-center py-0.5 border-b border-slate-800/80">
                  <span className="font-bold text-red-400">{matchState.stats.shotsOnTargetHome}</span>
                  <span className="text-slate-400 text-[11px]">Tembakan Akurat</span>
                  <span className="font-bold text-blue-400">{matchState.stats.shotsOnTargetAway}</span>
                </div>
                <div className="flex justify-between items-center py-0.5 border-b border-slate-800/80">
                  <span className="font-bold text-red-400">{matchState.stats.passesHome}</span>
                  <span className="text-slate-400 text-[11px]">Umpan Sukses</span>
                  <span className="font-bold text-blue-400">{matchState.stats.passesAway}</span>
                </div>
                <div className="flex justify-between items-center py-0.5">
                  <span className="font-bold text-red-400">{matchState.stats.tacklesHome}</span>
                  <span className="text-slate-400 text-[11px]">Tekel Berhasil</span>
                  <span className="font-bold text-blue-400">{matchState.stats.tacklesAway}</span>
                </div>
              </div>

              {/* Kickoff Resume Button */}
              <button
                onClick={onResumeSecondHalf}
                className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-extrabold rounded-xl text-sm shadow-xl hover:brightness-110 transition cursor-pointer flex items-center justify-center gap-2"
              >
                <span>⚽</span>
                <span>Lanjutkan Babak Kedua (Kick-off)</span>
              </button>
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

        {/* Game Over Modal with Full Match Statistics */}
        {matchState.state === 'GAME_OVER' && (
          <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-lg z-50 flex items-center justify-center p-4 pointer-events-auto">
            <div className="glass-card max-w-md w-full p-6 rounded-2xl border-2 border-emerald-500/50 text-center flex flex-col items-center gap-4 shadow-2xl animate-in fade-in zoom-in duration-200">
              <div className="w-14 h-14 bg-emerald-500/20 border border-emerald-500/50 rounded-full flex items-center justify-center text-3xl shadow-lg">
                🏆
              </div>

              <div>
                <h2 className="text-xl font-extrabold text-slate-100 tracking-tight">FULL TIME - HASIL AKHIR</h2>
                <p className="text-base font-bold text-emerald-400 font-mono mt-0.5">{matchState.winnerTitle}</p>
              </div>

              {/* Score Box */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 w-full text-center font-mono text-sm">
                <div className="text-slate-500 text-[10px] font-bold mb-1">SKOR AKHIR PERTANDINGAN</div>
                <div className="text-3xl font-black tracking-wider flex items-center justify-center gap-4">
                  <span className="text-red-500">{matchState.scoreHome}</span>
                  <span className="text-slate-400">-</span>
                  <span className="text-blue-400">{matchState.scoreAway}</span>
                </div>
              </div>

              {/* Comprehensive Post-Match Stats Table */}
              <div className="w-full bg-slate-900/90 border border-slate-800 rounded-xl p-3 flex flex-col gap-2 font-mono text-xs">
                <div>
                  <div className="flex justify-between text-[10px] text-slate-400 mb-1 font-bold">
                    <span className="text-red-400">{matchState.stats.possessionHome}%</span>
                    <span>PENGUASAAN BOLA</span>
                    <span className="text-blue-400">{matchState.stats.possessionAway}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden flex">
                    <div className="bg-red-500 transition-all duration-300" style={{ width: `${matchState.stats.possessionHome}%` }} />
                    <div className="bg-blue-500 transition-all duration-300" style={{ width: `${matchState.stats.possessionAway}%` }} />
                  </div>
                </div>

                <div className="flex justify-between items-center py-0.5 border-b border-slate-800/80">
                  <span className="font-bold text-red-400">{matchState.stats.shotsHome}</span>
                  <span className="text-slate-400 text-[11px]">Total Tembakan</span>
                  <span className="font-bold text-blue-400">{matchState.stats.shotsAway}</span>
                </div>
                <div className="flex justify-between items-center py-0.5 border-b border-slate-800/80">
                  <span className="font-bold text-red-400">{matchState.stats.shotsOnTargetHome}</span>
                  <span className="text-slate-400 text-[11px]">Tembakan Akurat</span>
                  <span className="font-bold text-blue-400">{matchState.stats.shotsOnTargetAway}</span>
                </div>
                <div className="flex justify-between items-center py-0.5 border-b border-slate-800/80">
                  <span className="font-bold text-red-400">{matchState.stats.passesHome}</span>
                  <span className="text-slate-400 text-[11px]">Umpan Sukses</span>
                  <span className="font-bold text-blue-400">{matchState.stats.passesAway}</span>
                </div>
                <div className="flex justify-between items-center py-0.5">
                  <span className="font-bold text-red-400">{matchState.stats.tacklesHome}</span>
                  <span className="text-slate-400 text-[11px]">Tekel Berhasil</span>
                  <span className="font-bold text-blue-400">{matchState.stats.tacklesAway}</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 w-full">
                <button
                  onClick={onResetMatch}
                  className="w-full py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-extrabold rounded-xl text-sm shadow-xl hover:brightness-110 transition cursor-pointer"
                >
                  🎮 Main Lagi
                </button>
                {onReturnToLobby && (
                  <button
                    onClick={onReturnToLobby}
                    className="w-full py-2.5 bg-slate-900 border border-slate-700 text-slate-200 font-extrabold rounded-xl text-sm shadow-xl hover:bg-slate-800 transition cursor-pointer flex items-center justify-center gap-2"
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
            <div className="flex items-center justify-between px-1.5 py-0.5 text-[9px] font-mono font-bold leading-none">
              <span className="flex items-center gap-1 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                TACTICAL RADAR
              </span>
              <span className="text-[8px] font-mono font-bold">
                <span className="text-red-400">{matchState.stats.possessionHome}%</span>
                <span className="text-slate-500 mx-1">POSS</span>
                <span className="text-blue-400">{matchState.stats.possessionAway}%</span>
              </span>
            </div>

            <div className="relative w-full flex-1 rounded-xl overflow-hidden border border-emerald-500/30 bg-[#041f18]">
              <svg viewBox="0 0 2200 1350" className="w-full h-full block">
                {/* Alternating Pitch Turf Lawn Bands (Wembley / San Siro Style) */}
                {[0, 1, 2, 3, 4, 5, 6, 7].map((colIdx) => (
                  <rect
                    key={`turf-band-${colIdx}`}
                    x={154 + colIdx * (1892 / 8)}
                    y="108"
                    width={1892 / 8}
                    height="1134"
                    fill={colIdx % 2 === 0 ? '#04271c' : '#063929'}
                  />
                ))}

                {/* Playable Outer Boundary */}
                <rect
                  x="154"
                  y="108"
                  width="1892"
                  height="1134"
                  fill="none"
                  stroke="rgba(52, 211, 153, 0.55)"
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
                      {p.role && (
                        <text
                          x={p.x}
                          y={p.y + 16}
                          fill="#ffffff"
                          fontSize="44"
                          fontWeight="900"
                          fontFamily="monospace"
                          textAnchor="middle"
                        >
                          {p.role}
                        </text>
                      )}
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
