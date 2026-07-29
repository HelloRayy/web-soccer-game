import React, { useEffect, useState, useRef, useCallback } from 'react';
import { ControllerPeerService } from '../services/peerService';
import { RefreshCw, Pause, Wifi, Maximize2 } from 'lucide-react';

export const MobileControllerView: React.FC = () => {
  const [roomId, setRoomId] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const peerServiceRef = useRef<ControllerPeerService | null>(null);

  // Dynamic Floating Joystick State (Spawns wherever thumb touches on left screen half)
  const [joystickOrigin, setJoystickOrigin] = useState<{ x: number; y: number } | null>(null);
  const [knobPos, setKnobPos] = useState({ x: 0, y: 0 });
  const [isJoystickActive, setIsJoystickActive] = useState(false);

  // Gamepad Input State to stream to PC Host
  const inputStateRef = useRef({
    leftStickX: 0,
    leftStickY: 0,
    a: false,
    b: false,
    x: false,
    y: false,
    lb: false,
    rb: false,
    rt: 0,
    start: false,
  });

  // Force Landscape Orientation & Fullscreen request
  const requestFullscreenLandscape = () => {
    try {
      const docEl = document.documentElement as any;
      if (docEl.requestFullscreen) {
        docEl.requestFullscreen().catch(() => {});
      } else if (docEl.webkitRequestFullscreen) {
        docEl.webkitRequestFullscreen();
      }

      if (window.screen?.orientation && 'lock' in window.screen.orientation) {
        (window.screen.orientation as any).lock('landscape').catch(() => {});
      }
    } catch (err) {
      // Ignore orientation lock errors
    }
  };

  // Extract room ID from URL parameters e.g. ?room=8492
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const roomParam = params.get('room');
    if (roomParam) {
      setRoomId(roomParam);
      handleConnect(roomParam);
    }
  }, []);

  const triggerVibrate = (duration = 20) => {
    if (typeof window !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate(duration);
      } catch (err) {
        // Ignore vibration unsupported errors
      }
    }
  };

  const handleConnect = async (targetRoomId?: string) => {
    const room = targetRoomId || roomId;
    if (!room) return;

    setConnecting(true);
    setErrorMsg('');
    requestFullscreenLandscape();

    if (!peerServiceRef.current) {
      peerServiceRef.current = new ControllerPeerService();
    }

    const peerService = peerServiceRef.current;
    peerService.onConnectionStateChange = (connected) => {
      setIsConnected(connected);
      setConnecting(false);
      if (connected) {
        triggerVibrate(50);
      }
    };

    try {
      await peerService.connectToHost(room);
    } catch (err: any) {
      console.error('Failed to connect:', err);
      setErrorMsg('Gagal terhubung ke Laptop. Pastikan Room Code benar.');
      setConnecting(false);
    }
  };

  const sendInputToHost = useCallback(() => {
    if (peerServiceRef.current && isConnected) {
      peerServiceRef.current.sendInput({
        axes: {
          leftStickX: inputStateRef.current.leftStickX,
          leftStickY: inputStateRef.current.leftStickY,
          rightStickX: 0,
          rightStickY: 0,
        },
        buttons: {
          a: inputStateRef.current.a,
          b: inputStateRef.current.b,
          x: inputStateRef.current.x,
          y: inputStateRef.current.y,
          lb: inputStateRef.current.lb,
          rb: inputStateRef.current.rb,
          lt: 0,
          rt: inputStateRef.current.rt,
          back: false,
          start: inputStateRef.current.start,
          lsClick: false,
          rsClick: false,
        },
      });
    }
  }, [isConnected]);

  // Dynamic Floating Joystick Handlers (Spawns on Pointer Down anywhere on left half)
  const handleLeftZonePointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    requestFullscreenLandscape();
    const touchX = e.clientX;
    const touchY = e.clientY;

    setJoystickOrigin({ x: touchX, y: touchY });
    setKnobPos({ x: 0, y: 0 });
    setIsJoystickActive(true);
  };

  const handleLeftZonePointerMove = (e: React.PointerEvent) => {
    if (!isJoystickActive || !joystickOrigin) return;
    e.preventDefault();

    const dx = e.clientX - joystickOrigin.x;
    const dy = e.clientY - joystickOrigin.y;
    const dist = Math.hypot(dx, dy);
    const maxRadius = 55;

    const clampedDist = Math.min(dist, maxRadius);
    const angle = Math.atan2(dy, dx);

    const knobX = Math.cos(angle) * clampedDist;
    const knobY = Math.sin(angle) * clampedDist;

    setKnobPos({ x: knobX, y: knobY });

    // Normalized Stick Vector (-1.0 to 1.0)
    inputStateRef.current.leftStickX = Number((knobX / maxRadius).toFixed(2));
    inputStateRef.current.leftStickY = Number((knobY / maxRadius).toFixed(2));

    sendInputToHost();
  };

  const handleLeftZonePointerUp = () => {
    setIsJoystickActive(false);
    setJoystickOrigin(null);
    setKnobPos({ x: 0, y: 0 });

    inputStateRef.current.leftStickX = 0;
    inputStateRef.current.leftStickY = 0;
    sendInputToHost();
  };

  // Button Action Handler
  const handleButtonTouch = (btnKey: 'a' | 'b' | 'x' | 'y' | 'lb' | 'rb' | 'rt' | 'start', isPressed: boolean) => {
    if (isPressed) {
      triggerVibrate(22);
    }
    if (btnKey === 'rt') {
      inputStateRef.current.rt = isPressed ? 1.0 : 0;
    } else {
      inputStateRef.current[btnKey] = isPressed;
    }
    sendInputToHost();
  };

  // If not connected yet, show Room Join Screen
  if (!isConnected) {
    return (
      <div className="fixed inset-0 bg-[#4e9a51] text-slate-100 flex flex-col items-center justify-center p-6 font-sans select-none">
        <div className="max-w-sm w-full bg-[#1b431d]/90 border border-green-300/30 rounded-3xl p-6 shadow-2xl flex flex-col items-center gap-5 text-center backdrop-blur-md">
          <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white text-2xl">
            ⚽
          </div>

          <div>
            <h1 className="text-xl font-extrabold tracking-tight text-white">Football Mobile Pad</h1>
            <p className="text-xs text-green-100/80 mt-1">Masukkan 4-Digit Room Code dari Laptop</p>
          </div>

          <div className="w-full flex flex-col gap-3">
            <input
              type="text"
              maxLength={4}
              value={roomId}
              onChange={(e) => setRoomId(e.target.value.toUpperCase())}
              placeholder="ROOM CODE (misal 8492)"
              className="w-full text-center tracking-widest text-2xl font-mono font-black py-3 rounded-2xl bg-black/40 border border-white/30 text-emerald-300 focus:outline-none focus:border-white"
            />

            {errorMsg && <p className="text-xs text-red-300 font-semibold">{errorMsg}</p>}

            <button
              onClick={() => handleConnect()}
              disabled={connecting || roomId.length < 4}
              className="w-full py-3.5 bg-gradient-to-r from-emerald-400 to-green-300 text-slate-950 font-extrabold rounded-2xl text-sm shadow-xl disabled:opacity-50 transition cursor-pointer flex items-center justify-center gap-2"
            >
              {connecting ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Menghubungkan...</span>
                </>
              ) : (
                <span>🎮 Connect Fullscreen Pad</span>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Fixed Landscape Gamepad UI matching EXACT Figma Android Compact Spec (241px x 256px)
  return (
    <div className="fixed inset-0 bg-[#4e9a51] text-slate-100 select-none touch-none overflow-hidden font-sans w-screen h-screen">
      {/* Top Bar Header (Connection Status + Fullscreen & Pause Buttons) */}
      <div className="absolute top-2 left-4 right-4 flex items-center justify-between pointer-events-none z-30">
        <div className="flex items-center gap-2 bg-black/40 border border-white/20 px-3.5 py-1 rounded-full text-white text-[11px] font-bold shadow-lg backdrop-blur-md">
          <Wifi className="w-3.5 h-3.5 animate-pulse text-emerald-300" />
          <span>CONNECTED ({roomId})</span>
        </div>

        <div className="flex items-center gap-2 pointer-events-auto">
          <button
            onClick={requestFullscreenLandscape}
            className="w-9 h-9 rounded-xl bg-black/40 border border-white/30 text-white flex items-center justify-center hover:bg-black/60 active:scale-90 transition shadow-lg backdrop-blur-md"
          >
            <Maximize2 className="w-4 h-4 text-white" />
          </button>

          <button
            onClick={() => handleButtonTouch('start', true)}
            onPointerUp={() => handleButtonTouch('start', false)}
            className="w-9 h-9 rounded-xl bg-black/40 border border-white/30 text-white flex items-center justify-center hover:bg-black/60 active:scale-90 transition shadow-lg backdrop-blur-md"
          >
            <Pause className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      {/* LEFT HALF TOUCH ZONE: Dynamic Floating Joystick (Spawns under thumb anywhere on left 50%) */}
      <div
        onPointerDown={handleLeftZonePointerDown}
        onPointerMove={handleLeftZonePointerMove}
        onPointerUp={handleLeftZonePointerUp}
        onPointerCancel={handleLeftZonePointerUp}
        className="absolute top-0 left-0 w-1/2 h-full z-10 touch-none"
      >
        {/* Render Base & Knob ONLY when thumb touches left zone */}
        {joystickOrigin ? (
          <div
            className="absolute w-40 h-40 rounded-full bg-[#1b431d]/70 border-4 border-[#2b662d] flex items-center justify-center shadow-2xl pointer-events-none -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${joystickOrigin.x}px`,
              top: `${joystickOrigin.y}px`,
            }}
          >
            {/* Outer Guide Ring */}
            <div className="w-20 h-20 rounded-full border border-white/20 pointer-events-none" />

            {/* Floating Dynamic Thumb Knob */}
            <div
              className="w-14 h-14 rounded-full bg-gradient-to-b from-slate-100 to-slate-300 border-2 border-slate-400 shadow-2xl absolute pointer-events-none transition-transform duration-75 flex items-center justify-center"
              style={{
                transform: `translate(${knobPos.x}px, ${knobPos.y}px)`,
              }}
            >
              <div className="w-10 h-10 rounded-full border-2 border-slate-300/80 bg-slate-200/50" />
            </div>
          </div>
        ) : (
          /* Subtle Hint Base on Left Side when idle */
          <div className="absolute left-8 bottom-8 w-32 h-32 rounded-full bg-[#1b431d]/40 border-4 border-[#2b662d]/60 flex items-center justify-center opacity-40 pointer-events-none">
            <div className="w-12 h-12 rounded-full bg-slate-200/80 border-2 border-slate-300" />
          </div>
        )}
      </div>

      {/* RIGHT HALF: EXACT FIGMA ANDROID COMPACT 4-BUTTON CLUSTER (241px x 256px) */}
      <div className="absolute top-0 right-0 w-1/2 h-full z-20 flex items-end justify-end pb-3 pr-3 pointer-events-none">
        {/* Exact Figma Frame Box: 241px x 256px */}
        <div className="relative w-[241px] h-[256px] pointer-events-auto">
          
          {/* 1. PASS (Bottom-Left: 80px x 80px, bottom: 0px, left: 0px) */}
          <div
            onPointerDown={() => handleButtonTouch('a', true)}
            onPointerUp={() => handleButtonTouch('a', false)}
            className="absolute bottom-0 left-0 w-[80px] h-[80px] rounded-full bg-[#3d7a40]/80 border-2 border-[#6cb870] shadow-xl backdrop-blur-sm active:scale-90 transition flex flex-col items-center justify-center cursor-pointer select-none"
          >
            <div className="absolute top-1 text-[8px] text-white/90">▲</div>
            <div className="absolute bottom-1 text-[8px] text-white/90">▼</div>
            <div className="absolute left-1 text-[8px] text-white/90">◄</div>
            <div className="absolute right-1 text-[8px] text-white/90">►</div>

            <span className="text-white font-bold text-sm">Pass</span>
          </div>

          {/* 2. THROUGH / GOCEK (Top-Left Diagonal: 80px x 80px, top: 68px, left: 44px) */}
          <div
            onPointerDown={() => handleButtonTouch('y', true)}
            onPointerUp={() => handleButtonTouch('y', false)}
            className="absolute top-[68px] left-[44px] w-[80px] h-[80px] rounded-full bg-[#3d7a40]/80 border-2 border-[#6cb870] shadow-xl backdrop-blur-sm active:scale-90 transition flex flex-col items-center justify-center cursor-pointer select-none"
          >
            <div className="absolute top-1 text-[8px] text-white/90">▲</div>
            <div className="absolute bottom-1 text-[8px] text-white/90">▼</div>
            <div className="absolute left-1 text-[8px] text-white/90">◄</div>
            <div className="absolute right-1 text-[8px] text-white/90">►</div>

            <span className="text-white font-bold text-xs">Through</span>
            <span className="text-amber-300 text-[8px] font-extrabold">(Gocek)</span>
          </div>

          {/* 3. CLEAR / TACKLE (Top-Right: 96px x 96px, top: 0px, right: 0px) */}
          <div
            onPointerDown={() => handleButtonTouch('x', true)}
            onPointerUp={() => handleButtonTouch('x', false)}
            className="absolute top-0 right-0 w-[96px] h-[96px] rounded-full bg-[#3d7a40]/80 border-2 border-[#6cb870] shadow-2xl backdrop-blur-sm active:scale-90 transition flex flex-col items-center justify-center cursor-pointer select-none"
          >
            <div className="w-[84px] h-[84px] rounded-full border border-white/25 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-white font-bold text-base">Clear</span>
              <span className="text-cyan-300 text-[9px] font-black uppercase tracking-wider">(Tackle)</span>
            </div>
          </div>

          {/* 4. DASH / PRESS (Bottom-Right: 104px x 104px, bottom: 0px, right: 0px) */}
          <div
            onPointerDown={() => handleButtonTouch('rt', true)}
            onPointerUp={() => handleButtonTouch('rt', false)}
            className="absolute bottom-0 right-0 w-[104px] h-[104px] rounded-full bg-[#3d7a40]/80 border-2 border-[#6cb870] shadow-2xl backdrop-blur-sm active:scale-90 transition flex flex-col items-center justify-center cursor-pointer select-none"
          >
            <div className="w-[92px] h-[92px] rounded-full border border-white/25 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-white font-bold text-base">Dash</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
