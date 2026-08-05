import { Vector2D } from '../types/game';
import { Field } from './Field';
import { Player } from './Player';
import footballSvgUrl from '../assets/ion_football.svg';

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

  // Natural Rolling Rotation Angle & Roll Motion Direction
  rotationAngle: number;
  rollDirAngle: number;

  // Micro-Touch Dribble Animation Timer
  private dribblePhase: number;

  // Cached Loaded Ball SVG Image
  private static ballImage: HTMLImageElement | null = null;
  private static isImageLoaded = false;

  constructor(startX: number, startY: number) {
    this.pos = { x: startX, y: startY };
    this.vel = { x: 0, y: 0 };
    this.radius = 10;
    this.friction = 0.968; // Smooth grass friction
    this.attachedPlayerId = null;
    this.releaseTimer = 0;
    this.homingTargetPlayer = null;
    this.throughPassTargetPos = null;
    this.rotationAngle = 0;
    this.rollDirAngle = 0;
    this.dribblePhase = 0;

    // Preload ion_football.svg Image
    if (!Ball.ballImage && typeof window !== 'undefined') {
      const img = new Image();
      img.src = footballSvgUrl;
      img.onload = () => {
        Ball.isImageLoaded = true;
      };
      Ball.ballImage = img;
    }
  }

  reset(x: number, y: number) {
    this.pos = { x, y };
    this.vel = { x: 0, y: 0 };
    this.attachedPlayerId = null;
    this.releaseTimer = 0;
    this.homingTargetPlayer = null;
    this.throughPassTargetPos = null;
    this.rotationAngle = 0;
    this.rollDirAngle = 0;
    this.dribblePhase = 0;
  }

  /**
   * FIFA/PES Style Micro-Touch Dribble Attachment:
   * Keeps a natural 14px micro-gap in front of player's feet with subtle natural rolling
   */
  attachToPlayer(playerPos: Vector2D, facingAngle: number, playerRadius: number, playerVel: Vector2D, playerId: string) {
    this.attachedPlayerId = playerId;
    const playerSpeed = Math.hypot(playerVel.x, playerVel.y);

    if (playerSpeed > 0.1) {
      const phaseInc = playerSpeed > 3.8 ? 0.35 : 0.20;
      this.dribblePhase += phaseInc;
      this.rollDirAngle = Math.atan2(playerVel.y, playerVel.x);
      this.rotationAngle += Math.min(0.12, playerSpeed * 0.035);

      // FIFA/PES Micro-Touch Push Gap:
      // Walking: 12-16px gap ahead of feet
      // Sprinting: 24-34px soft push gap ahead
      const isSprinting = playerSpeed > 4.0;
      const baseGap = isSprinting ? playerRadius + this.radius + 18 : playerRadius + this.radius + 7;
      const microTouchPush = Math.sin(this.dribblePhase) * (isSprinting ? 8 : 3);
      const microGap = baseGap + microTouchPush;

      const targetX = playerPos.x + Math.cos(facingAngle) * microGap;
      const targetY = playerPos.y + Math.sin(facingAngle) * microGap;

      // Organic Lerp Follow: Soft follow speed when sprinting for realistic ball touches
      const lerpRate = isSprinting ? 0.35 : 0.50;
      this.pos.x = this.pos.x * (1 - lerpRate) + targetX * lerpRate;
      this.pos.y = this.pos.y * (1 - lerpRate) + targetY * lerpRate;

      this.vel.x = playerVel.x;
      this.vel.y = playerVel.y;
    } else {
      // Player is standing still / idle -> Ball rests firmly at feet without oscillation
      this.dribblePhase = 0;
      const restGap = playerRadius + this.radius + 6;
      this.pos.x = playerPos.x + Math.cos(facingAngle) * restGap;
      this.pos.y = playerPos.y + Math.sin(facingAngle) * restGap;

      this.vel.x = 0;
      this.vel.y = 0;
    }
  }

  /**
   * Kick / Pass Ball
   */
  kick(dir: Vector2D, power: number, kickerId: string, homingTarget: Player | null = null, throughPos: Vector2D | null = null) {
    this.attachedPlayerId = null;
    this.releaseTimer = 0.35;
    this.homingTargetPlayer = homingTarget;
    this.throughPassTargetPos = throughPos;

    this.vel.x = dir.x * power;
    this.vel.y = dir.y * power;
    this.rollDirAngle = Math.atan2(dir.y, dir.x);
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
      this.rollDirAngle = Math.atan2(this.vel.y, this.vel.x);

      return true;
    }

    return false;
  }

  update(dt: number, field: Field) {
    if (this.releaseTimer > 0) {
      this.releaseTimer -= dt;
    }

    // Update natural subtle rolling rotation angle based on ball movement speed
    const currentSpeed = Math.hypot(this.vel.x, this.vel.y);
    if (currentSpeed > 0.1) {
      this.rollDirAngle = Math.atan2(this.vel.y, this.vel.x);
      this.rotationAngle += Math.min(0.08, (currentSpeed / this.radius) * 0.06);
    }

    // 1. Natural Grounded Pass Flight Acceleration
    if (this.homingTargetPlayer) {
      const targetPlayer = this.homingTargetPlayer;

      const predictedTargetPos = {
        x: this.throughPassTargetPos ? this.throughPassTargetPos.x : targetPlayer.pos.x + targetPlayer.vel.x * 8,
        y: this.throughPassTargetPos ? this.throughPassTargetPos.y : targetPlayer.pos.y + targetPlayer.vel.y * 8,
      };

      const dx = predictedTargetPos.x - this.pos.x;
      const dy = predictedTargetPos.y - this.pos.y;
      const distToPredicted = Math.hypot(dx, dy) || 1;
      const distToPlayer = Math.hypot(targetPlayer.pos.x - this.pos.x, targetPlayer.pos.y - this.pos.y);

      const targetSpeed = Math.hypot(targetPlayer.vel.x, targetPlayer.vel.y);
      const desiredPassSpeed = Math.max(8.8, targetSpeed * 1.35);

      const smoothedSpeed = currentSpeed * 0.90 + desiredPassSpeed * 0.10;

      const homingDirX = dx / distToPredicted;
      const homingDirY = dy / distToPredicted;

      this.vel.x = this.vel.x * 0.70 + homingDirX * smoothedSpeed * 0.30;
      this.vel.y = this.vel.y * 0.70 + homingDirY * smoothedSpeed * 0.30;

      this.pos.x += this.vel.x;
      this.pos.y += this.vel.y;

      if (distToPlayer < this.radius + targetPlayer.radius + 20 || distToPredicted < 22) {
        targetPlayer.hasPossession = true;
        this.attachToPlayer(targetPlayer.pos, targetPlayer.facingAngle, targetPlayer.radius, targetPlayer.vel, targetPlayer.id);

        this.homingTargetPlayer = null;
        this.throughPassTargetPos = null;
      }
    }
    // 2. Free Motion & Grass Friction
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

    // 2. Render Naturally Aligned Rolling SVG Ball Image (src/assets/ion_football.svg)
    ctx.save();
    ctx.translate(this.pos.x, this.pos.y);

    // Align roll rotation with actual movement direction angle for 100% natural 2D rolling!
    ctx.rotate(this.rollDirAngle);
    ctx.rotate(this.rotationAngle);

    if (Ball.ballImage && Ball.isImageLoaded) {
      const size = this.radius * 2.2;
      ctx.drawImage(Ball.ballImage, -size / 2, -size / 2, size, size);
    } else {
      // White Football Fallback
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = '#0f172a';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = '#0f172a';
      ctx.beginPath();
      ctx.arc(0, 0, this.radius * 0.38, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
    ctx.restore();
  }
}
