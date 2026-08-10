import React, { useState } from 'react';
import { Smartphone, Play, Swords, Bot, Sparkles, Shield, Info, Radio } from 'lucide-react';
import { QRCodeModal } from './QRCodeModal';
import { ControllerSelectModal, DeviceType } from './ControllerSelectModal';

interface LobbyViewProps {
  onStartMatch: (mode: '1v1' | '2vBot', p1Device?: DeviceType, p2Device?: DeviceType) => void;
  peerRoomId: string;
  isPeerConnected: boolean;
}

export const LobbyView: React.FC<LobbyViewProps> = ({ onStartMatch, peerRoomId, isPeerConnected }) => {
  const [selectedMode, setSelectedMode] = useState<'1v1' | '2vBot'>('1v1');
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);
  const [showControlsModal, setShowControlsModal] = useState(false);
  const [showControllerSelectModal, setShowControllerSelectModal] = useState(false);

  const handleStartMatchClick = () => {
    setShowControllerSelectModal(true);
  };

  const handleConfirmControllerStart = (p1Device: DeviceType, p2Device: DeviceType) => {
    setShowControllerSelectModal(false);
    onStartMatch(selectedMode, p1Device, p2Device);
  };

  return (
    <div className="relative w-screen h-screen bg-[#09150b] text-slate-100 flex flex-col justify-between p-6 select-none overflow-hidden font-sans">
      {/* 1. Dynamic Pitch Background Pattern with Dark Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1a0d]/90 via-[#0d2210]/80 to-[#071108]/95 pointer-events-none z-0">
        {/* Grass Stripes Pattern */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px]" />
        
        {/* Center Pitch Lines Visual Overlay */}
        <div className="absolute inset-x-12 top-12 bottom-12 border-4 border-white/10 rounded-3xl pointer-events-none flex items-center justify-center">
          <div className="w-64 h-64 border-4 border-white/10 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-white/20 rounded-full" />
          </div>
          <div className="absolute inset-y-0 left-1/2 border-r-4 border-white/10" />
        </div>
      </div>

      {/* Connection QR Code Modal */}
      <QRCodeModal
        isOpen={isQRModalOpen}
        onClose={() => setIsQRModalOpen(false)}
        roomId={peerRoomId}
        isConnected={isPeerConnected}
      />

      {/* FIFA/PES Style Controller Assignment Modal */}
      <ControllerSelectModal
        isOpen={showControllerSelectModal}
        onClose={() => setShowControllerSelectModal(false)}
        onConfirmStart={handleConfirmControllerStart}
        peerRoomId={peerRoomId}
        isPeerConnected={isPeerConnected}
      />

      {/* Controls Spec Modal */}
      {showControlsModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-[#0b0f0c] border border-cyan-500/40 rounded-3xl max-w-md w-full p-6 shadow-2xl flex flex-col gap-4 text-slate-100 relative">
            <button
              onClick={() => setShowControlsModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-100 transition cursor-pointer"
            >
              ✕
            </button>
            <h3 className="text-xl font-extrabold text-cyan-400 flex items-center gap-2">
              <Shield className="w-5 h-5" /> Petunjuk Kontrol Game
            </h3>
            <div className="flex flex-col gap-2.5 text-xs text-slate-300 font-mono">
              <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 flex justify-between items-center">
                <span className="text-slate-400">P1 Move / Action:</span>
                <span className="text-cyan-300 font-bold">WASD + J/K/L + Space</span>
              </div>
              <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 flex justify-between items-center">
                <span className="text-slate-400">P2 Move / Action:</span>
                <span className="text-amber-300 font-bold">Arrow Keys + Numpad / N,M</span>
              </div>
              <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 flex justify-between items-center">
                <span className="text-slate-400">Joystick / Gamepad:</span>
                <span className="text-emerald-300 font-bold">Plug & Play Controller</span>
              </div>
              <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 flex justify-between items-center">
                <span className="text-slate-400">HP Remote Controller:</span>
                <span className="text-cyan-300 font-bold">Scan QR Code HP</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. Top Navigation Bar */}
      <div className="relative z-10 w-full flex items-center justify-between pointer-events-auto">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-emerald-500/20">
            ⚽
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tight text-white flex items-center gap-2">
              SOCCER ARENA <span className="text-[10px] font-extrabold bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-md border border-emerald-500/30">NEXT-GEN</span>
            </h1>
            <p className="text-[11px] text-slate-400 font-semibold">Web Top-Down Multiplayer Soccer</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => window.location.href = '/debug'}
            className="px-3.5 py-2.5 rounded-2xl bg-slate-900/90 border border-amber-500/40 text-amber-300 hover:bg-amber-500 hover:text-slate-950 text-xs font-bold transition shadow-xl cursor-pointer flex items-center gap-1.5"
          >
            <Radio className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">Debug HP</span>
          </button>

          <button
            onClick={() => setShowControlsModal(true)}
            className="px-4 py-2.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 text-xs font-bold transition shadow-xl cursor-pointer flex items-center gap-2"
          >
            <Info className="w-4 h-4 text-cyan-400" />
            <span className="hidden sm:inline">Kontrol Game</span>
          </button>

          <button
            onClick={() => setIsQRModalOpen(true)}
            className={`px-4 py-2.5 rounded-2xl border text-xs font-extrabold transition shadow-2xl cursor-pointer flex items-center gap-2 ${
              isPeerConnected
                ? 'border-emerald-500/80 bg-emerald-950/90 text-emerald-300'
                : 'border-cyan-500/40 bg-slate-900/90 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>{isPeerConnected ? 'HP Connected 🟢' : 'Connect HP Remote'}</span>
          </button>
        </div>
      </div>

      {/* 3. Center Mode Selection Section */}
      <div className="relative z-10 my-auto flex flex-col items-center gap-6 w-full max-w-4xl mx-auto">
        <div className="text-center flex flex-col items-center gap-1">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" /> Pilih Mode Game
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
            SIAP UNTUK BERTANDING?
          </h2>
          <p className="text-xs text-slate-400 max-w-md">
            Pilih mode permainan favorit Anda di bawah ini dan klik tombol Start Match!
          </p>
        </div>

        {/* Floating Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full px-4">
          {/* CARD 1: 1v1 MATCH */}
          <div
            onClick={() => setSelectedMode('1v1')}
            className={`relative rounded-3xl p-6 border-2 transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[220px] backdrop-blur-xl ${
              selectedMode === '1v1'
                ? 'bg-[#0e2413]/95 border-emerald-400 shadow-2xl shadow-emerald-500/30 scale-[1.02]'
                : 'bg-[#09150b]/80 border-slate-800/80 opacity-75 hover:opacity-100 hover:border-slate-600'
            }`}
          >
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <Swords className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-black tracking-widest px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 uppercase">
                VERSUS PVP
              </span>
            </div>

            <div className="mt-4">
              <h3 className="text-2xl font-black text-white tracking-tight">1 vs 1</h3>
              <p className="text-xs text-slate-300 mt-1 font-medium leading-relaxed">
                Tanding 1 lawan 1 antara Player 1 vs Player 2 (Keyboard, Joystick, atau HP Remote).
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-slate-400">
              <span>Pemain: 2 Human</span>
              <span className="text-emerald-400">Pilih Kontroler</span>
            </div>
          </div>

          {/* CARD 2: 2 vs BOT */}
          <div
            onClick={() => setSelectedMode('2vBot')}
            className={`relative rounded-3xl p-6 border-2 transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[220px] backdrop-blur-xl ${
              selectedMode === '2vBot'
                ? 'bg-[#0e2413]/95 border-cyan-400 shadow-2xl shadow-cyan-500/30 scale-[1.02]'
                : 'bg-[#09150b]/80 border-slate-800/80 opacity-75 hover:opacity-100 hover:border-slate-600'
            }`}
          >
            {/* Popular Badge */}
            <div className="absolute -top-3 left-6 bg-gradient-to-r from-amber-500 to-red-500 text-slate-950 font-black text-[9px] uppercase px-3 py-0.5 rounded-full shadow-lg tracking-wider">
              🔥 POPULAR CO-OP
            </div>

            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <Bot className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-black tracking-widest px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 uppercase">
                CO-OP BOT
              </span>
            </div>

            <div className="mt-4">
              <h3 className="text-2xl font-black text-white tracking-tight">2 vs BOT</h3>
              <p className="text-xs text-slate-300 mt-1 font-medium leading-relaxed">
                Main bareng! Player 1 + Player 2 sebagai tim Co-Op melawan 2 Bot AI Musuh.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-slate-400">
              <span>Tim: P1 + P2</span>
              <span className="text-cyan-400">Vs 2 AI Musuh</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Bottom Start Match CTA Bar */}
      <div className="relative z-10 w-full flex flex-col items-center gap-3 pb-2 pointer-events-auto">
        <button
          onClick={handleStartMatchClick}
          className="w-full max-w-md py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 text-slate-950 font-black text-lg tracking-wide shadow-2xl shadow-emerald-500/40 hover:brightness-110 active:scale-95 transition cursor-pointer flex items-center justify-center gap-3"
        >
          <Play className="w-6 h-6 fill-slate-950" />
          <span>START MATCH ({selectedMode === '1v1' ? '1v1 Mode' : '2 vs BOT Mode'})</span>
        </button>

        <p className="text-[11px] text-slate-500 font-mono">
          Game Version v1.5.0 • Built with Vite, React & PeerJS
        </p>
      </div>
    </div>
  );
};
