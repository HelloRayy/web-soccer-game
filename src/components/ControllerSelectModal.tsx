import React, { useState, useEffect } from 'react';
import { Gamepad, Keyboard, Smartphone, Bot, ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { detectLocalWifiIP } from '../services/networkService';

export type DeviceType = 'keyboard1' | 'keyboard2' | 'gamepad0' | 'gamepad1' | 'hp_remote' | 'ai_bot';

interface ControllerOption {
  id: DeviceType;
  name: string;
  sub: string;
  type: 'keyboard' | 'gamepad' | 'smartphone' | 'bot';
}

const P1_OPTIONS: ControllerOption[] = [
  { id: 'keyboard1', name: 'KEYBOARD WASD', sub: 'WASD + J/K/L + Space', type: 'keyboard' },
  { id: 'gamepad0', name: 'GAMEPAD USB 1', sub: 'Xbox / PS Controller 0', type: 'gamepad' },
  { id: 'hp_remote', name: 'HP REMOTE WIRELESS', sub: 'Scan QR Code HP Controller', type: 'smartphone' },
];

const P2_OPTIONS: ControllerOption[] = [
  { id: 'keyboard2', name: 'KEYBOARD PANAH', sub: 'Panah + Numpad / N,M', type: 'keyboard' },
  { id: 'gamepad1', name: 'GAMEPAD USB 2', sub: 'Xbox / PS Controller 1', type: 'gamepad' },
  { id: 'hp_remote', name: 'HP REMOTE WIRELESS', sub: 'Scan QR Code HP Controller', type: 'smartphone' },
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
  const [ipAddress, setIpAddress] = useState<string>(() => window.location.hostname || '192.168.1.100');

  // Auto-detect Wi-Fi LAN IP address when modal opens
  useEffect(() => {
    if (isOpen) {
      detectLocalWifiIP().then((ip) => setIpAddress(ip));
    }
  }, [isOpen]);

  const p1Dev = P1_OPTIONS[p1Index];
  const p2Dev = selectedMode === '2vBot' ? P2_OPTIONS[p2Index] : P2_OPTIONS[p2Index];

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'a' || e.key === 'A') {
        setP1Index((prev) => (prev - 1 + P1_OPTIONS.length) % P1_OPTIONS.length);
      } else if (e.key === 'd' || e.key === 'D') {
        setP1Index((prev) => (prev + 1) % P1_OPTIONS.length);
      } else if (e.key === 'ArrowLeft') {
        setP2Index((prev) => (prev - 1 + P2_OPTIONS.length) % P2_OPTIONS.length);
      } else if (e.key === 'ArrowRight') {
        setP2Index((prev) => (prev + 1) % P2_OPTIONS.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const controllerUrl = `http://${ipAddress}:5173/controller`;
  const isHpSelected = p1Dev.id === 'hp_remote' || (selectedMode === '1v1' && p2Dev.id === 'hp_remote') || (selectedMode === '2vBot' && p2Dev.id === 'hp_remote');

  return (
    <div className="fixed inset-0 z-50 bg-[#060D17]/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-150 select-none font-['Inter',sans-serif]">
      <div className="bg-[#0A1526] border-2 border-[#17FFBF]/60 max-w-4xl w-full p-6 sm:p-8 shadow-2xl flex flex-col gap-5 text-[#E2F1F8] relative max-h-[95vh] overflow-y-auto font-mono">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-[#060D17] border border-[#142840] text-slate-400 hover:text-white transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* PES SELECT SIDES HEADER */}
        <div className="text-center flex flex-col items-center gap-1">
          <div className="flex items-center gap-2 text-[#17FFBF] text-xs font-bold uppercase tracking-widest bg-[#17FFBF]/10 border border-[#17FFBF]/30 px-3 py-1 rounded-full">
            <Gamepad className="w-4 h-4" /> PES SELECT SIDES ({selectedMode.toUpperCase()})
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mt-1 font-['Plus_Jakarta_Sans',sans-serif] uppercase italic">
            CONTROLLER ASSIGNMENT
          </h2>
          <p className="text-xs text-slate-400">
            Atur peranti kontroler Player 1 {selectedMode === '2vBot' ? '& Player 2 Co-Op' : ''} dengan panah <span className="text-[#17FFBF] font-bold">◄ KIRI / KANAN ►</span>.
          </p>
        </div>

        {/* AUTHENTIC PES SELECT SIDES BOARD */}
        <div className="w-full bg-[#060D17] border-2 border-[#142840] overflow-hidden relative shadow-2xl">
          {/* BOARD TOP BAR: HOME (LEFT) | AWAY (RIGHT) */}
          <div className="grid grid-cols-2 bg-black text-white font-black text-xl sm:text-2xl font-['Plus_Jakarta_Sans',sans-serif] uppercase tracking-wider text-center py-2 border-b-2 border-[#142840]">
            <div className="bg-[#FF4655]/20 text-[#FF4655] py-1 border-r border-[#142840] flex items-center justify-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF4655] animate-pulse" /> HOME {selectedMode === '2vBot' ? '(P1 & P2 CO-OP)' : '(PLAYER 1)'}
            </div>
            <div className="bg-[#17FFBF]/20 text-[#17FFBF] py-1 flex items-center justify-center gap-2">
              {selectedMode === '2vBot' ? 'AWAY (AI BOTS)' : 'AWAY (PLAYER 2)'} <span className="w-3 h-3 rounded-full bg-[#17FFBF] animate-pulse" />
            </div>
          </div>

          {/* BOARD CANVAS (RED LEFT | GREEN RIGHT SPLIT TINT) */}
          <div className="relative w-full min-h-[280px] flex flex-col divide-y divide-[#142840]">
            {/* Background Gradient Overlay */}
            <div className="absolute inset-0 grid grid-cols-2 pointer-events-none z-0">
              <div className="bg-gradient-to-r from-[#FF4655]/15 to-transparent" />
              <div className="bg-gradient-to-l from-[#17FFBF]/15 to-transparent" />
            </div>

            {/* MODE 1V1: P1 ON HOME (LEFT) vs P2 ON AWAY (RIGHT) */}
            {selectedMode === '1v1' ? (
              <div className="relative z-10 grid grid-cols-2 divide-x divide-[#142840] items-center p-6 min-h-[240px]">
                {/* HOME (P1) CONTROLLER ROW */}
                <div className="flex flex-col items-center justify-center p-4 gap-3">
                  <span className="text-xs font-mono font-bold text-[#FF4655] uppercase tracking-widest">
                    PLAYER 1 CONTROLLER
                  </span>

                  <div className="flex items-center gap-4 bg-[#FF4655] text-[#060D17] px-6 py-3 font-black border-2 border-white shadow-xl">
                    <button
                      onClick={() => setP1Index((prev) => (prev - 1 + P1_OPTIONS.length) % P1_OPTIONS.length)}
                      className="p-1.5 bg-[#060D17] text-[#FF4655] hover:bg-white transition cursor-pointer"
                      title="Ganti Peranti P1 (Kiri)"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <div className="flex items-center gap-3">
                      {p1Dev.type === 'keyboard' && <Keyboard className="w-7 h-7" />}
                      {p1Dev.type === 'gamepad' && <Gamepad className="w-7 h-7" />}
                      {p1Dev.type === 'smartphone' && <Smartphone className="w-7 h-7" />}
                      <div className="text-left">
                        <div className="text-base font-black tracking-wider uppercase">{p1Dev.name}</div>
                        <div className="text-[10px] font-mono opacity-80">{p1Dev.sub}</div>
                      </div>
                    </div>

                    <button
                      onClick={() => setP1Index((prev) => (prev + 1) % P1_OPTIONS.length)}
                      className="p-1.5 bg-[#060D17] text-[#FF4655] hover:bg-white transition cursor-pointer"
                      title="Ganti Peranti P1 (Kanan)"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* AWAY (P2) CONTROLLER ROW */}
                <div className="flex flex-col items-center justify-center p-4 gap-3">
                  <span className="text-xs font-mono font-bold text-[#17FFBF] uppercase tracking-widest">
                    PLAYER 2 CONTROLLER
                  </span>

                  <div className="flex items-center gap-4 bg-[#17FFBF] text-[#060D17] px-6 py-3 font-black border-2 border-white shadow-xl">
                    <button
                      onClick={() => setP2Index((prev) => (prev - 1 + P2_OPTIONS.length) % P2_OPTIONS.length)}
                      className="p-1.5 bg-[#060D17] text-[#17FFBF] hover:bg-white transition cursor-pointer"
                      title="Ganti Peranti P2 (Kiri)"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <div className="flex items-center gap-3">
                      {p2Dev.type === 'keyboard' && <Keyboard className="w-7 h-7" />}
                      {p2Dev.type === 'gamepad' && <Gamepad className="w-7 h-7" />}
                      {p2Dev.type === 'smartphone' && <Smartphone className="w-7 h-7" />}
                      <div className="text-left">
                        <div className="text-base font-black tracking-wider uppercase">{p2Dev.name}</div>
                        <div className="text-[10px] font-mono opacity-80">{p2Dev.sub}</div>
                      </div>
                    </div>

                    <button
                      onClick={() => setP2Index((prev) => (prev + 1) % P2_OPTIONS.length)}
                      className="p-1.5 bg-[#060D17] text-[#17FFBF] hover:bg-white transition cursor-pointer"
                      title="Ganti Peranti P2 (Kanan)"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* MODE 2VBOT: P1 & P2 ON HOME (LEFT) vs AI BOT ON AWAY (RIGHT) */
              <div className="relative z-10 grid grid-cols-2 divide-x divide-[#142840] items-center p-6 min-h-[260px]">
                {/* HOME (P1 & P2 CO-OP INPUTS STACKED ON LEFT) */}
                <div className="flex flex-col items-center justify-center p-4 gap-4">
                  <span className="text-xs font-mono font-bold text-[#FF4655] uppercase tracking-widest">
                    CO-OP TEAM INPUTS (HOME)
                  </span>

                  {/* P1 CONTROLLER */}
                  <div className="flex items-center gap-4 bg-[#FF4655] text-[#060D17] px-5 py-2.5 font-black border-2 border-white shadow-xl w-full justify-between">
                    <button
                      onClick={() => setP1Index((prev) => (prev - 1 + P1_OPTIONS.length) % P1_OPTIONS.length)}
                      className="p-1 bg-[#060D17] text-[#FF4655] hover:bg-white transition cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-2.5">
                      {p1Dev.type === 'keyboard' && <Keyboard className="w-5 h-5" />}
                      {p1Dev.type === 'gamepad' && <Gamepad className="w-5 h-5" />}
                      {p1Dev.type === 'smartphone' && <Smartphone className="w-5 h-5" />}
                      <div className="text-left">
                        <div className="text-sm font-black tracking-wider uppercase">P1: {p1Dev.name}</div>
                      </div>
                    </div>

                    <button
                      onClick={() => setP1Index((prev) => (prev + 1) % P1_OPTIONS.length)}
                      className="p-1 bg-[#060D17] text-[#FF4655] hover:bg-white transition cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* P2 CO-OP CONTROLLER */}
                  <div className="flex items-center gap-4 bg-amber-400 text-[#060D17] px-5 py-2.5 font-black border-2 border-white shadow-xl w-full justify-between">
                    <button
                      onClick={() => setP2Index((prev) => (prev - 1 + P2_OPTIONS.length) % P2_OPTIONS.length)}
                      className="p-1 bg-[#060D17] text-amber-400 hover:bg-white transition cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-2.5">
                      {p2Dev.type === 'keyboard' && <Keyboard className="w-5 h-5" />}
                      {p2Dev.type === 'gamepad' && <Gamepad className="w-5 h-5" />}
                      {p2Dev.type === 'smartphone' && <Smartphone className="w-5 h-5" />}
                      <div className="text-left">
                        <div className="text-sm font-black tracking-wider uppercase">P2: {p2Dev.name}</div>
                      </div>
                    </div>

                    <button
                      onClick={() => setP2Index((prev) => (prev + 1) % P2_OPTIONS.length)}
                      className="p-1 bg-[#060D17] text-amber-400 hover:bg-white transition cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* AWAY (AI BOT ON RIGHT) */}
                <div className="flex flex-col items-center justify-center p-4 gap-3">
                  <span className="text-xs font-mono font-bold text-[#17FFBF] uppercase tracking-widest">
                    ENEMY OPPONENT (AWAY)
                  </span>

                  <div className="flex items-center gap-3 bg-[#17FFBF] text-[#060D17] px-6 py-4 font-black border-2 border-white shadow-xl">
                    <Bot className="w-8 h-8" />
                    <div className="text-left">
                      <div className="text-lg font-black tracking-wider uppercase">AI ENEMY BOTS</div>
                      <div className="text-[10px] font-mono opacity-80">Autonomous Computer Team</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* HP REMOTE QR CODE INTEGRATION */}
        {isHpSelected && (
          <div className="bg-[#060D17] border border-[#17FFBF]/40 p-4 rounded-2xl flex flex-col sm:flex-row items-center gap-4 text-xs">
            <div className="bg-white p-2 rounded shrink-0">
              <QRCodeSVG value={controllerUrl} size={90} />
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
              <div className="bg-[#0A1526] p-1.5 border border-[#142840] font-mono text-[11px] text-[#00D8F6] flex justify-between">
                <span>{controllerUrl}</span>
                <span>ROOM: {peerRoomId}</span>
              </div>
            </div>
          </div>
        )}

        {/* BOTTOM ACTION BAR */}
        <div className="flex items-center justify-between gap-4 pt-2 border-t border-[#142840]">
          <button
            onClick={onClose}
            className="px-5 py-3 bg-[#060D17] border border-[#142840] text-slate-400 hover:text-white font-bold text-xs cursor-pointer transition"
          >
            BATAL
          </button>

          <div className="text-xs text-slate-400 hidden sm:block font-mono">
            GANTI: <span className="text-[#FF4655] font-bold">A/D (P1)</span> | <span className="text-[#17FFBF] font-bold">◄/► PANAH (P2)</span>
          </div>

          <button
            onClick={() => onConfirmStart(p1Dev.id, p2Dev.id)}
            className="py-3.5 px-8 clip-parallelogram bg-[#17FFBF] hover:bg-[#4BFFCE] text-[#060D17] font-mono font-black text-sm tracking-wider shadow-lg shadow-[#17FFBF]/30 transition cursor-pointer flex items-center gap-2"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>LANJUT KE PILIH TIM (A) ➔</span>
          </button>
        </div>
      </div>
    </div>
  );
};
