import { MatchRulesState, MatchMode, BallState, PlayerEntity } from '../types/game';
import { Ball } from './Ball';
import { Field } from './Field';

export class MatchRules {
  state: MatchRulesState;

  constructor(mode: MatchMode = '1v1_local') {
    this.state = {
      mode,
      timerSeconds: 180, // 3 Minutes Countdown Timer
      scoreHome: 0,
      scoreAway: 0,
      state: 'PLAYING',
      winnerTitle: '',
      logMessage: 'Arena Match Started! First to 3 Goals or 3-Min Timer Countdown.',
      debugInputText: 'Ready'
    };
  }

  resetMatch() {
    this.state.timerSeconds = 180;
    this.state.scoreHome = 0;
    this.state.scoreAway = 0;
    this.state.state = 'PLAYING';
    this.state.winnerTitle = '';
    this.state.logMessage = 'Arena Reset! First to 3 Goals or 3-Min Timer Countdown.';
    this.state.debugInputText = 'Ready';
  }

  setMode(mode: MatchMode) {
    this.state.mode = mode;
    this.resetMatch();
  }

  update(dt: number, ball: Ball, field: Field): boolean {
    if (this.state.state === 'GAME_OVER') return false;

    // Countdown Match Timer
    if (this.state.timerSeconds > 0) {
      this.state.timerSeconds = Math.max(0, this.state.timerSeconds - dt);
    } else if (this.state.state === 'PLAYING') {
      if (this.state.scoreHome !== this.state.scoreAway) {
        this.triggerGameOver(this.state.scoreHome > this.state.scoreAway ? 'HOME TEAM WINS ON TIME!' : 'AWAY TEAM WINS ON TIME!');
      } else {
        // Tied on time -> Enter Golden Goal Overtime!
        this.state.state = 'GOLDEN_GOAL';
        this.state.logMessage = '⏰ TIME EXPIRED! Entering GOLDEN GOAL Overtime (Next goal wins!)';
      }
    }

    // Goal Collision Detection
    const goals = field.goals;
    const isGoalY = ball.pos.y > goals.homeGoal.top && ball.pos.y < goals.homeGoal.bottom;

    if (isGoalY) {
      // Home Goal (Left / Red Goal) -> Point for Away
      if (ball.pos.x - ball.radius < goals.homeGoal.x - 10) {
        this.state.scoreAway++;
        this.state.logMessage = `⚽ GOAL FOR AWAY TEAM! (${this.state.scoreHome} - ${this.state.scoreAway})`;
        this.checkWinCondition('AWAY TEAM');
        return true;
      }

      // Away Goal (Right / Blue Goal) -> Point for Home
      if (ball.pos.x + ball.radius > goals.awayGoal.x + 10) {
        this.state.scoreHome++;
        this.state.logMessage = `⚽ GOAL FOR HOME TEAM! (${this.state.scoreHome} - ${this.state.scoreAway})`;
        this.checkWinCondition('HOME TEAM');
        return true;
      }
    }

    return false;
  }

  private checkWinCondition(lastScorer: 'HOME TEAM' | 'AWAY TEAM') {
    if (this.state.state === 'GOLDEN_GOAL') {
      this.triggerGameOver(`🏆 ${lastScorer} WINS VIA GOLDEN GOAL!`);
      return;
    }

    if (this.state.scoreHome >= 3) {
      this.triggerGameOver('🏆 HOME TEAM VICTORIOUS! (3 Goals Scored)');
    } else if (this.state.scoreAway >= 3) {
      this.triggerGameOver('🏆 AWAY TEAM VICTORIOUS! (3 Goals Scored)');
    }
  }

  private triggerGameOver(title: string) {
    this.state.state = 'GAME_OVER';
    this.state.winnerTitle = title;
    this.state.logMessage = `🏁 GAME OVER! ${title}`;
  }
}
