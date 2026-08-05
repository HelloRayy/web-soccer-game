import { MatchRulesState, MatchMode } from '../types/game';
import { Ball } from './Ball';
import { Field } from './Field';

const MATCH_LIMIT_SECONDS = 180; // 3 Minutes Limit (0:00 -> 3:00)

export class MatchRules {
  state: MatchRulesState;
  private isGoalCoolingDown: boolean = false;

  constructor(mode: MatchMode = '1v1_local') {
    this.state = {
      mode,
      timerSeconds: 0,
      scoreHome: 0,
      scoreAway: 0,
      state: 'PLAYING',
      winnerTitle: '',
      logMessage: '⚽ MATCH STARTED - COUNTING UP TO 3:00 FULL TIME',
      debugInputText: '[READY]',
    };
  }

  resetMatch() {
    this.isGoalCoolingDown = false;
    this.state.timerSeconds = 0;
    this.state.scoreHome = 0;
    this.state.scoreAway = 0;
    this.state.state = 'PLAYING';
    this.state.winnerTitle = '';
    this.state.logMessage = '⚽ MATCH RESET - COUNTING UP TO 3:00 FULL TIME';
    this.state.debugInputText = '[READY]';
  }

  setMode(mode: MatchMode) {
    this.state.mode = mode;
    this.resetMatch();
  }

  update(dt: number, ball: Ball, field: Field): boolean {
    if (this.state.state === 'GAME_OVER') return false;

    // 1. Timer Count-Up (0:00 -> 3:00 Limit)
    if (this.state.state === 'PLAYING') {
      this.state.timerSeconds += dt;

      if (this.state.timerSeconds >= MATCH_LIMIT_SECONDS) {
        this.state.timerSeconds = MATCH_LIMIT_SECONDS;

        if (this.state.scoreHome > this.state.scoreAway) {
          this.state.state = 'GAME_OVER';
          this.state.winnerTitle = '🎉 VICTORY! HOME TEAM WINS!';
          this.state.logMessage = '🏆 FULL TIME (3:00) - HOME TEAM WINS THE MATCH!';
        } else if (this.state.scoreAway > this.state.scoreHome) {
          this.state.state = 'GAME_OVER';
          this.state.winnerTitle = '🎉 VICTORY! AWAY TEAM WINS!';
          this.state.logMessage = '🏆 FULL TIME (3:00) - AWAY TEAM WINS THE MATCH!';
        } else {
          // Tied Match -> Golden Goal Extra Time!
          this.state.state = 'GOLDEN_GOAL';
          this.state.logMessage = '⚡ FULL TIME DRAW (3:00)! GOLDEN GOAL EXTRA TIME - NEXT GOAL WINS!';
        }
      }
    } else if (this.state.state === 'GOLDEN_GOAL') {
      // Continue timer during Golden Goal Extra Time
      this.state.timerSeconds += dt;
    }

    // 2. Goal Collision Detection & Score Tracking
    if (this.isGoalCoolingDown) return false;

    const goals = field.goals;
    const isGoalY = ball.pos.y > goals.homeGoal.top && ball.pos.y < goals.homeGoal.bottom;

    if (isGoalY) {
      // Home Goal (Left / Red Net) -> Away Team Scores!
      if (ball.pos.x - ball.radius < goals.homeGoal.x - 10) {
        this.state.scoreAway += 1;
        this.isGoalCoolingDown = true;
        this.state.logMessage = `⚽ GOAL SCORED BY AWAY TEAM! (${this.state.scoreHome} - ${this.state.scoreAway})`;

        if (this.state.state === 'GOLDEN_GOAL') {
          this.state.state = 'GAME_OVER';
          this.state.winnerTitle = '⚡ GOLDEN GOAL! AWAY TEAM WINS!';
        }

        setTimeout(() => {
          this.isGoalCoolingDown = false;
        }, 2000);

        return true; // Triggers goal celebration & kickoff reset in GameView
      }

      // Away Goal (Right / Blue Net) -> Home Team Scores!
      if (ball.pos.x + ball.radius > goals.awayGoal.x + 10) {
        this.state.scoreHome += 1;
        this.isGoalCoolingDown = true;
        this.state.logMessage = `⚽ GOAL SCORED BY HOME TEAM! (${this.state.scoreHome} - ${this.state.scoreAway})`;

        if (this.state.state === 'GOLDEN_GOAL') {
          this.state.state = 'GAME_OVER';
          this.state.winnerTitle = '⚡ GOLDEN GOAL! HOME TEAM WINS!';
        }

        setTimeout(() => {
          this.isGoalCoolingDown = false;
        }, 2000);

        return true; // Triggers goal celebration & kickoff reset in GameView
      }
    }

    return false;
  }
}
