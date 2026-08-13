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
        <div className="fixed inset-0 z-50 bg-[#05090C]/96 backdrop-blur-lg flex items-center justify-center p-4 sm:p-6 select-none font-['Poppins',sans-serif]">
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 80 }}
            transition={{ type: 'spring', stiffness: 900, damping: 45 }}
            className="bg-[#0e1311] border border-white/10 max-w-4xl w-full p-6 sm:p-8 shadow-2xl flex flex-col gap-5 text-[#E2F1F8] relative max-h-[95vh] overflow-y-auto rounded-none"
          >
            {/* DEDICATED UN-OVERLAPPED MODAL HEADER BAR */}
            <div className="flex justify-between items-center w-full border-b border-white/10 pb-3 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#17FFBF] rounded-full animate-pulse" />
                <span className="text-xs font-bold text-[#17FFBF] uppercase tracking-widest">
                  SELECT SIDES & CONTROLLER ASSIGNMENT
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 bg-[#05090C] border border-white/10 text-slate-400 hover:text-white transition cursor-pointer"
                title="Tutup Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* AUTHENTIC PES CONSOLE LIGHT BOARD (Presisi 100% Gambar Acuan: White/Light Blue Board, Icon Besar tanpa Border Box) */}
            <div className="w-full bg-[#D4DDF0] border border-slate-400/50 shadow-2xl overflow-hidden relative text-[#0B1026]">
              {/* HEADER BAR: Home (Left) | Away (Right) - DARK NAVY BANNER */}
              <div className="grid grid-cols-2 text-white font-bold text-2xl py-3 bg-[#0C1024] border-b border-slate-700">
                <div className="text-center font-['Outfit',sans-serif] tracking-tight">Home</div>
                <div className="text-center font-['Outfit',sans-serif] tracking-tight">Away</div>
              </div>

              {/* 2-COLUMN LIGHT BOARD BODY WITH HORIZONTAL ROW DIVIDERS */}
              <div className="relative w-full p-4 grid grid-cols-2 divide-x divide-slate-400/40 max-h-[340px] sm:max-h-[380px] overflow-y-auto custom-scrollbar bg-[#D8E1F0]">
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
                        <div key={slotIndex} className="w-full flex flex-col items-center py-2.5 border-b border-slate-400/30 relative group">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-[11px] font-bold text-[#0C1024] tracking-wide">
                              User {userNum}
                            </span>
                            {slotIndex > 0 && (
                              <button
                                onClick={() => removeHomeSeat(slotIndex)}
                                className="text-[10px] text-red-600 hover:text-red-700 font-bold underline"
                              >
                                Hapus
                              </button>
                            )}
                          </div>

                          {/* LARGE CONTROLLER ICON (TANPA BORDER / KOTAK, CYAN GLOW OUTLINE) */}
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => cycleHomeDevice(slotIndex, -1)}
                              className="p-1 text-slate-600 hover:text-[#0C1024] transition cursor-pointer"
                              title="Peranti Sebelumnya"
                            >
                              <ChevronLeft className="w-5 h-5" />
                            </button>

                            <div className="text-[#0C1024] filter drop-shadow-[0_0_8px_rgba(23,255,191,0.9)] p-1">
                              {dev.type === 'keyboard' && <Keyboard className="w-14 h-14" />}
                              {dev.type === 'gamepad' && <Gamepad className="w-14 h-14" />}
                              {dev.type === 'smartphone' && <Smartphone className="w-14 h-14 text-cyan-600" />}
                              {dev.type === 'bot' && <Bot className="w-14 h-14 text-amber-600" />}
                            </div>

                            <button
                              onClick={() => cycleHomeDevice(slotIndex, 1)}
                              className="p-1 text-slate-600 hover:text-[#0C1024] transition cursor-pointer"
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
                        <div key={slotIndex} className="w-full py-3 flex justify-center border-b border-slate-400/30">
                          <button
                            onClick={addHomeSeat}
                            className="flex items-center gap-1.5 px-3 py-1 bg-[#0C1024] text-[#17FFBF] hover:bg-[#151b38] transition cursor-pointer rounded-lg text-xs font-bold shadow"
                          >
                            <Plus className="w-4 h-4" />
                            <span>Tambah Player</span>
                          </button>
                        </div>
                      );
                    }

                    // Large Dark Grey Controller Silhouettes (No Border)
                    return (
                      <div key={slotIndex} className="w-full py-3.5 flex justify-center border-b border-slate-400/30">
                        <Gamepad className="w-14 h-14 text-[#94A5C4]/60" />
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
                        <div key={slotIndex} className="w-full flex flex-col items-center py-2.5 border-b border-slate-400/30 relative group">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-[11px] font-bold text-[#0C1024] tracking-wide">
                              {userNum}
                            </span>
                            {slotIndex > 0 && (
                              <button
                                onClick={() => removeAwaySeat(slotIndex)}
                                className="text-[10px] text-red-600 hover:text-red-700 font-bold underline"
                              >
                                Hapus
                              </button>
                            )}
                          </div>

                          {/* LARGE CONTROLLER ICON (TANPA BORDER / KOTAK, CYAN GLOW OUTLINE) */}
                          <div className="flex items-center gap-2">
                            {selectedMode === '2vBot' && slotIndex === 0 ? (
                              <div className="text-[#0C1024] filter drop-shadow-[0_0_8px_rgba(255,209,59,0.9)] p-1">
                                <Bot className="w-14 h-14 text-amber-600" />
                              </div>
                            ) : (
                              <>
                                <button
                                  onClick={() => cycleAwayDevice(slotIndex, -1)}
                                  className="p-1 text-slate-600 hover:text-[#0C1024] transition cursor-pointer"
                                  title="Peranti Sebelumnya"
                                >
                                  <ChevronLeft className="w-5 h-5" />
                                </button>

                                <div className="text-[#0C1024] filter drop-shadow-[0_0_8px_rgba(23,255,191,0.9)] p-1">
                                  {dev.type === 'keyboard' && <Keyboard className="w-14 h-14" />}
                                  {dev.type === 'gamepad' && <Gamepad className="w-14 h-14" />}
                                  {dev.type === 'smartphone' && <Smartphone className="w-14 h-14 text-cyan-600" />}
                                  {dev.type === 'bot' && <Bot className="w-14 h-14 text-amber-600" />}
                                </div>

                                <button
                                  onClick={() => cycleAwayDevice(slotIndex, 1)}
                                  className="p-1 text-slate-600 hover:text-[#0C1024] transition cursor-pointer"
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
                        <div key={slotIndex} className="w-full py-3 flex justify-center border-b border-slate-400/30">
                          <button
                            onClick={addAwaySeat}
                            className="flex items-center gap-1.5 px-3 py-1 bg-[#0C1024] text-[#17FFBF] hover:bg-[#151b38] transition cursor-pointer rounded-lg text-xs font-bold shadow"
                          >
                            <Plus className="w-4 h-4" />
                            <span>Tambah Player</span>
                          </button>
                        </div>
                      );
                    }

                    // Large Dark Grey Controller Silhouettes (No Border)
                    return (
                      <div key={slotIndex} className="w-full py-3.5 flex justify-center border-b border-slate-400/30">
                        <Gamepad className="w-14 h-14 text-[#94A5C4]/60" />
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

            {/* BOTTOM ACTION BAR */}
            <div className="flex items-center justify-between gap-4 pt-2 border-t border-white/10 font-mono">
              <div className="flex items-center gap-4 text-xs">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <kbd className="px-2 py-1 bg-white/10 rounded text-[#17FFBF] font-bold">W/A/S/D</kbd> P1 Keyboard
                </span>
                <span className="text-slate-400 flex items-center gap-1.5">
                  <kbd className="px-2 py-1 bg-white/10 rounded text-[#17FFBF] font-bold">ARROWS</kbd> P2 Keyboard
                </span>
              </div>

              <div className="text-xs text-slate-400 hidden sm:block">
                SLOT MAKSIMAL: <span className="text-[#17FFBF] font-bold">5 SEATS FULL PER SIDE</span>
              </div>

              <button
                onClick={() => onConfirmStart(p1Device, p2Device)}
                className="py-3.5 px-8 clip-parallelogram bg-[#17FFBF] hover:bg-[#4BFFCE] text-[#05090C] font-mono font-black text-sm tracking-wider shadow-lg shadow-[#17FFBF]/30 transition cursor-pointer flex items-center gap-2"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>CONFIRM SIDES ➔</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
