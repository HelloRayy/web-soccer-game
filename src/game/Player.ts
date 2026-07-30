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
  stumbleTimer: number;
  duelFeedbackText: string;
  duelFeedbackTimer: number;
  duelFeedbackYOffset: number;
  dribbleSpinAngle: number;

  // Debug State Tracker
  debugInputString: string;

  // Patrol / Walking Simulation Timer
  private walkTimer: number;

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
    this.speed = 4.2;
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

  updateEnemyBotAI(ball: Ball, field: Field, opponents: Player[]) {
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

    if (this.hasPossession) {
      const targetGoal = field.goals.homeGoal;
      const targetY = targetGoal.top + (targetGoal.bottom - targetGoal.top) * 0.5;

      const dx = targetGoal.x - this.pos.x;
      const dy = targetY - this.pos.y;
      const dist = Math.hypot(dx, dy) || 1;

      const walkSpeed = this.speed * 0.40;
      this.vel.x = (dx / dist) * walkSpeed;
      this.vel.y = (dy / dist) * walkSpeed;

      const targetAngle = Math.atan2(this.vel.y, this.vel.x);
      this.facingAngle = lerpAngle(this.facingAngle, targetAngle, 0.22);

      ball.attachToPlayer(this.pos, this.facingAngle, this.radius, this.vel, this.id);
    } else {
      const ballCarrier = opponents.find((p) => p.hasPossession);
      const targetPos = ballCarrier ? ballCarrier.pos : ball.pos;

      const dx = targetPos.x - this.pos.x;
      const dy = targetPos.y - this.pos.y;
      const dist = Math.hypot(dx, dy) || 1;

      const chaseSpeed = this.speed * 0.65;
      this.vel.x = (dx / dist) * chaseSpeed;
      this.vel.y = (dy / dist) * chaseSpeed;

      const targetAngle = Math.atan2(dy, dx);
      this.facingAngle = lerpAngle(this.facingAngle, targetAngle, 0.22);

      if (ball.releaseTimer <= 0 && distToBall < this.radius + ball.radius + 25) {
        this.hasPossession = true;
      }
    }

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

    const currentSpeed = (this.isSprinting ? this.speed * 1.6 : this.speed) * moveMultiplier;
    const stickMagnitude = Math.hypot(moveX, moveY);

    let aimAngle = this.facingAngle;

    if (stickMagnitude > 0.05) {
      const targetVelX = moveX * currentSpeed;
      const targetVelY = moveY * currentSpeed;

      this.vel.x = this.vel.x * 0.65 + targetVelX * 0.35;
      this.vel.y = this.vel.y * 0.65 + targetVelY * 0.35;

      aimAngle = Math.atan2(moveY, moveX);
      const angleDiff = aimAngle - this.facingAngle;
      this.facingAngle = lerpAngle(this.facingAngle, aimAngle, 0.25);

      this.bodyTiltAngle = Math.max(-0.22, Math.min(0.22, angleDiff * 0.35));

      if (this.isSprinting) {
        this.spawnTurfParticle(currentSpeed / this.speed);
      }
    } else {
      this.vel.x *= 0.76;
      this.vel.y *= 0.76;
      this.bodyTiltAngle *= 0.80;

      if (Math.abs(this.vel.x) < 0.05) this.vel.x = 0;
      if (Math.abs(this.vel.y) < 0.05) this.vel.y = 0;
    }

    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;

    const bounds = field.pitchBounds;
    this.pos.x = Math.max(bounds.left + this.radius, Math.min(bounds.right - this.radius, this.pos.x));
    this.pos.y = Math.max(bounds.top + this.radius, Math.min(bounds.bottom - this.radius, this.pos.y));

    const distToBall = Math.hypot(this.pos.x - ball.pos.x, this.pos.y - ball.pos.y);

    if (ball.releaseTimer <= 0 && distToBall < this.radius + ball.radius + 25 && !ball.homingTargetPlayer) {
      this.hasPossession = true;
      ball.attachToPlayer(this.pos, this.facingAngle, this.radius, this.vel, this.id);
    } else if (ball.homingTargetPlayer && ball.homingTargetPlayer.id !== this.id) {
      this.hasPossession = false;
    }

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
    }
    if (this.isSprinting) activeBtns.push(`R2 (Sprint Stamina: ${Math.round(this.stamina * 100)}%)`);
    if (this.isExhausted) activeBtns.push('⚠️ EXHAUSTED!');
    if (isPressingStart) activeBtns.push('Start (ToggleHUD)');

    this.debugInputString = activeBtns.length > 0 ? `PRESSED: ${activeBtns.join(' + ')}` : `STICK: [${moveX.toFixed(2)}, ${moveY.toFixed(2)}]`;

    // 1. ATTACKING ACTIONS
    if (this.hasPossession) {
      this.isChargingSlide = false;
      this.slidePower = 0;

      // X Button = Shoot (Goal Shot)
      if (isPressingX && !this.prevX) {
        const targetGoal = this.team === 'home' ? field.goals.awayGoal : field.goals.homeGoal;
        const targetY = targetGoal.top + (targetGoal.bottom - targetGoal.top) * 0.5;

        const shootDx = targetGoal.x - this.pos.x;
        const shootDy = targetY - this.pos.y;
        const len = Math.hypot(shootDx, shootDy) || 1;

        this.hasPossession = false;
        ball.kick({ x: shootDx / len, y: shootDy / len }, 14.5, this.id, null, null);
        this.debugInputString = '🔥 GOAL SHOOT TRIGGERED (Tombol X)!';
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
      const isTriggeringGocek = (isPressingY && !this.prevY) || (isPressingRB && !this.prevRB);
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

      // RB / R1 Button = Request Ball
      const reqPassTriggered = (isPressingRB && !this.prevRB) || (isPressingLB && !this.prevLB);
      if (reqPassTriggered) {
        const targetTeammate = teammates.find((t) => t.id !== this.id);
        if (targetTeammate) {
          targetTeammate.executePassTo(this, ball);
          this.debugInputString = `⚡ R1 (RB) REQUEST PASS -> PLAYER 2 PASSED TO PLAYER 1!`;
        }
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
      ctx.globalAlpha = Math.min(1.0, this.duelFeedbackTimer * 1.5);
      ctx.fillStyle = this.duelFeedbackText.includes('EXHAUSTED') ? '#ef4444' : this.duelFeedbackText.includes('GOCEK') ? '#fbbf24' : '#06b6d4';
      ctx.font = '900 16px sans-serif';
      ctx.textAlign = 'center';
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 3.5;

      const animY = this.pos.y - 32 - this.radius - this.duelFeedbackYOffset;
      ctx.strokeText(this.duelFeedbackText, this.pos.x, animY);
      ctx.fillText(this.duelFeedbackText, this.pos.x, animY);
      ctx.restore();
    }
  }
}
