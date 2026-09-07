/**
 * PixelSpriteRenderer.ts
 * High-End 16/32-Bit Pixel Art Rendering Engine for Retro Soccer Game
 * Authentic 2.5D Isometric Perspective inspired by Retro Goal / Sensible Soccer.
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

  // 2.5D Camera pitch tilt foreshortening factor (Y compression on turf)
  static readonly PITCH_TILT_Y = 0.82;
  static readonly INV_TILT_Y = 1 / 0.82; // ~1.2195 to restore 1:1 upright proportions

  /**
   * Render a complete 16-bit retro character sprite with drop shadow,
   * animated limbs, jersey, head, hair, and keeper gloves.
   */
  static drawCharacter(ctx: CanvasRenderingContext2D, opts: CharacterSpriteOptions) {
    const scale = PixelSpriteRenderer.PIXEL_SCALE;
    const invTilt = PixelSpriteRenderer.INV_TILT_Y;
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

    // 1. DIRECTIONAL REALISTIC GROUND DROP SHADOW (On turf - natural ground plane)
    ctx.fillStyle = 'rgba(2, 18, 10, 0.45)';
    ctx.beginPath();
    const shadowScale = Math.max(0.4, 1 - z * 0.02);
    const shadowW = 15 * scale * shadowScale;
    const shadowH = 7.5 * scale * shadowScale;
    ctx.ellipse(x, y + 4, shadowW / 2, shadowH / 2, 0, 0, Math.PI * 2);
    ctx.fill();

    // 2. COUNTER-SCALE FOR UPRIGHT 2.5D BILLBOARD SPRITE
    // Vertical position elevated by z
    const renderY = y - z * invTilt;
    ctx.translate(x, renderY);
    ctx.scale(1, invTilt); // Counteract pitch Y compression so characters stand upright!

    // Determine facing direction
    const cosA = Math.cos(facingAngle);
    const sinA = Math.sin(facingAngle);

    // Left vs Right
    const isFacingLeft = cosA < -0.25;
    // Purely vertical (running directly Up or Down)
    const isVerticalOnly = Math.abs(cosA) <= 0.28;
    const isFacingUp = sinA < -0.25;

    // 3. POSE LOGIC: GOALKEEPER DIVING POSE
    if (isGoalkeeper && isDiving) {
      if (isFacingLeft) ctx.scale(-1, 1);
      PixelSpriteRenderer.renderDivingGoalkeeper(ctx, scale, primaryColor, skinColor, hairColor);
      ctx.restore();
      return;
    }

    // 4. POSE LOGIC: SLIDE TACKLE POSE
    if (isTackling) {
      if (isFacingLeft) ctx.scale(-1, 1);
      PixelSpriteRenderer.renderSlideTackle(ctx, scale, primaryColor, skinColor, hairColor);
      ctx.restore();
      return;
    }

    // 5. ANIMATED MULTI-DIRECTIONAL RETRO SPRITES
    if (!isVerticalOnly) {
      // Horizontal or Diagonal running (Side / 3-Quarter Profile)
      if (isFacingLeft) {
        ctx.scale(-1, 1);
      }
      PixelSpriteRenderer.renderSideProfilePlayer(
        ctx,
        scale,
        stepPhase,
        isMoving,
        isKicking,
        isGoalkeeper,
        primaryColor,
        skinColor,
        hairColor,
        sinA
      );
    } else if (isFacingUp) {
      // Facing Upwards (Back View)
      PixelSpriteRenderer.renderPlayerBack(
        ctx,
        scale,
        stepPhase,
        isMoving,
        isKicking,
        isGoalkeeper,
        primaryColor,
        skinColor,
        hairColor
      );
    } else {
      // Facing Downwards (Front View)
      PixelSpriteRenderer.renderPlayerFront(
        ctx,
        scale,
        stepPhase,
        isMoving,
        isKicking,
        isGoalkeeper,
        primaryColor,
        skinColor,
        hairColor
      );
    }

    ctx.restore();
  }

  /**
   * Render Authentic Side / 3-Quarter Profile Player (Running Left or Right)
   * High-end 16-bit arcade aesthetic with realistic running stride and forward arm pump.
   */
  private static renderSideProfilePlayer(
    ctx: CanvasRenderingContext2D,
    s: number,
    phase: number,
    isMoving: boolean,
    isKicking: boolean,
    isGoalkeeper: boolean,
    jerseyColor: string,
    skinColor: string,
    hairColor: string,
    sinAngle: number
  ) {
    const p = (x: number, y: number, w: number, h: number, col: string) => {
      ctx.fillStyle = col;
      ctx.fillRect(Math.round(x * s), Math.round(y * s), Math.round(w * s), Math.round(h * s));
    };

    // Forward athletic lean angle when sprinting
    const forwardLean = isMoving ? 0.08 : 0;
    ctx.rotate(forwardLean);

    // Running Stride Sine Cycle (-1 to 1)
    const stride = isMoving ? Math.sin(phase * Math.PI * 2) : 0;
    const shortsColor = isGoalkeeper ? '#1e293b' : '#0f172a';

    // ----------------------------------------------------
    // LAYER 1: FAR ARM & FAR LEG (Background Layer)
    // ----------------------------------------------------
    if (isKicking) {
      // Planted support leg (Far leg)
      p(-3.5, 2.5, 2.5, 4.5, skinColor);
      p(-4.5, 6.5, 3.5, 2, '#111827'); // Cleat
      p(-4.5, 5.8, 3.5, 1, '#ffffff'); // Sock collar
    } else if (isMoving) {
      // Alternating Far Leg (-stride)
      const farLegX = -stride * 3.5;
      const farLegY = Math.abs(stride) * 1.5;
      // Thigh & Calf
      p(-1 + farLegX * 0.6, 2.5, 2.5, 3.5, skinColor);
      // Dark boot with depth shadow
      p(-2 + farLegX, 6 + farLegY * 0.5, 3.2, 2.2, '#111827');
      p(-2 + farLegX, 5.2, 3.2, 1, '#ffffff');
    } else {
      // Idle Far Leg
      p(-2.5, 2.5, 2.2, 4.0, skinColor);
      p(-3.5, 6.2, 3.2, 2.0, '#111827');
      p(-3.5, 5.5, 3.2, 1.0, '#ffffff');
    }

    // Far Arm (Pumps opposite to near leg)
    const farArmSwing = isMoving ? -stride * 3.2 : 0;
    p(-2.5, -4.5 + farArmSwing * 0.4, 2.2, 3.8, jerseyColor);
    // Dark depth overlay on far arm
    p(-2.5, -4.5 + farArmSwing * 0.4, 2.2, 3.8, 'rgba(0, 0, 0, 0.25)');
    p(-2.5, -1 + farArmSwing * 0.4, 2.2, 2, isGoalkeeper ? '#38bdf8' : skinColor);

    // ----------------------------------------------------
    // LAYER 2: TORSO & SHORTS (Side Profile Athletic Build)
    // ----------------------------------------------------
    // Side profile shorts
    p(-3, 0, 6.5, 3.2, shortsColor);
    p(1.5, 1.8, 2, 1.4, 'rgba(0, 0, 0, 0.25)'); // Inseam shadow

    // Side profile jersey torso (6.5 width x 6.5 height)
    p(-3.5, -6.5, 7, 6.5, jerseyColor);
    // Dark outline / shadow on back of spine for pixel 3D depth
    p(-3.5, -6.5, 1.2, 6.5, 'rgba(0, 0, 0, 0.30)');
    // Front chest highlight / jersey stripe
    p(1.5, -5.5, 1.8, 4.5, 'rgba(255, 255, 255, 0.35)');

    // ----------------------------------------------------
    // LAYER 3: HEAD & HAIR (True 3/4 Profile Silhouette)
    // ----------------------------------------------------
    // Skin Face Profile (Nose extends forward at x = 3.2)
    p(-2.5, -12.5, 5.5, 6.0, skinColor);
    // Forward Nose / Brow Protrusion
    p(2.8, -10.5, 1.2, 2.2, skinColor);
    // Chin
    p(2.0, -8.0, 1.4, 1.5, skinColor);

    // Single Focused Retro Pixel Eye (Looking in forward direction)
    p(1.2, -10.2, 1.6, 1.6, '#0f172a'); // Iris
    p(1.5, -10.5, 0.8, 0.8, '#ffffff'); // Glint highlight

    // Retro Pixel Hair (Top & Back of Head)
    p(-3.2, -14.2, 6.5, 2.8, hairColor); // Hair crown
    p(-3.8, -13.5, 2.5, 5.0, hairColor); // Back of neck hair
    p(-0.5, -14.6, 3.5, 1.4, hairColor); // Front bangs

    // ----------------------------------------------------
    // LAYER 4: NEAR LEG & FOOT (Foreground Stride)
    // ----------------------------------------------------
    if (isKicking) {
      // Kicking follow-through: leg whipped high forward!
      p(1.5, 0.5, 5.5, 2.5, skinColor);
      p(5.5, -0.5, 4.0, 3.2, '#111827'); // Cleat
      p(5.0, 0.2, 1.2, 2.5, '#ffffff'); // Cleat stripe
    } else if (isMoving) {
      // Alternating Near Leg (+stride)
      const nearLegX = stride * 4.0;
      const nearLegY = Math.abs(stride) * 1.2;
      // Thigh & Shin
      p(0.5 + nearLegX * 0.5, 2.5, 2.5, 3.8, skinColor);
      // High Sock & Cleat
      p(0.8 + nearLegX, 6 + nearLegY * 0.4, 3.6, 2.4, '#111827');
      p(0.8 + nearLegX, 5.2, 3.6, 1.0, '#ffffff'); // White sock top
      p(1.8 + nearLegX, 7.2, 2.2, 0.8, '#cbd5e1'); // Cleat sole stripe
    } else {
      // Idle Near Leg
      p(0.5, 2.5, 2.5, 4.0, skinColor);
      p(0.5, 6.2, 3.5, 2.2, '#111827');
      p(0.5, 5.4, 3.5, 1.0, '#ffffff');
    }

    // ----------------------------------------------------
    // LAYER 5: NEAR ARM & HAND (Foreground Pumping Arm)
    // ----------------------------------------------------
    const nearArmSwing = isMoving ? stride * 3.5 : 0;
    // Shoulder & Bicep
    p(-0.5, -5.0 - nearArmSwing * 0.35, 2.5, 3.5, jerseyColor);
    // Forearm & Hand (or Goalkeeper Glove)
    const handX = 1.0 - nearArmSwing * 0.6;
    const handY = -1.8 - nearArmSwing * 0.4;
    p(handX, handY, 2.2, 2.2, isGoalkeeper ? '#38bdf8' : skinColor);
    if (isGoalkeeper) {
      p(handX, handY, 2.2, 2.2, '#ffffff'); // White keeper glove
      p(handX + 0.4, handY + 0.4, 1.4, 1.4, '#38bdf8'); // Cyan latex grip
    }
  }

  /**
   * Render Player Back View (Facing Up / Attacking North)
   */
  private static renderPlayerBack(
    ctx: CanvasRenderingContext2D,
    s: number,
    phase: number,
    isMoving: boolean,
    isKicking: boolean,
    isGoalkeeper: boolean,
    jerseyColor: string,
    skinColor: string,
    hairColor: string
  ) {
    const p = (x: number, y: number, w: number, h: number, col: string) => {
      ctx.fillStyle = col;
      ctx.fillRect(Math.round(x * s), Math.round(y * s), Math.round(w * s), Math.round(h * s));
    };

    const cycle = isMoving ? Math.sin(phase * Math.PI * 2) : 0;
    const shortsColor = isGoalkeeper ? '#1e293b' : '#0f172a';

    // Boots stepping up
    p(-3.5, 6 - Math.max(0, cycle) * 2, 3.2, 2.2, '#111827');
    p(1.2, 6 - Math.max(0, -cycle) * 2, 3.2, 2.2, '#111827');
    // Legs
    p(-3.0, 2.5, 2.4, 3.5, skinColor);
    p(1.5, 2.5, 2.4, 3.5, skinColor);

    // Shorts back
    p(-4, 0, 8, 3.2, shortsColor);

    // Torso back (Jersey with squad number)
    p(-4.5, -6.5, 9, 6.5, jerseyColor);
    // Squad Number on back (#10)
    p(-1.8, -5.2, 3.6, 4.0, '#ffffff');
    p(-0.6, -4.5, 1.2, 2.5, jerseyColor);

    // Arms
    const armSwing = isMoving ? -cycle * 2.5 : 0;
    p(-6, -5 + armSwing * 0.3, 2, 4, jerseyColor);
    p(-6, -1 + armSwing * 0.3, 2, 2, isGoalkeeper ? '#ffffff' : skinColor);
    p(4, -5 - armSwing * 0.3, 2, 4, jerseyColor);
    p(4, -1 - armSwing * 0.3, 2, 2, isGoalkeeper ? '#ffffff' : skinColor);

    // Back of Head (Full Hair)
    p(-3.5, -13.5, 7, 6.5, hairColor);
    p(-4.0, -12.5, 8, 3.5, hairColor);
  }

  /**
   * Render Player Front View (Facing Down / Attacking South)
   */
  private static renderPlayerFront(
    ctx: CanvasRenderingContext2D,
    s: number,
    phase: number,
    isMoving: boolean,
    isKicking: boolean,
    isGoalkeeper: boolean,
    jerseyColor: string,
    skinColor: string,
    hairColor: string
  ) {
    const p = (x: number, y: number, w: number, h: number, col: string) => {
      ctx.fillStyle = col;
      ctx.fillRect(Math.round(x * s), Math.round(y * s), Math.round(w * s), Math.round(h * s));
    };

    const cycle = isMoving ? Math.sin(phase * Math.PI * 2) : 0;
    const shortsColor = isGoalkeeper ? '#1e293b' : '#0f172a';

    // Boots
    p(-3.5, 6 + Math.max(0, cycle) * 2, 3.5, 2.2, '#111827');
    p(-3.5, 5.2, 3.5, 1.0, '#ffffff');
    p(1.2, 6 + Math.max(0, -cycle) * 2, 3.5, 2.2, '#111827');
    p(1.2, 5.2, 3.5, 1.0, '#ffffff');

    // Legs
    p(-3.0, 2.5, 2.4, 3.5, skinColor);
    p(1.5, 2.5, 2.4, 3.5, skinColor);

    // Shorts
    p(-4, 0, 8, 3.2, shortsColor);

    // Torso Front
    p(-4.5, -6.5, 9, 6.5, jerseyColor);
    // Center emblem / sponsor stripe
    p(-1.5, -5.0, 3.0, 3.5, '#ffffff');
    p(-0.5, -4.2, 1.0, 2.0, jerseyColor);

    // Arms
    const armSwing = isMoving ? -cycle * 2.5 : 0;
    p(-6, -5 + armSwing * 0.3, 2, 4, jerseyColor);
    p(-6, -1 + armSwing * 0.3, 2, 2, isGoalkeeper ? '#ffffff' : skinColor);
    p(4, -5 - armSwing * 0.3, 2, 4, jerseyColor);
    p(4, -1 - armSwing * 0.3, 2, 2, isGoalkeeper ? '#ffffff' : skinColor);

    // Head Front & Two Eyes
    p(-3.5, -12.5, 7, 6, skinColor);
    p(-2.2, -10.0, 1.5, 1.6, '#0f172a'); // Left eye
    p(1.2, -10.0, 1.5, 1.6, '#0f172a'); // Right eye

    // Hair Top
    p(-4.0, -14.2, 8, 3.2, hairColor);
    p(-4.0, -12.8, 1.8, 2.5, hairColor);
    p(2.2, -12.8, 1.8, 2.5, hairColor);
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
    p(-15, 0, 3.5, 3.0, '#111827');
    p(-13, 0, 2.5, 2.5, '#ffffff');
    p(-11, 0, 5.0, 2.5, skinColor);
    p(-6, -1, 4.2, 3.5, '#1e293b');
    p(-2, -2, 7.5, 5.2, jerseyColor);
    p(-2, -2, 7.5, 1.2, 'rgba(255, 255, 255, 0.4)');
    p(5, -2.5, 4.5, 5.0, skinColor);
    p(4.5, -4.2, 5.2, 2.2, hairColor);

    // Outstretched Arms & Big White Goalkeeper Gloves (🧤)
    p(9, -2, 4, 2.2, skinColor);
    p(12, -3.5, 4.8, 4.8, '#ffffff'); // White Gloves
    p(13.2, -2.5, 2.5, 2.5, '#38bdf8'); // Glove grip accent
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
    p(11, 1, 3.5, 3.5, '#111827'); // Cleat
    p(10, 2, 2.0, 2.0, '#ffffff');

    // Bent Trailing Leg
    p(-7, 1, 5, 2.5, skinColor);
    p(-9, 0, 3, 3.0, '#111827');

    // Torso Tilted Backwards
    p(-5, -3, 7, 4.5, jerseyColor);
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
    const invTilt = PixelSpriteRenderer.INV_TILT_Y;

    ctx.save();
    ctx.imageSmoothingEnabled = false;

    // 1. MOTION SPEED TRAIL PARTICLES (Trailing behind fast shot)
    if (speed > 5.0 && trailHistory.length > 0) {
      trailHistory.forEach((pt, idx) => {
        const alpha = ((idx + 1) / trailHistory.length) * 0.45;
        const trailRadius = radius * (0.35 + (idx / trailHistory.length) * 0.45);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.beginPath();
        // Counter-scale Y for trail altitude
        ctx.arc(pt.x, pt.y - pt.z * invTilt, trailRadius, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    // 2. SEPARATE TURF DROP SHADOW (Foreshortened on ground plane, scales with altitude z)
    const shadowScale = Math.max(0.35, 1 - z * 0.015);
    const shadowAlpha = Math.max(0.15, 0.55 - z * 0.008);
    ctx.fillStyle = `rgba(2, 18, 10, ${shadowAlpha})`;
    ctx.beginPath();
    ctx.ellipse(x, y + 2, radius * 1.35 * shadowScale, radius * 0.70 * shadowScale, 0, 0, Math.PI * 2);
    ctx.fill();

    // 3. ELEVATED BALL RENDER (Counter-scaled to keep perfect circle in 2.5D)
    const ballY = y - z * invTilt;
    ctx.translate(x, ballY);
    ctx.scale(1, invTilt); // Keep ball perfectly spherical!
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
   * Render True 2.5D Isometric Stadium Goal Post with Realistic 3D Elevation,
   * Metallic Crossbar, Suspended Stanchions, and Sagging Diamond Netting
   */
  static drawIsometricGoal(
    ctx: CanvasRenderingContext2D,
    side: 'home' | 'away',
    x: number,
    topY: number,
    bottomY: number,
    pitchHeight: number,
    isGoalShaking = false
  ) {
    ctx.save();
    ctx.imageSmoothingEnabled = false;

    const goalH = bottomY - topY;
    const isLeft = side === 'home';
    const dir = isLeft ? -1 : 1;

    // 3D Geometry Dimensions
    // Vertical post height in 2.5D world units (rises straight up in screen -Y)
    const POST_HEIGHT_3D = 65;
    // Depth of netting going behind the goal line
    const GOAL_DEPTH = 105;

    // Net vibration ripple when a goal is scored
    const ripple = isGoalShaking ? Math.sin(Date.now() * 0.04) * 6 : 0;

    // ----------------------------------------------------
    // 1. STADIUM LED ADVERTISING HOARDINGS BEHIND GOAL
    // ----------------------------------------------------
    const adBoardX = isLeft ? x - GOAL_DEPTH - 52 : x + GOAL_DEPTH + 18;
    const adBoardW = 34;
    const adBoardH = goalH + 80;
    const adBoardY = topY - 40;

    // Outer Board Cabinet
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(adBoardX, adBoardY, adBoardW, adBoardH);
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 2.5;
    ctx.strokeRect(adBoardX, adBoardY, adBoardW, adBoardH);

    // Neon LED Sponsor Striping
    ctx.fillStyle = '#eab308'; // Retro Gold
    ctx.fillRect(adBoardX + 4, adBoardY + 8, adBoardW - 8, 8);
    ctx.fillStyle = '#06b6d4'; // Cyan LED
    ctx.fillRect(adBoardX + 4, adBoardY + adBoardH - 16, adBoardW - 8, 8);

    // Sponsor Banner Text (Vertical)
    ctx.save();
    ctx.translate(adBoardX + adBoardW / 2, adBoardY + adBoardH / 2);
    ctx.rotate(isLeft ? -Math.PI / 2 : Math.PI / 2);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 11px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('★ RETRO GOAL ★', 0, 0);
    ctx.restore();

    // ----------------------------------------------------
    // 2. INNER GOAL TURF APRON (Darker grass inside net)
    // ----------------------------------------------------
    ctx.fillStyle = 'rgba(15, 65, 25, 0.40)';
    ctx.fillRect(isLeft ? x - GOAL_DEPTH : x, topY, GOAL_DEPTH, goalH);

    // ----------------------------------------------------
    // 3. GROUND FRAME (Turf anchor bars)
    // ----------------------------------------------------
    const backGroundX = x + dir * GOAL_DEPTH;
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    ctx.beginPath();
    ctx.moveTo(x, topY);
    ctx.lineTo(backGroundX, topY);
    ctx.lineTo(backGroundX, bottomY);
    ctx.lineTo(x, bottomY);
    ctx.stroke();

    // ----------------------------------------------------
    // 4. SUSPENDED TOP BACK FRAME & TENSION STANCHION POLES
    // ----------------------------------------------------
    const topBackX = x + dir * (GOAL_DEPTH * 0.76) + ripple;
    const topBackTopY = topY - POST_HEIGHT_3D * 0.92;
    const topBackBottomY = bottomY - POST_HEIGHT_3D * 0.92;

    // Diagonal Metallic Stanchion Support Poles (From Post Tops to Turf Ground Anchors)
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 3.5;

    // Far stanchion
    ctx.beginPath();
    ctx.moveTo(x, topY - POST_HEIGHT_3D);
    ctx.lineTo(topBackX, topBackTopY);
    ctx.lineTo(x + dir * (GOAL_DEPTH * 1.08), topY);
    ctx.stroke();

    // Near stanchion
    ctx.beginPath();
    ctx.moveTo(x, bottomY - POST_HEIGHT_3D);
    ctx.lineTo(topBackX, topBackBottomY);
    ctx.lineTo(x + dir * (GOAL_DEPTH * 1.08), bottomY);
    ctx.stroke();

    // Horizontal top back bar
    ctx.beginPath();
    ctx.moveTo(topBackX, topBackTopY);
    ctx.lineTo(topBackX, topBackBottomY);
    ctx.stroke();

    // ----------------------------------------------------
    // 5. TRANSLUCENT 2.5D DIAMOND NETTING (Roof, Back & Sides)
    // ----------------------------------------------------
    // Netting Surface Fill (Soft Mint Glow)
    ctx.fillStyle = 'rgba(235, 255, 245, 0.18)';

    // Roof Net Plane (Crossbar -> Top Back Bar)
    ctx.beginPath();
    ctx.moveTo(x, topY - POST_HEIGHT_3D);
    ctx.lineTo(topBackX, topBackTopY);
    ctx.lineTo(topBackX, topBackBottomY);
    ctx.lineTo(x, bottomY - POST_HEIGHT_3D);
    ctx.closePath();
    ctx.fill();

    // Back Net Plane (Top Back Bar -> Ground Back Frame)
    ctx.beginPath();
    ctx.moveTo(topBackX, topBackTopY);
    ctx.lineTo(backGroundX, topY);
    ctx.lineTo(backGroundX, bottomY);
    ctx.lineTo(topBackX, topBackBottomY);
    ctx.closePath();
    ctx.fill();

    // Side Net Plane (Near side)
    ctx.beginPath();
    ctx.moveTo(x, bottomY);
    ctx.lineTo(x, bottomY - POST_HEIGHT_3D);
    ctx.lineTo(topBackX, topBackBottomY);
    ctx.lineTo(backGroundX, bottomY);
    ctx.closePath();
    ctx.fill();

    // Side Net Plane (Far side)
    ctx.beginPath();
    ctx.moveTo(x, topY);
    ctx.lineTo(x, topY - POST_HEIGHT_3D);
    ctx.lineTo(topBackX, topBackTopY);
    ctx.lineTo(backGroundX, topY);
    ctx.closePath();
    ctx.fill();

    // Crisp Net Diamond Grid Lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.42)';
    ctx.lineWidth = 1.2;

    const netSteps = 10;
    // Longitudinal net lines
    for (let i = 1; i < netSteps; i++) {
      const f = i / netSteps;
      const frontY = topY - POST_HEIGHT_3D + (goalH * f);
      const midY = topBackTopY + (goalH * f);
      const backY = topY + (goalH * f);

      ctx.beginPath();
      ctx.moveTo(x, frontY);
      ctx.lineTo(topBackX, midY);
      ctx.lineTo(backGroundX, backY);
      ctx.stroke();
    }

    // Transverse / Diagonal diamond cross lines
    const depthSteps = 6;
    for (let d = 1; d <= depthSteps; d++) {
      const df = d / depthSteps;
      const curRoofX = x + (topBackX - x) * df;
      const curRoofTopY = (topY - POST_HEIGHT_3D) + (topBackTopY - (topY - POST_HEIGHT_3D)) * df;
      const curRoofBotY = (bottomY - POST_HEIGHT_3D) + (topBackBottomY - (bottomY - POST_HEIGHT_3D)) * df;

      ctx.beginPath();
      ctx.moveTo(curRoofX, curRoofTopY);
      ctx.lineTo(curRoofX, curRoofBotY);
      ctx.stroke();

      const curBackX = topBackX + (backGroundX - topBackX) * df;
      const curBackTopY = topBackTopY + (topY - topBackTopY) * df;
      const curBackBotY = topBackBottomY + (bottomY - topBackBottomY) * df;

      ctx.beginPath();
      ctx.moveTo(curBackX, curBackTopY);
      ctx.lineTo(curBackX, curBackBotY);
      ctx.stroke();
    }

    // ----------------------------------------------------
    // 6. FRONT WHITE METALLIC POSTS & ELEVATED CROSSBAR
    // ----------------------------------------------------
    // Front Post Shadow Depth Core
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 7;
    ctx.lineCap = 'round';

    // Far Post Shadow
    ctx.beginPath();
    ctx.moveTo(x, topY);
    ctx.lineTo(x, topY - POST_HEIGHT_3D);
    ctx.stroke();

    // Near Post Shadow
    ctx.beginPath();
    ctx.moveTo(x, bottomY);
    ctx.lineTo(x, bottomY - POST_HEIGHT_3D);
    ctx.stroke();

    // Crossbar Shadow
    ctx.beginPath();
    ctx.moveTo(x, topY - POST_HEIGHT_3D);
    ctx.lineTo(x, bottomY - POST_HEIGHT_3D);
    ctx.stroke();

    // Gleaming White Front Face Highlight
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 5;

    // Far Post White
    ctx.beginPath();
    ctx.moveTo(x - dir * 1, topY);
    ctx.lineTo(x - dir * 1, topY - POST_HEIGHT_3D);
    ctx.stroke();

    // Near Post White
    ctx.beginPath();
    ctx.moveTo(x - dir * 1, bottomY);
    ctx.lineTo(x - dir * 1, bottomY - POST_HEIGHT_3D);
    ctx.stroke();

    // Crossbar White
    ctx.beginPath();
    ctx.moveTo(x - dir * 1, topY - POST_HEIGHT_3D);
    ctx.lineTo(x - dir * 1, bottomY - POST_HEIGHT_3D);
    ctx.stroke();

    // Metallic Post Caps (Circular 3D Joints)
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(x, topY - POST_HEIGHT_3D, 4.5, 0, Math.PI * 2);
    ctx.arc(x, bottomY - POST_HEIGHT_3D, 4.5, 0, Math.PI * 2);
    ctx.fill();

    // Post Turf Sockets (Roots on turf)
    ctx.fillStyle = '#334155';
    ctx.beginPath();
    ctx.ellipse(x, topY + 1, 4.5, 2.5, 0, 0, Math.PI * 2);
    ctx.ellipse(x, bottomY + 1, 4.5, 2.5, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }
}
