import { MatchRulesState, MatchMode, BallState, PlayerEntity } from '../types/game';
import { Ball } from './Ball';
import { Field } from './Field';

export class MatchRules {
  state: MatchRulesState;
  isDebugMode: boolean;

  constructor(mode: MatchMode = '1v1_local') {
    this.isDebugMode = true;

    this.state = {
      mode,
      timerSeconds: 999,
      scoreHome: 0,
      scoreAway: 0,
      state: 'PLAYING',
      winnerTitle: '',
      logMessage: '🛠️ DEBUGGING MODE - Goal Resets Positions (Score Disabled)',
      debugInputText: 'Ready'
    };
  }

  resetMatch() {
    this.state.timerSeconds = 999;
    this.state.scoreHome = 0;
    this.state.scoreAway = 0;
    this.state.state = 'PLAYING';
    this.state.winnerTitle = '';
    this.state.logMessage = '🛠️ DEBUGGING MODE - Positions Reset';
    this.state.debugInputText = 'Ready';
  }

  setMode(mode: MatchMode) {
    this.state.mode = mode;
    this.resetMatch();
  }

  update(dt: number, ball: Ball, field: Field): boolean {
    if (this.state.state === 'GAME_OVER') return false;

    // Goal Collision Detection (Resets positions on goal without score/game over)
    const goals = field.goals;
    const isGoalY = ball.pos.y > goals.homeGoal.top && ball.pos.y < goals.homeGoal.bottom;

    if (isGoalY) {
      // Home Goal (Left / Red Goal)
      if (ball.pos.x - ball.radius < goals.homeGoal.x - 10) {
        this.state.logMessage = `⚽ GOAL SCORED IN HOME GOAL! Resetting Kickoff Positions...`;
        return true; // Triggers resetMatchPositions() in GameView.tsx!
      }

      // Away Goal (Right / Blue Goal)
      if (ball.pos.x + ball.radius > goals.awayGoal.x + 10) {
        this.state.logMessage = `⚽ GOAL SCORED IN AWAY GOAL! Resetting Kickoff Positions...`;
        return true; // Triggers resetMatchPositions() in GameView.tsx!
      }
    }

    return false;
  }
}
