import { useState, useEffect, useCallback, useRef } from 'react';
import { GamepadState } from '../types/game';

const DEADZONE_THRESHOLD = 0.08;

function applyDeadzone(val: number): number {
  return Math.abs(val) < DEADZONE_THRESHOLD ? 0 : val;
}

export function useGamepad() {
  const [gamepads, setGamepads] = useState<{ [index: number]: GamepadState }>({});
  const animationFrameId = useRef<number | null>(null);

  const pollGamepads = useCallback(() => {
    const rawGamepads = navigator.getGamepads ? navigator.getGamepads() : [];
    const updated: { [index: number]: GamepadState } = {};

    for (let i = 0; i < rawGamepads.length; i++) {
      const gp = rawGamepads[i];
      if (gp) {
        updated[gp.index] = {
          index: gp.index,
          id: gp.id,
          connected: gp.connected,
          axes: {
            leftStickX: applyDeadzone(gp.axes[0] || 0),
            leftStickY: applyDeadzone(gp.axes[1] || 0),
            rightStickX: applyDeadzone(gp.axes[2] || 0),
            rightStickY: applyDeadzone(gp.axes[3] || 0)
          },
          buttons: {
            a: gp.buttons[0]?.pressed || false,
            b: gp.buttons[1]?.pressed || false,
            x: gp.buttons[2]?.pressed || false,
            y: gp.buttons[3]?.pressed || false,
            lb: gp.buttons[4]?.pressed || false,
            rb: gp.buttons[5]?.pressed || false, // Right Bumper / R1
            lt: gp.buttons[6]?.value || 0,
            rt: gp.buttons[7]?.value || 0,
            back: gp.buttons[8]?.pressed || false,
            start: gp.buttons[9]?.pressed || false,
            lsClick: gp.buttons[10]?.pressed || false,
            rsClick: gp.buttons[11]?.pressed || false
          }
        };
      }
    }

    setGamepads(updated);
    animationFrameId.current = requestAnimationFrame(pollGamepads);
  }, []);

  useEffect(() => {
    const handleConnect = (e: GamepadEvent) => {
      console.log(`[useGamepad] Connected index ${e.gamepad.index}: ${e.gamepad.id}`);
    };

    const handleDisconnect = (e: GamepadEvent) => {
      console.log(`[useGamepad] Disconnected index ${e.gamepad.index}`);
    };

    window.addEventListener('gamepadconnected', handleConnect);
    window.addEventListener('gamepaddisconnected', handleDisconnect);

    animationFrameId.current = requestAnimationFrame(pollGamepads);

    return () => {
      window.removeEventListener('gamepadconnected', handleConnect);
      window.removeEventListener('gamepaddisconnected', handleDisconnect);
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [pollGamepads]);

  const triggerVibration = async (controllerIndex: number, weak = 0.5, strong = 0.8, duration = 400) => {
    const rawGamepads = navigator.getGamepads ? navigator.getGamepads() : [];
    const gp = rawGamepads[controllerIndex];
    if (gp && gp.vibrationActuator && gp.vibrationActuator.playEffect) {
      try {
        await gp.vibrationActuator.playEffect('dual-rumble', {
          startDelay: 0,
          duration,
          weakMagnitude: weak,
          strongMagnitude: strong
        });
        return true;
      } catch (err) {
        console.warn('Vibration playEffect error:', err);
      }
    }
    return false;
  };

  return { gamepads, triggerVibration };
}
