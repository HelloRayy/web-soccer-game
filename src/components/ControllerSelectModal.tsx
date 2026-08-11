import React, { useState, useEffect } from 'react';
import { Gamepad, Keyboard, Smartphone, Bot, ChevronRight, ChevronLeft, Play, X, Plus } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

export type DeviceType = 'keyboard1' | 'keyboard2' | 'gamepad0' | 'gamepad1' | 'hp_remote' | 'ai_bot';

interface ControllerOption {
  id: DeviceType;
  name: string;
  type: 'keyboard' | 'gamepad' | 'smartphone' | 'bot';
}

const P1_OPTIONS: ControllerOption[] = [
  { id: 'keyboard1', name: 'KEYBOARD WASD', type: 'keyboard' },
  { id: 'gamepad0', name: 'GAMEPAD USB 1', type: 'gamepad' },
  { id: 'hp_remote', name: 'HP REMOTE WIRELESS', type: 'smartphone' },
];

const P2_OPTIONS: ControllerOption[] = [
  { id: 'keyboard2', name: 'KEYBOARD PANAH', type: 'keyboard' },
  { id: 'gamepad1', name: 'GAMEPAD USB 2', type: 'gamepad' },
  { id: 'hp_remote', name: 'HP REMOTE WIRELESS', type: 'smartphone' },
  { id: 'ai_bot', name: 'AI ENEMY BOT', type: 'bot' },
];

const P3_OPTIONS: ControllerOption[] = [
  { id: 'hp_remote', name: 'HP REMOTE WIRELESS', type: 'smartphone' },
  { id: 'gamepad0', name: 'GAMEPAD USB 1', type: 'gamepad' },
  { id: 'keyboard1', name: 'KEYBOARD WASD', type: 'keyboard' },
];

const P4_OPTIONS: ControllerOption[] = [
  { id: 'hp_remote', name: 'HP REMOTE WIRELESS', type: 'smartphone' },
  { id: 'gamepad1', name: 'GAMEPAD USB 2', type: 'gamepad' },
  { id: 'keyboard2', name: 'KEYBOARD PANAH', type: 'keyboard' },
];

interface ControllerSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmStart: (p1Device: DeviceType, p2Device: DeviceType) => void;
  peerRoomId: string;
  isPeerConnected: boolean;
  selectedMode: '1v1' | '2vBot';
}

export const ControllerSelectModal: React.FC<ControllerSelectModalProps> = ({
  isOpen,
  onClose,
  onConfirmStart,
  peerRoomId,
  isPeerConnected,
  selectedMode,
}) => {
  const [p1Index, setP1Index] = useState(0);
  const [p2Index, setP2Index] = useState(0);
  const [p3Index, setP3Index] = useState(0);
  const [p4Index, setP4Index] = useState(0);

  const [hasHomeExtra, setHasHomeExtra] = useState(false);
  const [hasAwayExtra, setHasAwayExtra] = useState(false);

  const [ipAddress, setIpAddress] = useState<string>(() => window.location.hostname || '192.168.1.100');

  const p1Dev = P1_OPTIONS[p1Index];
  const p2Dev = selectedMode === '2vBot' ? { id: 'ai_bot' as DeviceType, name: 'AI ENEMY BOT', type: 'bot' as const } : P2_OPTIONS[p2Index];
  const p3Dev = P3_OPTIONS[p3Index];
  const p4Dev = P4_OPTIONS[p4Index];

  // Keyboard D-Pad Navigation for Select Sides
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'a' || e.key === 'A') {
        setP1Index((prev) => (prev - 1 + P1_OPTIONS.length) % P1_OPTIONS.length);
      } else if (e.key === 'd' || e.key === 'D') {
        setP1Index((prev) => (prev + 1) % P1_OPTIONS.length);
      } else if (e.key === 'ArrowLeft' && selectedMode === '1v1') {
        setP2Index((prev) => (prev - 1 + P2_OPTIONS.length) % P2_OPTIONS.length);
      } else if (e.key === 'ArrowRight' && selectedMode === '1v1') {
        setP2Index((prev) => (prev + 1) % P2_OPTIONS.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedMode]);

  if (!isOpen) return null;

  const controllerUrl = `http://${ipAddress}:5173/controller`;
  const isHpSelected = p1Dev.id === 'hp_remote' || p2Dev.id === 'hp_remote' || (hasHomeExtra && p3Dev.id === 'hp_remote') || (hasAwayExtra && p4Dev.id === 'hp_remote');

  // Authentic 6 Rows of Controller Silhouettes
  const SILHOUETTE_SLOTS = [0, 1, 2, 3, 4, 5];

  return (
    <div className="fixed inset-0 z-50 bg-[#05090C]/96 backdrop-blur-lg flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150 select-none font-['Poppins',sans-serif]">
      {/* AAA CONSOLE MODAL CONTAINER */}
      <div className="bg-[#0e1311] border border-white/10 max-w-4xl w-full p-6 sm:p-8 shadow-2xl flex flex-col gap-6 text-[#E2F1F8] relative max-h-[95vh] overflow-y-auto rounded-none">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-[#05090C] border border-white/10 text-slate-400 hover:text-white transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* AUTHENTIC EA FC 25 / FL 25 SELECT SIDES BOARD */}
        <div className="w-full bg-[#111614] border border-white/10 shadow-2xl overflow-hidden relative">
          {/* HEADER BAR: Home (Left) | Away (Right) */}
          <div className="grid grid-cols-2 text-white font-bold text-2xl px-8 py-4 border-b border-white/10 bg-[#0c100e]">
            <div className="text-left font-['Outfit',sans-serif] tracking-tight">Home</div>
            <div className="text-right font-['Outfit',sans-serif] tracking-tight">Away</div>
          </div>

          {/* 2-COLUMN BOARD BODY */}
          <div className="relative w-full p-6 grid grid-cols-2 divide-x divide-white/10 min-h-[360px]">
            {/* LEFT COLUMN: HOME */}
            <div className="flex flex-col gap-5 items-start pl-4 sm:pl-8">
              {SILHOUETTE_SLOTS.map((slotIndex) => {
                if (slotIndex === 0) {
                  // User 1 Active Slot
                  return (
                    <div key={slotIndex} className="flex flex-col items-start relative group my-1">
                      <span className="text-[11px] font-medium text-slate-400 mb-1 tracking-wide">
                        User 1
                      </span>

                      {/* EA FC 25 Style Active Controller Capsule */}
                      <div className="flex items-center gap-1.5 p-1.5 bg-[#18211d] border border-[#17FFBF] rounded-xl shadow-lg shadow-[#17FFBF]/10">
                        <button
                          onClick={() => setP1Index((prev) => (prev - 1 + P1_OPTIONS.length) % P1_OPTIONS.length)}
                          className="p-1 text-slate-400 hover:text-white hover:bg-white/10 transition cursor-pointer rounded"
                          title="Peranti Sebelumnya"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>

                        <div className="px-2 text-[#17FFBF]">
                          {p1Dev.type === 'keyboard' && <Keyboard className="w-8 h-8" />}
                          {p1Dev.type === 'gamepad' && <Gamepad className="w-8 h-8" />}
                          {p1Dev.type === 'smartphone' && <Smartphone className="w-8 h-8" />}
                        </div>

                        <button
                          onClick={() => setP1Index((prev) => (prev + 1) % P1_OPTIONS.length)}
                          className="p-1 text-slate-400 hover:text-white hover:bg-white/10 transition cursor-pointer rounded"
                          title="Peranti Selanjutnya"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                }

                if (slotIndex === 1) {
                  if (hasHomeExtra) {
                    // User 3 Active Slot
                    return (
                      <div key={slotIndex} className="flex flex-col items-start relative group my-1">
                        <div className="flex justify-between items-center w-full mb-1">
                          <span className="text-[11px] font-medium text-slate-400 tracking-wide">User 3</span>
                          <button
                            onClick={() => setHasHomeExtra(false)}
                            className="text-[10px] text-red-400 hover:text-red-300 underline"
                          >
                            Hapus
                          </button>
                        </div>
                        <div className="flex items-center gap-1.5 p-1.5 bg-[#18211d] border border-[#17FFBF] rounded-xl shadow-lg shadow-[#17FFBF]/10">
                          <button
                            onClick={() => setP3Index((prev) => (prev - 1 + P3_OPTIONS.length) % P3_OPTIONS.length)}
                            className="p-1 text-slate-400 hover:text-white hover:bg-white/10 transition cursor-pointer rounded"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <div className="px-2 text-[#17FFBF]">
                            {p3Dev.type === 'keyboard' && <Keyboard className="w-8 h-8" />}
                            {p3Dev.type === 'gamepad' && <Gamepad className="w-8 h-8" />}
                            {p3Dev.type === 'smartphone' && <Smartphone className="w-8 h-8" />}
                          </div>
                          <button
                            onClick={() => setP3Index((prev) => (prev + 1) % P3_OPTIONS.length)}
                            className="p-1 text-slate-400 hover:text-white hover:bg-white/10 transition cursor-pointer rounded"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    );
                  }

                  // Low-key AAA + Add Player Pill
                  return (
                    <div key={slotIndex} className="py-1">
                      <button
                        onClick={() => setHasHomeExtra(true)}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-[#18211d]/50 border border-dashed border-[#17FFBF]/40 hover:border-[#17FFBF] hover:bg-[#17FFBF]/10 text-[#17FFBF] transition cursor-pointer rounded-lg text-xs font-medium"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Tambah Player</span>
                      </button>
                    </div>
                  );
                }

                // Dark Controller Silhouette Rows
                return (
                  <div key={slotIndex} className="py-2 pl-2">
                    <Gamepad className="w-9 h-9 text-white/10" />
                  </div>
                );
              })}
            </div>

            {/* RIGHT COLUMN: AWAY */}
            <div className="flex flex-col gap-5 items-end pr-4 sm:pr-8">
              {SILHOUETTE_SLOTS.map((slotIndex) => {
                if (slotIndex === 0) {
                  // User 2 / AI Bot Active Slot
                  return (
                    <div key={slotIndex} className="flex flex-col items-end relative group my-1">
                      <span className="text-[11px] font-medium text-slate-400 mb-1 tracking-wide">
                        {selectedMode === '2vBot' ? 'AI Bot' : 'User 2'}
                      </span>

                      {selectedMode === '2vBot' ? (
                        <div className="flex items-center p-2 bg-[#18211d] border border-[#17FFBF] rounded-xl shadow-lg shadow-[#17FFBF]/10">
                          <Bot className="w-8 h-8 text-[#17FFBF] px-1" />
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5 p-1.5 bg-[#18211d] border border-[#17FFBF] rounded-xl shadow-lg shadow-[#17FFBF]/10">
                          <button
                            onClick={() => setP2Index((prev) => (prev - 1 + P2_OPTIONS.length) % P2_OPTIONS.length)}
                            className="p-1 text-slate-400 hover:text-white hover:bg-white/10 transition cursor-pointer rounded"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>

                          <div className="px-2 text-[#17FFBF]">
                            {p2Dev.type === 'keyboard' && <Keyboard className="w-8 h-8" />}
                            {p2Dev.type === 'gamepad' && <Gamepad className="w-8 h-8" />}
                            {p2Dev.type === 'smartphone' && <Smartphone className="w-8 h-8" />}
                            {p2Dev.type === 'bot' && <Bot className="w-8 h-8" />}
                          </div>

                          <button
                            onClick={() => setP2Index((prev) => (prev + 1) % P2_OPTIONS.length)}
                            className="p-1 text-slate-400 hover:text-white hover:bg-white/10 transition cursor-pointer rounded"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>
                  );
                }

                if (slotIndex === 1) {
                  if (hasAwayExtra) {
                    // User 4 Active Slot
                    return (
                      <div key={slotIndex} className="flex flex-col items-end relative group my-1">
                        <div className="flex justify-between items-center w-full mb-1">
                          <button
                            onClick={() => setHasAwayExtra(false)}
                            className="text-[10px] text-red-400 hover:text-red-300 underline"
                          >
                            Hapus
                          </button>
                          <span className="text-[11px] font-medium text-slate-400 tracking-wide">User 4</span>
                        </div>
                        <div className="flex items-center gap-1.5 p-1.5 bg-[#18211d] border border-[#17FFBF] rounded-xl shadow-lg shadow-[#17FFBF]/10">
                          <button
                            onClick={() => setP4Index((prev) => (prev - 1 + P4_OPTIONS.length) % P4_OPTIONS.length)}
                            className="p-1 text-slate-400 hover:text-white hover:bg-white/10 transition cursor-pointer rounded"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <div className="px-2 text-[#17FFBF]">
                            {p4Dev.type === 'keyboard' && <Keyboard className="w-8 h-8" />}
                            {p4Dev.type === 'gamepad' && <Gamepad className="w-8 h-8" />}
                            {p4Dev.type === 'smartphone' && <Smartphone className="w-8 h-8" />}
                          </div>
                          <button
                            onClick={() => setP4Index((prev) => (prev + 1) % P4_OPTIONS.length)}
                            className="p-1 text-slate-400 hover:text-white hover:bg-white/10 transition cursor-pointer rounded"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    );
                  }

                  // Low-key AAA + Add Player Pill
                  return (
                    <div key={slotIndex} className="py-1">
                      <button
                        onClick={() => setHasAwayExtra(true)}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-[#18211d]/50 border border-dashed border-[#17FFBF]/40 hover:border-[#17FFBF] hover:bg-[#17FFBF]/10 text-[#17FFBF] transition cursor-pointer rounded-lg text-xs font-medium"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Tambah Player</span>
                      </button>
                    </div>
                  );
                }

                // Dark Controller Silhouette Rows
                return (
                  <div key={slotIndex} className="py-2 pr-2">
                    <Gamepad className="w-9 h-9 text-white/10" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* HP REMOTE WIRELESS INTEGRATION WIDGET */}
        {isHpSelected && (
          <div className="bg-[#111614] border border-[#17FFBF]/30 p-4 rounded-none flex flex-col sm:flex-row items-center gap-4 text-xs font-mono">
            <div className="bg-white p-2 rounded shrink-0">
              <QRCodeSVG value={controllerUrl} size={85} />
            </div>
            <div className="flex flex-col gap-1.5 w-full">
              <div className="flex justify-between items-center">
                <span className="font-bold text-[#17FFBF] flex items-center gap-1">
                  <Smartphone className="w-4 h-4" /> KONEKSI HP REMOTE WIRELESS
                </span>
                <span className={`px-2 py-0.5 text-[10px] font-bold ${
                  isPeerConnected ? 'bg-[#17FFBF]/20 text-[#17FFBF]' : 'bg-amber-500/20 text-amber-300'
                }`}>
                  {isPeerConnected ? '🟢 CONNECTED' : '⏳ SCAN QR HP...'}
                </span>
              </div>
              <p className="text-slate-400">Scan QR Code dengan kamera HP Anda untuk menghubungkan HP sebagai Joystick.</p>
              <div className="bg-[#05090C] p-1.5 border border-white/10 font-mono text-[11px] text-cyan-300 flex justify-between">
                <span>{controllerUrl}</span>
                <span>ROOM: {peerRoomId}</span>
              </div>
            </div>
          </div>
        )}

        {/* BOTTOM ACTION BAR */}
        <div className="flex items-center justify-between gap-4 pt-2 border-t border-white/10 font-mono">
          <button
            onClick={onClose}
            className="px-5 py-3 bg-[#05090C] border border-white/10 text-slate-400 hover:text-white font-bold text-xs cursor-pointer transition"
          >
            BATAL
          </button>

          <div className="text-xs text-slate-400 hidden sm:block">
            NAVIGASI: <span className="text-[#17FFBF] font-bold">A/D (P1)</span> | <span className="text-[#17FFBF] font-bold">◄/► PANAH (P2)</span>
          </div>

          <button
            onClick={() => onConfirmStart(p1Dev.id, p2Dev.id)}
            className="py-3.5 px-8 clip-parallelogram bg-[#17FFBF] hover:bg-[#4BFFCE] text-[#05090C] font-mono font-black text-sm tracking-wider shadow-lg shadow-[#17FFBF]/30 transition cursor-pointer flex items-center gap-2"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>CONFIRM SIDES ➔</span>
          </button>
        </div>
      </div>
    </div>
  );
};
