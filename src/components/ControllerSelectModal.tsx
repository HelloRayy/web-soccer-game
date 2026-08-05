import React, { useState } from 'react';
import { Gamepad, Keyboard, Smartphone, CheckCircle, Play, X, ShieldAlert } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

export type DeviceType = 'keyboard1' | 'keyboard2' | 'gamepad0' | 'gamepad1' | 'hp_remote';

interface ControllerSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmStart: (p1Device: DeviceType, p2Device: DeviceType) => void;
  peerRoomId: string;
  isPeerConnected: boolean;
}

export const ControllerSelectModal: React.FC<ControllerSelectModalProps> = ({
  isOpen,
  onClose,
  onConfirmStart,
  peerRoomId,
  isPeerConnected,
}) => {
  const [p1Device, setP1Device] = useState<DeviceType>('keyboard1');
  const [p2Device, setP2Device] = useState<DeviceType>('keyboard2');
  const [ipAddress, setIpAddress] = useState<string>(() => window.location.hostname || '192.168.1.100');

  if (!isOpen) return null;

  const controllerUrl = `http://${ipAddress}:5173/controller`;
  const isHpSelected = p1Device === 'hp_remote' || p2Device === 'hp_remote';

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200 select-none font-sans">
      <div className="bg-[#0b0f0c] border-2 border-emerald-500/50 rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl flex flex-col gap-6 text-slate-100 relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center flex flex-col items-center gap-1">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full">
            <Gamepad className="w-4 h-4" /> Controller Assignment
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1">
            PILIH PERANTI KONTROLER (1v1)
          </h2>
          <p className="text-xs text-slate-400">
            Tentukan peranti kontroler untuk Player 1 dan Player 2 sebelum memulai pertandingan.
          </p>
        </div>

        {/* Dual Column Side Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-2">
          {/* PLAYER 1 COLUMN (HOME) */}
          <div className="bg-slate-900/90 border border-cyan-500/40 rounded-2xl p-5 flex flex-col gap-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-cyan-500/20 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
                <h3 className="font-black text-cyan-400 tracking-wide text-sm">PLAYER 1 (HOME)</h3>
              </div>
              <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                Red/Cyan Team
              </span>
            </div>

            <div className="flex flex-col gap-2.5">
              {/* Option 1: Keyboard WASD */}
              <button
                onClick={() => setP1Device('keyboard1')}
                className={`p-3.5 rounded-xl border text-xs font-bold transition flex items-center justify-between cursor-pointer ${
                  p1Device === 'keyboard1'
                    ? 'bg-cyan-950/80 border-cyan-400 text-cyan-300 shadow-lg shadow-cyan-500/20'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Keyboard className="w-4 h-4 text-cyan-400" />
                  <div className="text-left">
                    <div>Keyboard WASD</div>
                    <div className="text-[10px] text-slate-500 font-mono">WASD + J/K/L + Space</div>
                  </div>
                </div>
                {p1Device === 'keyboard1' && <CheckCircle className="w-4 h-4 text-cyan-400" />}
              </button>

              {/* Option 2: Gamepad 0 */}
              <button
                onClick={() => setP1Device('gamepad0')}
                className={`p-3.5 rounded-xl border text-xs font-bold transition flex items-center justify-between cursor-pointer ${
                  p1Device === 'gamepad0'
                    ? 'bg-cyan-950/80 border-cyan-400 text-cyan-300 shadow-lg shadow-cyan-500/20'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Gamepad className="w-4 h-4 text-cyan-400" />
                  <div className="text-left">
                    <div>Gamepad / Joystick 1</div>
                    <div className="text-[10px] text-slate-500 font-mono">Xbox / PS Controller 0</div>
                  </div>
                </div>
                {p1Device === 'gamepad0' && <CheckCircle className="w-4 h-4 text-cyan-400" />}
              </button>

              {/* Option 3: HP Remote */}
              <button
                onClick={() => setP1Device('hp_remote')}
                className={`p-3.5 rounded-xl border text-xs font-bold transition flex items-center justify-between cursor-pointer ${
                  p1Device === 'hp_remote'
                    ? 'bg-cyan-950/80 border-cyan-400 text-cyan-300 shadow-lg shadow-cyan-500/20'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Smartphone className="w-4 h-4 text-cyan-400" />
                  <div className="text-left">
                    <div>HP Remote Wireless</div>
                    <div className="text-[10px] text-slate-500 font-mono">Scan QR HP Controller</div>
                  </div>
                </div>
                {p1Device === 'hp_remote' && <CheckCircle className="w-4 h-4 text-cyan-400" />}
              </button>
            </div>
          </div>

          {/* PLAYER 2 COLUMN (AWAY) */}
          <div className="bg-slate-900/90 border border-amber-500/40 rounded-2xl p-5 flex flex-col gap-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-amber-500/20 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse" />
                <h3 className="font-black text-amber-400 tracking-wide text-sm">PLAYER 2 (AWAY)</h3>
              </div>
              <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                Blue/Amber Team
              </span>
            </div>

            <div className="flex flex-col gap-2.5">
              {/* Option 1: Keyboard Arrows + Numpad */}
              <button
                onClick={() => setP2Device('keyboard2')}
                className={`p-3.5 rounded-xl border text-xs font-bold transition flex items-center justify-between cursor-pointer ${
                  p2Device === 'keyboard2'
                    ? 'bg-amber-950/80 border-amber-400 text-amber-300 shadow-lg shadow-amber-500/20'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Keyboard className="w-4 h-4 text-amber-400" />
                  <div className="text-left">
                    <div>Keyboard 2 (Panah)</div>
                    <div className="text-[10px] text-slate-500 font-mono">Arrows + Numpad / N,M</div>
                  </div>
                </div>
                {p2Device === 'keyboard2' && <CheckCircle className="w-4 h-4 text-amber-400" />}
              </button>

              {/* Option 2: Gamepad 1 */}
              <button
                onClick={() => setP2Device('gamepad1')}
                className={`p-3.5 rounded-xl border text-xs font-bold transition flex items-center justify-between cursor-pointer ${
                  p2Device === 'gamepad1'
                    ? 'bg-amber-950/80 border-amber-400 text-amber-300 shadow-lg shadow-amber-500/20'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Gamepad className="w-4 h-4 text-amber-400" />
                  <div className="text-left">
                    <div>Gamepad / Joystick 2</div>
                    <div className="text-[10px] text-slate-500 font-mono">Xbox / PS Controller 1</div>
                  </div>
                </div>
                {p2Device === 'gamepad1' && <CheckCircle className="w-4 h-4 text-amber-400" />}
              </button>

              {/* Option 3: HP Remote */}
              <button
                onClick={() => setP2Device('hp_remote')}
                className={`p-3.5 rounded-xl border text-xs font-bold transition flex items-center justify-between cursor-pointer ${
                  p2Device === 'hp_remote'
                    ? 'bg-amber-950/80 border-amber-400 text-amber-300 shadow-lg shadow-amber-500/20'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Smartphone className="w-4 h-4 text-amber-400" />
                  <div className="text-left">
                    <div>HP Remote Wireless</div>
                    <div className="text-[10px] text-slate-500 font-mono">Scan QR HP Controller</div>
                  </div>
                </div>
                {p2Device === 'hp_remote' && <CheckCircle className="w-4 h-4 text-amber-400" />}
              </button>
            </div>
          </div>
        </div>

        {/* Integrated HP QR Code Section if HP Remote is selected */}
        {isHpSelected && (
          <div className="bg-slate-900/90 border border-emerald-500/40 rounded-2xl p-4 flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <div className="bg-white p-3 rounded-xl shadow-lg flex-shrink-0">
                <QRCodeSVG value={controllerUrl} size={110} />
              </div>

              <div className="flex flex-col gap-2 w-full text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-black text-emerald-400 flex items-center gap-1.5">
                    <Smartphone className="w-4 h-4" /> SCAN DENGAN HP ANDA
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    isPeerConnected ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  }`}>
                    {isPeerConnected ? '🟢 HP CONNECTED' : '⏳ MENUNGGU SCAN...'}
                  </span>
                </div>

                <p className="text-slate-300">
                  Scan QR Code di atas dengan kamera HP Anda, atau ketik URL berikut di browser HP:
                </p>

                <div className="bg-slate-950 p-2 rounded border border-slate-800 font-mono text-[11px] text-cyan-300 flex justify-between items-center">
                  <span className="truncate">{controllerUrl}</span>
                  <span className="text-slate-400 font-bold ml-2 shrink-0">ROOM: {peerRoomId}</span>
                </div>
              </div>
            </div>

            {/* Local Network IP Helper Input */}
            <div className="bg-slate-950/80 border border-cyan-500/30 rounded-xl p-3 flex flex-col gap-1.5 text-xs">
              <div className="flex items-center justify-between text-cyan-400 font-bold">
                <span>💡 Masukkan IP Wi-Fi Laptop Anda (jika QR gagal di-scan):</span>
              </div>
              <input
                type="text"
                value={ipAddress}
                onChange={(e) => setIpAddress(e.target.value)}
                placeholder="Contoh IP Wi-Fi Laptop: 192.168.1.15"
                className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-emerald-300 font-mono text-xs focus:outline-none focus:border-cyan-400"
              />
            </div>
          </div>
        )}

        {/* CTA Ready & Start Match */}
        <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-4">
          <button
            onClick={onClose}
            className="px-5 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white font-bold text-xs cursor-pointer transition"
          >
            Batal
          </button>

          <button
            onClick={() => onConfirmStart(p1Device, p2Device)}
            className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-black text-sm tracking-wide shadow-xl shadow-emerald-500/30 hover:brightness-110 active:scale-95 transition cursor-pointer flex items-center justify-center gap-2"
          >
            <Play className="w-4 h-4 fill-slate-950" />
            <span>READY & START MATCH</span>
          </button>
        </div>
      </div>
    </div>
  );
};
