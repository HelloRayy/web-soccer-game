import { useEffect, useRef } from 'react';

export function useGameLoop(callback: (deltaTime: number) => void, isRunning = true) {
  const callbackRef = useRef(callback);
  const previousTimeRef = useRef<number | null>(null);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!isRunning) return;

    let animationFrameId: number;

    const loop = (time: number) => {
      if (previousTimeRef.current !== null) {
        const deltaTime = (time - previousTimeRef.current) / 1000;
        callbackRef.current(deltaTime);
      }
      previousTimeRef.current = time;
      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animationFrameId);
      previousTimeRef.current = null;
    };
  }, [isRunning]);
}
