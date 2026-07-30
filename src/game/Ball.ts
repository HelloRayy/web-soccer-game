import { Vector2D } from '../types/game';
import { Field } from './Field';
import { Player } from './Player';

export class Ball {
  pos: Vector2D;
  vel: Vector2D;
  radius: number;
  friction: number;
  attachedPlayerId: string | null;
  releaseTimer: number;

  // Passing Assist Homing Logic
  homingTargetPlayer: Player | null;
  throughPassTargetPos: Vector2D | null;

  // Micro-Touch Dribble Animation Timer
  private dribblePhase: number;

  constructor(startX: number, startY: number) {
    this.pos = { x: startX, y: startY };
    this.vel = { x: 0, y: 0 };
    this.radius = 8;
    this.friction = 0.968; // Smooth grass friction
    this.attachedPlayerId = null;
    this.releaseTimer = 0;
    this.homingTargetPlayer = null;
    this.throughPassTargetPos = null;
    this.dribblePhase = 0;
  }

  reset(x: number, y: number) {
    this.pos = { x, y };
    this.vel = { x: 0, y: 0 };
    this.attachedPlayerId = null;
    this.releaseTimer = 0;
    this.homingTargetPlayer = null;
    this.throughPassTargetPos = null;
    this.dribblePhase = 0;
  }

  /**
   * FIFA/PES Style Micro-Touch Dribble Attachment:
   * Keeps a natural 14px micro-gap in front of player's feet with subtle micro-bounces
   */
  attachToPlayer(playerPos: Vector2D, facingAngle: number, playerRadius: number, playerVel: Vector2D, playerId: string) {
    this.attachedPlayerId = playerId;
    this.dribblePhase += 0.25;

    // Micro-gap 14px ahead of player's feet
    const microGap = playerRadius + this.radius + 6 + Math.sin(this.dribblePhase) * 2;
    const targetX = playerPos.x + Math.cos(facingAngle) * microGap;
    const targetY = playerPos.y + Math.sin(facingAngle) * microGap;

    // Smooth Lerp Follow (Creates realistic loose dribble inertia)
    this.pos.x = this.pos.x * 0.40 + targetX * 0.60;
    this.pos.y = this.pos.y * 0.40 + targetY * 0.60;

    this.vel.x = playerVel.x;
    this.vel.y = playerVel.y;
  }

  /**
   * Kick / Pass Ball
   */
  kick(dir: Vector2D, power: number, kickerId: string, homingTarget: Player | null = null, throughPos: Vector2D | null = null) {
    this.attachedPlayerId = null;
    this.releaseTimer = 0.15; // 150ms grace period before kicker re-claims
    this.homingTargetPlayer = homingTarget;
    this.throughPassTargetPos = throughPos;

    this.vel.x = dir.x * power;
    this.vel.y = dir.y * power;
  }

  /**
   * Physical Ball-to-Player Circle Collision Bounce (For Loose Balls & Tackles)
   */
  checkPlayerCollision(player: Player): boolean {
    if (this.attachedPlayerId === player.id) return false;

    const dx = this.pos.x - player.pos.x;
    const dy = this.pos.y - player.pos.y;
    const dist = Math.hypot(dx, dy) || 1;
    const minDist = this.radius + player.radius + 2;

    if (dist < minDist) {
      const overlap = minDist - dist;
      const nx = dx / dist;
      const ny = dy / dist;

      this.pos.x += nx * overlap;
      this.pos.y += ny * overlap;

      const bounceSpeed = Math.max(5.5, Math.hypot(player.vel.x, player.vel.y) * 1.5);
      this.vel.x = nx * bounceSpeed + player.vel.x * 0.5;
      this.vel.y = ny * bounceSpeed + player.vel.y * 0.5;

      return true;
    }

    return false;
  }

  update(dt: number, field: Field) {
    if (this.releaseTimer > 0) {
      this.releaseTimer -= dt;
    }

    // 1. Dynamic Predictive Interception Homing (Predicts target player's sprint vector)
    if (this.homingTargetPlayer) {
      const targetPlayer = this.homingTargetPlayer;

      // Predict target player's future position in 14 frames based on velocity
      const predictedTargetPos = {
        x: this.throughPassTargetPos ? this.throughPassTargetPos.x : targetPlayer.pos.x + targetPlayer.vel.x * 14,
        y: this.throughPassTargetPos ? this.throughPassTargetPos.y : targetPlayer.pos.y + targetPlayer.vel.y * 14,
      };

      const dx = predictedTargetPos.x - this.pos.x;
      const dy = predictedTargetPos.y - this.pos.y;
      const distToPredicted = Math.hypot(dx, dy) || 1;
      const distToPlayer = Math.hypot(targetPlayer.pos.x - this.pos.x, targetPlayer.pos.y - this.pos.y);

      // Receiver's current speed
      const targetSpeed = Math.hypot(targetPlayer.vel.x, targetPlayer.vel.y);

      // Minimum pass speed is ALWAYS much faster than sprint speed (minimum 14.5)
      const minPassSpeed = Math.max(14.5, targetSpeed * 2.2);
      const passSpeed = Math.max(Math.hypot(this.vel.x, this.vel.y) * 1.04, minPassSpeed);

      const homingDirX = dx / distToPredicted;
      const homingDirY = dy / distToPredicted;

      // Zero Grass Friction Homing Motion (Ball flies without slowing down on grass)
      this.vel.x = this.vel.x * 0.55 + homingDirX * passSpeed * 0.45;
      this.vel.y = this.vel.y * 0.55 + homingDirY * passSpeed * 0.45;

      this.pos.x += this.vel.x;
      this.pos.y += this.vel.y;

      // EXTENDED SUCTION RECEPTION ATTACHMENT (38px reach)
      if (distToPlayer < this.radius + targetPlayer.radius + 22 || distToPredicted < 24) {
        targetPlayer.hasPossession = true;
        this.attachToPlayer(targetPlayer.pos, targetPlayer.facingAngle, targetPlayer.radius, targetPlayer.vel, targetPlayer.id);

        this.homingTargetPlayer = null;
        this.throughPassTargetPos = null;
      }
    }
    // 2. Free Motion & Grass Friction (For loose balls and shots)
    else if (!this.attachedPlayerId) {
      this.pos.x += this.vel.x;
      this.pos.y += this.vel.y;

      this.vel.x *= this.friction;
      this.vel.y *= this.friction;

      if (Math.abs(this.vel.x) < 0.05) this.vel.x = 0;
      if (Math.abs(this.vel.y) < 0.05) this.vel.y = 0;
    }

    // 3. Pitch & Goal Bounds Bounce
    const bounds = field.pitchBounds;
    const goals = field.goals;

    const isInHomeGoalY = this.pos.y >= goals.homeGoal.top && this.pos.y <= goals.homeGoal.bottom;
    const isInAwayGoalY = this.pos.y >= goals.awayGoal.top && this.pos.y <= goals.awayGoal.bottom;

    if (!isInHomeGoalY && this.pos.x - this.radius < bounds.left) {
      this.pos.x = bounds.left + this.radius;
      this.vel.x = -this.vel.x * 0.65;
    }
    if (!isInAwayGoalY && this.pos.x + this.radius > bounds.right) {
      this.pos.x = bounds.right - this.radius;
      this.vel.x = -this.vel.x * 0.65;
    }

    if (this.pos.y - this.radius < bounds.top) {
      this.pos.y = bounds.top + this.radius;
      this.vel.y = -this.vel.y * 0.65;
    }
    if (this.pos.y + this.radius > bounds.bottom) {
      this.pos.y = bounds.bottom - this.radius;
      this.vel.y = -this.vel.y * 0.65;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();

    // 1. Soft Dynamic Shadow
    ctx.fillStyle = 'rgba(0, 0, 0, 0.35)';
    ctx.beginPath();
    ctx.ellipse(this.pos.x + 3, this.pos.y + 4, this.radius, this.radius * 0.6, 0, 0, Math.PI * 2);
    ctx.fill();

    // 2. White Football Base
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth = 2;
    ctx.stroke();

    // 3. Classic Pentagonal Soccer Patches
    ctx.fillStyle = '#0f172a';
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.radius * 0.38, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }
}
