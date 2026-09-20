import { MatchRulesState, MatchMode, MatchPhase, MatchStats, TeamType } from '../types/game';
import { Ball } from './Ball';
import { Field } from './Field';
import { Player } from './Player';

const MATCH_LIMIT_SECONDS = 60; // 60s Total Match (30s 1st Half + 30s 2nd Half)
const HALF_TIME_SECONDS = 30; // 30s Half Time whistle

export interface MatchUpdateResult {
  goalScored: boolean;
  phaseChanged?: boolean;
  needsKickoffReset?: boolean;
}

export class MatchRules {
  state: MatchRulesState;
  private isGoalCoolingDown: boolean = false;
  private halfTimeTriggered: boolean = false;
  private homePossessionTicks: number = 50;
  private awayPossessionTicks: number = 50;

  // Match Engine Flow State
  kickoffTeam: TeamType = 'home';
  celebrationTimer: number = 0;
  halfTimeTimer: number = 0;
  lastGoalShotSpeed: number = 0;
  lastGoalScorerTeam: TeamType | null = null;

  constructor(mode: MatchMode = '1v1_local') {
    this.state = {
      mode,
      timerSeconds: 0,
      scoreHome: 0,
      scoreAway: 0,
      state: 'PLAYING',
      phase: 'PHASE_KICKOFF',
      stats: {
        possessionHome: 50,
        possessionAway: 50,
        shotsHome: 0,
        shotsAway: 0,
        shotsOnTargetHome: 0,
        shotsOnTargetAway: 0,
        passesHome: 0,
        passesAway: 0,
        tacklesHome: 0,
        tacklesAway: 0,
      },
      winnerTitle: '',
      logMessage: '⚽ KICK-OFF READY - PASS OR SHOOT TO START',
      debugInputText: '[KICK-OFF]',
    };
  }

  resetMatch() {
    this.isGoalCoolingDown = false;
    this.halfTimeTriggered = false;
    this.homePossessionTicks = 50;
    this.awayPossessionTicks = 50;
    this.celebrationTimer = 0;
    this.halfTimeTimer = 0;
    this.lastGoalShotSpeed = 0;
    this.lastGoalScorerTeam = null;
    this.kickoffTeam = 'home';

    this.state.timerSeconds = 0;
    this.state.scoreHome = 0;
    this.state.scoreAway = 0;
    this.state.state = 'PLAYING';
    this.state.phase = 'PHASE_KICKOFF';
    this.state.stats = {
      possessionHome: 50,
      possessionAway: 50,
      shotsHome: 0,
      shotsAway: 0,
      shotsOnTargetHome: 0,
      shotsOnTargetAway: 0,
      passesHome: 0,
      passesAway: 0,
      tacklesHome: 0,
      tacklesAway: 0,
    };
    this.state.winnerTitle = '';
    this.state.logMessage = '⚽ KICK-OFF READY - PASS OR SHOOT TO START';
    this.state.debugInputText = '[KICK-OFF]';
  }

  setMode(mode: MatchMode) {
    this.state.mode = mode;
    this.resetMatch();
  }

  recordPass(team: TeamType) {
    if (team === 'home') {
      this.state.stats.passesHome++;
    } else {
      this.state.stats.passesAway++;
    }
  }

  recordShot(team: TeamType, onTarget: boolean = false) {
    if (team === 'home') {
      this.state.stats.shotsHome++;
      if (onTarget) this.state.stats.shotsOnTargetHome++;
    } else {
      this.state.stats.shotsAway++;
      if (onTarget) this.state.stats.shotsOnTargetAway++;
    }
  }

  recordTackle(team: TeamType) {
    if (team === 'home') {
      this.state.stats.tacklesHome++;
    } else {
      this.state.stats.tacklesAway++;
    }
  }

  resumeFromHalfTime() {
    this.halfTimeTimer = 0;
    this.state.phase = 'PHASE_KICKOFF';
    this.kickoffTeam = 'away';
    this.state.logMessage = '⚽ 2ND HALF KICK-OFF - AWAY TEAM RESTARTS';
    this.state.debugInputText = '[2ND HALF]';
  }

  update(dt: number, ball: Ball, field: Field, players: Player[] = []): MatchUpdateResult {
    if (this.state.state === 'GAME_OVER') {
      return { goalScored: false };
    }

    // 1. PHASE_KICKOFF: Wait for ball kickoff action
    if (this.state.phase === 'PHASE_KICKOFF') {
      const ballSpeed = Math.hypot(ball.vel.x, ball.vel.y);
      if (ballSpeed > 0.8 || ball.attachedPlayerId !== null) {
        this.state.phase = 'PHASE_PLAYING';
        this.state.logMessage = '⚽ MATCH IN PLAY!';
        this.state.debugInputText = '[IN PLAY]';
        return { goalScored: false, phaseChanged: true };
      }
      return { goalScored: false };
    }

    // 2. PHASE_GOAL_CELEBRATION: Countdown celebration and transition to restart
    if (this.state.phase === 'PHASE_GOAL_CELEBRATION') {
      this.celebrationTimer -= dt;
      if (this.celebrationTimer <= 0) {
        this.state.phase = 'PHASE_KICKOFF';
        this.state.logMessage = `⚽ KICK-OFF: ${this.kickoffTeam.toUpperCase()} TEAM RESTARTS`;
        this.state.debugInputText = '[KICK-OFF]';
        return { goalScored: false, phaseChanged: true, needsKickoffReset: true };
      }
      return { goalScored: false };
    }

    // 3. PHASE_HALF_TIME: Summary card display before 2nd half
    if (this.state.phase === 'PHASE_HALF_TIME') {
      this.halfTimeTimer -= dt;
      if (this.halfTimeTimer <= 0) {
        this.resumeFromHalfTime();
        return { goalScored: false, phaseChanged: true, needsKickoffReset: true };
      }
      return { goalScored: false };
    }

    // 4. PHASE_PLAYING / GOLDEN_GOAL: Active Match Simulation
    // A. Possession Tracking
    const carrier = players.find((p) => p.hasPossession) || (ball.attachedPlayerId ? players.find((p) => p.id === ball.attachedPlayerId) : null);
    if (carrier) {
      if (carrier.team === 'home') {
        this.homePossessionTicks += 1;
      } else {
        this.awayPossessionTicks += 1;
      }
      const totalTicks = this.homePossessionTicks + this.awayPossessionTicks;
      if (totalTicks > 0) {
        this.state.stats.possessionHome = Math.round((this.homePossessionTicks / totalTicks) * 100);
        this.state.stats.possessionAway = 100 - this.state.stats.possessionHome;
      }
    }

    // B. Match Timer Count-Up
    this.state.timerSeconds += dt;

    // Check Half-Time at 30s (0:30 remaining)
    if (!this.halfTimeTriggered && this.state.timerSeconds >= HALF_TIME_SECONDS && this.state.state !== 'GOLDEN_GOAL') {
      this.halfTimeTriggered = true;
      this.state.phase = 'PHASE_HALF_TIME';
      this.halfTimeTimer = 3.5;
      this.state.logMessage = '⏸️ HALF TIME (30s)! BABAK PERTAMA SELESAI';
      this.state.debugInputText = '[HALF TIME]';
      return { goalScored: false, phaseChanged: true };
    }

    // Check Full-Time at 60s (0:00 remaining)
    if (this.state.timerSeconds >= MATCH_LIMIT_SECONDS) {
      this.state.timerSeconds = MATCH_LIMIT_SECONDS;

      if (this.state.scoreHome > this.state.scoreAway) {
        this.state.state = 'GAME_OVER';
        this.state.phase = 'PHASE_FULL_TIME';
        this.state.winnerTitle = '🎉 VICTORY! HOME TEAM WINS!';
        this.state.logMessage = '🏆 FULL TIME (0:00) - HOME TEAM WINS THE MATCH!';
        return { goalScored: false, phaseChanged: true };
      } else if (this.state.scoreAway > this.state.scoreHome) {
        this.state.state = 'GAME_OVER';
        this.state.phase = 'PHASE_FULL_TIME';
        this.state.winnerTitle = '🎉 VICTORY! AWAY TEAM WINS!';
        this.state.logMessage = '🏆 FULL TIME (0:00) - AWAY TEAM WINS THE MATCH!';
        return { goalScored: false, phaseChanged: true };
      } else {
        // Tied Match -> Golden Goal Extra Time (Babak Penentuan - Siapa Ngegolin Dulu Dia Menang)!
        if (this.state.state !== 'GOLDEN_GOAL') {
          this.state.state = 'GOLDEN_GOAL';
          this.state.logMessage = '⚡ BABAK PENENTUAN! SKOR SERI (0:00) - GOLDEN GOAL: SIAPA NGE-GOLIN DULU DIA MENANG!';
        }
      }
    }

    // C. Goal Detection & Score Tracking
    if (this.isGoalCoolingDown) return { goalScored: false };

    const goals = field.goals;
    const isGoalY = ball.pos.y > goals.homeGoal.top && ball.pos.y < goals.homeGoal.bottom;

    if (isGoalY) {
      // Home Goal (Left / Red Net) -> Away Team Scores!
      if (ball.pos.x - ball.radius < goals.homeGoal.x - 10) {
        this.state.scoreAway += 1;
        this.state.stats.shotsAway += 1;
        this.state.stats.shotsOnTargetAway += 1;
        this.isGoalCoolingDown = true;
        this.lastGoalScorerTeam = 'away';
        this.kickoffTeam = 'home'; // Conceding team kicks off next

        const ballSpeed = Math.hypot(ball.vel.x, ball.vel.y);
        this.lastGoalShotSpeed = Math.max(72, Math.round(ballSpeed * 9.6));

        this.state.phase = 'PHASE_GOAL_CELEBRATION';
        this.celebrationTimer = 2.4;
        this.state.logMessage = `⚽ GOAL SCORED BY AWAY TEAM! (${this.state.scoreHome} - ${this.state.scoreAway})`;

        if (this.state.state === 'GOLDEN_GOAL') {
          this.state.state = 'GAME_OVER';
          this.state.phase = 'PHASE_FULL_TIME';
          this.state.winnerTitle = '⚡ GOLDEN GOAL! AWAY TEAM WINS!';
        }

        setTimeout(() => {
          this.isGoalCoolingDown = false;
        }, 2200);

        return { goalScored: true, phaseChanged: true };
      }

      // Away Goal (Right / Blue Net) -> Home Team Scores!
      if (ball.pos.x + ball.radius > goals.awayGoal.x + 10) {
        this.state.scoreHome += 1;
        this.state.stats.shotsHome += 1;
        this.state.stats.shotsOnTargetHome += 1;
        this.isGoalCoolingDown = true;
        this.lastGoalScorerTeam = 'home';
        this.kickoffTeam = 'away'; // Conceding team kicks off next

        const ballSpeed = Math.hypot(ball.vel.x, ball.vel.y);
        this.lastGoalShotSpeed = Math.max(72, Math.round(ballSpeed * 9.6));

        this.state.phase = 'PHASE_GOAL_CELEBRATION';
        this.celebrationTimer = 2.4;
        this.state.logMessage = `⚽ GOAL SCORED BY HOME TEAM! (${this.state.scoreHome} - ${this.state.scoreAway})`;

        if (this.state.state === 'GOLDEN_GOAL') {
          this.state.state = 'GAME_OVER';
          this.state.phase = 'PHASE_FULL_TIME';
          this.state.winnerTitle = '⚡ GOLDEN GOAL! HOME TEAM WINS!';
        }

        setTimeout(() => {
          this.isGoalCoolingDown = false;
        }, 2200);

        return { goalScored: true, phaseChanged: true };
      }
    }

    return { goalScored: false };
  }
}
