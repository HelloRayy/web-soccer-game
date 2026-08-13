import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad, Keyboard, Smartphone, Bot, ChevronRight, ChevronLeft, Play, X, Plus } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

export type DeviceType = 'keyboard1' | 'keyboard2' | 'gamepad0' | 'gamepad1' | 'hp_remote' | 'ai_bot';

interface ControllerOption {
  id: DeviceType;
  name: string;
  type: 'keyboard' | 'gamepad' | 'smartphone' | 'bot';
}

const DEVICE_OPTIONS: ControllerOption[] = [
  { id: 'keyboard1', name: 'KEYBOARD WASD', type: 'keyboard' },
  { id: 'keyboard2', name: 'KEYBOARD PANAH', type: 'keyboard' },
  { id: 'gamepad0', name: 'GAMEPAD USB 1', type: 'gamepad' },
  { id: 'gamepad1', name: 'GAMEPAD USB 2', type: 'gamepad' },
  { id: 'hp_remote', name: 'HP REMOTE WIRELESS', type: 'smartphone' },
  { id: 'ai_bot', name: 'AI ENEMY BOT', type: 'bot' },
];

interface ControllerSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmStart: (p1Device: DeviceType, p2Device: DeviceType) => void;
  peerRoomId: string;
  isPeerConnected: boolean;
  connectedPeerCount?: number;
  selectedMode: '1v1' | '2vBot';
}

export const ControllerSelectModal: React.FC<ControllerSelectModalProps> = ({
  isOpen,
  onClose,
  onConfirmStart,
  peerRoomId,
  isPeerConnected,
  connectedPeerCount = 0,
  selectedMode,
}) => {
  // Up to 5 Seats for Home & Away
  const [homeSeats, setHomeSeats] = useState<number[]>([0]); // Device indices for Home players
  const [awaySeats, setAwaySeats] = useState<number[]>([1]); // Device indices for Away players

  const [ipAddress, setIpAddress] = useState<string>(() => window.location.hostname || '192.168.1.100');

  // Keyboard navigation for Primary Players (Home P1 & Away P2)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'a' || e.key === 'A') {
        cycleHomeDevice(0, -1);
      } else if (e.key === 'd' || e.key === 'D') {
        cycleHomeDevice(0, 1);
      } else if (e.key === 'ArrowLeft' && selectedMode === '1v1') {
        cycleAwayDevice(0, -1);
      } else if (e.key === 'ArrowRight' && selectedMode === '1v1') {
        cycleAwayDevice(0, 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedMode]);

  if (!isOpen) return null;

  const cycleHomeDevice = (seatIdx: number, delta: number) => {
    setHomeSeats((prev) => {
      const next = [...prev];
      const currentDevIdx = next[seatIdx] || 0;
      next[seatIdx] = (currentDevIdx + delta + DEVICE_OPTIONS.length) % DEVICE_OPTIONS.length;
      return next;
    });
  };

  const cycleAwayDevice = (seatIdx: number, delta: number) => {
    setAwaySeats((prev) => {
      const next = [...prev];
      const currentDevIdx = next[seatIdx] || 0;
      next[seatIdx] = (currentDevIdx + delta + DEVICE_OPTIONS.length) % DEVICE_OPTIONS.length;
      return next;
    });
  };

  const addHomeSeat = () => {
    if (homeSeats.length < 5) {
      setHomeSeats((prev) => [...prev, 4]); // Default new seat to HP Remote (index 4)
    }
  };

  const addAwaySeat = () => {
    if (awaySeats.length < 5) {
      setAwaySeats((prev) => [...prev, 4]); // Default new seat to HP Remote (index 4)
    }
  };

  const removeHomeSeat = (index: number) => {
    if (homeSeats.length > 1) {
      setHomeSeats((prev) => prev.filter((_, i) => i !== index));
    }
  };

  const removeAwaySeat = (index: number) => {
    if (awaySeats.length > 1) {
      setAwaySeats((prev) => prev.filter((_, i) => i !== index));
    }
  };

  const controllerUrl = `http://${ipAddress}:5173/controller`;
  const isHpSelected = homeSeats.some((idx) => DEVICE_OPTIONS[idx]?.id === 'hp_remote') || awaySeats.some((idx) => DEVICE_OPTIONS[idx]?.id === 'hp_remote');

  // Exactly 5 Rows of Controller Slots per side
  const ALL_5_SLOTS = [0, 1, 2, 3, 4];

  const p1Device = DEVICE_OPTIONS[homeSeats[0]]?.id || 'keyboard1';
  const p2Device = selectedMode === '2vBot' ? 'ai_bot' : (DEVICE_OPTIONS[awaySeats[0]]?.id || 'keyboard2');

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-[#05090C]/94 flex items-center justify-center p-4 sm:p-6 select-none font-['Poppins',sans-serif]">
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 80 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: 'transform, opacity' }}
            className="bg-[#151917] border border-white/10 max-w-4xl w-full p-4 sm:p-5 shadow-2xl flex flex-col gap-4 text-[#E2F1F8] relative max-h-[95vh] overflow-y-auto rounded-none will-change-transform transform-gpu"
          >
            {/* SLEEK AAA CONSOLE BOARD (100% CONSISTENT PALETTE WITH MATCHMODE MODAL) */}
            <div className="w-full bg-[#111513] border border-white/10 shadow-2xl overflow-hidden relative text-slate-100">
              {/* HEADER BAR: Home (Left) | Away (Right) - DARK FOREST SLATE BANNER */}
              <div className="relative grid grid-cols-2 text-white font-bold text-2xl py-3 bg-[#1b201d] border-b border-white/10">
                <div className="text-center font-['Outfit',sans-serif] tracking-tight">Home</div>
                <div className="text-center font-['Outfit',sans-serif] tracking-tight">Away</div>

                <button
                  onClick={onClose}
                  className="absolute top-1/2 -translate-y-1/2 right-3 p-2 bg-[#0c100e] border border-white/10 text-slate-400 hover:text-white transition cursor-pointer"
                  title="Tutup Modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* 2-COLUMN BOARD BODY WITH CLEAN ROW DIVIDERS */}
              <div className="relative w-full p-4 grid grid-cols-2 divide-x divide-white/10 max-h-[340px] sm:max-h-[380px] overflow-y-auto custom-scrollbar bg-[#111513]">
                {/* LEFT COLUMN: HOME SEATS */}
                <div className="flex flex-col items-center">
                  {ALL_5_SLOTS.map((slotIndex) => {
                    const isActiveSeat = slotIndex < homeSeats.length;
                    const isAddButtonSlot = slotIndex === homeSeats.length;

                    if (isActiveSeat) {
                      const devIdx = homeSeats[slotIndex];
                      const dev = DEVICE_OPTIONS[devIdx] || DEVICE_OPTIONS[0];
                      const userNum = slotIndex * 2 + 1; // User 1, User 3, User 5...

                      return (
                        <div key={slotIndex} className="w-full flex flex-col items-center py-3 border-b border-white/10 relative group">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[11px] font-bold text-[#17FFBF] tracking-wide font-mono">
                              User {userNum}
                            </span>
                            {slotIndex > 0 && (
                              <button
                                onClick={() => removeHomeSeat(slotIndex)}
                                className="text-[10px] text-red-400 hover:text-red-300 underline"
                              >
                                Hapus
                              </button>
                            )}
                          </div>

                          {/* LARGE CONTROLLER ICON (BESAR, CRISP WHITE, TANPA BORDER/BOX & TANPA GLOW) */}
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => cycleHomeDevice(slotIndex, -1)}
                              className="p-1 text-slate-400 hover:text-white transition cursor-pointer"
                              title="Peranti Sebelumnya"
                            >
                              <ChevronLeft className="w-5 h-5" />
                            </button>

                            <div className="text-white p-1">
                              {dev.type === 'keyboard' && <Keyboard className="w-14 h-14" />}
                              {dev.type === 'gamepad' && <Gamepad className="w-14 h-14" />}
                              {dev.type === 'smartphone' && <Smartphone className="w-14 h-14 text-[#17FFBF]" />}
                              {dev.type === 'bot' && <Bot className="w-14 h-14 text-[#FFD13B]" />}
                            </div>

                            <button
                              onClick={() => cycleHomeDevice(slotIndex, 1)}
                              className="p-1 text-slate-400 hover:text-white transition cursor-pointer"
                              title="Peranti Selanjutnya"
                            >
                              <ChevronRight className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      );
                    }

                    if (isAddButtonSlot && homeSeats.length < 5) {
                      return (
                        <div key={slotIndex} className="w-full py-3.5 flex justify-center border-b border-white/10">
                          <button
                            onClick={addHomeSeat}
                            className="flex items-center gap-1.5 px-3 py-1 bg-[#18211d]/50 border border-dashed border-[#17FFBF]/40 hover:border-[#17FFBF] hover:bg-[#17FFBF]/10 text-[#17FFBF] transition cursor-pointer rounded text-xs font-bold shadow"
                          >
                            <Plus className="w-4 h-4" />
                            <span>Tambah Player</span>
                          </button>
                        </div>
                      );
                    }

                    // Large Dark Slate Controller Silhouettes (No Border, No Glow)
                    return (
                      <div key={slotIndex} className="w-full py-4 flex justify-center border-b border-white/10">
                        <Gamepad className="w-14 h-14 text-white/10" />
                      </div>
                    );
                  })}
                </div>

                {/* RIGHT COLUMN: AWAY SEATS */}
                <div className="flex flex-col items-center">
                  {ALL_5_SLOTS.map((slotIndex) => {
                    const isActiveSeat = slotIndex < awaySeats.length;
                    const isAddButtonSlot = slotIndex === awaySeats.length;

                    if (isActiveSeat) {
                      const devIdx = awaySeats[slotIndex];
                      const dev = selectedMode === '2vBot' && slotIndex === 0
                        ? { id: 'ai_bot' as DeviceType, name: 'AI ENEMY BOT', type: 'bot' as const }
                        : (DEVICE_OPTIONS[devIdx] || DEVICE_OPTIONS[1]);
                      const userNum = slotIndex === 0 && selectedMode === '2vBot' ? 'AI Bot' : `User ${slotIndex * 2 + 2}`;

                      return (
                        <div key={slotIndex} className="w-full flex flex-col items-center py-3 border-b border-white/10 relative group">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[11px] font-bold text-[#17FFBF] tracking-wide font-mono">
                              {userNum}
                            </span>
                            {slotIndex > 0 && (
                              <button
                                onClick={() => removeAwaySeat(slotIndex)}
                                className="text-[10px] text-red-400 hover:text-red-300 underline"
                              >
                                Hapus
                              </button>
                            )}
                          </div>

                          {/* LARGE CONTROLLER ICON (BESAR, CRISP WHITE, TANPA BORDER/BOX & TANPA GLOW) */}
                          <div className="flex items-center gap-3">
                            {selectedMode === '2vBot' && slotIndex === 0 ? (
                              <div className="text-[#FFD13B] p-1">
                                <Bot className="w-14 h-14" />
                              </div>
                            ) : (
                              <>
                                <button
                                  onClick={() => cycleAwayDevice(slotIndex, -1)}
                                  className="p-1 text-slate-400 hover:text-white transition cursor-pointer"
                                  title="Peranti Sebelumnya"
                                >
                                  <ChevronLeft className="w-5 h-5" />
                                </button>

                                <div className="text-white p-1">
                                  {dev.type === 'keyboard' && <Keyboard className="w-14 h-14" />}
                                  {dev.type === 'gamepad' && <Gamepad className="w-14 h-14" />}
                                  {dev.type === 'smartphone' && <Smartphone className="w-14 h-14 text-[#17FFBF]" />}
                                  {dev.type === 'bot' && <Bot className="w-14 h-14 text-[#FFD13B]" />}
                                </div>

                                <button
                                  onClick={() => cycleAwayDevice(slotIndex, 1)}
                                  className="p-1 text-slate-400 hover:text-white transition cursor-pointer"
                                  title="Peranti Selanjutnya"
                                >
                                  <ChevronRight className="w-5 h-5" />
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                      );
                    }

                    if (isAddButtonSlot && awaySeats.length < 5) {
                      return (
                        <div key={slotIndex} className="w-full py-3.5 flex justify-center border-b border-white/10">
                          <button
                            onClick={addAwaySeat}
                            className="flex items-center gap-1.5 px-3 py-1 bg-[#18211d]/50 border border-dashed border-[#17FFBF]/40 hover:border-[#17FFBF] hover:bg-[#17FFBF]/10 text-[#17FFBF] transition cursor-pointer rounded text-xs font-bold shadow"
                          >
                            <Plus className="w-4 h-4" />
                            <span>Tambah Player</span>
                          </button>
                        </div>
                      );
                    }

                    // Large Dark Slate Controller Silhouettes (No Border, No Glow)
                    return (
                      <div key={slotIndex} className="w-full py-4 flex justify-center border-b border-white/10">
                        <Gamepad className="w-14 h-14 text-white/10" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* HP REMOTE WIRELESS MULTI-DEVICE INTEGRATION WIDGET */}
            {isHpSelected && (
              <div className="bg-[#111614] border border-[#17FFBF]/30 p-4 rounded-none flex flex-col sm:flex-row items-center gap-4 text-xs font-mono">
                <div className="bg-white p-2 rounded shrink-0 flex flex-col items-center">
                  <QRCodeSVG value={controllerUrl} size={90} />
                  <span className="text-[9px] font-bold text-slate-800 mt-1 uppercase tracking-tighter">1 QR UNTUK SEMUA HP</span>
                </div>
                <div className="flex flex-col gap-1.5 w-full">
                  <div className="flex justify-between items-center flex-wrap gap-2">
                    <span className="font-bold text-[#17FFBF] flex items-center gap-1">
                      <Smartphone className="w-4 h-4" /> KONEKSI HP REMOTE WIRELESS (MULTI-DEVICE SUPPORT)
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span className={`px-2.5 py-0.5 text-[10px] font-bold ${
                        isPeerConnected ? 'bg-[#17FFBF]/20 text-[#17FFBF] border border-[#17FFBF]/40' : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                      }`}>
                        {isPeerConnected ? `📱 ${connectedPeerCount || 1} HP TERHUBUNG` : '⏳ SCAN QR HP...'}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    <strong className="text-white">1 QR Code ini dapat di-scan oleh banyak HP sekaligus!</strong> Setiap HP yang terhubung otomatis menjadi Joystick independen untuk Player 1, Player 2, Player 3, dsb.
                  </p>
                  <div className="bg-[#05090C] p-2 border border-white/10 font-mono text-[11px] text-cyan-300 flex justify-between items-center">
                    <span>{controllerUrl}</span>
                    <span className="bg-[#17FFBF]/10 px-2 py-0.5 text-[#17FFBF] font-bold">ROOM: {peerRoomId}</span>
                  </div>
                </div>
              </div>
            )}

            {/* BOTTOM ACTION BAR (INSIDE MODAL - 100% MATCHMODE MODAL STYLE) */}
            <div className="bg-[#1b201d] px-6 py-4 border-t border-white/10 flex items-center justify-between font-mono">
              <div className="flex items-center gap-4 text-xs">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <kbd className="px-2 py-1 bg-white/10 rounded text-[#17FFBF] font-bold">W/A/S/D</kbd> P1 Keyboard
                </span>
                <span className="text-slate-400 flex items-center gap-1.5">
                  <kbd className="px-2 py-1 bg-white/10 rounded text-[#17FFBF] font-bold">ARROWS</kbd> P2 Keyboard
                </span>
              </div>

              <button
                onClick={() => onConfirmStart(p1Device, p2Device)}
                className="py-2.5 px-6 clip-parallelogram bg-[#17FFBF] hover:bg-[#4BFFCE] text-[#05090C] font-mono font-black text-xs tracking-wider transition cursor-pointer flex items-center gap-2"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>CONFIRM SIDES ➔</span>
              </button>
            </div>
          </motion.div>

          {/* AUTHENTIC PES CONSOLE INFO CONTROL BAR (OUTSIDE DIV CONTAINER - FIXED AT BOTTOM LEFT SCREEN) */}
          <div className="fixed bottom-6 left-8 z-50 flex items-center gap-6 text-xs font-sans text-slate-200 select-none pointer-events-auto">
            <div className="flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-[#17FFBF] text-[#05090C] font-black flex items-center justify-center text-[10px] shadow">
                A
              </span>
              <span className="font-semibold text-white">Confirm</span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-[#FF4655] text-white font-black flex items-center justify-center text-[10px] shadow">
                B
              </span>
              <span className="font-semibold text-slate-300">Return</span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-[#00D8F6] text-[#05090C] font-black flex items-center justify-center text-[10px] shadow">
                X
              </span>
              <span className="font-semibold text-slate-300">Edit Personal Preset</span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-[#FFD13B] text-[#05090C] font-black flex items-center justify-center text-[10px] shadow">
                Y
              </span>
              <span className="font-semibold text-slate-300">Coach Mode</span>
            </div>

            <div className="flex items-center gap-1.5">
              <div className="flex items-center gap-1 bg-[#1a232b] border border-white/20 px-2 py-0.5 rounded text-[10px] font-mono font-bold text-white">
                <span>LT</span>
                <span>RT</span>
              </div>
              <span className="font-semibold text-slate-300">Select Personal Preset</span>
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
