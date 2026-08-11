import React, { useState, useEffect } from 'react';
import { Gamepad, Keyboard, Smartphone, Bot, ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

export type DeviceType = 'keyboard1' | 'keyboard2' | 'gamepad0' | 'gamepad1' | 'hp_remote' | 'ai_bot';

interface ControllerSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmStart: (p1Device: DeviceType, p2Device: DeviceType) => void;
  peerRoomId: string;
  isPeerConnected: boolean;
  selectedMode: '1v1' | '2vBot';
}

interface ControllerSlot {
  id: DeviceType;
  name: string;
  type: 'keyboard' | 'gamepad' | 'smartphone' | 'bot';
  side: 'home' | 'neutral' | 'away';
  label: string;
}

export const ControllerSelectModal: React.FC<ControllerSelectModalProps> = ({
  isOpen,
  onClose,
  onConfirmStart,
  peerRoomId,
  isPeerConnected,
  selectedMode,
}) => {
  const [ipAddress, setIpAddress] = useState<string>(() => window.location.hostname || '192.168.1.100');

  // EA FC 25 Controller Slots (Icons Only)
  const [controllers, setControllers] = useState<ControllerSlot[]>([
    { id: 'keyboard1', name: 'KEYBOARD WASD', type: 'keyboard', side: 'home', label: 'User 1' },
    { id: 'keyboard2', name: 'KEYBOARD PANAH', type: 'keyboard', side: selectedMode === '2vBot' ? 'home' : 'away', label: selectedMode === '2vBot' ? 'User 2' : 'User 2' },
    { id: 'gamepad0', name: 'GAMEPAD USB 1', type: 'gamepad', side: 'neutral', label: 'Controller 1' },
    { id: 'hp_remote', name: 'HP REMOTE WIRELESS', type: 'smartphone', side: 'neutral', label: 'HP Remote' },
  ]);

  // Keyboard navigation for Select Sides
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'a' || e.key === 'A') {
        moveController('keyboard1', 'left');
      } else if (e.key === 'd' || e.key === 'D') {
        moveController('keyboard1', 'right');
      } else if (e.key === 'ArrowLeft') {
        moveController('keyboard2', 'left');
      } else if (e.key === 'ArrowRight') {
        moveController('keyboard2', 'right');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const controllerUrl = `http://${ipAddress}:5173/controller`;
  const isHpSelected = controllers.some((c) => c.id === 'hp_remote' && c.side !== 'neutral');

  const moveController = (id: DeviceType, dir: 'left' | 'right') => {
    setControllers((prev) =>
      prev.map((c) => {
        if (c.id !== id) return c;
        if (dir === 'left') {
          if (c.side === 'away') return { ...c, side: 'neutral' };
          if (c.side === 'neutral') return { ...c, side: 'home' };
        } else if (dir === 'right') {
          if (c.side === 'home') return { ...c, side: 'neutral' };
          if (c.side === 'neutral') return { ...c, side: 'away' };
        }
        return c;
      })
    );
  };

  const homeControllers = controllers.filter((c) => c.side === 'home');
  const awayControllers = controllers.filter((c) => c.side === 'away');

  const p1Device = homeControllers[0]?.id || 'keyboard1';
  const p2Device = selectedMode === '2vBot' ? 'ai_bot' : (awayControllers[0]?.id || 'keyboard2');

  const canProceed = homeControllers.length > 0 && (selectedMode === '2vBot' || awayControllers.length > 0);

  // Number of silent silhouette slots per column (EA FC 25 aesthetic)
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

        {/* AUTHENTIC EA FC 25 ICON-ONLY SELECT SIDES BOARD */}
        <div className="w-full bg-[#131916] border border-white/10 shadow-2xl overflow-hidden relative min-h-[380px]">
          {/* HEADER BAR: Home (Left) | Away (Right) */}
          <div className="grid grid-cols-2 text-white font-bold text-2xl px-12 py-4 border-b border-white/10">
            <div className="text-left pl-4 font-['Poppins',sans-serif]">Home</div>
            <div className="text-right pr-4 font-['Poppins',sans-serif]">Away</div>
          </div>

          {/* BOARD GRID: 3 COLUMNS (HOME | NEUTRAL | AWAY) & HORIZONTAL DIVIDER ROWS */}
          <div className="relative w-full p-4 sm:p-6 flex flex-col gap-5">
            {/* ROW LELAN: 6 PARALLEL CONTROLLER SLOTS */}
            {SILHOUETTE_SLOTS.map((slotIndex) => {
              const item = controllers[slotIndex];

              return (
                <div
                  key={slotIndex}
                  className="grid grid-cols-3 items-center min-h-[56px] border-b border-white/5 pb-2"
                >
                  {/* COLUMN 1: HOME (LEFT) */}
                  <div className="flex items-center justify-start pl-6">
                    {item && item.side === 'home' ? (
                      <div className="flex flex-col items-center relative group">
                        {/* User Label Badge */}
                        <span className="text-[10px] font-mono text-slate-400 mb-1 tracking-wider">
                          {item.label}
                        </span>

                        {/* Active Controller Icon Box (Electric Cyan/Mint Border Offset) */}
                        <div className="relative flex items-center gap-2 p-2 bg-[#1b2420] border-2 border-[#17FFBF] rounded-xl shadow-lg shadow-[#17FFBF]/20">
                          {item.type === 'keyboard' && <Keyboard className="w-9 h-9 text-[#17FFBF]" />}
                          {item.type === 'gamepad' && <Gamepad className="w-9 h-9 text-[#17FFBF]" />}
                          {item.type === 'smartphone' && <Smartphone className="w-9 h-9 text-[#17FFBF]" />}

                          {/* Arrow Right Move Button */}
                          <button
                            onClick={() => moveController(item.id, 'right')}
                            className="p-1 bg-[#05090C] hover:bg-[#17FFBF] text-white hover:text-[#05090C] transition cursor-pointer"
                            title="Geser Kanan"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ) : (
                      /* Silent Dark Controller Silhouette Icon */
                      <Gamepad className="w-10 h-10 text-white/10 ml-3" />
                    )}
                  </div>

                  {/* COLUMN 2: NEUTRAL (CENTER) */}
                  <div className="flex items-center justify-center">
                    {item && item.side === 'neutral' ? (
                      <div className="flex items-center gap-2 bg-[#1b2420] border border-white/20 p-2 rounded-xl">
                        <button
                          onClick={() => moveController(item.id, 'left')}
                          className="p-1 bg-[#05090C] hover:bg-[#FF4655] text-white transition cursor-pointer"
                          title="Geser Home (Kiri)"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>

                        {item.type === 'keyboard' && <Keyboard className="w-7 h-7 text-slate-300" />}
                        {item.type === 'gamepad' && <Gamepad className="w-7 h-7 text-slate-300" />}
                        {item.type === 'smartphone' && <Smartphone className="w-7 h-7 text-slate-300" />}

                        <button
                          onClick={() => moveController(item.id, 'right')}
                          className="p-1 bg-[#05090C] hover:bg-[#17FFBF] text-white transition cursor-pointer"
                          title="Geser Away (Kanan)"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      /* Silent Dark Controller Silhouette Icon */
                      <Gamepad className="w-10 h-10 text-white/10" />
                    )}
                  </div>

                  {/* COLUMN 3: AWAY (RIGHT) */}
                  <div className="flex items-center justify-end pr-6">
                    {selectedMode === '2vBot' && slotIndex === 0 ? (
                      /* Mode 2vBot: Fixed AI Bot Icon on Away */
                      <div className="flex flex-col items-center">
                        <span className="text-[10px] font-mono text-[#17FFBF] mb-1">AI BOT</span>
                        <div className="p-2 bg-[#1b2420] border-2 border-[#17FFBF] rounded-xl">
                          <Bot className="w-9 h-9 text-[#17FFBF]" />
                        </div>
                      </div>
                    ) : item && item.side === 'away' ? (
                      <div className="flex flex-col items-center relative group">
                        <span className="text-[10px] font-mono text-slate-400 mb-1 tracking-wider">
                          {item.label}
                        </span>

                        <div className="relative flex items-center gap-2 p-2 bg-[#1b2420] border-2 border-[#17FFBF] rounded-xl shadow-lg shadow-[#17FFBF]/20">
                          <button
                            onClick={() => moveController(item.id, 'left')}
                            className="p-1 bg-[#05090C] hover:bg-[#17FFBF] text-white hover:text-[#05090C] transition cursor-pointer"
                            title="Geser Kiri"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>

                          {item.type === 'keyboard' && <Keyboard className="w-9 h-9 text-[#17FFBF]" />}
                          {item.type === 'gamepad' && <Gamepad className="w-9 h-9 text-[#17FFBF]" />}
                          {item.type === 'smartphone' && <Smartphone className="w-9 h-9 text-[#17FFBF]" />}
                        </div>
                      </div>
                    ) : (
                      /* Silent Dark Controller Silhouette Icon */
                      <Gamepad className="w-10 h-10 text-white/10 mr-3" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* HP REMOTE QR CODE INTEGRATION (If HP Remote is active) */}
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
                  {isPeerConnected ? '🟢 HP CONNECTED' : '⏳ SCAN QR HP...'}
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
            GESER SISI: <span className="text-[#FF4655] font-bold">A/D (P1)</span> | <span className="text-[#17FFBF] font-bold">◄/► PANAH (P2)</span>
          </div>

          <button
            disabled={!canProceed}
            onClick={() => onConfirmStart(p1Device, p2Device)}
            className={`py-3.5 px-8 clip-parallelogram font-mono font-black text-sm tracking-wider transition cursor-pointer flex items-center gap-2 ${
              canProceed
                ? 'bg-[#17FFBF] hover:bg-[#4BFFCE] text-[#05090C] shadow-lg shadow-[#17FFBF]/30'
                : 'bg-[#05090C] border border-white/10 text-slate-600 cursor-not-allowed opacity-50'
            }`}
          >
            <Play className="w-4 h-4 fill-current" />
            <span>CONFIRM SIDES ➔</span>
          </button>
        </div>
      </div>
    </div>
  );
};
