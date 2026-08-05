import { useState, useEffect, useRef } from 'react';
import { GamepadState } from '../types/game';

export interface DualKeyboardState {
  p1Input: GamepadState;
  p2Input: GamepadState;
}

export function useKeyboardInput(): DualKeyboardState {
  const keysPressedRef = useRef<{ [key: string]: boolean }>({});
  const [, setTick] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
        e.preventDefault();
      }

      const key = e.code.toLowerCase();
      if (!keysPressedRef.current[key]) {
        keysPressedRef.current[key] = true;
        setTick((t) => t + 1);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const key = e.code.toLowerCase();
      if (keysPressedRef.current[key]) {
        keysPressedRef.current[key] = false;
        setTick((t) => t + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const keys = keysPressedRef.current;

  // --- P1 CONTROLS: WASD + J/K/L/Space/Shift ---
  let p1MoveX = 0;
  let p1MoveY = 0;
  if (keys['keyw']) p1MoveY -= 1;
  if (keys['keys']) p1MoveY += 1;
  if (keys['keya']) p1MoveX -= 1;
  if (keys['keyd']) p1MoveX += 1;

  if (p1MoveX !== 0 && p1MoveY !== 0) {
    const len = Math.sqrt(p1MoveX * p1MoveX + p1MoveY * p1MoveY);
    p1MoveX /= len;
    p1MoveY /= len;
  }

  const p1A = !!keys['keyj'];
  const p1X = !!keys['keyk'];
  const p1Y = !!keys['keyl'];
  const p1B = !!keys['space'];
  const p1Sprint = !!keys['shiftleft'];
  const p1RB = !!(keys['keye'] || keys['keyr']);

  // --- P2 CONTROLS: Arrow Keys + Numpad / N/M/,/. ---
  let p2MoveX = 0;
  let p2MoveY = 0;
  if (keys['arrowup']) p2MoveY -= 1;
  if (keys['arrowdown']) p2MoveY += 1;
  if (keys['arrowleft']) p2MoveX -= 1;
  if (keys['arrowright']) p2MoveX += 1;

  if (p2MoveX !== 0 && p2MoveY !== 0) {
    const len = Math.sqrt(p2MoveX * p2MoveX + p2MoveY * p2MoveY);
    p2MoveX /= len;
    p2MoveY /= len;
  }

  const p2A = !!(keys['numpad1'] || keys['keyn']);
  const p2X = !!(keys['numpad2'] || keys['keym']);
  const p2Y = !!(keys['numpad3'] || keys['comma']);
  const p2B = !!(keys['numpad0'] || keys['period']);
  const p2Sprint = !!(keys['shiftright'] || keys['controlright']);
  const p2RB = !!keys['numpad7'];

  const isStart = !!(keys['escape'] || keys['enter']);

  const p1Input: GamepadState = {
    index: 88,
    id: 'P1 Laptop Keyboard',
    connected: true,
    axes: { leftStickX: p1MoveX, leftStickY: p1MoveY, rightStickX: 0, rightStickY: 0 },
    buttons: {
      a: p1A,
      b: p1B,
      x: p1X,
      y: p1Y,
      lb: false,
      rb: p1RB,
      lt: 0,
      rt: p1Sprint ? 1.0 : 0,
      back: false,
      start: isStart,
      lsClick: false,
      rsClick: false,
    },
  };

  const p2Input: GamepadState = {
    index: 89,
    id: 'P2 Keyboard / Numpad',
    connected: true,
    axes: { leftStickX: p2MoveX, leftStickY: p2MoveY, rightStickX: 0, rightStickY: 0 },
    buttons: {
      a: p2A,
      b: p2B,
      x: p2X,
      y: p2Y,
      lb: false,
      rb: p2RB,
      lt: 0,
      rt: p2Sprint ? 1.0 : 0,
      back: false,
      start: false,
      lsClick: false,
      rsClick: false,
    },
  };

  return { p1Input, p2Input };
}
