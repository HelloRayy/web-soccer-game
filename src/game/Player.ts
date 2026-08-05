import { GamepadState, PlayerEntity, TeamType, Vector2D } from '../types/game';
import { Ball } from './Ball';
import { Field } from './Field';

interface TurfParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  color: string;
  size: number;
}

function lerpAngle(start: number, end: number, amount: number): number {
  let diff = end - start;
  while (diff < -Math.PI) diff += Math.PI * 2;
  while (diff > Math.PI) diff -= Math.PI * 2;
  return start + diff * amount;
}

export class Player implements PlayerEntity {
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

  // Stamina & Fatigue Properties
  stamina: number; // 0.0 to 1.0
  isExhausted: boolean;

  // Realistic Micro-Movement Properties
  bodyTiltAngle: number;
  turfParticles: TurfParticle[];

  // Charged Power Bar Slide Tackle Properties
  isChargingSlide: boolean;
  slidePower: number; // 0.0 to 1.0
  isTackling: boolean;
  tackleTimer: number;
  tackleSlideAngle: number;

  // Gocek & Stumble Properties
  isDribbleSkillActive: boolean;
  skillDodgeInvincibleTimer: number;
  stumbleTimer: number = 0;
  dispossessProtectionTimer: number = 0;
  duelFeedbackText: string = '';
  duelFeedbackTimer: number = 0;
  duelFeedbackYOffset: number = 0;
  dribbleSpinAngle: number = 0;

  // Debug State Tracker
  debugInputString: string = '';

  // Patrol / Walking Simulation & AI Cooldown Timers
  private walkTimer: number = 0;
  private aiGocekCooldownTimer: number = 0;
  private aiTackleCooldownTimer: number = 0;

  // Previous button states for single-press edge detection
  private prevX: boolean;
  private prevA: boolean;
  private prevB: boolean;
  private prevY: boolean;
  private prevRB: boolean;
  private prevLB: boolean;
  private prevStart: boolean;

  constructor(id: string, name: string, team: TeamType, controllerIndex: number | null, color: string, startX: number, startY: number) {
    this.id = id;
    this.name = name;
    this.team = team;
    this.controllerIndex = controllerIndex;
    this.isAI = controllerIndex === null;
    this.pos = { x: startX, y: startY };
    this.vel = { x: 0, y: 0 };
    this.radius = 18;
    this.speed = 3.2;
    this.color = color;
    this.facingAngle = team === 'home' ? 0 : Math.PI;
    this.isSprinting = false;
    this.hasPossession = false;

    // Stamina Defaults
    this.stamina = 1.0;
    this.isExhausted = false;

    this.bodyTiltAngle = 0;
    this.turfParticles = [];

    // Charged Slide Power Defaults
    this.isChargingSlide = false;
    this.slidePower = 0;
    this.isTackling = false;
    this.tackleTimer = 0;
    this.tackleSlideAngle = 0;

    this.isDribbleSkillActive = false;
    this.skillDodgeInvincibleTimer = 0;
    this.stumbleTimer = 0;
    this.duelFeedbackText = '';
    this.duelFeedbackTimer = 0;
    this.duelFeedbackYOffset = 0;
    this.dribbleSpinAngle = 0;

    this.debugInputString = 'IDLE - Ready for Input';
    this.walkTimer = Math.random() * 100;
    this.prevX = false;
    this.prevA = false;
    this.prevB = false;
    this.prevY = false;
    this.prevRB = false;
    this.prevLB = false;
    this.prevStart = false;
  }

  reset(x: number, y: number) {
    this.pos = { x, y };
    this.vel = { x: 0, y: 0 };
    this.facingAngle = this.team === 'home' ? 0 : Math.PI;
    this.stamina = 1.0;
    this.isExhausted = false;
    this.bodyTiltAngle = 0;
    this.turfParticles = [];
    this.hasPossession = false;

    this.isChargingSlide = false;
    this.slidePower = 0;
    this.isTackling = false;
    this.tackleTimer = 0;
    this.tackleSlideAngle = 0;

    this.isDribbleSkillActive = false;
    this.skillDodgeInvincibleTimer = 0;
    this.stumbleTimer = 0;
    this.duelFeedbackText = '';
    this.duelFeedbackTimer = 0;
    this.duelFeedbackYOffset = 0;
    this.dribbleSpinAngle = 0;
    this.aiGocekCooldownTimer = 0;
    this.dispossessProtectionTimer = 0;

    this.debugInputString = 'RESET - Position Cleared';
    this.prevX = false;
    this.prevA = false;
    this.prevB = false;
    this.prevY = false;
    this.prevRB = false;
    this.prevLB = false;
    this.prevStart = false;
  }

  triggerFeedback(text: string) {
    this.duelFeedbackText = text;
    this.duelFeedbackTimer = 1.2;
    this.duelFeedbackYOffset = 0;
  }

  findBestPassTarget(teammates: Player[], aimAngle: number): Player | null {
    const candidates = teammates.filter((t) => t.id !== this.id);
    if (candidates.length === 0) return null;

    let bestTarget: Player | null = null;
    let bestScore = Infinity;
    const maxVisionAngleThreshold = Math.PI / 5;

    candidates.forEach((candidate) => {
      const dx = candidate.pos.x - this.pos.x;
      const dy = candidate.pos.y - this.pos.y;
      const dist = Math.hypot(dx, dy);

      const targetAngle = Math.atan2(dy, dx);
      let angleDiff = Math.abs(targetAngle - aimAngle);
      while (angleDiff > Math.PI) angleDiff = Math.abs(angleDiff - Math.PI * 2);

      if (angleDiff <= maxVisionAngleThreshold) {
        const score = angleDiff * 200 + dist;
        if (score < bestScore) {
          bestScore = score;
          bestTarget = candidate;
        }
      }
    });

    return bestTarget;
  }

  private updateParticles() {
    for (let i = this.turfParticles.length - 1; i >= 0; i--) {
      const p = this.turfParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vx *= 0.92;
      p.vy *= 0.92;
      p.life -= 0.025;
      if (p.life <= 0) {
        this.turfParticles.splice(i, 1);
      }
    }
  }

  private spawnTurfParticle(speedRatio: number, isSlide = false) {
    const count = isSlide ? 4 : 1;
    for (let k = 0; k < count; k++) {
      const backAngle = (isSlide ? this.tackleSlideAngle : this.facingAngle) + Math.PI + (Math.random() - 0.5) * 1.1;
      this.turfParticles.push({
        x: this.pos.x + Math.cos(backAngle) * (this.radius * 0.7),
        y: this.pos.y + Math.sin(backAngle) * (this.radius * 0.7),
        vx: Math.cos(backAngle) * (Math.random() * 4.0 + 1.2) * speedRatio,
        vy: Math.sin(backAngle) * (Math.random() * 4.0 + 1.2) * speedRatio,
        life: 1.0,
        color: isSlide ? (Math.random() > 0.4 ? '#e0f2fe' : Math.random() > 0.5 ? '#86efac' : '#38bdf8') : Math.random() > 0.5 ? '#15803d' : '#86efac',
        size: isSlide ? Math.random() * 4.5 + 2.0 : Math.random() * 2.5 + 1.2,
      });
    }
  }

  executePassTo(targetPlayer: Player, ball: Ball) {
    if (!this.hasPossession) return;

    this.hasPossession = false;
    targetPlayer.hasPossession = false;

    const dx = targetPlayer.pos.x - this.pos.x;
    const dy = targetPlayer.pos.y - this.pos.y;
    const dist = Math.hypot(dx, dy) || 1;

    this.facingAngle = Math.atan2(dy, dx);

    const passPower = Math.min(Math.max(dist * 0.042 + 4.5, 6.5), 11.5);
    ball.kick({ x: dx / dist, y: dy / dist }, passPower, this.id, targetPlayer);
  }

  updateEnemyBotAI(ball: Ball, field: Field, opponents: Player[], teammates: Player[] = []) {
    this.walkTimer += 0.02;
    this.updateParticles();

    if (this.stumbleTimer > 0) this.stumbleTimer -= 0.016;
    if (this.aiGocekCooldownTimer > 0) this.aiGocekCooldownTimer -= 0.016;
    if (this.aiTackleCooldownTimer > 0) this.aiTackleCooldownTimer -= 0.016;
    if (this.dispossessProtectionTimer > 0) this.dispossessProtectionTimer -= 0.016;
    if (this.duelFeedbackTimer > 0) {
      this.duelFeedbackTimer -= 0.016;
      this.duelFeedbackYOffset += 0.4;
    }

    const teammateCarrier = teammates.find((t) => t.hasPossession);
    const opponentCarrier = opponents.find((opp) => opp.hasPossession);

    if (this.hasPossession) {
      // 1. CARRIER BOT: Dribble towards Home Goal
      const targetGoal = field.goals.homeGoal;
      const targetY = targetGoal.top + (targetGoal.bottom - targetGoal.top) * 0.5;

      const dxToGoal = targetGoal.x - this.pos.x;
      const dyToGoal = targetY - this.pos.y;
      const distToGoal = Math.hypot(dxToGoal, dyToGoal) || 1;

      if (distToGoal < 380 && ball.releaseTimer <= 0) {
        this.hasPossession = false;
        const shootPower = 15.0;
        const aimOffset = (Math.random() - 0.5) * 40;
        const shootDirX = dxToGoal / distToGoal;
        const shootDirY = (dyToGoal + aimOffset) / distToGoal;

        ball.kick({ x: shootDirX, y: shootDirY }, shootPower, this.id);
        this.triggerFeedback('⚽ AI SHOOT!');
      } else if (teammateCarrier === undefined && teammates.length > 0 && Math.random() < 0.010) {
        const openTeammate = teammates[0];
        const distToTm = Math.hypot(openTeammate.pos.x - this.pos.x, openTeammate.pos.y - this.pos.y);
        if (distToTm > 200 && distToTm < 600) {
          this.hasPossession = false;
          const passDirX = (openTeammate.pos.x - this.pos.x) / distToTm;
          const passDirY = (openTeammate.pos.y - this.pos.y) / distToTm;
          ball.kick({ x: passDirX, y: passDirY }, 9.5, this.id, openTeammate);
          this.triggerFeedback('⚽ AI PASS!');
        }
      } else {
        let moveX = dxToGoal / distToGoal;
        let moveY = dyToGoal / distToGoal;

        const blockingOpponent = opponents.find((opp) => {
          const oppDist = Math.hypot(opp.pos.x - this.pos.x, opp.pos.y - this.pos.y);
          if (oppDist > 90) return false;
          const dot = (opp.pos.x - this.pos.x) * moveX + (opp.pos.y - this.pos.y) * moveY;
          return dot > 0;
        });

        if (blockingOpponent) {
          const sideSign = this.pos.y < blockingOpponent.pos.y ? -1 : 1;
          const perpX = -moveY * sideSign;
          const perpY = moveX * sideSign;

          moveX = moveX * 0.35 + perpX * 0.65;
          moveY = moveY * 0.35 + perpY * 0.65;
          const norm = Math.hypot(moveX, moveY) || 1;
          moveX /= norm;
          moveY /= norm;
        }

        const walkSpeed = this.speed * 0.48;
        this.vel.x = moveX * walkSpeed;
        this.vel.y = moveY * walkSpeed;

        const targetAngle = Math.atan2(this.vel.y, this.vel.x);
        this.facingAngle = lerpAngle(this.facingAngle, targetAngle, 0.22);
        ball.attachToPlayer(this.pos, this.facingAngle, this.radius, this.vel, this.id);
      }
    } else if (teammateCarrier) {
      // 2. OFF-THE-BALL SUPPORT: Run in wide parallel channels (yOffset = 260px)
      const yOffset = (this.id === 'p4' ? 260 : -260);
      const targetRunX = Math.max(field.pitchBounds.left + 200, teammateCarrier.pos.x - 40);
      const targetRunY = Math.max(field.pitchBounds.top + 120, Math.min(field.pitchBounds.bottom - 120, teammateCarrier.pos.y + yOffset));

      const dx = targetRunX - this.pos.x;
      const dy = targetRunY - this.pos.y;
      const dist = Math.hypot(dx, dy) || 1;

      const runSpeed = dist > 40 ? this.speed * 0.52 : 0;
      this.vel.x = (dx / dist) * runSpeed;
      this.vel.y = (dy / dist) * runSpeed;

      const homeGoalCenterY = (field.goals.homeGoal.top + field.goals.homeGoal.bottom) * 0.5;
      const targetAngle = Math.atan2(homeGoalCenterY - this.pos.y, field.goals.homeGoal.x - this.pos.x);
      this.facingAngle = lerpAngle(this.facingAngle, targetAngle, 0.18);
    } else if (opponentCarrier) {
      // 3. DEFENDING OPPONENT: One bot presses gently, second bot covers
      const isClosestToOpponent = teammates.every((t) => {
        const myDist = Math.hypot(opponentCarrier.pos.x - this.pos.x, opponentCarrier.pos.y - this.pos.y);
        const tDist = Math.hypot(opponentCarrier.pos.x - t.pos.x, opponentCarrier.pos.y - t.pos.y);
        return myDist <= tDist;
      });

      if (isClosestToOpponent) {
        const dx = opponentCarrier.pos.x - this.pos.x;
        const dy = opponentCarrier.pos.y - this.pos.y;
        const dist = Math.hypot(dx, dy) || 1;

        // Slide Tackle ONLY if very close (< 65px), rare chance (8%), and 4.0s cooldown!
        if (dist < 65 && !this.isTackling && this.aiTackleCooldownTimer <= 0 && Math.random() < 0.08) {
          this.isTackling = true;
          this.tackleTimer = 0.40;
          this.aiTackleCooldownTimer = 4.0; // 4.0s Cooldown!
          this.tackleSlideAngle = Math.atan2(dy, dx);
          this.triggerFeedback('⚡ SLIDE TACKLE!');
        }

        const chaseSpeed = this.speed * 0.52; // Fair, non-brutal chase speed!
        this.vel.x = (dx / dist) * chaseSpeed;
        this.vel.y = (dy / dist) * chaseSpeed;
        this.facingAngle = lerpAngle(this.facingAngle, Math.atan2(dy, dx), 0.22);
      } else {
        const awayGoalCenterY = (field.goals.awayGoal.top + field.goals.awayGoal.bottom) * 0.5;
        const targetCoverX = (opponentCarrier.pos.x + field.goals.awayGoal.x) * 0.5;
        const targetCoverY = (opponentCarrier.pos.y + awayGoalCenterY) * 0.5;

        const dx = targetCoverX - this.pos.x;
        const dy = targetCoverY - this.pos.y;
        const dist = Math.hypot(dx, dy) || 1;

        const coverSpeed = dist > 40 ? this.speed * 0.48 : 0;
        this.vel.x = (dx / dist) * coverSpeed;
        this.vel.y = (dy / dist) * coverSpeed;
        this.facingAngle = lerpAngle(this.facingAngle, Math.atan2(dy, dx), 0.18);
      }
    } else {
      // 4. LOOSE BALL CHASE: Only closest bot chases, other stays back
      const isClosestToBall = teammates.every((t) => {
        const myDist = Math.hypot(ball.pos.x - this.pos.x, ball.pos.y - this.pos.y);
        const tDist = Math.hypot(ball.pos.x - t.pos.x, ball.pos.y - t.pos.y);
        return myDist <= tDist;
      });

      if (isClosestToBall) {
        const dx = ball.pos.x - this.pos.x;
        const dy = ball.pos.y - this.pos.y;
        const dist = Math.hypot(dx, dy) || 1;

        this.vel.x = (dx / dist) * this.speed * 0.65;
        this.vel.y = (dy / dist) * this.speed * 0.65;
        this.facingAngle = lerpAngle(this.facingAngle, Math.atan2(dy, dx), 0.22);
      } else {
        const yOffset = (this.id === 'p4' ? 240 : -240);
        const targetX = ball.pos.x - 140;
        const targetY = ball.pos.y + yOffset;

        const dx = targetX - this.pos.x;
        const dy = targetY - this.pos.y;
        const dist = Math.hypot(dx, dy) || 1;

        this.vel.x = (dx / dist) * this.speed * 0.45;
        this.vel.y = (dy / dist) * this.speed * 0.45;
        this.facingAngle = lerpAngle(this.facingAngle, Math.atan2(dy, dx), 0.18);
      }
    }

    // Anti-Clumping Repulsion Vector between Bot Teammates
    teammates.forEach((teammate) => {
      const tmDist = Math.hypot(teammate.pos.x - this.pos.x, teammate.pos.y - this.pos.y);
      if (tmDist < 260 && tmDist > 0) {
        const repX = (this.pos.x - teammate.pos.x) / tmDist;
        const repY = (this.pos.y - teammate.pos.y) / tmDist;
        const repForce = (260 - tmDist) * 0.035;

        this.vel.x += repX * repForce;
        this.vel.y += repY * repForce;
      }
    });

    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;

    const bounds = field.pitchBounds;
    this.pos.x = Math.max(bounds.left + this.radius, Math.min(bounds.right - this.radius, this.pos.x));
    this.pos.y = Math.max(bounds.top + this.radius, Math.min(bounds.bottom - this.radius, this.pos.y));
  }

  updatePassiveReception(ball: Ball, field: Field) {
    this.walkTimer += 0.02;
    this.updateParticles();

    if (!this.isSprinting) {
      this.stamina = Math.min(1.0, this.stamina + 0.0025);
      if (this.isExhausted && this.stamina >= 0.20) {
        this.isExhausted = false;
      }
    }

    if (this.tackleTimer > 0) {
      this.tackleTimer -= 0.016;
      this.vel.x *= 0.94;
      this.vel.y *= 0.94;
      this.spawnTurfParticle(2.5, true);
    } else {
      this.isTackling = false;
    }

    if (this.skillDodgeInvincibleTimer > 0) {
      this.skillDodgeInvincibleTimer -= 0.016;
      this.dribbleSpinAngle += 0.35;
    } else {
      this.isDribbleSkillActive = false;
      this.dribbleSpinAngle = 0;
    }

    if (this.stumbleTimer > 0) this.stumbleTimer -= 0.016;
    if (this.duelFeedbackTimer > 0) {
      this.duelFeedbackTimer -= 0.016;
      this.duelFeedbackYOffset += 0.4;
    }

    const distToBall = Math.hypot(this.pos.x - ball.pos.x, this.pos.y - ball.pos.y);

    if (ball.homingTargetPlayer && ball.homingTargetPlayer.id === this.id) {
      this.hasPossession = false;

      let targetX = ball.pos.x;
      let targetY = ball.pos.y;

      if (ball.throughPassTargetPos) {
        targetX = ball.throughPassTargetPos.x;
        targetY = ball.throughPassTargetPos.y;

        if (!this.isExhausted && this.stamina > 0) {
          this.isSprinting = true;
          this.stamina = Math.max(0, this.stamina - 0.004);
          if (this.stamina === 0) {
            this.isExhausted = true;
            this.isSprinting = false;
            this.triggerFeedback('⚠️ EXHAUSTED!');
          }
        } else {
          this.isSprinting = false;
        }
        this.spawnTurfParticle(1.5);
      } else {
        this.isSprinting = false;
      }

      const dx = targetX - this.pos.x;
      const dy = targetY - this.pos.y;
      const dist = Math.hypot(dx, dy) || 1;

      const stepSpeed = this.isSprinting ? this.speed * 1.5 : this.speed * 0.70;
      this.vel.x = (dx / dist) * stepSpeed;
      this.vel.y = (dy / dist) * stepSpeed;

      const targetAngle = Math.atan2(dy, dx);
      this.facingAngle = lerpAngle(this.facingAngle, targetAngle, 0.25);

      const touchDist = this.radius + ball.radius + 14;
      if (distToBall < touchDist && ball.releaseTimer <= 0) {
        this.hasPossession = true;
        this.isSprinting = false;
        ball.attachToPlayer(this.pos, this.facingAngle, this.radius, this.vel, this.id);
      }
    } else if (this.hasPossession) {
      const targetGoal = this.team === 'home' ? field.goals.awayGoal : field.goals.homeGoal;
      const targetY = targetGoal.top + (targetGoal.bottom - targetGoal.top) * 0.5;

      const dx = targetGoal.x - this.pos.x;
      const dy = targetY - this.pos.y;
      const dist = Math.hypot(dx, dy) || 1;

      const walkSpeed = this.speed * 0.45;
      this.vel.x = (dx / dist) * walkSpeed;
      this.vel.y = (dy / dist) * walkSpeed * 0.4;

      const targetAngle = Math.atan2(this.vel.y, this.vel.x);
      this.facingAngle = lerpAngle(this.facingAngle, targetAngle, 0.22);

      ball.attachToPlayer(this.pos, this.facingAngle, this.radius, this.vel, this.id);
    } else {
      const walkSpeed = this.speed * 0.35;
      const moveX = Math.cos(this.walkTimer * 1.2);
      const moveY = Math.sin(this.walkTimer * 0.8);

      this.vel.x = moveX * walkSpeed;
      this.vel.y = moveY * walkSpeed;

      const targetAngle = Math.atan2(this.vel.y, this.vel.x);
      this.facingAngle = lerpAngle(this.facingAngle, targetAngle, 0.15);

      if (ball.releaseTimer <= 0 && distToBall < this.radius + ball.radius + 18) {
        this.hasPossession = true;
      }
    }

    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;

    const bounds = field.pitchBounds;
    this.pos.x = Math.max(bounds.left + this.radius, Math.min(bounds.right - this.radius, this.pos.x));
    this.pos.y = Math.max(bounds.top + this.radius, Math.min(bounds.bottom - this.radius, this.pos.y));
  }

  updateFromGamepad(gp: GamepadState, ball: Ball, field: Field, teammates: Player[], opponents: Player[]): { toggleHUDRequested: boolean } {
    let toggleHUDRequested = false;
    this.updateParticles();

    if (this.tackleTimer > 0) {
      this.tackleTimer -= 0.016;
      this.vel.x *= 0.94;
      this.vel.y *= 0.94;
      this.spawnTurfParticle(2.8, true);
    } else {
      this.isTackling = false;
    }

    if (this.skillDodgeInvincibleTimer > 0) {
      this.skillDodgeInvincibleTimer -= 0.016;
      this.dribbleSpinAngle += 0.35;
    } else {
      this.isDribbleSkillActive = false;
      this.dribbleSpinAngle = 0;
    }

    if (this.stumbleTimer > 0) this.stumbleTimer -= 0.016;
    if (this.duelFeedbackTimer > 0) {
      this.duelFeedbackTimer -= 0.016;
      this.duelFeedbackYOffset += 0.4;
    }

    const moveMultiplier = this.stumbleTimer > 0 ? 0.3 : 1.0;

    const moveX = gp.axes.leftStickX;
    const moveY = gp.axes.leftStickY;

    // STAMINA & SPRINT LOGIC (R2 / RT)
    const isWantsSprint = gp.buttons.rt > 0.3;

    if (isWantsSprint) {
      if (this.isExhausted) {
        this.isSprinting = false;
      } else {
        this.isSprinting = true;
        this.stamina = Math.max(0, this.stamina - 0.004);

        if (this.stamina === 0) {
          this.isExhausted = true;
          this.isSprinting = false;
          this.triggerFeedback('⚠️ EXHAUSTED!');
        }
      }
    } else {
      this.isSprinting = false;
      this.stamina = Math.min(1.0, this.stamina + 0.0025);

      if (this.isExhausted && this.stamina >= 0.20) {
        this.isExhausted = false;
      }
    }

    const dribbleMultiplier = this.hasPossession ? 0.88 : 1.0;
    const currentSpeed = (this.isSprinting ? this.speed * 1.45 : this.speed) * moveMultiplier * dribbleMultiplier;
    const stickMagnitude = Math.hypot(moveX, moveY);

    let aimAngle = this.facingAngle;

    if (stickMagnitude > 0.05) {
      const targetVelX = moveX * currentSpeed;
      const targetVelY = moveY * currentSpeed;

      // Turn Inertia: Damp velocity smoothly when making sharp turns
      const currentVelMag = Math.hypot(this.vel.x, this.vel.y);
      let turnFactor = 1.0;
      if (currentVelMag > 0.5) {
        const dot = (this.vel.x * targetVelX + this.vel.y * targetVelY) / (currentVelMag * currentSpeed);
        if (dot < 0) {
          turnFactor = Math.max(0.45, 1.0 + dot * 0.4);
        }
      }

      this.vel.x = this.vel.x * 0.72 + targetVelX * 0.28 * turnFactor;
      this.vel.y = this.vel.y * 0.72 + targetVelY * 0.28 * turnFactor;

      aimAngle = Math.atan2(moveY, moveX);
      const angleDiff = aimAngle - this.facingAngle;
      this.facingAngle = lerpAngle(this.facingAngle, aimAngle, 0.18);

      this.bodyTiltAngle = Math.max(-0.28, Math.min(0.28, angleDiff * 0.40));

      if (this.isSprinting) {
        this.spawnTurfParticle(currentSpeed / this.speed);
      }
    } else {
      this.vel.x = 0;
      this.vel.y = 0;
      this.bodyTiltAngle = 0;
    }

    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;

    const bounds = field.pitchBounds;
    this.pos.x = Math.max(bounds.left + this.radius, Math.min(bounds.right - this.radius, this.pos.x));
    this.pos.y = Math.max(bounds.top + this.radius, Math.min(bounds.bottom - this.radius, this.pos.y));

    const distToBall = Math.hypot(this.pos.x - ball.pos.x, this.pos.y - ball.pos.y);

    if (ball.attachedPlayerId === this.id || this.hasPossession) {
      this.hasPossession = true;
      ball.attachToPlayer(this.pos, this.facingAngle, this.radius, this.vel, this.id);
    } else if (ball.releaseTimer <= 0 && distToBall < this.radius + ball.radius + 28 && !ball.homingTargetPlayer && !ball.attachedPlayerId) {
      this.hasPossession = true;
      ball.attachToPlayer(this.pos, this.facingAngle, this.radius, this.vel, this.id);
    }
    
    // Single Source of Truth Enforcer:
    this.hasPossession = (ball.attachedPlayerId === this.id);

    // BUTTON MAPPING SPEC: A = Pass, B = Tackle, Y = Through/Gocek, X = Shoot, R1 (RB) = Request Ball, R2 (RT) = Sprint
    const isPressingA = gp.buttons.a;
    const isPressingB = gp.buttons.b;
    const isPressingX = gp.buttons.x;
    const isPressingY = gp.buttons.y;
    const isPressingRB = gp.buttons.rb;
    const isPressingLB = gp.buttons.lb;
    const isPressingStart = gp.buttons.start;

    if (isPressingStart && !this.prevStart) {
      toggleHUDRequested = true;
    }

    // R1 / RB REQUEST BALL TRIGGER
    const reqPassTriggered = (isPressingRB && !this.prevRB) || (isPressingLB && !this.prevLB);
    if (reqPassTriggered) {
      const targetTeammate = teammates.find((t) => t.id !== this.id);
      this.triggerFeedback('🙋 PASS SINI!');
      this.debugInputString = `🙋 R1 (RB/E/R) REQUEST BALL -> ${this.name}!`;

      if (targetTeammate && targetTeammate.hasPossession) {
        targetTeammate.executePassTo(this, ball);
      }
    }

    const activeBtns: string[] = [];
    if (this.hasPossession) {
      if (isPressingA) activeBtns.push('A (Passing)');
      if (isPressingX) activeBtns.push('X (Shoot Goal)');
      if (isPressingY) activeBtns.push('Y (Through / Gocek)');
      if (isPressingRB) activeBtns.push('R1 (Gocek Skill)');
    } else {
      if (this.isChargingSlide) activeBtns.push(`B (SLIDE CHARGE: ${(this.slidePower * 100).toFixed(0)}%)`);
      else if (isPressingB) activeBtns.push('B (SLIDE TACKLE!)');
      if (isPressingA) activeBtns.push('A (Switch Defender)');
      if (isPressingY) activeBtns.push('Y (Press / Pressure)');
      if (isPressingRB) activeBtns.push('R1 (Request Ball)');
    }
    if (this.isSprinting) activeBtns.push(`R2 (Sprint Stamina: ${Math.round(this.stamina * 100)}%)`);
    if (this.isExhausted) activeBtns.push('⚠️ EXHAUSTED!');
    if (isPressingStart) activeBtns.push('Start (ToggleHUD)');

    this.debugInputString = activeBtns.length > 0 ? `PRESSED: ${activeBtns.join(' + ')}` : `STICK: [${moveX.toFixed(2)}, ${moveY.toFixed(2)}]`;

    // 1. ATTACKING ACTIONS
    if (this.hasPossession) {
      this.isChargingSlide = false;
      this.slidePower = 0;

      // X Button = Shoot (Goal / Directional Shot)
      if (isPressingX && !this.prevX) {
        const stickMag = Math.hypot(moveX, moveY);
        let dirX = 0;
        let dirY = 0;

        if (stickMag > 0.15) {
          // Player is actively aiming with stick/keys -> Shoot in precise stick direction
          dirX = moveX / stickMag;
          dirY = moveY / stickMag;
        } else {
          // No stick input -> Default to opponent goal center
          const targetGoal = this.team === 'home' ? field.goals.awayGoal : field.goals.homeGoal;
          const targetY = targetGoal.top + (targetGoal.bottom - targetGoal.top) * 0.5;
          const shootDx = targetGoal.x - this.pos.x;
          const shootDy = targetY - this.pos.y;
          const goalLen = Math.hypot(shootDx, shootDy) || 1;

          dirX = shootDx / goalLen;
          dirY = shootDy / goalLen;
        }

        // Update player facing angle to match shot direction instantly
        this.facingAngle = Math.atan2(dirY, dirX);

        // Consistent Power Rocket Shot (Base 16.0, Sprint Boost 17.5)
        const shotPower = this.isSprinting ? 17.5 : 16.0;

        this.hasPossession = false;
        ball.kick({ x: dirX, y: dirY }, shotPower, this.id, null, null);
        this.triggerFeedback('⚽ SHOOT!');
        this.debugInputString = `🔥 DIRECTIONAL SHOOT (Power: ${shotPower.toFixed(1)})!`;
      }

      // A Button = Pass (Passing)
      if (isPressingA && !this.prevA) {
        this.hasPossession = false;

        const targetTeammate = this.findBestPassTarget(teammates, aimAngle);
        if (targetTeammate) {
          targetTeammate.hasPossession = false;

          const dx = targetTeammate.pos.x - this.pos.x;
          const dy = targetTeammate.pos.y - this.pos.y;
          const dist = Math.hypot(dx, dy) || 1;

          const passPower = Math.min(Math.max(dist * 0.042 + 4.5, 6.5), 11.5);
          ball.kick({ x: dx / dist, y: dy / dist }, passPower, this.id, targetTeammate, null);
          this.debugInputString = `⚽ SMART ASSIST PASS TO ${targetTeammate.name} (Tombol A)!`;
        } else {
          const passDir = { x: Math.cos(aimAngle), y: Math.sin(aimAngle) };
          ball.kick(passDir, 8.5, this.id, null, null);
          this.debugInputString = `⚽ MANUAL DIRECTION PASS (No Teammate Aimed)!`;
        }
      }

      // Y Button = Through Pass / Gocek
      const isTriggeringGocek = (isPressingY && !this.prevY);
      if (isTriggeringGocek) {
        this.isDribbleSkillActive = true;
        this.skillDodgeInvincibleTimer = 0.45;
        this.triggerFeedback('🔥 GOCEK!');
        this.debugInputString = `🔥 THROUGH / DRIBBLE GOCEK TRIGGERED (Tombol Y)!`;
      }
    }
    // 2. DEFENDING ACTIONS: B Button = Slide Tackle with Charged Power Bar!
    else {
      if (isPressingB) {
        this.isChargingSlide = true;
        this.slidePower = Math.min(1.0, this.slidePower + 0.035);
      } else if (this.prevB && this.isChargingSlide) {
        this.isChargingSlide = false;
        this.isTackling = true;

        const slideSpeed = 8.0 + this.slidePower * 14.0;
        this.tackleTimer = 0.40 + this.slidePower * 0.35;
        this.tackleSlideAngle = this.facingAngle;

        this.vel.x += Math.cos(this.facingAngle) * slideSpeed;
        this.vel.y += Math.sin(this.facingAngle) * slideSpeed;

        const powerPercent = Math.round(this.slidePower * 100);
        this.triggerFeedback(`⚡ SLIDE ${powerPercent}%!`);
        this.slidePower = 0;
      } else {
        this.isChargingSlide = false;
        this.slidePower = 0;
      }
    }

    this.prevX = isPressingX;
    this.prevA = isPressingA;
    this.prevB = isPressingB;
    this.prevY = isPressingY;
    this.prevRB = isPressingRB;
    this.prevLB = isPressingLB;
    this.prevStart = isPressingStart;

    return { toggleHUDRequested };
  }

  draw(ctx: CanvasRenderingContext2D) {
    const isP1 = this.id === 'p1';
    const isP2 = this.id === 'p2';

    const playerColor = isP1 ? '#f87171' : isP2 ? '#60a5fa' : '#f59e0b';
    const topLabel = isP1 ? 'Kamu' : isP2 ? 'Rekan' : 'Musuh (P3)';
    const innerInitial = isP1 ? 'QI' : isP2 ? 'P2' : 'P3';

    this.turfParticles.forEach((p) => {
      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.max(0, p.life);
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1.0;

    const staminaRadius = this.radius + 14;
    const staminaColor = this.isExhausted ? '#ef4444' : this.stamina > 0.5 ? '#10b981' : this.stamina > 0.2 ? '#f59e0b' : '#ef4444';

    ctx.strokeStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.lineWidth = 3.5;
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, staminaRadius, 0, Math.PI * 2);
    ctx.stroke();

    if (this.stamina > 0) {
      const startAngle = -Math.PI / 2;
      const endAngle = startAngle + this.stamina * Math.PI * 2;

      ctx.strokeStyle = staminaColor;
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      ctx.arc(this.pos.x, this.pos.y, staminaRadius, startAngle, endAngle);
      ctx.stroke();
    }

    if (this.isChargingSlide) {
      const barWidth = 52;
      const barHeight = 9;
      const barX = this.pos.x - barWidth / 2;
      const barY = this.pos.y - this.radius - 28;

      ctx.fillStyle = 'rgba(15, 23, 42, 0.90)';
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(barX, barY, barWidth, barHeight, 4);
      ctx.fill();
      ctx.stroke();

      const fillW = Math.max(2, (barWidth - 2) * this.slidePower);
      const fillColor = this.slidePower < 0.5 ? '#06b6d4' : this.slidePower < 0.85 ? '#f59e0b' : '#ef4444';

      ctx.fillStyle = fillColor;
      ctx.beginPath();
      ctx.roundRect(barX + 1, barY + 1, fillW, barHeight - 2, 3);
      ctx.fill();
    }

    if (this.isTackling) {
      ctx.save();
      ctx.translate(this.pos.x, this.pos.y);
      ctx.rotate(this.tackleSlideAngle);

      ctx.fillStyle = '#f87171';
      ctx.strokeStyle = '#06b6d4';
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      ctx.roundRect(0, -7, this.radius + 38, 14, 7);
      ctx.fill();
      ctx.stroke();

      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 4.5;
      ctx.beginPath();
      ctx.arc(this.radius + 38, 0, 20, -Math.PI / 2, Math.PI / 2);
      ctx.stroke();

      ctx.restore();
    }

    if (this.skillDodgeInvincibleTimer > 0) {
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 4;
      ctx.setLineDash([6, 4]);
      ctx.beginPath();
      ctx.arc(this.pos.x, this.pos.y, this.radius + 14, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    ctx.save();
    ctx.translate(this.pos.x, this.pos.y);
    ctx.rotate(this.bodyTiltAngle + this.dribbleSpinAngle);

    const outerRingRadius = this.radius + 8;
    ctx.strokeStyle = this.hasPossession ? '#10b981' : 'rgba(187, 247, 208, 0.85)';
    ctx.lineWidth = this.hasPossession ? 4.5 : 3.5;
    ctx.beginPath();
    ctx.arc(0, 0, outerRingRadius, 0, Math.PI * 2);
    ctx.stroke();

    const arcSpan = Math.PI / 3;
    const arcStart = (this.facingAngle - this.bodyTiltAngle) - arcSpan / 2;
    const arcEnd = (this.facingAngle - this.bodyTiltAngle) + arcSpan / 2;

    ctx.strokeStyle = this.hasPossession ? '#047857' : '#0a2d12';
    ctx.lineWidth = this.hasPossession ? 6.5 : 6;
    ctx.beginPath();
    ctx.arc(0, 0, outerRingRadius, arcStart, arcEnd);
    ctx.stroke();

    ctx.fillStyle = playerColor;
    ctx.beginPath();
    ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 3.5;
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.font = '900 14px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 3;
    ctx.strokeText(innerInitial, 0, 1);
    ctx.fillText(innerInitial, 0, 1);

    ctx.restore();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 15px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'alphabetic';
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.lineWidth = 2.5;
    ctx.strokeText(topLabel, this.pos.x, this.pos.y - 12 - this.radius);
    ctx.fillText(topLabel, this.pos.x, this.pos.y - 12 - this.radius);

    if (this.duelFeedbackTimer > 0) {
      ctx.save();
      const alpha = Math.min(1.0, this.duelFeedbackTimer * 1.5);
      ctx.globalAlpha = alpha;

      const isPassReq = this.duelFeedbackText.includes('PASS SINI') || this.duelFeedbackText.includes('REQUEST');

      if (isPassReq) {
        // Render 2D Speech Bubble for Request Ball Callout
        const animY = this.pos.y - 36 - this.radius - this.duelFeedbackYOffset;
        const text = '🙋 PASS SINI!';
        ctx.font = '900 13px sans-serif';
        const textWidth = ctx.measureText(text).width;
        const bubbleW = textWidth + 24;
        const bubbleH = 26;
        const bubbleX = this.pos.x - bubbleW / 2;
        const bubbleY = animY - bubbleH;

        // Glowing Shadow & Dark Card
        ctx.shadowColor = '#10b981';
        ctx.shadowBlur = 12;
        ctx.fillStyle = 'rgba(11, 15, 12, 0.95)';
        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.roundRect(bubbleX, bubbleY, bubbleW, bubbleH, 8);
        ctx.fill();
        ctx.stroke();

        // Tail Pointer
        ctx.fillStyle = '#10b981';
        ctx.beginPath();
        ctx.moveTo(this.pos.x - 5, bubbleY + bubbleH);
        ctx.lineTo(this.pos.x + 5, bubbleY + bubbleH);
        ctx.lineTo(this.pos.x, bubbleY + bubbleH + 6);
        ctx.closePath();
        ctx.fill();

        // Speech Bubble Text
        ctx.shadowBlur = 0;
        ctx.fillStyle = '#34d399';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, this.pos.x, bubbleY + bubbleH / 2);
      } else {
        ctx.fillStyle = this.duelFeedbackText.includes('EXHAUSTED') ? '#ef4444' : this.duelFeedbackText.includes('GOCEK') ? '#fbbf24' : '#06b6d4';
        ctx.font = '900 16px sans-serif';
        ctx.textAlign = 'center';
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 3.5;

        const animY = this.pos.y - 32 - this.radius - this.duelFeedbackYOffset;
        ctx.strokeText(this.duelFeedbackText, this.pos.x, animY);
        ctx.fillText(this.duelFeedbackText, this.pos.x, animY);
      }

      ctx.restore();
    }
  }
}
