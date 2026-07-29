import React, { useState } from 'react';
import { useGamepad } from '../hooks/useGamepad';
import { Gamepad2, Zap } from 'lucide-react';

export const DebuggerView: React.FC = () => {
  const { gamepads, triggerVibration } = useGamepad();
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const [weakVal, setWeakVal] = useState<number>(0.5);
  const [strongVal, setStrongVal] = useState<number>(0.8);
  const [durationVal, setDurationVal] = useState<number>(400);
  const [vibStatus, setVibStatus] = useState<string>('');

  const activeGamepad = gamepads[selectedIdx] || Object.values(gamepads)[0];

  const handleTestVibration = async () => {
    if (!activeGamepad) {
      setVibStatus('⚠️ Belum ada controller terhubung.');
      return;
    }
    setVibStatus('Mengirim sinyal haptic vibration...');
    const ok = await triggerVibration(activeGamepad.index, weakVal, strongVal, durationVal);
    if (ok) {
      setVibStatus('✅ Sinyal Dual-Rumble berhasil dikirim!');
    } else {
      setVibStatus('⚠️ Dual-Rumble vibration tidak didukung oleh controller/browser ini.');
    }
  };

  const buttonMap: { [key: number]: { name: string; isTrigger?: boolean } } = {
    0: { name: 'A' },
    1: { name: 'B' },
    2: { name: 'X' },
    3: { name: 'Y' },
    4: { name: 'LB' },
    5: { name: 'RB' },
    6: { name: 'LT', isTrigger: true },
    7: { name: 'RT', isTrigger: true },
    8: { name: 'Back' },
    9: { name: 'Start' },
    10: { name: 'LS Click' },
    11: { name: 'RS Click' },
    12: { name: 'D-Pad Up' },
    13: { name: 'D-Pad Down' },
    14: { name: 'D-Pad Left' },
    15: { name: 'D-Pad Right' },
    16: { name: 'Xbox Guide' }
  };

  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-6">
      {/* Top Status Bar */}
      <div className="glass-card rounded-2xl p-5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className={`px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 border ${
            activeGamepad ? 'bg-emerald-950/60 text-emerald-400 border-emerald-800' : 'bg-rose-950/60 text-rose-400 border-rose-800'
          }`}>
            <span className="w-2 h-2 rounded-full bg-current animate-pulse-slow"></span>
            {activeGamepad ? `${Object.keys(gamepads).length} Controller Connected` : 'Disconnected'}
          </div>
          <span className="text-sm text-slate-400 font-mono">
            {activeGamepad ? activeGamepad.id : 'Tekan tombol pada Xbox 360 controller untuk menghubungkan'}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <label className="text-xs text-slate-400 font-medium">Pilih Gamepad:</label>
          <select
            value={selectedIdx}
            onChange={(e) => setSelectedIdx(Number(e.target.value))}
            className="bg-slate-900 border border-slate-700 text-slate-200 text-xs rounded-lg px-3 py-2 outline-none font-mono min-w-[220px]"
          >
            {Object.keys(gamepads).length === 0 ? (
              <option value={0}>Belum ada controller terhubung</option>
            ) : (
              Object.values(gamepads).map((gp) => (
                <option key={gp.index} value={gp.index}>
                  [Index {gp.index}] {gp.id}
                </option>
              ))
            )}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Visual 2D Xbox Controller Card */}
        <div className="glass-card rounded-2xl p-6 flex flex-col gap-5">
          <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <Gamepad2 className="w-5 h-5 text-emerald-400" />
            Visual Xbox 360 Controller 2D
          </h2>

          {/* Trigger Meters */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl flex flex-col gap-1.5">
              <div className="flex justify-between text-xs font-semibold text-slate-400">
                <span>LT (Left Trigger)</span>
                <span>{Math.round((activeGamepad?.buttons.lt || 0) * 100)}%</span>
              </div>
              <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 transition-all duration-75"
                  style={{ width: `${Math.round((activeGamepad?.buttons.lt || 0) * 100)}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl flex flex-col gap-1.5">
              <div className="flex justify-between text-xs font-semibold text-slate-400">
                <span>RT (Right Trigger)</span>
                <span>{Math.round((activeGamepad?.buttons.rt || 0) * 100)}%</span>
              </div>
              <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 transition-all duration-75"
                  style={{ width: `${Math.round((activeGamepad?.buttons.rt || 0) * 100)}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* SVG Xbox 360 Graphic */}
          <div className="w-full flex justify-center py-4">
            <svg className="w-full max-w-[480px] h-auto drop-shadow-2xl" viewBox="0 0 600 400" fill="none">
              <path d="M120 80 C 180 70, 420 70, 480 80 C 530 90, 570 180, 560 290 C 550 350, 490 370, 440 330 C 400 300, 360 285, 300 285 C 240 285, 200 300, 160 330 C 110 370, 50 350, 40 290 C 30 180, 70 90, 120 80 Z" fill="#141c2b" stroke="rgba(255,255,255,0.15)" strokeWidth="4"/>
              
              {/* Bumpers */}
              <path d="M130 75 C 170 70, 230 72, 250 78 C 245 65, 170 60, 130 65 Z" fill={activeGamepad?.buttons.lb ? '#06b6d4' : '#243044'} stroke="rgba(255,255,255,0.2)" strokeWidth="2"/>
              <path d="M470 75 C 430 70, 370 72, 350 78 C 355 65, 430 60, 470 65 Z" fill={activeGamepad?.buttons.rb ? '#06b6d4' : '#243044'} stroke="rgba(255,255,255,0.2)" strokeWidth="2"/>

              {/* Guide */}
              <circle cx="300" cy="140" r="24" fill="#1f293d" stroke="#10b981" strokeWidth="3"/>
              <path d="M290 130 L310 150 M310 130 L290 150" stroke="#10b981" strokeWidth="3" strokeLinecap="round"/>

              {/* Back / Start */}
              <rect x="235" y="135" width="22" height="12" rx="4" fill={activeGamepad?.buttons.back ? '#10b981' : '#2a384e'} stroke="rgba(255,255,255,0.3)"/>
              <rect x="343" y="135" width="22" height="12" rx="4" fill={activeGamepad?.buttons.start ? '#10b981' : '#2a384e'} stroke="rgba(255,255,255,0.3)"/>

              {/* ABXY */}
              <g transform="translate(450, 160)">
                <circle cx="0" cy="-35" r="16" fill={activeGamepad?.buttons.y ? '#f59e0b' : '#1a2332'} stroke="#f59e0b" strokeWidth="2.5"/>
                <text x="0" y="-30" fill="#f59e0b" fontSize="16" fontWeight="bold" textAnchor="middle">Y</text>

                <circle cx="35" cy="0" r="16" fill={activeGamepad?.buttons.b ? '#ef4444' : '#1a2332'} stroke="#ef4444" strokeWidth="2.5"/>
                <text x="35" y="5" fill="#ef4444" fontSize="16" fontWeight="bold" textAnchor="middle">B</text>

                <circle cx="0" cy="35" r="16" fill={activeGamepad?.buttons.a ? '#10b981' : '#1a2332'} stroke="#10b981" strokeWidth="2.5"/>
                <text x="0" y="40" fill="#10b981" fontSize="16" fontWeight="bold" textAnchor="middle">A</text>

                <circle cx="-35" cy="0" r="16" fill={activeGamepad?.buttons.x ? '#3b82f6' : '#1a2332'} stroke="#3b82f6" strokeWidth="2.5"/>
                <text x="-35" y="5" fill="#3b82f6" fontSize="16" fontWeight="bold" textAnchor="middle">X</text>
              </g>

              {/* Left & Right Sticks */}
              <g transform="translate(170, 160)">
                <circle cx="0" cy="0" r="34" fill="#0f1623" stroke="rgba(255,255,255,0.15)" strokeWidth="2"/>
                <circle cx={(activeGamepad?.axes.leftStickX || 0) * 12} cy={(activeGamepad?.axes.leftStickY || 0) * 12} r="22" fill="#243044" stroke="#06b6d4" strokeWidth="2"/>
              </g>

              <g transform="translate(390, 235)">
                <circle cx="0" cy="0" r="34" fill="#0f1623" stroke="rgba(255,255,255,0.15)" strokeWidth="2"/>
                <circle cx={(activeGamepad?.axes.rightStickX || 0) * 12} cy={(activeGamepad?.axes.rightStickY || 0) * 12} r="22" fill="#243044" stroke="#06b6d4" strokeWidth="2"/>
              </g>

              {/* D-Pad */}
              <g transform="translate(230, 235)">
                <path d="M-10 -32 H10 V-10 H32 V10 H10 V32 H-10 V10 H-32 V-10 H-10 Z" fill="#182232" stroke="rgba(255,255,255,0.15)" strokeWidth="2"/>
              </g>
            </svg>
          </div>

          {/* Thumbstick 2D Radar Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl flex flex-col items-center gap-2">
              <span className="text-xs font-semibold text-slate-400">Left Stick (Axes 0, 1)</span>
              <div className="w-24 h-24 rounded-full border border-slate-700 bg-slate-950 relative overflow-hidden">
                <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-800"></div>
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-800"></div>
                <div
                  className="w-3 h-3 rounded-full bg-emerald-400 shadow-md shadow-emerald-500/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
                  style={{
                    transform: `translate(calc(-50% + ${(activeGamepad?.axes.leftStickX || 0) * 36}px), calc(-50% + ${(activeGamepad?.axes.leftStickY || 0) * 36}px))`
                  }}
                ></div>
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                X: {(activeGamepad?.axes.leftStickX || 0).toFixed(3)} | Y: {(activeGamepad?.axes.leftStickY || 0).toFixed(3)}
              </span>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl flex flex-col items-center gap-2">
              <span className="text-xs font-semibold text-slate-400">Right Stick (Axes 2, 3)</span>
              <div className="w-24 h-24 rounded-full border border-slate-700 bg-slate-950 relative overflow-hidden">
                <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-800"></div>
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-800"></div>
                <div
                  className="w-3 h-3 rounded-full bg-cyan-400 shadow-md shadow-cyan-500/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
                  style={{
                    transform: `translate(calc(-50% + ${(activeGamepad?.axes.rightStickX || 0) * 36}px), calc(-50% + ${(activeGamepad?.axes.rightStickY || 0) * 36}px))`
                  }}
                ></div>
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                X: {(activeGamepad?.axes.rightStickX || 0).toFixed(3)} | Y: {(activeGamepad?.axes.rightStickY || 0).toFixed(3)}
              </span>
            </div>
          </div>
        </div>

        {/* Raw Data Table & Haptics Panel Card */}
        <div className="glass-card rounded-2xl p-6 flex flex-col gap-5">
          <h2 className="text-lg font-bold text-slate-100">Gamepad API Raw Data Table</h2>

          <div className="overflow-x-auto max-h-[380px] overflow-y-auto border border-slate-800 rounded-xl">
            <table className="w-full text-left font-mono text-xs">
              <thead className="bg-slate-900 text-slate-400 sticky top-0">
                <tr>
                  <th className="p-3 border-b border-slate-800">Index</th>
                  <th className="p-3 border-b border-slate-800">Nama Input</th>
                  <th className="p-3 border-b border-slate-800">Pressed</th>
                  <th className="p-3 border-b border-slate-800">Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                {activeGamepad ? (
                  Object.entries(buttonMap).map(([idx, info]) => {
                    const i = Number(idx);
                    const isPressed = i === 6 ? (activeGamepad.buttons.lt > 0.1) :
                                      i === 7 ? (activeGamepad.buttons.rt > 0.1) :
                                      (activeGamepad.buttons[info.name.toLowerCase() as keyof typeof activeGamepad.buttons] || false);
                    const val = i === 6 ? activeGamepad.buttons.lt : i === 7 ? activeGamepad.buttons.rt : (isPressed ? 1 : 0);

                    return (
                      <tr key={i} className={isPressed ? 'bg-emerald-950/40 text-emerald-300' : 'text-slate-300'}>
                        <td className="p-2.5">Btn {i}</td>
                        <td className="p-2.5 font-bold">{info.name}</td>
                        <td className="p-2.5">{isPressed ? '🟢 TRUE' : '⚪ false'}</td>
                        <td className="p-2.5">
                          <span className={`px-2 py-0.5 rounded ${isPressed ? 'bg-emerald-500 text-slate-950 font-bold' : 'bg-slate-800'}`}>
                            {val.toFixed(2)}
                          </span>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={4} className="p-6 text-center text-slate-500">
                      Menunggu koneksi controller...
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Vibration Haptics Controller */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex flex-col gap-3">
            <div className="flex items-center gap-2 font-bold text-sm text-slate-200">
              <Zap className="w-4 h-4 text-cyan-400" />
              Dual-Rumble Haptic Feedback Test
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="flex flex-col gap-1">
                <label className="text-slate-400 font-semibold">Weak Motor: {Math.round(weakVal * 100)}%</label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={weakVal}
                  onChange={(e) => setWeakVal(Number(e.target.value))}
                  className="accent-emerald-500 cursor-pointer"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-slate-400 font-semibold">Strong Motor: {Math.round(strongVal * 100)}%</label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={strongVal}
                  onChange={(e) => setStrongVal(Number(e.target.value))}
                  className="accent-emerald-500 cursor-pointer"
                />
              </div>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-col gap-1 text-xs">
                <label className="text-slate-400 font-semibold">Durasi: {durationVal}ms</label>
                <input
                  type="range"
                  min="100"
                  max="2000"
                  step="100"
                  value={durationVal}
                  onChange={(e) => setDurationVal(Number(e.target.value))}
                  className="accent-emerald-500 cursor-pointer"
                />
              </div>

              <button
                onClick={handleTestVibration}
                className="px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-bold text-xs rounded-xl shadow-lg hover:brightness-110 transition cursor-pointer"
              >
                ⚡ Trigger Vibration
              </button>
            </div>

            {vibStatus && <div className="text-[11px] font-mono text-emerald-400 mt-1">{vibStatus}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};
