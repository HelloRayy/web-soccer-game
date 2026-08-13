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
  const [showQRPopover, setShowQRPopover] = useState<boolean>(false);

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
            className="bg-[#0e1424] border border-white/10 max-w-4xl w-full p-4 sm:p-5 shadow-2xl flex flex-col gap-4 text-[#E2F1F8] relative max-h-[95vh] overflow-y-auto rounded-none will-change-transform transform-gpu"
          >
            {/* AUTHENTIC PES 2021 LIGHT ICE BOARD (Presisi Gambar Acuan 3: Light Ice Board, Dark Navy Header) */}
            <div className="w-full bg-[#DCE4F2] border border-slate-400/60 shadow-2xl overflow-hidden relative text-[#0C1026]">
              {/* HEADER BAR: Home (Left) | Away (Right) - DARK NAVY BANNER (Presisi Gambar Acuan 3) */}
              <div className="relative grid grid-cols-2 text-white font-bold text-2xl py-3 bg-[#0C1026] border-b border-slate-700">
                <div className="text-center font-['Outfit',sans-serif] tracking-tight">Home</div>
                <div className="text-center font-['Outfit',sans-serif] tracking-tight">Away</div>

                <button
                  onClick={onClose}
                  className="absolute top-1/2 -translate-y-1/2 right-3 p-2 bg-[#060a18] border border-white/10 text-slate-400 hover:text-white transition cursor-pointer"
                  title="Tutup Modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* 2-COLUMN LIGHT ICE BOARD BODY WITH CLEAN ROW DIVIDERS */}
              <div className="relative w-full p-4 grid grid-cols-2 divide-x divide-slate-400/40 max-h-[340px] sm:max-h-[380px] overflow-y-auto custom-scrollbar bg-[#DCE4F2]">
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
                            <span className="text-[11px] font-bold text-[#0C1026] tracking-wide font-sans">
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

                          {/* LARGE CONTROLLER ICON (CYAN/MINT HIGH-CONTRAST ICON) */}
                          <div className="flex flex-col items-center gap-1">
                            <div className="flex items-center gap-3">
                              <button
                                onClick={() => cycleHomeDevice(slotIndex, -1)}
                                className="p-1 text-slate-600 hover:text-[#0C1026] transition cursor-pointer"
                                title="Peranti Sebelumnya"
                              >
                                <ChevronLeft className="w-5 h-5" />
                              </button>

                              <div className="text-[#00C896] p-1">
                                {dev.type === 'keyboard' && <Keyboard className="w-14 h-14" />}
                                {dev.type === 'gamepad' && <Gamepad className="w-14 h-14" />}
                                {dev.type === 'smartphone' && <Smartphone className="w-14 h-14 text-[#00C896]" />}
                                {dev.type === 'bot' && <Bot className="w-14 h-14 text-amber-600" />}
                              </div>

                              <button
                                onClick={() => cycleHomeDevice(slotIndex, 1)}
                                className="p-1 text-slate-600 hover:text-[#0C1026] transition cursor-pointer"
                                title="Peranti Selanjutnya"
                              >
                                <ChevronRight className="w-5 h-5" />
                              </button>
                            </div>

                            {/* HP REMOTE INTERACTIVE BUTTON */}
                            {dev.type === 'smartphone' && (
                              <button
                                onClick={() => setShowQRPopover(true)}
                                className="flex items-center gap-1.5 px-3 py-1 bg-[#0C1026] text-[#00F5B4] hover:bg-[#151d38] transition cursor-pointer text-[11px] font-bold shadow rounded"
                              >
                                <Smartphone className="w-3.5 h-3.5" />
                                <span>Connect</span>
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    }

                    if (isAddButtonSlot && homeSeats.length < 5) {
                      return (
                        <div key={slotIndex} className="w-full py-3 flex justify-center border-b border-slate-400/30">
                          <button
                            onClick={addHomeSeat}
                            className="flex items-center gap-1.5 px-3 py-1 bg-[#0C1026] text-[#00F5B4] hover:bg-[#151d38] transition cursor-pointer rounded text-xs font-bold shadow"
                          >
                            <Plus className="w-4 h-4" />
                            <span>Tambah Player</span>
                          </button>
                        </div>
                      );
                    }

                    // Large Light Slate Controller Silhouettes (Presisi Gambar Acuan 3)
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
                            <span className="text-[11px] font-bold text-[#0C1026] tracking-wide font-sans">
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

                          {/* LARGE CONTROLLER ICON (CYAN/MINT HIGH-CONTRAST ICON) */}
                          <div className="flex flex-col items-center gap-1">
                            <div className="flex items-center gap-3">
                              {selectedMode === '2vBot' && slotIndex === 0 ? (
                                <div className="text-amber-600 p-1">
                                  <Bot className="w-14 h-14" />
                                </div>
                              ) : (
                                <>
                                  <button
                                    onClick={() => cycleAwayDevice(slotIndex, -1)}
                                    className="p-1 text-slate-600 hover:text-[#0C1026] transition cursor-pointer"
                                    title="Peranti Sebelumnya"
                                  >
                                    <ChevronLeft className="w-5 h-5" />
                                  </button>

                                  <div className="text-[#00C896] p-1">
                                    {dev.type === 'keyboard' && <Keyboard className="w-14 h-14" />}
                                    {dev.type === 'gamepad' && <Gamepad className="w-14 h-14" />}
                                    {dev.type === 'smartphone' && <Smartphone className="w-14 h-14 text-[#00C896]" />}
                                    {dev.type === 'bot' && <Bot className="w-14 h-14 text-amber-600" />}
                                  </div>

                                  <button
                                    onClick={() => cycleAwayDevice(slotIndex, 1)}
                                    className="p-1 text-slate-600 hover:text-[#0C1026] transition cursor-pointer"
                                    title="Peranti Selanjutnya"
                                  >
                                    <ChevronRight className="w-5 h-5" />
                                  </button>
                                </>
                              )}
                            </div>

                            {/* HP REMOTE INTERACTIVE BUTTON */}
                            {dev.type === 'smartphone' && (
                              <button
                                onClick={() => setShowQRPopover(true)}
                                className="flex items-center gap-1.5 px-3 py-1 bg-[#0C1026] text-[#00F5B4] hover:bg-[#151d38] transition cursor-pointer text-[11px] font-bold shadow rounded"
                              >
                                <Smartphone className="w-3.5 h-3.5" />
                                <span>Connect</span>
                              </button>
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
                            className="flex items-center gap-1.5 px-3 py-1 bg-[#0C1026] text-[#00F5B4] hover:bg-[#151d38] transition cursor-pointer rounded text-xs font-bold shadow"
                          >
                            <Plus className="w-4 h-4" />
                            <span>Tambah Player</span>
                          </button>
                        </div>
                      );
                    }

                    // Large Light Slate Controller Silhouettes (Presisi Gambar Acuan 3)
                    return (
                      <div key={slotIndex} className="w-full py-3.5 flex justify-center border-b border-slate-400/30">
                        <Gamepad className="w-14 h-14 text-[#94A5C4]/60" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* BOTTOM ACTION BAR (DARK NAVY BANNER - PRESISI PES 2021) */}
            <div className="bg-[#0C1026] px-6 py-4 border-t border-slate-700 flex items-center justify-between font-mono">
              <div className="flex items-center gap-4 text-xs">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <kbd className="px-2 py-1 bg-white/10 rounded text-[#00F5B4] font-bold">W/A/S/D</kbd> P1 Keyboard
                </span>
                <span className="text-slate-300 flex items-center gap-1.5">
                  <kbd className="px-2 py-1 bg-white/10 rounded text-[#00F5B4] font-bold">ARROWS</kbd> P2 Keyboard
                </span>
              </div>

              <button
                onClick={() => onConfirmStart(p1Device, p2Device)}
                className="py-2.5 px-6 clip-parallelogram bg-[#00F5B4] hover:bg-[#34FFC8] text-[#081020] font-mono font-black text-xs tracking-wider transition cursor-pointer flex items-center gap-2"
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

          {/* SLEEK FLOATING QR CODE POPOVER OVERLAY (NO AI-SLOP, CLEAN SENTENCE CASE) */}
          <AnimatePresence>
            {showQRPopover && (
              <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                  className="bg-[#151917] border border-[#17FFBF]/40 max-w-md w-full p-6 shadow-2xl flex flex-col items-center gap-4 text-[#E2F1F8] relative"
                >
                  <button
                    onClick={() => setShowQRPopover(false)}
                    className="absolute top-4 right-4 p-1.5 bg-[#0c100e] border border-white/10 text-slate-400 hover:text-white transition cursor-pointer"
                    title="Tutup"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="flex items-center gap-2 text-[#17FFBF] font-bold text-base tracking-wide">
                    <Smartphone className="w-5 h-5" />
                    <span>Sambungkan HP Remote</span>
                  </div>

                  <div className="bg-white p-3 rounded-lg shadow-inner flex flex-col items-center">
                    <QRCodeSVG value={controllerUrl} size={160} />
                  </div>

                  <p className="text-xs text-slate-300 text-center leading-relaxed font-sans px-2">
                    Scan QR Code ini menggunakan kamera ponsel Anda untuk menjadikan HP sebagai joystick nirkabel. 1 QR dapat di-scan oleh beberapa HP sekaligus.
                  </p>

                  <div className="flex items-center gap-2 w-full justify-center">
                    <span className={`px-3 py-1 text-xs font-semibold font-mono rounded ${
                      isPeerConnected ? 'bg-[#17FFBF]/20 text-[#17FFBF] border border-[#17FFBF]/40' : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    }`}>
                      {isPeerConnected ? `📱 ${connectedPeerCount || 1} HP terhubung` : '⏳ Menunggu koneksi HP...'}
                    </span>
                  </div>

                  <div className="bg-[#0c100e] p-2 border border-white/10 text-[11px] font-mono text-cyan-300 w-full flex justify-between items-center rounded">
                    <span className="truncate pr-2">{controllerUrl}</span>
                    <span className="text-[#17FFBF] font-bold shrink-0">ROOM: {peerRoomId}</span>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      )}
    </AnimatePresence>
  );
};
