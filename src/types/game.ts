export interface Vector2D {
  x: number;
  y: number;
}

export interface GamepadButtonsState {
  a: boolean;        // Simple Pass (Index 0)
  b: boolean;        // Cross (Index 1)
  x: boolean;        // Simple Shoot (Index 2)
  y: boolean;        // Through Pass (Index 3)
  lb: boolean;       // Left Bumper (Index 4)
  rb: boolean;       // Right Bumper / R1 (Index 5)
  lt: number;        // Left Trigger (Index 6)
  rt: number;        // Right Trigger / Sprint (Index 7)
  back: boolean;     // Index 8
  start: boolean;    // Index 9
  lsClick: boolean;  // Index 10
  rsClick: boolean;  // Index 11
}

export interface GamepadAxesState {
  leftStickX: number;  // -1.0 to 1.0
  leftStickY: number;  // -1.0 to 1.0
  rightStickX: number;
  rightStickY: number;
}

export interface GamepadState {
  index: number;
  id: string;
  connected: boolean;
  axes: GamepadAxesState;
  buttons: GamepadButtonsState;
}

export type TeamType = 'home' | 'away';

export interface PlayerEntity {
  id: string;
  name: string;
  team: TeamType;
  controllerIndex: number | null;
  isAI: boolean;
  pos: Vector2D;
  vel: Vector2D;
  radius: number;
  speed: number;
  color: string;
  facingAngle: number;
  isSprinting: boolean;
  hasPossession: boolean;
}

export interface BallState {
  pos: Vector2D;
  vel: Vector2D;
  radius: number;
  friction: number;
  lastTouchedBy: string | null;
  shiftTimer: number;
  releaseTimer: number;
  homingTargetPlayer?: any;
}

export type MatchMode = '1v1_local' | '2v2_coop';
export type MatchState = 'PLAYING' | 'GOLDEN_GOAL' | 'GAME_OVER';

export interface MatchRulesState {
  mode: MatchMode;
  timerSeconds: number;
  scoreHome: number;
  scoreAway: number;
  state: MatchState;
  winnerTitle: string;
  logMessage: string;
  debugInputText: string;
}
