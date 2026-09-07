/**
 * PixelSpriteRenderer.ts
 * High-End 16/32-Bit Pixel Art Rendering Engine for Retro Soccer Game
 * Inspired by Retro Goal / Sensible Soccer aesthetic.
 */

export interface CharacterSpriteOptions {
  x: number;
  y: number;
  z?: number; // Height off the ground (e.g. diving or jumping)
  facingAngle: number;
  stepPhase: number; // 0 to 1 running cycle
  isMoving: boolean;
  isKicking: boolean;
  isTackling: boolean;
  isGoalkeeper: boolean;
  isDiving: boolean;
  diveDirection?: number; // -1 up/left, 1 down/right
  team: 'home' | 'away';
  primaryColor: string;
  secondaryColor?: string;
  skinColor?: string;
  hairColor?: string;
  hasPossession?: boolean;
}

export class PixelSpriteRenderer {
  // Pre-calculated pixel sizes for crisp 16-bit retro scaling
  static readonly PIXEL_SCALE = 2.4;

  /**
   * Render a complete 16-bit retro character sprite with drop shadow,
   * animated limbs, jersey, head, hair, and keeper gloves.
   */
  static drawCharacter(ctx: CanvasRenderingContext2D, opts: CharacterSpriteOptions) {
    const scale = PixelSpriteRenderer.PIXEL_SCALE;
    const {
      x,
      y,
      z = 0,
      facingAngle,
      stepPhase,
      isMoving,
      isKicking,
      isTackling,
      isGoalkeeper,
      isDiving,
      primaryColor,
      skinColor = '#f59e0b',
      hairColor = '#fcd34d',
    } = opts;

    ctx.save();
    ctx.imageSmoothingEnabled = false;

    // 1. DIRECTIONAL REALISTIC GROUND DROP SHADOW
    ctx.fillStyle = 'rgba(3, 20, 12, 0.45)';
    ctx.beginPath();
    const shadowScale = Math.max(0.4, 1 - z * 0.02);
    const shadowW = 14 * scale * shadowScale;
    const shadowH = 7 * scale * shadowScale;
    ctx.ellipse(x, y + 4, shadowW / 2, shadowH / 2, 0, 0, Math.PI * 2);
    ctx.fill();

    // 2. CHARACTER ELEVATION & ROTATION
    const renderY = y - z;
    ctx.translate(x, renderY);

    // Calculate facing quadrant: Right (facing east) vs Left (facing west)
    const isFacingLeft = Math.cos(facingAngle) < -0.1;
    const isFacingVertical = Math.abs(Math.cos(facingAngle)) <= 0.3;
    const isFacingUp = Math.sin(facingAngle) < 0;

    if (isFacingLeft) {
      ctx.scale(-1, 1);
    }

    // 3. POSE LOGIC: GOALKEEPER DIVING POSE
    if (isGoalkeeper && isDiving) {
      PixelSpriteRenderer.renderDivingGoalkeeper(ctx, scale, primaryColor, skinColor, hairColor);
      ctx.restore();
      return;
    }

    // 4. POSE LOGIC: SLIDE TACKLE POSE
    if (isTackling) {
      PixelSpriteRenderer.renderSlideTackle(ctx, scale, primaryColor, skinColor, hairColor);
      ctx.restore();
      return;
    }

    // 5. ANIMATED RUNNING CYCLE & OUTFIELD POSE
    PixelSpriteRenderer.renderOutfieldPlayer(
      ctx,
      scale,
      stepPhase,
      isMoving,
      isKicking,
      isGoalkeeper,
      primaryColor,
      skinColor,
      hairColor,
      isFacingVertical,
      isFacingUp
    );

    ctx.restore();
  }

  /**
   * Render Outfield Running & Kicking Player
   */
  private static renderOutfieldPlayer(
    ctx: CanvasRenderingContext2D,
    s: number,
    phase: number,
    isMoving: boolean,
    isKicking: boolean,
    isGoalkeeper: boolean,
    jerseyColor: string,
    skinColor: string,
    hairColor: string,
    isFacingVertical: boolean,
    isFacingUp: boolean
  ) {
    const p = (x: number, y: number, w: number, h: number, col: string) => {
      ctx.fillStyle = col;
      ctx.fillRect(Math.round(x * s), Math.round(y * s), Math.round(w * s), Math.round(h * s));
    };

    // Leg Animation offsets based on sine step phase
    const cycle = isMoving ? Math.sin(phase * Math.PI * 2) : 0;
    const leftLegOffset = isKicking ? 3.5 : cycle * 3;
    const rightLegOffset = isKicking ? -4.5 : -cycle * 3;

    // A. FEET / BOOTS (Black & White retro boots)
    // Left Foot
    p(-3.5 + leftLegOffset * 0.4, 6 + Math.abs(cycle) * 1.2, 3.5, 2.5, '#111827');
    p(-3.5 + leftLegOffset * 0.4, 5.5, 3.5, 1, '#ffffff'); // White collar socks
    // Right Foot
    p(1.5 + rightLegOffset * 0.4, 6 + Math.abs(cycle) * 1.2, 3.5, 2.5, '#111827');
    p(1.5 + rightLegOffset * 0.4, 5.5, 3.5, 1, '#ffffff');

    // B. LEGS (Skin tone)
    p(-3 + leftLegOffset * 0.2, 2.5, 2.5, 3.5, skinColor);
    p(1.5 + rightLegOffset * 0.2, 2.5, 2.5, 3.5, skinColor);

    // C. SHORTS (White or Dark Blue)
    const shortsColor = isGoalkeeper ? '#1e293b' : '#0f172a';
    p(-4, 0, 8, 3, shortsColor);

    // D. TORSO / JERSEY
    // Main Shirt
    p(-4.5, -6, 9, 6.5, jerseyColor);
    // Darker outline / shading for retro pixel depth
    p(-4.5, -6, 1, 6.5, 'rgba(0, 0, 0, 0.25)');
    p(3.5, -6, 1, 6.5, 'rgba(0, 0, 0, 0.25)');

    // Jersey detail stripe or number accent
    p(-1.5, -5, 3, 4.5, '#ffffff');
    p(-0.5, -4, 1, 2.5, jerseyColor);

    // E. ARMS & HANDS (with Goalkeeper Gloves if GK)
    const armSwing = isMoving ? -cycle * 2.5 : 0;
    // Left arm
    p(-6, -5 + armSwing * 0.3, 2, 4, jerseyColor);
    p(-6, -1 + armSwing * 0.3, 2, 2, isGoalkeeper ? '#38bdf8' : skinColor);
    // Right arm
    p(4, -5 - armSwing * 0.3, 2, 4, jerseyColor);
    p(4, -1 - armSwing * 0.3, 2, 2, isGoalkeeper ? '#38bdf8' : skinColor);

    // F. HEAD (Pixel retro face)
    p(-3.5, -12, 7, 6, skinColor);
    // Eyes (unless facing up away from camera)
    if (!isFacingUp) {
      p(0.5, -9.5, 1.5, 1.8, '#1e293b'); // Right eye
      if (!isFacingVertical) {
        p(-2.5, -9.5, 1.5, 1.8, '#1e293b'); // Left eye
      }
    }

    // G. HAIR (Retro cute pixel hair)
    p(-4, -14, 8, 3, hairColor);
    p(-4, -13, 2, 3, hairColor);
    p(3, -13, 1.5, 2, hairColor);
  }

  /**
   * Render Goalkeeper Diving Save Animation (Horizontal in Mid-Air)
   */
  private static renderDivingGoalkeeper(
    ctx: CanvasRenderingContext2D,
    s: number,
    jerseyColor: string,
    skinColor: string,
    hairColor: string
  ) {
    const p = (x: number, y: number, w: number, h: number, col: string) => {
      ctx.fillStyle = col;
      ctx.fillRect(Math.round(x * s), Math.round(y * s), Math.round(w * s), Math.round(h * s));
    };

    // Horizontal Torso & Stretched Legs
    // Boots
    p(-15, 0, 3, 3, '#111827');
    p(-13, 0, 2, 2.5, '#ffffff');
    // Legs
    p(-11, 0, 5, 2.5, skinColor);
    // Shorts
    p(-6, -1, 4, 3.5, '#1e293b');
    // Torso (Cyan/Yellow GK Shirt)
    p(-2, -2, 7, 5, jerseyColor);
    p(-2, -2, 7, 1, 'rgba(255, 255, 255, 0.4)');
    // Head
    p(5, -2.5, 4.5, 5, skinColor);
    p(4.5, -4, 5, 2, hairColor);
    // Outstretched Arms & Big White Goalkeeper Gloves (🧤)
    p(9, -2, 4, 2, skinColor);
    p(12, -3.5, 4.5, 4.5, '#ffffff'); // White Gloves
    p(13, -2.5, 2.5, 2.5, '#38bdf8'); // Glove accent
  }

  /**
   * Render Slide Tackle Pose
   */
  private static renderSlideTackle(
    ctx: CanvasRenderingContext2D,
    s: number,
    jerseyColor: string,
    skinColor: string,
    hairColor: string
  ) {
    const p = (x: number, y: number, w: number, h: number, col: string) => {
      ctx.fillStyle = col;
      ctx.fillRect(Math.round(x * s), Math.round(y * s), Math.round(w * s), Math.round(h * s));
    };

    // Sliding Leg Outstretched Forward
    p(2, 2, 9, 2.5, skinColor);
    p(11, 1, 3.5, 3.5, '#111827'); // Boot
    p(10, 2, 2, 2, '#ffffff');

    // Bent Trailing Leg
    p(-7, 1, 5, 2.5, skinColor);
    p(-9, 0, 3, 3, '#111827');

    // Torso Tilted Backwards
    p(-5, -3, 7, 4.5, jerseyColor);
    // Head
    p(-8, -6.5, 5, 4.5, skinColor);
    p(-9, -8, 6, 2.5, hairColor);

    // Turf Dust Particles behind slide
    p(-13, 2, 2, 2, 'rgba(255, 255, 255, 0.6)');
    p(-16, 0, 3, 3, 'rgba(52, 211, 153, 0.5)');
  }

  /**
   * Render 16-Bit Soccer Ball with 3D Altitude, Spin, Shadow, and Motion Speed Trail
   */
  static drawBall(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    z: number,
    radius: number,
    rotation: number,
    speed: number,
    trailHistory: Array<{ x: number; y: number; z: number }>
  ) {
    ctx.save();
    ctx.imageSmoothingEnabled = false;

    // 1. MOTION SPEED TRAIL PARTICLES (Trailing behind fast ball)
    if (speed > 5.0 && trailHistory.length > 0) {
      trailHistory.forEach((pt, idx) => {
        const alpha = ((idx + 1) / trailHistory.length) * 0.45;
        const trailRadius = radius * (0.35 + (idx / trailHistory.length) * 0.45);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y - pt.z, trailRadius, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    // 2. SEPARATE TURF DROP SHADOW (Scales with ball altitude z)
    const shadowScale = Math.max(0.35, 1 - z * 0.015);
    const shadowAlpha = Math.max(0.15, 0.55 - z * 0.008);
    ctx.fillStyle = `rgba(2, 18, 10, ${shadowAlpha})`;
    ctx.beginPath();
    ctx.ellipse(x, y + 2, radius * 1.3 * shadowScale, radius * 0.65 * shadowScale, 0, 0, Math.PI * 2);
    ctx.fill();

    // 3. ELEVATED BALL RENDER (y - z)
    const ballY = y - z;
    ctx.translate(x, ballY);
    ctx.rotate(rotation);

    // Ball Base White Body
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.fill();

    // Dark Pixel Outline
    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth = 1.8;
    ctx.stroke();

    // 16-Bit Pentagonal Leather Patches
    ctx.fillStyle = '#1e293b';
    const s = radius * 0.35;
    // Center patch
    ctx.fillRect(-s * 0.8, -s * 0.8, s * 1.6, s * 1.6);
    // Surrounding mini patches
    ctx.fillRect(-radius * 0.7, -radius * 0.2, s, s);
    ctx.fillRect(radius * 0.3, -radius * 0.7, s, s);
    ctx.fillRect(radius * 0.2, radius * 0.3, s, s);
    ctx.fillRect(-radius * 0.6, radius * 0.3, s, s);

    ctx.restore();
  }

  /**
   * Render 2.5D Isometric Stadium Goal Post with Diamond Mesh Depth
   */
  static drawIsometricGoal(
    ctx: CanvasRenderingContext2D,
    side: 'home' | 'away',
    x: number,
    topY: number,
    bottomY: number,
    pitchHeight: number
  ) {
    ctx.save();
    ctx.imageSmoothingEnabled = false;

    const goalH = bottomY - topY;
    const depth = 90; // Depth into the back
    const isLeft = side === 'home';
    const dir = isLeft ? -1 : 1;

    // A. GOAL ADVERTISING BOARD & AUDIENCE APRON BEHIND GOAL
    const adBoardX = isLeft ? x - depth - 40 : x + depth;
    const adBoardW = 40;
    ctx.fillStyle = '#eab308'; // Yellow Retro Ad Board
    ctx.fillRect(adBoardX, topY - 30, adBoardW, goalH + 60);
    // Ad board border & retro pattern
    ctx.strokeStyle = '#ca8a04';
    ctx.lineWidth = 3;
    ctx.strokeRect(adBoardX, topY - 30, adBoardW, goalH + 60);

    // B. TRANSLUCENT DIAMOND MESH BACK NETTING
    const backPostTopX = x + dir * depth;
    const backPostTopY = topY - 20; // Angled perspective
    const backPostBottomX = x + dir * depth;
    const backPostBottomY = bottomY + 20;

    // Net polygon background fill
    ctx.fillStyle = 'rgba(230, 255, 245, 0.22)';
    ctx.beginPath();
    ctx.moveTo(x, topY);
    ctx.lineTo(backPostTopX, backPostTopY);
    ctx.lineTo(backPostBottomX, backPostBottomY);
    ctx.lineTo(x, bottomY);
    ctx.closePath();
    ctx.fill();

    // Diamond net grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.40)';
    ctx.lineWidth = 1.2;

    const netSteps = 8;
    for (let i = 1; i <= netSteps; i++) {
      const frac = i / netSteps;
      // Horizontal netting lines
      const ny1 = topY + goalH * frac;
      const ny2 = backPostTopY + (backPostBottomY - backPostTopY) * frac;
      ctx.beginPath();
      ctx.moveTo(x, ny1);
      ctx.lineTo(x + dir * depth, ny2);
      ctx.stroke();

      // Diagonal cross netting lines
      ctx.beginPath();
      ctx.moveTo(x, topY + goalH * (frac * 0.5));
      ctx.lineTo(x + dir * depth, backPostBottomY - (backPostBottomY - backPostTopY) * (1 - frac));
      ctx.stroke();
    }

    // C. GROUND NET SUPPORTS
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 3.5;
    ctx.beginPath();
    ctx.moveTo(x, bottomY);
    ctx.lineTo(backPostBottomX, backPostBottomY);
    ctx.lineTo(backPostTopX, backPostTopY);
    ctx.lineTo(x, topY);
    ctx.stroke();

    // D. FOREGROUND WHITE METALLIC POSTS & CROSSBAR
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 6;
    ctx.lineCap = 'round';

    // Front Goal Mouth Opening (Top Post to Bottom Post)
    ctx.beginPath();
    ctx.moveTo(x, topY);
    ctx.lineTo(x, bottomY);
    ctx.stroke();

    // Front Posts 3D Caps
    ctx.fillStyle = '#cbd5e1';
    ctx.beginPath();
    ctx.arc(x, topY, 4.5, 0, Math.PI * 2);
    ctx.arc(x, bottomY, 4.5, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }
}
