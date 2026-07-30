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

    // 1. Dynamic Accelerating Homing Flight (Ball accelerates as it approaches target)
    if (this.homingTargetPlayer) {
      const targetPos = this.throughPassTargetPos ? this.throughPassTargetPos : this.homingTargetPlayer.pos;
      const dx = targetPos.x - this.pos.x;
      const dy = targetPos.y - this.pos.y;
      const dist = Math.hypot(dx, dy);

      // Target player velocity
      const targetSpeed = Math.hypot(this.homingTargetPlayer.vel.x, this.homingTargetPlayer.vel.y);

      // Accelerating pass speed (Ensures ball catches up faster than any sprinting player!)
      const minPassSpeed = Math.max(9.5, targetSpeed + 5.5);
      const passSpeed = Math.max(Math.hypot(this.vel.x, this.vel.y) * 1.03, minPassSpeed);

      const homingDirX = dx / (dist || 1);
      const homingDirY = dy / (dist || 1);

      this.vel.x = this.vel.x * 0.70 + homingDirX * passSpeed * 0.30;
      this.vel.y = this.vel.y * 0.70 + homingDirY * passSpeed * 0.30;

      // AUTOMATIC RECEPTION ATTACHMENT
      if (dist < this.radius + this.homingTargetPlayer.radius + 18) {
        const receiver = this.homingTargetPlayer;
        receiver.hasPossession = true;
        this.attachToPlayer(receiver.pos, receiver.facingAngle, receiver.radius, receiver.vel, receiver.id);

        this.homingTargetPlayer = null;
        this.throughPassTargetPos = null;
      }
    }

    // 2. Free Motion & Grass Friction
    if (!this.attachedPlayerId) {
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
