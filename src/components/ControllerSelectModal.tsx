import React, { useState, useEffect } from 'react';
import { Gamepad, Keyboard, Smartphone, Bot, ChevronRight, ChevronLeft, Play, X, Plus, UserPlus } from 'lucide-react';
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

  // Keyboard navigation
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

  const SILHOUETTE_SLOTS = [0, 1, 2, 3, 4, 5];

  return (
    <div className="fixed inset-0 z-50 bg-[#05090C]/96 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-150 select-none font-['Poppins',sans-serif]">
      <div className="bg-[#0f1412] border border-white/10 max-w-4xl w-full p-6 sm:p-8 shadow-2xl flex flex-col gap-5 text-[#E2F1F8] relative max-h-[95vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-[#05090C] border border-white/10 text-slate-400 hover:text-white transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 2-COLUMN EA FC 25 SELECT SIDES BOARD */}
        <div className="w-full bg-[#131916] border border-white/10 shadow-2xl overflow-hidden relative min-h-[380px]">
          {/* HEADER BAR: Home (Left) | Away (Right) */}
          <div className="grid grid-cols-2 text-white font-bold text-2xl px-12 py-4 border-b border-white/10">
            <div className="text-left pl-6 font-['Poppins',sans-serif]">Home</div>
            <div className="text-right pr-6 font-['Poppins',sans-serif]">Away</div>
          </div>

          {/* 2-COLUMN GRID BODY */}
          <div className="relative w-full p-4 sm:p-6 grid grid-cols-2 divide-x divide-white/10 min-h-[320px]">
            {/* LEFT SIDE: HOME */}
            <div className="flex flex-col gap-4 items-start pl-6">
              {SILHOUETTE_SLOTS.map((slotIndex) => {
                if (slotIndex === 0) {
                  // User 1 Slot
                  return (
                    <div key={slotIndex} className="flex flex-col items-start relative group my-1">
                      <span className="text-xs font-mono text-slate-400 mb-1.5 tracking-wider">User 1</span>
                      <div className="flex items-center gap-2 p-2 bg-[#1b2420] border-2 border-[#17FFBF] rounded-2xl shadow-lg shadow-[#17FFBF]/20">
                        <button
                          onClick={() => setP1Index((prev) => (prev - 1 + P1_OPTIONS.length) % P1_OPTIONS.length)}
                          className="p-1.5 bg-[#05090C] hover:bg-[#17FFBF] text-white hover:text-[#05090C] transition cursor-pointer rounded-lg border border-white/10"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <div className="p-1 text-[#17FFBF]">
                          {p1Dev.type === 'keyboard' && <Keyboard className="w-9 h-9" />}
                          {p1Dev.type === 'gamepad' && <Gamepad className="w-9 h-9" />}
                          {p1Dev.type === 'smartphone' && <Smartphone className="w-9 h-9" />}
                        </div>
                        <button
                          onClick={() => setP1Index((prev) => (prev + 1) % P1_OPTIONS.length)}
                          className="p-1.5 bg-[#05090C] hover:bg-[#17FFBF] text-white hover:text-[#05090C] transition cursor-pointer rounded-lg border border-white/10"
                        >
                          <ChevronRight className="w-5 h-5" />
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
                          <span className="text-xs font-mono text-slate-400 tracking-wider">User 3</span>
                          <button
                            onClick={() => setHasHomeExtra(false)}
                            className="text-[10px] text-red-400 hover:text-red-300 underline"
                          >
                            Hapus
                          </button>
                        </div>
                        <div className="flex items-center gap-2 p-2 bg-[#1b2420] border-2 border-[#17FFBF] rounded-2xl shadow-lg shadow-[#17FFBF]/20">
                          <button
                            onClick={() => setP3Index((prev) => (prev - 1 + P3_OPTIONS.length) % P3_OPTIONS.length)}
                            className="p-1.5 bg-[#05090C] hover:bg-[#17FFBF] text-white hover:text-[#05090C] transition cursor-pointer rounded-lg border border-white/10"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                          <div className="p-1 text-[#17FFBF]">
                            {p3Dev.type === 'keyboard' && <Keyboard className="w-9 h-9" />}
                            {p3Dev.type === 'gamepad' && <Gamepad className="w-9 h-9" />}
                            {p3Dev.type === 'smartphone' && <Smartphone className="w-9 h-9" />}
                          </div>
                          <button
                            onClick={() => setP3Index((prev) => (prev + 1) % P3_OPTIONS.length)}
                            className="p-1.5 bg-[#05090C] hover:bg-[#17FFBF] text-white hover:text-[#05090C] transition cursor-pointer rounded-lg border border-white/10"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    );
                  }

                  // + Add Player Icon Button
                  return (
                    <div key={slotIndex} className="py-2.5 pl-2">
                      <button
                        onClick={() => setHasHomeExtra(true)}
                        className="flex items-center gap-2 p-2 bg-[#1b2420]/60 border border-dashed border-[#17FFBF]/60 hover:border-[#17FFBF] hover:bg-[#17FFBF]/10 text-[#17FFBF] transition cursor-pointer rounded-xl group"
                        title="Tambah Player Baru (User 3)"
                      >
                        <Plus className="w-7 h-7 group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-mono font-bold pr-2">Tambah Player</span>
                      </button>
                    </div>
                  );
                }

                // Inactive Silhouettes
                return (
                  <div key={slotIndex} className="py-2.5 pl-2">
                    <Gamepad className="w-10 h-10 text-white/10" />
                  </div>
                );
              })}
            </div>

            {/* RIGHT SIDE: AWAY */}
            <div className="flex flex-col gap-4 items-end pr-6">
              {SILHOUETTE_SLOTS.map((slotIndex) => {
                if (slotIndex === 0) {
                  // User 2 Slot / AI Bot
                  return (
                    <div key={slotIndex} className="flex flex-col items-end relative group my-1">
                      <span className="text-xs font-mono text-slate-400 mb-1.5 tracking-wider">
                        {selectedMode === '2vBot' ? 'AI Bot' : 'User 2'}
                      </span>

                      {selectedMode === '2vBot' ? (
                        <div className="flex items-center gap-2 p-2.5 bg-[#1b2420] border-2 border-[#17FFBF] rounded-2xl shadow-lg shadow-[#17FFBF]/20">
                          <Bot className="w-9 h-9 text-[#17FFBF] p-1" />
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 p-2 bg-[#1b2420] border-2 border-[#17FFBF] rounded-2xl shadow-lg shadow-[#17FFBF]/20">
                          <button
                            onClick={() => setP2Index((prev) => (prev - 1 + P2_OPTIONS.length) % P2_OPTIONS.length)}
                            className="p-1.5 bg-[#05090C] hover:bg-[#17FFBF] text-white hover:text-[#05090C] transition cursor-pointer rounded-lg border border-white/10"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                          <div className="p-1 text-[#17FFBF]">
                            {p2Dev.type === 'keyboard' && <Keyboard className="w-9 h-9" />}
                            {p2Dev.type === 'gamepad' && <Gamepad className="w-9 h-9" />}
                            {p2Dev.type === 'smartphone' && <Smartphone className="w-9 h-9" />}
                            {p2Dev.type === 'bot' && <Bot className="w-9 h-9" />}
                          </div>
                          <button
                            onClick={() => setP2Index((prev) => (prev + 1) % P2_OPTIONS.length)}
                            className="p-1.5 bg-[#05090C] hover:bg-[#17FFBF] text-white hover:text-[#05090C] transition cursor-pointer rounded-lg border border-white/10"
                          >
                            <ChevronRight className="w-5 h-5" />
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
                          <span className="text-xs font-mono text-slate-400 tracking-wider">User 4</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 bg-[#1b2420] border-2 border-[#17FFBF] rounded-2xl shadow-lg shadow-[#17FFBF]/20">
                          <button
                            onClick={() => setP4Index((prev) => (prev - 1 + P4_OPTIONS.length) % P4_OPTIONS.length)}
                            className="p-1.5 bg-[#05090C] hover:bg-[#17FFBF] text-white hover:text-[#05090C] transition cursor-pointer rounded-lg border border-white/10"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                          <div className="p-1 text-[#17FFBF]">
                            {p4Dev.type === 'keyboard' && <Keyboard className="w-9 h-9" />}
                            {p4Dev.type === 'gamepad' && <Gamepad className="w-9 h-9" />}
                            {p4Dev.type === 'smartphone' && <Smartphone className="w-9 h-9" />}
                          </div>
                          <button
                            onClick={() => setP4Index((prev) => (prev + 1) % P4_OPTIONS.length)}
                            className="p-1.5 bg-[#05090C] hover:bg-[#17FFBF] text-white hover:text-[#05090C] transition cursor-pointer rounded-lg border border-white/10"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    );
                  }

                  // + Add Player Icon Button
                  return (
                    <div key={slotIndex} className="py-2.5 pr-2">
                      <button
                        onClick={() => setHasAwayExtra(true)}
                        className="flex items-center gap-2 p-2 bg-[#1b2420]/60 border border-dashed border-[#17FFBF]/60 hover:border-[#17FFBF] hover:bg-[#17FFBF]/10 text-[#17FFBF] transition cursor-pointer rounded-xl group"
                        title="Tambah Player Baru (User 4)"
                      >
                        <Plus className="w-7 h-7 group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-mono font-bold pr-2">Tambah Player</span>
                      </button>
                    </div>
                  );
                }

                // Inactive Silhouettes
                return (
                  <div key={slotIndex} className="py-2.5 pr-2">
                    <Gamepad className="w-10 h-10 text-white/10" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* HP REMOTE QR CODE INTEGRATION */}
        {isHpSelected && (
          <div className="bg-[#131916] border border-[#17FFBF]/40 p-4 rounded-xl flex flex-col sm:flex-row items-center gap-4 text-xs font-mono">
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
            KLIK <span className="text-[#17FFBF] font-bold">+ TAMBAH PLAYER</span> UNTUK MEMBUAT SLOT INPUT BARU
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
