import { useState, useEffect, useRef } from 'react';
import { GamepadState } from '../types/game';

export function useKeyboardInput(): GamepadState {
  const keysPressedRef = useRef<{ [key: string]: boolean }>({});
  const [, setTick] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent page scrolling on Space / Arrow keys
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

  // WASD / Arrow Keys Movement Vector Calculation
  let moveX = 0;
  let moveY = 0;

  if (keys['keyw'] || keys['arrowup']) moveY -= 1;
  if (keys['keys'] || keys['arrowdown']) moveY += 1;
  if (keys['keya'] || keys['arrowleft']) moveX -= 1;
  if (keys['keyd'] || keys['arrowright']) moveX += 1;

  // Normalize diagonal movement vector
  if (moveX !== 0 && moveY !== 0) {
    const len = Math.sqrt(moveX * moveX + moveY * moveY);
    moveX /= len;
    moveY /= len;
  }

  // Key Mappings
  const isA = !!(keys['keyj'] || keys['numpad1']);
  const isX = !!(keys['keyk'] || keys['numpad2']);
  const isY = !!(keys['keyl'] || keys['numpad3']);
  const isB = !!(keys['space'] || keys['numpad0']);
  const isSprint = !!(keys['shiftleft'] || keys['shiftright'] || keys['keyi']);
  const isLB = !!(keys['keye']);
  const isRB = !!(keys['keyr']);
  const isStart = !!(keys['escape'] || keys['enter']);

  return {
    index: 88,
    id: 'Laptop Keyboard Input',
    connected: true,
    axes: {
      leftStickX: moveX,
      leftStickY: moveY,
      rightStickX: 0,
      rightStickY: 0,
    },
    buttons: {
      a: isA,
      b: isB,
      x: isX,
      y: isY,
      lb: isLB,
      rb: isRB,
      lt: 0,
      rt: isSprint ? 1.0 : 0,
      back: false,
      start: isStart,
      lsClick: false,
      rsClick: false,
    },
  };
}
