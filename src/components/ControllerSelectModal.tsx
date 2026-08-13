import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad, Keyboard, Smartphone, Bot, ChevronRight, ChevronLeft, Play, X, Plus } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

export type DeviceType = 'keyboard1' | 'keyboard2' | 'gamepad0' | 'gamepad1' | 'hp_remote' | 'ai_bot';

interface ControllerOption {
  id: DeviceType;
  name: string;
  badge: string;
  type: 'keyboard' | 'gamepad' | 'smartphone' | 'bot';
}

const DEVICE_OPTIONS: ControllerOption[] = [
  { id: 'keyboard1', name: 'KEYBOARD WASD', badge: 'WASD', type: 'keyboard' },
  { id: 'keyboard2', name: 'KEYBOARD PANAH', badge: 'PANAH', type: 'keyboard' },
  { id: 'gamepad0', name: 'GAMEPAD 1', badge: 'USB 1', type: 'gamepad' },
  { id: 'gamepad1', name: 'GAMEPAD 2', badge: 'USB 2', type: 'gamepad' },
  { id: 'hp_remote', name: 'HP REMOTE WIRELESS', badge: 'HP REMOTE', type: 'smartphone' },
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
            className="w-full max-w-4xl bg-[#111513] border border-white/10 shadow-2xl overflow-hidden relative text-slate-100 will-change-transform transform-gpu"
          >
            {/* HEADER BAR: Home (Left) | Away (Right) - DARK SLATE GRAPHITE BANNER */}
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

              {/* 5 SYMMETRICAL UNIFIED ROWS (100% PERFECT HORIZONTAL & VERTICAL ALIGNMENT) */}
              <div className="relative w-full p-4 flex flex-col divide-y divide-white/10 max-h-[340px] sm:max-h-[380px] overflow-y-auto custom-scrollbar bg-[#111513]">
                {ALL_5_SLOTS.map((slotIndex) => {
                  // HOME SEAT DATA
                  const isHomeActive = slotIndex < homeSeats.length;
                  const isHomeAdd = slotIndex === homeSeats.length;
                  const homeDevIdx = homeSeats[slotIndex];
                  const homeDev = DEVICE_OPTIONS[homeDevIdx] || DEVICE_OPTIONS[0];
                  const homeUserNum = slotIndex * 2 + 1;

                  // AWAY SEAT DATA
                  const isAwayActive = slotIndex < awaySeats.length;
                  const isAwayAdd = slotIndex === awaySeats.length;
                  const awayDevIdx = awaySeats[slotIndex];
                  const awayDev = selectedMode === '2vBot' && slotIndex === 0
                    ? { id: 'ai_bot' as DeviceType, name: 'AI ENEMY BOT', badge: 'BOT', type: 'bot' as const }
                    : (DEVICE_OPTIONS[awayDevIdx] || DEVICE_OPTIONS[1]);
                  const awayUserNum = slotIndex === 0 && selectedMode === '2vBot' ? 'AI Bot' : `User ${slotIndex * 2 + 2}`;

                  return (
                    <div key={slotIndex} className="grid grid-cols-2 divide-x divide-white/10 min-h-[148px] items-center">
                      {/* HOME CELL */}
                      <div className="flex flex-col items-center justify-center p-3 h-full relative overflow-hidden">
                        {isHomeActive ? (
                          <>
                            {/* HALF-WIDTH LEFT TRIGGER ZONE WITH LIGHT GRAY HOVER */}
                            <button
                              onClick={() => cycleHomeDevice(slotIndex, -1)}
                              className="absolute left-0 top-0 bottom-0 w-1/2 h-full flex items-center justify-start pl-4 text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer group z-0"
                              title="Peranti Sebelumnya"
                            >
                              <ChevronLeft className="w-7 h-7 stroke-[2.5] group-hover:scale-110 transition-transform" />
                            </button>

                            {/* HALF-WIDTH RIGHT TRIGGER ZONE WITH LIGHT GRAY HOVER */}
                            <button
                              onClick={() => cycleHomeDevice(slotIndex, 1)}
                              className="absolute right-0 top-0 bottom-0 w-1/2 h-full flex items-center justify-end pr-4 text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer group z-0"
                              title="Peranti Selanjutnya"
                            >
                              <ChevronRight className="w-7 h-7 stroke-[2.5] group-hover:scale-110 transition-transform" />
                            </button>

                            {/* CENTER CONTENT */}
                            <div className="flex flex-col items-center gap-1 z-10 pointer-events-none">
                              <div className="flex items-center gap-2 pointer-events-auto">
                                <span className="text-[11px] font-bold text-[#3B82F6] tracking-wide font-mono">
                                  User {homeUserNum}
                                </span>
                                {slotIndex > 0 && (
                                  <button
                                    onClick={() => removeHomeSeat(slotIndex)}
                                    className="text-[10px] text-red-400 hover:text-red-300 underline cursor-pointer"
                                  >
                                    Hapus
                                  </button>
                                )}
                              </div>

                              <div className="text-white p-1 flex flex-col items-center">
                                {homeDev.type === 'keyboard' && <Keyboard className="w-14 h-14" />}
                                {homeDev.type === 'gamepad' && <Gamepad className="w-14 h-14" />}
                                {homeDev.type === 'smartphone' && <Smartphone className="w-14 h-14 text-[#3B82F6]" />}
                                {homeDev.type === 'bot' && <Bot className="w-14 h-14 text-amber-400" />}
                              </div>

                              <span className="text-[10px] font-mono font-semibold text-slate-300 uppercase tracking-widest">
                                {homeDev.name}
                              </span>

                              {homeDev.type === 'smartphone' && (
                                <button
                                  onClick={() => setShowQRPopover(true)}
                                  className="flex items-center gap-1.5 px-2.5 py-0.5 bg-[#1a2332] border border-blue-500/40 hover:border-blue-500 hover:bg-blue-600/10 text-[#3B82F6] transition cursor-pointer text-[10px] font-semibold shadow rounded mt-0.5 pointer-events-auto"
                                >
                                  <Smartphone className="w-3 h-3" />
                                  <span>Connect</span>
                                </button>
                              )}
                            </div>
                          </>
                        ) : isHomeAdd && homeSeats.length < 5 ? (
                          <button
                            onClick={addHomeSeat}
                            className="w-full h-full absolute inset-0 flex items-center justify-center text-white/30 hover:text-[#3B82F6] hover:bg-white/10 transition-colors cursor-pointer group"
                            title="Tambah Player"
                          >
                            <Plus className="w-10 h-10 stroke-[2.5] group-hover:scale-110 transition-transform" />
                          </button>
                        ) : (
                          <Gamepad className="w-14 h-14 text-white/10" />
                        )}
                      </div>

                      {/* AWAY CELL */}
                      <div className="flex flex-col items-center justify-center p-3 h-full relative overflow-hidden">
                        {isAwayActive ? (
                          <>
                            {/* HALF-WIDTH LEFT TRIGGER ZONE WITH LIGHT GRAY HOVER */}
                            {!(selectedMode === '2vBot' && slotIndex === 0) && (
                              <button
                                onClick={() => cycleAwayDevice(slotIndex, -1)}
                                className="absolute left-0 top-0 bottom-0 w-1/2 h-full flex items-center justify-start pl-4 text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer group z-0"
                                title="Peranti Sebelumnya"
                              >
                                <ChevronLeft className="w-7 h-7 stroke-[2.5] group-hover:scale-110 transition-transform" />
                              </button>
                            )}

                            {/* HALF-WIDTH RIGHT TRIGGER ZONE WITH LIGHT GRAY HOVER */}
                            {!(selectedMode === '2vBot' && slotIndex === 0) && (
                              <button
                                onClick={() => cycleAwayDevice(slotIndex, 1)}
                                className="absolute right-0 top-0 bottom-0 w-1/2 h-full flex items-center justify-end pr-4 text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer group z-0"
                                title="Peranti Selanjutnya"
                              >
                                <ChevronRight className="w-7 h-7 stroke-[2.5] group-hover:scale-110 transition-transform" />
                              </button>
                            )}

                            {/* CENTER CONTENT */}
                            <div className="flex flex-col items-center gap-1 z-10 pointer-events-none">
                              <div className="flex items-center gap-2 pointer-events-auto">
                                <span className="text-[11px] font-bold text-[#3B82F6] tracking-wide font-mono">
                                  {awayUserNum}
                                </span>
                                {slotIndex > 0 && (
                                  <button
                                    onClick={() => removeAwaySeat(slotIndex)}
                                    className="text-[10px] text-red-400 hover:text-red-300 underline cursor-pointer"
                                  >
                                    Hapus
                                  </button>
                                )}
                              </div>

                              <div className="text-white p-1 flex flex-col items-center">
                                {awayDev.type === 'keyboard' && <Keyboard className="w-14 h-14" />}
                                {awayDev.type === 'gamepad' && <Gamepad className="w-14 h-14" />}
                                {awayDev.type === 'smartphone' && <Smartphone className="w-14 h-14 text-[#3B82F6]" />}
                                {awayDev.type === 'bot' && <Bot className="w-14 h-14 text-amber-400" />}
                              </div>

                              <span className="text-[10px] font-mono font-semibold text-slate-300 uppercase tracking-widest">
                                {awayDev.name}
                              </span>

                              {awayDev.type === 'smartphone' && (
                                <button
                                  onClick={() => setShowQRPopover(true)}
                                  className="flex items-center gap-1.5 px-2.5 py-0.5 bg-[#1a2332] border border-blue-500/40 hover:border-blue-500 hover:bg-blue-600/10 text-[#3B82F6] transition cursor-pointer text-[10px] font-semibold shadow rounded mt-0.5 pointer-events-auto"
                                >
                                  <Smartphone className="w-3 h-3" />
                                  <span>Connect</span>
                                </button>
                              )}
                            </div>
                          </>
                        ) : isAwayAdd && awaySeats.length < 5 ? (
                          <button
                            onClick={addAwaySeat}
                            className="w-full h-full absolute inset-0 flex items-center justify-center text-white/30 hover:text-[#3B82F6] hover:bg-white/10 transition-colors cursor-pointer group"
                            title="Tambah Player"
                          >
                            <Plus className="w-10 h-10 stroke-[2.5] group-hover:scale-110 transition-transform" />
                          </button>
                        ) : (
                          <Gamepad className="w-14 h-14 text-white/10" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

            {/* BOTTOM ACTION BAR (INSIDE MODAL - 100% MATCHMODE MODAL STYLE) */}
            <div className="bg-[#1b201d] px-6 py-4 border-t border-white/10 flex items-center justify-between font-mono">
              <div className="flex items-center gap-4 text-xs">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <kbd className="px-2 py-1 bg-white/10 rounded text-[#3B82F6] font-bold">W/A/S/D</kbd> P1 Keyboard
                </span>
                <span className="text-slate-300 flex items-center gap-1.5">
                  <kbd className="px-2 py-1 bg-white/10 rounded text-[#3B82F6] font-bold">ARROWS</kbd> P2 Keyboard
                </span>
              </div>

              <button
                onClick={() => onConfirmStart(p1Device, p2Device)}
                className="py-2.5 px-6 clip-parallelogram bg-[#2563EB] hover:bg-[#3B82F6] text-white font-mono font-black text-xs tracking-wider transition cursor-pointer flex items-center gap-2"
              >
                <span className="w-4 h-4 rounded-full bg-white text-[#2563EB] font-black flex items-center justify-center text-[10px] shadow leading-none">
                  A
                </span>
                <span>CONFIRM SIDES ➔</span>
              </button>
            </div>
          </motion.div>

          {/* AUTHENTIC PES CONSOLE INFO CONTROL BAR (OUTSIDE DIV CONTAINER - FIXED AT BOTTOM LEFT SCREEN) */}
          <div className="fixed bottom-6 left-8 z-50 flex items-center gap-6 text-xs font-sans text-slate-200 select-none pointer-events-auto">
            <div className="flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-[#2563EB] text-white font-black flex items-center justify-center text-[10px] shadow">
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

          {/* SLEEK FLOATING QR CODE POPOVER OVERLAY */}
          <AnimatePresence>
            {showQRPopover && (
              <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                  className="bg-[#151917] border border-blue-500/40 max-w-md w-full p-6 shadow-2xl flex flex-col items-center gap-4 text-[#E2F1F8] relative"
                >
                  <button
                    onClick={() => setShowQRPopover(false)}
                    className="absolute top-4 right-4 p-1.5 bg-[#0c100e] border border-white/10 text-slate-400 hover:text-white transition cursor-pointer"
                    title="Tutup"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="flex items-center gap-2 text-[#3B82F6] font-bold text-base tracking-wide">
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
                      isPeerConnected ? 'bg-blue-600/20 text-[#3B82F6] border border-blue-500/40' : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    }`}>
                      {isPeerConnected ? `📱 ${connectedPeerCount || 1} HP terhubung` : '⏳ Menunggu koneksi HP...'}
                    </span>
                  </div>

                  <div className="bg-[#0c100e] p-2 border border-white/10 text-[11px] font-mono text-cyan-300 w-full flex justify-between items-center rounded">
                    <span className="truncate pr-2">{controllerUrl}</span>
                    <span className="text-[#3B82F6] font-bold shrink-0">ROOM: {peerRoomId}</span>
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
