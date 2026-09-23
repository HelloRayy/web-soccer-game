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

export type BotDifficulty = 'easy' | 'hard';

export type TacticalRole = 'GK' | 'DF' | 'MF' | 'ST';

export type AIState =
  | 'STATE_ZONE_COVER'
  | 'STATE_PRESS_BALL'
  | 'STATE_SUPPORT_RUN'
  | 'STATE_ATTACK_FINISH'
  | 'STATE_SWEEPER_CLEAR';

export interface PlayerEntity {
  id: string;
  name: string;
  team: TeamType;
  role?: TacticalRole;
  aiState?: AIState;
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

export type MatchPhase =
  | 'PHASE_KICKOFF'
  | 'PHASE_PLAYING'
  | 'PHASE_GOAL_CELEBRATION'
  | 'PHASE_HALF_TIME'
  | 'PHASE_FULL_TIME';

export interface MatchStats {
  possessionHome: number;
  possessionAway: number;
  shotsHome: number;
  shotsAway: number;
  shotsOnTargetHome: number;
  shotsOnTargetAway: number;
  passesHome: number;
  passesAway: number;
  tacklesHome: number;
  tacklesAway: number;
}

export interface MatchRulesState {
  mode: MatchMode;
  timerSeconds: number;
  scoreHome: number;
  scoreAway: number;
  state: MatchState;
  phase: MatchPhase;
  stats: MatchStats;
  winnerTitle: string;
  logMessage: string;
  debugInputText: string;
}

export interface RadarPlayerData {
  id: string;
  name: string;
  team: TeamType;
  role?: TacticalRole;
  x: number;
  y: number;
  color: string;
  hasPossession: boolean;
  isActiveUser: boolean;
}

export interface RadarData {
  fieldWidth: number;
  fieldHeight: number;
  ball: { x: number; y: number };
  players: RadarPlayerData[];
  camera: { x: number; y: number; zoom: number; viewWidth: number; viewHeight: number };
}

export interface OffScreenBallData {
  isOffScreen: boolean;
  edgeX: number;
  edgeY: number;
  angle: number;
  distanceMeters: number;
}

export interface ActivePlayerData {
  id: string;
  name: string;
  squadNumber: number;
  team: TeamType;
  role: TacticalRole;
  stamina: number;
  isSprinting: boolean;
  isExhausted: boolean;
  isTackling: boolean;
  isChargingShot: boolean;
  shotPower: number;
  hasPossession: boolean;
  skinColor: string;
  hairColor: string;
  jerseyColor: string;
}

export interface ArcadeCallout {
  id: string;
  text: string;
  subtext?: string;
  type: 'goal' | 'save' | 'woodwork' | 'chance' | 'tackle' | 'skill';
  timestamp: number;
}
