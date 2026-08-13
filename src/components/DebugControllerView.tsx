import React, { useState, useEffect, useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { HostPeerService } from '../services/peerService';
import { GamepadState } from '../types/game';
import { useGamepad } from '../hooks/useGamepad';
import { Smartphone, Wifi, Radio, Activity, CheckCircle, AlertTriangle, Play, Copy, ArrowLeft, RefreshCw, Terminal, Layers, Gamepad } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const createEmptyGamepadState = (): GamepadState => ({
  index: 0,
  id: 'virtual-hp-remote',
  connected: true,
  axes: { leftStickX: 0, leftStickY: 0, rightStickX: 0, rightStickY: 0 },
  buttons: { a: false, b: false, x: false, y: false, rt: 0, lt: 0, rb: false, lb: false, start: false, back: false, lsClick: false, rsClick: false }
});

export const DebugControllerView: React.FC = () => {
  const navigate = useNavigate();
  const { gamepads: physicalGamepads, triggerVibration } = useGamepad();

  // Host Service & Connection States
  const [peerRoomId, setPeerRoomId] = useState<string>('8492');
  const [isPeerConnected, setIsPeerConnected] = useState<boolean>(false);
  const [connectionTransport, setConnectionTransport] = useState<string>('Initializing...');
  
  // Real-Time Mobile Controller Telemetry
  const [remoteGamepadState, setRemoteGamepadState] = useState<GamepadState>(createEmptyGamepadState());

  // Use physical USB gamepad if active in any slot, otherwise use remote HP gamepad
  const physicalGamepad0 = physicalGamepads[0] || Object.values(physicalGamepads)[0];
  const physicalGamepad1 = physicalGamepads[1] || (Object.values(physicalGamepads).length > 1 ? Object.values(physicalGamepads)[1] : undefined);
  const activeGamepadState = physicalGamepad0 || remoteGamepadState;

  // Local Wi-Fi IP helper for QR code
  const [wifiIp, setWifiIp] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  // Diagnostic Logs
  const [logs, setLogs] = useState<{ id: string; time: string; type: 'info' | 'success' | 'warn' | 'input'; message: string }[]>([]);

  const peerServiceRef = useRef<HostPeerService | null>(null);

  const addLog = (type: 'info' | 'success' | 'warn' | 'input', message: string) => {
    const time = new Date().toLocaleTimeString();
    const id = Math.random().toString(36).substring(2, 9);
    setLogs((prev) => [{ id, time, type, message }, ...prev.slice(0, 49)]);
  };

  useEffect(() => {
    addLog('info', 'Starting Controller Diagnostic Host Engine...');
    const hostService = new HostPeerService();
    peerServiceRef.current = hostService;

    hostService.onConnectionStateChange = (connected) => {
      setIsPeerConnected(connected);
      if (connected) {
        setConnectionTransport('WebRTC DataChannel + BroadcastChannel + LocalStorage Hybrid');
        addLog('success', '🟢 Mobile Phone Remote Connected Successfully!');
      } else {
        setConnectionTransport('Waiting for mobile connection...');
        addLog('warn', '⏳ Mobile Phone Disconnected / Waiting for connection...');
      }
    };

    hostService.onGamepadStateUpdate = (state) => {
      setRemoteGamepadState(state);
      const activeBtns = Object.entries(state.buttons)
        .filter(([_, pressed]) => Boolean(pressed))
        .map(([btn]) => btn.toUpperCase())
        .join(', ');
      
      const stickStr = `Stick (${state.axes.leftStickX.toFixed(2)}, ${state.axes.leftStickY.toFixed(2)})`;
      const btnStr = activeBtns ? ` Buttons [${activeBtns}]` : '';
      addLog('input', `🎮 Signal Received: ${stickStr}${btnStr}`);
    };

    hostService.init().then((roomId) => {
      setPeerRoomId(roomId);
      addLog('info', `Room Code Created: ${roomId}`);
    });

    return () => {
      addLog('warn', 'Cleaning up Diagnostic Host Engine...');
      hostService.destroy();
    };
  }, []);

  // Compute controller URL
  const hostName = wifiIp.trim() || (typeof window !== 'undefined' ? window.location.hostname : 'localhost');
  const port = typeof window !== 'undefined' && window.location.port ? `:${window.location.port}` : '';
  const controllerUrl = `http://${hostName}${port}/controller?room=${peerRoomId}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(controllerUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Test signal simulation for instant local debugging
  const simulateTestSignal = (action: string) => {
    let testState: GamepadState = createEmptyGamepadState();

    if (action === 'left') testState.axes.leftStickX = -1.0;
    else if (action === 'right') testState.axes.leftStickX = 1.0;
    else if (action === 'up') testState.axes.leftStickY = -1.0;
    else if (action === 'down') testState.axes.leftStickY = 1.0;
    else if (action === 'pass') testState.buttons.a = true;
    else if (action === 'shoot') testState.buttons.x = true;
    else if (action === 'tackle') testState.buttons.b = true;
    else if (action === 'gocek') testState.buttons.y = true;
    else if (action === 'sprint') testState.buttons.rt = 1.0;

    setRemoteGamepadState(testState);
    addLog('input', `🧪 Simulated Local Input Signal: ${action.toUpperCase()}`);

    // Reset back to idle after 400ms
    setTimeout(() => {
      setRemoteGamepadState(createEmptyGamepadState());
    }, 400);
  };

  const isLocalhost = typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

  return (
    <div className="min-h-screen bg-[#070b09] text-slate-100 p-4 sm:p-6 flex flex-col gap-6 font-sans select-none overflow-x-hidden">
      {/* 1. Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-900/90 border border-emerald-500/30 p-4 rounded-2xl shadow-xl">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/')}
            className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:text-emerald-400 hover:border-emerald-500 transition cursor-pointer flex items-center gap-2 text-xs font-bold"
          >
            <ArrowLeft className="w-4 h-4" /> Lobby Game
          </button>
          <div>
            <h1 className="text-xl font-black tracking-tight text-white flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-emerald-400" /> MOBILE CONTROLLER DEBUG CENTER
            </h1>
            <p className="text-xs text-slate-400 font-mono">Route: /debug • PeerJS Host Telemetry & Diagnostic Tools</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className={`px-3 py-1.5 rounded-xl border text-xs font-black flex items-center gap-2 ${
            isPeerConnected
              ? 'bg-emerald-500/15 border-emerald-500/60 text-emerald-400 animate-pulse'
              : 'bg-amber-500/15 border-amber-500/40 text-amber-400'
          }`}>
            <Radio className="w-4 h-4" />
            <span>{isPeerConnected ? '🟢 HP CONNECTED' : '⏳ WAITING FOR CONNECTION'}</span>
          </div>
        </div>
      </div>

      {/* Main Diagnostic Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: QR Code & Connection Parameters */}
        <div className="bg-[#0b100d] border border-slate-800 rounded-2xl p-5 flex flex-col gap-4 shadow-xl">
          <div className="flex items-center gap-2 text-emerald-400 font-extrabold text-sm border-b border-slate-800 pb-3">
            <Wifi className="w-4 h-4" /> 1. Parameter QR & Kode Room
          </div>

          <div className="flex flex-col items-center justify-center bg-white p-4 rounded-2xl border-4 border-slate-800 shadow-inner">
            <QRCodeSVG value={controllerUrl} size={150} level="M" />
          </div>

          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex flex-col gap-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-slate-400">ROOM CODE:</span>
              <span className="text-cyan-400 font-extrabold text-lg">{peerRoomId}</span>
            </div>
            <div className="text-[11px] text-slate-300 font-mono truncate bg-slate-900 p-2 rounded border border-slate-800">
              {controllerUrl}
            </div>
            <button
              onClick={handleCopyLink}
              className="py-2 px-3 bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 rounded-lg text-xs font-bold transition cursor-pointer flex items-center justify-center gap-2"
            >
              <Copy className="w-3.5 h-3.5" /> {copied ? 'Link Copied!' : 'Salin URL Controller'}
            </button>
          </div>

          {isLocalhost && (
            <div className="bg-slate-950/90 border border-cyan-500/30 rounded-xl p-3 flex flex-col gap-2 text-xs">
              <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                💡 Masukkan IP Wi-Fi Laptop Anda:
              </span>
              <input
                type="text"
                value={wifiIp}
                onChange={(e) => setWifiIp(e.target.value)}
                placeholder="Contoh: 192.168.1.15"
                className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-emerald-300 font-mono font-bold focus:outline-none focus:border-cyan-400"
              />
              <p className="text-[10px] text-slate-400">
                Buka CMD di laptop, ketik <code className="text-amber-300 bg-slate-800 px-1 rounded">ipconfig</code>, salin IPv4 Address Wi-Fi ke sini agar QR Code HP valid.
              </p>
            </div>
          )}

          <a
            href={`/controller?room=${peerRoomId}`}
            target="_blank"
            rel="noreferrer"
            className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-cyan-300 rounded-xl text-xs font-bold text-center transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 text-cyan-400" /> Buka Mobile Controller di Tab Baru
          </a>
        </div>

        {/* Center Column: Live Telemetry Visualizer */}
        <div className="bg-[#0b100d] border border-slate-800 rounded-2xl p-5 flex flex-col gap-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2 text-cyan-400 font-extrabold text-sm">
              <Activity className="w-4 h-4" /> 2. Live Gamepad Telemetry
            </div>
            <span className="text-[10px] font-mono bg-slate-900 text-slate-400 px-2 py-0.5 rounded border border-slate-800">
              60 FPS Stream
            </span>
          </div>

          {/* Physical USB Gamepad Diagnostic Status Card */}
          <div className="bg-slate-900 border border-cyan-500/40 rounded-xl p-3.5 flex flex-col gap-2.5 text-xs">
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-cyan-400 flex items-center gap-1.5">
                <Gamepad className="w-4 h-4" /> Physical USB / Bluetooth Joystick:
              </span>
              <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                physicalGamepad0 ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 animate-pulse' : 'bg-slate-800 text-slate-400 border border-slate-700'
              }`}>
                {physicalGamepad0 ? '🟢 STIK TERDETEKSI' : '🔴 MENUNGGU TOMBOL STIK DITEKAN'}
              </span>
            </div>

            {physicalGamepad0 ? (
              <div className="text-slate-300 font-mono text-[11px] bg-slate-950 p-2.5 rounded-lg border border-slate-800 flex flex-col gap-1.5">
                <div>Device Name: <strong className="text-emerald-400">{physicalGamepad0.id || 'USB Gamepad Slot 0'}</strong></div>
                <div className="flex justify-between items-center text-[10px] text-slate-400">
                  <span>Slot Index: #{physicalGamepad0.index}</span>
                  <button
                    onClick={() => triggerVibration(0)}
                    className="px-2 py-0.5 bg-cyan-950 border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 rounded text-[10px] cursor-pointer transition"
                  >
                    ⚡ Tes Getar Stik
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-[11px] text-amber-300 leading-relaxed bg-amber-950/40 border border-amber-500/30 p-2.5 rounded-lg flex flex-col gap-1">
                <span className="font-bold flex items-center gap-1 text-amber-400">
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0" /> CARA MENGAKTIFKAN STIK USB DI BROWSER:
                </span>
                <span>
                  Browser Chrome/Edge <strong>TIDAK AKAN mendeteksi stik USB</strong> jika Anda hanya mencolokkannya! 
                  <strong className="text-white"> Anda WAJIB menekan salah satu tombol (misal tombol A, X, atau Start) di stik USB Anda</strong> agar browser mengaktifkan stik tersebut!
                </span>
              </div>
            )}
          </div>

          {/* Analog Stick Visualizer */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col items-center gap-3">
            <span className="text-xs text-slate-400 font-mono font-bold">ANALOG STICK VECTOR</span>
            
            {/* Interactive 2D Stick Gauge */}
            <div className="relative w-36 h-36 rounded-full bg-slate-900 border-2 border-cyan-500/40 flex items-center justify-center">
              {/* Crosshair Lines */}
              <div className="absolute inset-x-0 top-1/2 border-t border-white/10 pointer-events-none" />
              <div className="absolute inset-y-0 left-1/2 border-l border-white/10 pointer-events-none" />

              {/* Dynamic Moving Stick Knob */}
              <div
                className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-teal-600 shadow-lg shadow-cyan-500/50 transition-transform duration-75 border-2 border-white/40"
                style={{
                  transform: `translate(${activeGamepadState.axes.leftStickX * 45}px, ${activeGamepadState.axes.leftStickY * 45}px)`
                }}
              />
            </div>

            <div className="flex justify-between w-full font-mono text-xs text-slate-300 px-4">
              <span>X: <strong className="text-cyan-400">{activeGamepadState.axes.leftStickX.toFixed(2)}</strong></span>
              <span>Y: <strong className="text-cyan-400">{activeGamepadState.axes.leftStickY.toFixed(2)}</strong></span>
            </div>
          </div>

          {/* Live Action Buttons Visualizer */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col gap-3">
            <span className="text-xs text-slate-400 font-mono font-bold">BUTTON STATES</span>
            
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className={`p-2 rounded-lg border flex justify-between items-center ${
                activeGamepadState.buttons.a ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 font-bold' : 'bg-slate-900 border-slate-800 text-slate-500'
              }`}>
                <span>A (Pass):</span>
                <span>{activeGamepadState.buttons.a ? 'PRESSED' : 'OFF'}</span>
              </div>

              <div className={`p-2 rounded-lg border flex justify-between items-center ${
                activeGamepadState.buttons.x ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 font-bold' : 'bg-slate-900 border-slate-800 text-slate-500'
              }`}>
                <span>X (Shoot):</span>
                <span>{activeGamepadState.buttons.x ? 'PRESSED' : 'OFF'}</span>
              </div>

              <div className={`p-2 rounded-lg border flex justify-between items-center ${
                activeGamepadState.buttons.b ? 'bg-amber-500/20 border-amber-400 text-amber-300 font-bold' : 'bg-slate-900 border-slate-800 text-slate-500'
              }`}>
                <span>B (Tackle):</span>
                <span>{activeGamepadState.buttons.b ? 'PRESSED' : 'OFF'}</span>
              </div>

              <div className={`p-2 rounded-lg border flex justify-between items-center ${
                activeGamepadState.buttons.y ? 'bg-purple-500/20 border-purple-400 text-purple-300 font-bold' : 'bg-slate-900 border-slate-800 text-slate-500'
              }`}>
                <span>Y (Gocek):</span>
                <span>{activeGamepadState.buttons.y ? 'PRESSED' : 'OFF'}</span>
              </div>

              <div className={`p-2 rounded-lg border flex justify-between items-center col-span-2 ${
                activeGamepadState.buttons.rt > 0 ? 'bg-red-500/20 border-red-400 text-red-300 font-bold' : 'bg-slate-900 border-slate-800 text-slate-500'
              }`}>
                <span>RT (Sprint):</span>
                <span>{activeGamepadState.buttons.rt > 0 ? `ACTIVE (${activeGamepadState.buttons.rt.toFixed(1)})` : 'OFF'}</span>
              </div>
            </div>
          </div>

          {/* Test Signal Injector */}
          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex flex-col gap-2">
            <span className="text-[11px] text-cyan-400 font-bold flex items-center gap-1">
              🧪 Signal Test Simulator (Simulasi Input Tanpa HP):
            </span>
            <div className="grid grid-cols-4 gap-1.5 text-[10px] font-bold">
              <button onClick={() => simulateTestSignal('left')} className="py-1.5 bg-slate-900 border border-slate-700 hover:border-cyan-400 rounded text-slate-300 cursor-pointer">⬅ Left</button>
              <button onClick={() => simulateTestSignal('right')} className="py-1.5 bg-slate-900 border border-slate-700 hover:border-cyan-400 rounded text-slate-300 cursor-pointer">➔ Right</button>
              <button onClick={() => simulateTestSignal('up')} className="py-1.5 bg-slate-900 border border-slate-700 hover:border-cyan-400 rounded text-slate-300 cursor-pointer">⬆ Up</button>
              <button onClick={() => simulateTestSignal('down')} className="py-1.5 bg-slate-900 border border-slate-700 hover:border-cyan-400 rounded text-slate-300 cursor-pointer">⬇ Down</button>
              <button onClick={() => simulateTestSignal('pass')} className="py-1.5 bg-emerald-950 border border-emerald-600/50 hover:border-emerald-400 rounded text-emerald-300 cursor-pointer">A Pass</button>
              <button onClick={() => simulateTestSignal('shoot')} className="py-1.5 bg-cyan-950 border border-cyan-600/50 hover:border-cyan-400 rounded text-cyan-300 cursor-pointer">X Shoot</button>
              <button onClick={() => simulateTestSignal('tackle')} className="py-1.5 bg-amber-950 border border-amber-600/50 hover:border-amber-400 rounded text-amber-300 cursor-pointer">B Tackle</button>
              <button onClick={() => simulateTestSignal('sprint')} className="py-1.5 bg-red-950 border border-red-600/50 hover:border-red-400 rounded text-red-300 cursor-pointer">RT Sprint</button>
            </div>
          </div>
        </div>

        {/* Right Column: Real-Time Diagnostic Event Log */}
        <div className="bg-[#0b100d] border border-slate-800 rounded-2xl p-5 flex flex-col gap-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2 text-amber-400 font-extrabold text-sm">
              <Terminal className="w-4 h-4" /> 3. Live Connection Event Logs
            </div>
            <button
              onClick={() => setLogs([])}
              className="text-[10px] text-slate-400 hover:text-slate-200 transition font-mono cursor-pointer"
            >
              Clear Logs
            </button>
          </div>

          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 font-mono text-[11px] h-[400px] overflow-y-auto flex flex-col gap-1.5">
            {logs.length === 0 ? (
              <span className="text-slate-600 italic">No events recorded yet...</span>
            ) : (
              logs.map((log) => (
                <div key={log.id} className="flex items-start gap-2 border-b border-slate-900/60 pb-1">
                  <span className="text-slate-500 shrink-0">[{log.time}]</span>
                  <span className={`break-all ${
                    log.type === 'success' ? 'text-emerald-400 font-bold' :
                    log.type === 'warn' ? 'text-amber-400 font-bold' :
                    log.type === 'input' ? 'text-cyan-300' : 'text-slate-300'
                  }`}>
                    {log.message}
                  </span>
                </div>
              ))
            )}
          </div>

          <div className="bg-slate-900/60 border border-slate-800 p-3 rounded-xl text-xs text-slate-400 flex flex-col gap-1">
            <span className="text-slate-200 font-bold flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-cyan-400" /> Active Transport Layer:
            </span>
            <span className="font-mono text-[11px] text-emerald-400">{connectionTransport}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
