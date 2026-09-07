import { Vector2D } from '../types/game';
import { Field } from './Field';
import { Player } from './Player';
import { PixelSpriteRenderer } from './PixelSpriteRenderer';
import footballSvgUrl from '../assets/ion_football.svg';

export class Ball {
  pos: Vector2D;
  vel: Vector2D;
  radius: number;
  friction: number;
  attachedPlayerId: string | null;
  releaseTimer: number;

  // 3D Ball Altitude & Trail Particles
  z: number = 0;
  vz: number = 0;
  trailHistory: Array<{ x: number; y: number; z: number }> = [];

  // Directional 3D Rolling & Trajectory Physics
  travelAngle: number = 0;
  spinProgress: number = 0;
  shotType: 'ground' | 'rocket' | 'finesse' | 'chip' | 'normal' = 'normal';
  curlIntensity: number = 0;
  burstShockwaves: Array<{ x: number; y: number; z: number; angle: number; radius: number; maxRadius: number; life: number; color: string }> = [];
  turfGrassParticles: Array<{ x: number; y: number; vx: number; vy: number; life: number; color: string }> = [];

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
    this.travelAngle = 0;
    this.spinProgress = 0;
    this.shotType = 'normal';
    this.curlIntensity = 0;
    this.burstShockwaves = [];
    this.turfGrassParticles = [];
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
    this.z = 0;
    this.vz = 0;
    this.trailHistory = [];
    this.attachedPlayerId = null;
    this.releaseTimer = 0;
    this.homingTargetPlayer = null;
    this.throughPassTargetPos = null;
    this.rotationAngle = 0;
    this.rollDirAngle = 0;
    this.travelAngle = 0;
    this.spinProgress = 0;
    this.shotType = 'normal';
    this.curlIntensity = 0;
    this.burstShockwaves = [];
    this.turfGrassParticles = [];
    this.dribblePhase = 0;
  }

  /**
   * FIFA/PES Style Micro-Touch Dribble Attachment:
   * Keeps a natural 14px micro-gap in front of player's feet with subtle natural rolling
   */
  attachToPlayer(playerPos: Vector2D, facingAngle: number, playerRadius: number, playerVel: Vector2D, playerId: string) {
    this.attachedPlayerId = playerId;
    this.z = 0;
    this.vz = 0;
    this.shotType = 'normal';
    this.burstShockwaves = [];
    const playerSpeed = Math.hypot(playerVel.x, playerVel.y);

    if (playerSpeed > 0.15) {
      const phaseInc = playerSpeed > 3.8 ? 0.35 : 0.22;
      this.dribblePhase += phaseInc;

      this.travelAngle = facingAngle;
      this.rollDirAngle = Math.atan2(playerVel.y, playerVel.x);
      this.spinProgress += (playerSpeed / this.radius) * 0.08;
      this.rotationAngle += Math.min(0.12, playerSpeed * 0.035);

      const isSprinting = playerSpeed > 4.0;
      const baseGap = isSprinting ? playerRadius + this.radius + 18 : playerRadius + this.radius + 7;
      const microTouchPush = Math.sin(this.dribblePhase) * (isSprinting ? 8 : 3);
      const microGap = baseGap + microTouchPush;

      const targetX = playerPos.x + Math.cos(facingAngle) * microGap;
      const targetY = playerPos.y + Math.sin(facingAngle) * microGap;

      const lerpRate = isSprinting ? 0.35 : 0.50;
      this.pos.x = this.pos.x * (1 - lerpRate) + targetX * lerpRate;
      this.pos.y = this.pos.y * (1 - lerpRate) + targetY * lerpRate;

      this.vel.x = playerVel.x;
      this.vel.y = playerVel.y;
    } else {
      // Player is standing completely still -> Ball rests stationary in front of feet
      this.dribblePhase = 0;
      this.travelAngle = facingAngle;
      const restGap = playerRadius + this.radius + 7;
      this.pos.x = playerPos.x + Math.cos(facingAngle) * restGap;
      this.pos.y = playerPos.y + Math.sin(facingAngle) * restGap;
      this.vel.x = 0;
      this.vel.y = 0;
    }
  }

  /**
   * Kick / Pass Ball with Directional 3D Spin, Muzzle Bursts & Shot Archetypes
   */
  kick(
    dir: Vector2D,
    power: number,
    kickerId: string,
    homingTarget: Player | null = null,
    throughPos: Vector2D | null = null,
    shotKind?: 'ground' | 'rocket' | 'finesse' | 'chip' | 'normal'
  ) {
    this.attachedPlayerId = null;
    this.releaseTimer = 0.35;
    this.homingTargetPlayer = homingTarget;
    this.throughPassTargetPos = throughPos;

    this.vel.x = dir.x * power;
    this.vel.y = dir.y * power;
    this.travelAngle = Math.atan2(dir.y, dir.x);
    this.rollDirAngle = this.travelAngle;

    if (shotKind) {
      this.shotType = shotKind;
    } else if (power >= 20.0) {
      this.shotType = 'rocket';
    } else if (power < 11.5) {
      this.shotType = 'ground';
    } else {
      this.shotType = 'normal';
    }

    // Shot Archetype Altitude & Aerodynamics
    if (this.shotType === 'ground') {
      this.vz = 0;
      this.curlIntensity = 0;
    } else if (this.shotType === 'rocket') {
      this.vz = Math.min(6.5, power * 0.28);
      this.curlIntensity = 0;
      this.burstShockwaves.push({
        x: this.pos.x,
        y: this.pos.y,
        z: 0,
        angle: this.travelAngle,
        radius: 8,
        maxRadius: 38,
        life: 1.0,
        color: 'rgba(255, 40, 90, 0.95)',
      });
    } else if (this.shotType === 'finesse') {
      this.vz = Math.min(5.2, power * 0.24);
      // Curl direction curves inwards toward goal corners
      const curlSign = dir.y > 0.05 ? -1 : (dir.y < -0.05 ? 1 : 1);
      this.curlIntensity = curlSign * 0.42;
      this.burstShockwaves.push({
        x: this.pos.x,
        y: this.pos.y,
        z: 0,
        angle: this.travelAngle,
        radius: 6,
        maxRadius: 28,
        life: 0.9,
        color: 'rgba(56, 189, 248, 0.9)',
      });
    } else if (this.shotType === 'chip') {
      this.vz = Math.min(9.5, power * 0.46);
      this.curlIntensity = 0;
    } else {
      // Normal
      if (power > 11.5) {
        this.vz = Math.min(8.0, power * 0.35);
      } else {
        this.vz = 0;
      }
      this.curlIntensity = 0;
      if (power > 14) {
        this.burstShockwaves.push({
          x: this.pos.x,
          y: this.pos.y,
          z: 0,
          angle: this.travelAngle,
          radius: 6,
          maxRadius: 26,
          life: 0.8,
          color: 'rgba(255, 255, 255, 0.8)',
        });
      }
    }
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

    // Update natural directional spin & roll progress based on ball velocity
    const currentSpeed = Math.hypot(this.vel.x, this.vel.y);
    if (currentSpeed > 0.1) {
      this.travelAngle = Math.atan2(this.vel.y, this.vel.x);
      this.rollDirAngle = this.travelAngle;
      this.spinProgress += (currentSpeed / this.radius) * 0.09;
      this.rotationAngle += Math.min(0.08, (currentSpeed / this.radius) * 0.06);
    }

    // Aerodynamic Magnus Effect for Curled / Finesse Shots
    if (this.shotType === 'finesse' && this.z > 1.0 && Math.abs(this.curlIntensity) > 0.01 && currentSpeed > 2.0) {
      const perpX = -this.vel.y / currentSpeed;
      const perpY = this.vel.x / currentSpeed;
      this.vel.x += perpX * this.curlIntensity * 0.55;
      this.vel.y += perpY * this.curlIntensity * 0.55;
      this.curlIntensity *= 0.982;
    }

    // Update Kick Shockwave Bursts
    for (let i = this.burstShockwaves.length - 1; i >= 0; i--) {
      const b = this.burstShockwaves[i];
      b.radius += (b.maxRadius - b.radius) * 0.22 + 1.2;
      b.life -= 0.048;
      if (b.life <= 0 || b.radius >= b.maxRadius) {
        this.burstShockwaves.splice(i, 1);
      }
    }

    // Spawn & Update Turf Grass Particles for Fast Ground Shots
    if (currentSpeed > 7.5 && this.z < 2.5 && Math.random() < 0.65) {
      const pAngle = this.travelAngle + Math.PI + (Math.random() - 0.5) * 1.2;
      const pSpeed = Math.random() * 2.8 + 1.2;
      this.turfGrassParticles.push({
        x: this.pos.x + (Math.random() - 0.5) * 4,
        y: this.pos.y + (Math.random() - 0.5) * 4,
        vx: Math.cos(pAngle) * pSpeed,
        vy: Math.sin(pAngle) * pSpeed,
        life: 1.0,
        color: Math.random() > 0.35 ? '#16a34a' : '#22c55e',
      });
    }
    for (let i = this.turfGrassParticles.length - 1; i >= 0; i--) {
      const p = this.turfGrassParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life -= 0.055;
      if (p.life <= 0) {
        this.turfGrassParticles.splice(i, 1);
      }
    }

    // 3D Ball Altitude & Gravity Bounce Physics
    if (this.z > 0 || this.vz !== 0) {
      this.z += this.vz;
      this.vz -= 0.36; // Gravity
      if (this.z <= 0) {
        this.z = 0;
        if (Math.abs(this.vz) > 1.2) {
          this.vz = -this.vz * 0.45; // Turf rebound
        } else {
          this.vz = 0;
        }
      }
    }

    // Update Motion Speed Trail Particles
    if (currentSpeed > 5.5) {
      this.trailHistory.push({ x: this.pos.x, y: this.pos.y, z: this.z });
      if (this.trailHistory.length > 7) {
        this.trailHistory.shift();
      }
    } else if (this.trailHistory.length > 0) {
      this.trailHistory.shift();
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

    // 3. Pitch & Goal Bounds Bounce + Complete Net Containment Physics
    const bounds = field.pitchBounds;
    const goals = field.goals;
    const GOAL_DEPTH = 100;
    const postRadius = 6.5;

    // Check Post Collisions (The 4 White Metallic Goal Posts)
    const posts = [
      { x: bounds.left, y: goals.homeGoal.top },
      { x: bounds.left, y: goals.homeGoal.bottom },
      { x: bounds.right, y: goals.awayGoal.top },
      { x: bounds.right, y: goals.awayGoal.bottom },
    ];

    posts.forEach((post) => {
      const dx = this.pos.x - post.x;
      const dy = this.pos.y - post.y;
      const dist = Math.hypot(dx, dy);
      const minDist = this.radius + postRadius;
      if (dist < minDist && dist > 0.001) {
        // Elastic Rebound off Goal Post (PING!)
        const nx = dx / dist;
        const ny = dy / dist;
        this.pos.x = post.x + nx * minDist;
        this.pos.y = post.y + ny * minDist;

        const dot = this.vel.x * nx + this.vel.y * ny;
        if (dot < 0) {
          this.vel.x = (this.vel.x - 2 * dot * nx) * 0.75;
          this.vel.y = (this.vel.y - 2 * dot * ny) * 0.75;
          if (this.vz !== 0) this.vz = -this.vz * 0.5;
        }
      }
    });

    const isInHomeGoalY = this.pos.y >= goals.homeGoal.top && this.pos.y <= goals.homeGoal.bottom;
    const isInAwayGoalY = this.pos.y >= goals.awayGoal.top && this.pos.y <= goals.awayGoal.bottom;

    // LEFT HOME GOAL (Ball Enters Net Behind bounds.left)
    if (this.pos.x < bounds.left) {
      if (isInHomeGoalY) {
        // Trapped inside home net!
        // 1. Back net wall (bounds.left - GOAL_DEPTH)
        if (this.pos.x - this.radius < bounds.left - GOAL_DEPTH) {
          this.pos.x = bounds.left - GOAL_DEPTH + this.radius;
          this.vel.x = -this.vel.x * 0.15; // Net absorbs 85% forward momentum!
          this.vel.y *= 0.35;
          this.vz *= 0.25;
        }
        // 2. Top net side wall
        if (this.pos.y - this.radius < goals.homeGoal.top) {
          this.pos.y = goals.homeGoal.top + this.radius;
          this.vel.y = -this.vel.y * 0.20;
        }
        // 3. Bottom net side wall
        if (this.pos.y + this.radius > goals.homeGoal.bottom) {
          this.pos.y = goals.homeGoal.bottom - this.radius;
          this.vel.y = -this.vel.y * 0.20;
        }
      } else {
        // Outside the goal mouth -> Standard goal line bounce
        this.pos.x = bounds.left + this.radius;
        this.vel.x = -this.vel.x * 0.65;
      }
    }

    // RIGHT AWAY GOAL (Ball Enters Net Behind bounds.right)
    if (this.pos.x > bounds.right) {
      if (isInAwayGoalY) {
        // Trapped inside away net!
        // 1. Back net wall (bounds.right + GOAL_DEPTH)
        if (this.pos.x + this.radius > bounds.right + GOAL_DEPTH) {
          this.pos.x = bounds.right + GOAL_DEPTH - this.radius;
          this.vel.x = -this.vel.x * 0.15; // Net absorbs 85% forward momentum!
          this.vel.y *= 0.35;
          this.vz *= 0.25;
        }
        // 2. Top net side wall
        if (this.pos.y - this.radius < goals.awayGoal.top) {
          this.pos.y = goals.awayGoal.top + this.radius;
          this.vel.y = -this.vel.y * 0.20;
        }
        // 3. Bottom net side wall
        if (this.pos.y + this.radius > goals.awayGoal.bottom) {
          this.pos.y = goals.awayGoal.bottom - this.radius;
          this.vel.y = -this.vel.y * 0.20;
        }
      } else {
        // Outside the goal mouth -> Standard goal line bounce
        this.pos.x = bounds.right - this.radius;
        this.vel.x = -this.vel.x * 0.65;
      }
    }

    // Pitch Top & Bottom Touchline Bounds
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
    const currentSpeed = Math.hypot(this.vel.x, this.vel.y);
    PixelSpriteRenderer.drawBall(
      ctx,
      this.pos.x,
      this.pos.y,
      this.z,
      this.radius,
      currentSpeed,
      this.travelAngle,
      this.spinProgress,
      this.shotType,
      this.trailHistory,
      this.burstShockwaves,
      this.turfGrassParticles
    );
  }
}
