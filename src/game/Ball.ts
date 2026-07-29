import { BallState, Vector2D } from '../types/game';
import { Field } from './Field';

export class Ball implements BallState {
  pos: Vector2D;
  vel: Vector2D;
  radius: number;
  friction: number;
  lastTouchedBy: string | null;
  shiftTimer: number;
  releaseTimer: number;

  // Rotation Angle Animation Physics
  rotationAngle: number;

  // Pass Target References
  homingTargetPlayer: { pos: Vector2D; facingAngle: number; radius: number; vel: Vector2D; id: string; hasPossession: boolean } | null;
  throughPassTargetPos: Vector2D | null; // Specific Open Space Coordinate for Through Pass (Tombol Y)
  passSpeed: number;

  constructor(x = 450, y = 275) {
    this.pos = { x, y };
    this.vel = { x: 0, y: 0 };
    this.radius = 11;
    this.friction = 0.98;
    this.lastTouchedBy = null;
    this.shiftTimer = 0;
    this.releaseTimer = 0;

    this.rotationAngle = 0;
    this.homingTargetPlayer = null;
    this.throughPassTargetPos = null;
    this.passSpeed = 0;
  }

  reset(x = 450, y = 275) {
    this.pos = { x, y };
    this.vel = { x: 0, y: 0 };
    this.lastTouchedBy = null;
    this.shiftTimer = 0;
    this.releaseTimer = 0;
    this.rotationAngle = 0;
    this.homingTargetPlayer = null;
    this.throughPassTargetPos = null;
    this.passSpeed = 0;
  }

  update(dt: number, field: Field) {
    // NaN Safety Guard
    if (isNaN(this.pos.x) || isNaN(this.pos.y) || isNaN(this.vel.x) || isNaN(this.vel.y)) {
      console.warn('[Ball.ts] NaN detected in ball state, resetting to pitch center');
      this.pos = { x: field.width * 0.5, y: field.height * 0.5 };
      this.vel = { x: 0, y: 0 };
      this.homingTargetPlayer = null;
      this.throughPassTargetPos = null;
    }

    // Cooldown timers
    if (this.releaseTimer > 0) {
      this.releaseTimer -= dt;
    }
    if (this.shiftTimer > 0) {
      this.shiftTimer -= dt;
    }

    // 1. Through Pass Mode (Tombol Y): Kicked deep into Open Space Spot!
    if (this.throughPassTargetPos && this.homingTargetPlayer) {
      const spot = this.throughPassTargetPos;
      const target = this.homingTargetPlayer;

      const dx = spot.x - this.pos.x;
      const dy = spot.y - this.pos.y;
      const distToSpot = Math.hypot(dx, dy) || 1;

      // Ball rolls smoothly to the deep open space spot
      const speed = Math.max(this.passSpeed, 9.5);
      this.vel.x = (dx / distToSpot) * speed;
      this.vel.y = (dy / distToSpot) * speed;

      this.pos.x += this.vel.x;
      this.pos.y += this.vel.y;

      this.rotationAngle += speed * 0.08;

      // Check if target receiver intercepted ball during sprint
      const distToReceiver = Math.hypot(target.pos.x - this.pos.x, target.pos.y - this.pos.y);
      if ((distToReceiver < target.radius + this.radius + 12 || distToSpot < 15) && this.releaseTimer <= 0) {
        target.hasPossession = true;
        this.attachToPlayer(target.pos, target.facingAngle, target.radius, target.vel, target.id);
      }
    }
    // 2. Direct Pass Mode (Tombol A): Direct to Target Feet
    else if (this.homingTargetPlayer) {
      const target = this.homingTargetPlayer;
      const dx = target.pos.x - this.pos.x;
      const dy = target.pos.y - this.pos.y;
      const dist = Math.hypot(dx, dy) || 1;

      const targetSpeed = Math.max(this.passSpeed, 7.5);
      const targetVx = (dx / dist) * targetSpeed;
      const targetVy = (dy / dist) * targetSpeed;

      this.vel.x = this.vel.x * 0.82 + targetVx * 0.18;
      this.vel.y = this.vel.y * 0.82 + targetVy * 0.18;

      this.pos.x += this.vel.x;
      this.pos.y += this.vel.y;

      const currentSpeed = Math.hypot(this.vel.x, this.vel.y);
      this.rotationAngle += currentSpeed * 0.08;

      const touchRadius = target.radius + this.radius + 10;
      if (dist < touchRadius && this.releaseTimer <= 0) {
        target.hasPossession = true;
        this.attachToPlayer(target.pos, target.facingAngle, target.radius, target.vel, target.id);
      }
    } else {
      // 3. Free Ball Physical Motion with Grass Friction
      this.pos.x += this.vel.x;
      this.pos.y += this.vel.y;

      this.vel.x *= this.friction;
      this.vel.y *= this.friction;

      const currentSpeed = Math.hypot(this.vel.x, this.vel.y);
      if (currentSpeed > 0.05) {
        this.rotationAngle += currentSpeed * 0.08;
      } else {
        this.vel.x = 0;
        this.vel.y = 0;
      }
    }

    // Field Boundaries Bounce
    const bounds = field.pitchBounds;
    const goals = field.goals;

    // Top & Bottom wall bounce
    if (this.pos.y - this.radius < bounds.top) {
      this.pos.y = bounds.top + this.radius;
      this.vel.y *= -0.8;
    } else if (this.pos.y + this.radius > bounds.bottom) {
      this.pos.y = bounds.bottom - this.radius;
      this.vel.y *= -0.8;
    }

    // Left & Right wall bounce
    const isInsideHomeGoalY = this.pos.y > goals.homeGoal.top && this.pos.y < goals.homeGoal.bottom;
    const isInsideAwayGoalY = this.pos.y > goals.awayGoal.top && this.pos.y < goals.awayGoal.bottom;

    if (!isInsideHomeGoalY && this.pos.x - this.radius < bounds.left) {
      this.pos.x = bounds.left + this.radius;
      this.vel.x *= -0.8;
    }

    if (!isInsideAwayGoalY && this.pos.x + this.radius > bounds.right) {
      this.pos.x = bounds.right - this.radius;
      this.vel.x *= -0.8;
    }
  }

  /**
   * Lock ball position directly in front of dribbling player with clean fixed offset distance
   */
  attachToPlayer(playerPos: Vector2D, facingAngle: number, playerRadius: number, playerVel: Vector2D, playerId: string) {
    this.lastTouchedBy = playerId;
    this.homingTargetPlayer = null;
    this.throughPassTargetPos = null;
    const angle = isNaN(facingAngle) ? 0 : facingAngle;

    const offset = playerRadius + this.radius + 10;

    this.pos.x = playerPos.x + Math.cos(angle) * offset;
    this.pos.y = playerPos.y + Math.sin(angle) * offset;

    this.vel.x = playerVel.x || 0;
    this.vel.y = playerVel.y || 0;

    const speed = Math.hypot(this.vel.x, this.vel.y);
    if (speed > 0.05) {
      this.rotationAngle += speed * 0.08;
    }
  }

  /**
   * Execute Pass / Kick
   */
  kick(direction: Vector2D, power: number, playerId: string, targetPlayer: any = null, throughTargetPos: Vector2D | null = null) {
    this.lastTouchedBy = playerId;
    this.releaseTimer = 0.35;
    this.shiftTimer = 0.25;

    const dirX = isNaN(direction.x) ? 1 : direction.x;
    const dirY = isNaN(direction.y) ? 0 : direction.y;

    this.vel.x = dirX * power;
    this.vel.y = dirY * power;

    if (targetPlayer) {
      targetPlayer.hasPossession = false;
      this.homingTargetPlayer = targetPlayer;
      this.throughPassTargetPos = throughTargetPos;
      this.passSpeed = Math.max(power, 7.5);
    } else {
      this.homingTargetPlayer = null;
      this.throughPassTargetPos = null;
      this.passSpeed = 0;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (isNaN(this.pos.x) || isNaN(this.pos.y)) return;

    // 1. Ball Shadow
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.beginPath();
    ctx.ellipse(this.pos.x, this.pos.y + this.radius + 2, this.radius, this.radius * 0.45, 0, 0, Math.PI * 2);
    ctx.fill();

    // 2. Save Canvas context for rotation transformation
    ctx.save();
    ctx.translate(this.pos.x, this.pos.y);
    ctx.rotate(this.rotationAngle);

    // Main Outer Solid Black Circle
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
    ctx.fill();

    // 3. Render 5 White Pentagon Patches
    const pentagonRadius = this.radius * 0.52;
    const pentagonCount = 5;
    const patchRadius = this.radius * 0.32;

    ctx.fillStyle = '#ffffff';

    for (let i = 0; i < pentagonCount; i++) {
      const angle = (i * Math.PI * 2) / pentagonCount - Math.PI / 2;
      const px = Math.cos(angle) * pentagonRadius;
      const py = Math.sin(angle) * pentagonRadius;

      ctx.beginPath();
      for (let k = 0; k < 5; k++) {
        const pAngle = (k * Math.PI * 2) / 5 - Math.PI / 2;
        const vx = px + Math.cos(pAngle) * patchRadius;
        const vy = py + Math.sin(pAngle) * patchRadius;
        if (k === 0) ctx.moveTo(vx, vy);
        else ctx.lineTo(vx, vy);
      }
      ctx.closePath();
      ctx.fill();
    }

    ctx.restore();

    // 4. Draw Open Space Target Marker for Through Pass (Tombol Y)
    if (this.throughPassTargetPos) {
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2.5;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.arc(this.throughPassTargetPos.x, this.throughPassTargetPos.y, 16, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // 5. Pass Target Indicator Ring (Cyan Dashed Circle)
    if (this.homingTargetPlayer) {
      ctx.strokeStyle = this.throughPassTargetPos ? '#f59e0b' : '#06b6d4';
      ctx.lineWidth = 2.5;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.arc(this.pos.x, this.pos.y, this.radius + 6, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
    } else if (this.shiftTimer > 0) {
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(this.pos.x, this.pos.y, this.radius + 5, 0, Math.PI * 2);
      ctx.stroke();
    }
  }
}
