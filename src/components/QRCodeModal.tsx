import React, { useEffect, useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { X, Smartphone, CheckCircle, Copy } from 'lucide-react';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  roomId: string;
  isConnected: boolean;
}

export const QRCodeModal: React.FC<QRCodeModalProps> = ({ isOpen, onClose, roomId, isConnected }) => {
  const [controllerUrl, setControllerUrl] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = `${window.location.origin}/controller?room=${roomId}`;
      setControllerUrl(url);
    }
  }, [roomId]);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(controllerUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200 pointer-events-auto">
      <div className="bg-[#0b0f0c] border border-emerald-500/40 rounded-3xl max-w-md w-full p-6 shadow-2xl flex flex-col items-center gap-5 relative text-slate-100 font-sans">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-100 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Title */}
        <div className="flex flex-col items-center gap-1.5 text-center mt-2">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
            <Smartphone className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-extrabold tracking-tight">Hubungkan HP sebagai Stik Gamepad</h2>
          <p className="text-xs text-slate-400 max-w-xs">
            Pindai QR Code di bawah dengan kamera HP Anda untuk menjadikan HP sebagai stik stik controller virtual!
          </p>
        </div>

        {/* Status Indicator */}
        <div className="w-full flex items-center justify-center">
          {isConnected ? (
            <div className="bg-emerald-500/15 border border-emerald-500/60 rounded-xl px-4 py-2 flex items-center gap-2 text-emerald-400 text-xs font-bold animate-pulse">
              <CheckCircle className="w-4 h-4" />
              <span>🟢 HP Terhubung! (Controller Ready)</span>
            </div>
          ) : (
            <div className="bg-amber-500/10 border border-amber-500/40 rounded-xl px-4 py-2 flex items-center gap-2 text-amber-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span>Menunggu Koneksi dari HP...</span>
            </div>
          )}
        </div>

        {/* QR Code Container */}
        <div className="bg-white p-4 rounded-2xl border-4 border-slate-800 shadow-inner flex items-center justify-center">
          {controllerUrl ? (
            <QRCodeSVG value={controllerUrl} size={180} level="M" />
          ) : (
            <div className="w-[180px] h-[180px] bg-slate-100 flex items-center justify-center text-slate-400 text-xs">
              Generating QR...
            </div>
          )}
        </div>

        {/* Room Code Badge & Direct Link */}
        <div className="w-full flex flex-col items-center gap-2">
          <div className="bg-slate-900 border border-slate-800 rounded-xl px-5 py-2.5 flex items-center justify-between w-full font-mono text-sm">
            <span className="text-slate-400 text-xs font-bold">ROOM CODE:</span>
            <span className="text-cyan-400 font-extrabold text-lg tracking-widest">{roomId}</span>
          </div>

          <button
            onClick={handleCopyLink}
            className="w-full py-2.5 px-4 bg-slate-900 border border-slate-700/80 hover:border-emerald-500/50 rounded-xl text-xs font-bold text-slate-300 hover:text-emerald-400 transition cursor-pointer flex items-center justify-center gap-2"
          >
            <Copy className="w-4 h-4" />
            <span>{copied ? 'Link Tersalin!' : 'Salin URL Controller'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
