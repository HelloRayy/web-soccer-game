import { PixelSpriteRenderer } from './PixelSpriteRenderer';

export class Field {
  width: number;
  height: number;
  pitchBounds: { left: number; right: number; top: number; bottom: number };
  goals: {
    homeGoal: { x: number; top: number; bottom: number };
    awayGoal: { x: number; top: number; bottom: number };
  };

  constructor(width = 2200, height = 1350) {
    this.width = width;
    this.height = height;

    this.pitchBounds = { left: 0, right: width, top: 0, bottom: height };
    this.goals = {
      homeGoal: { x: 0, top: 0, bottom: 0 },
      awayGoal: { x: width, top: 0, bottom: 0 }
    };

    this.recalculate(width, height);
  }

  recalculate(width: number, height: number) {
    this.width = width;
    this.height = height;

    // Pitch margins (~8% padding horizontal, ~9% vertical in world coords)
    const marginX = width * 0.08;
    const marginY = height * 0.09;

    this.pitchBounds = {
      left: marginX,
      right: width - marginX,
      top: marginY,
      bottom: height - marginY
    };

    // Goal mouth dimensions
    const goalHeight = height * 0.32;
    const goalTop = (height - goalHeight) / 2;
    const goalBottom = goalTop + goalHeight;

    this.goals = {
      homeGoal: { x: marginX, top: goalTop, bottom: goalBottom },
      awayGoal: { x: width - marginX, top: goalTop, bottom: goalBottom }
    };
  }

  draw(ctx: CanvasRenderingContext2D) {
    const w = this.width;
    const h = this.height;
    const bounds = this.pitchBounds;
    const pitchWidth = bounds.right - bounds.left;
    const pitchHeight = bounds.bottom - bounds.top;

    ctx.save();
    ctx.imageSmoothingEnabled = false;

    // 1. OUTER STADIUM APRON & STANDS
    ctx.fillStyle = '#143d22'; // Dark stadium apron
    ctx.fillRect(0, 0, w, h);

    // Top & Bottom Yellow/Red Retro Stadium Advertising Boards
    const adHeight = bounds.top * 0.45;
    ctx.fillStyle = '#eab308'; // Retro yellow board
    ctx.fillRect(bounds.left - 40, bounds.top - adHeight - 8, pitchWidth + 80, adHeight);
    ctx.strokeStyle = '#ca8a04';
    ctx.lineWidth = 3;
    ctx.strokeRect(bounds.left - 40, bounds.top - adHeight - 8, pitchWidth + 80, adHeight);

    // 2. 45° DIAGONAL LAWN STRIPES (Exact Match with Reference Image)
    ctx.save();
    ctx.beginPath();
    ctx.rect(bounds.left, bounds.top, pitchWidth, pitchHeight);
    ctx.clip();

    // Base Grass Color (Vibrant Medium Retro Green)
    ctx.fillStyle = '#22832a';
    ctx.fillRect(bounds.left, bounds.top, pitchWidth, pitchHeight);

    // 45° Diagonal Alternating Bands
    const stripeBandWidth = 140;
    const diagonalSpan = pitchWidth + pitchHeight + 400;
    ctx.fillStyle = '#2db237'; // Vibrant Light Green Band

    for (let d = -pitchHeight; d < diagonalSpan; d += stripeBandWidth * 2) {
      ctx.beginPath();
      ctx.moveTo(bounds.left + d, bounds.top);
      ctx.lineTo(bounds.left + d + stripeBandWidth, bounds.top);
      ctx.lineTo(bounds.left + d + stripeBandWidth - pitchHeight, bounds.bottom);
      ctx.lineTo(bounds.left + d - pitchHeight, bounds.bottom);
      ctx.closePath();
      ctx.fill();
    }
    ctx.restore();

    // 3. 2.5D ISOMETRIC GOALS & NETTING (Left Home & Right Away)
    const goalTop = this.goals.homeGoal.top;
    const goalBottom = this.goals.homeGoal.bottom;

    PixelSpriteRenderer.drawIsometricGoal(ctx, 'home', bounds.left, goalTop, goalBottom, pitchHeight);
    PixelSpriteRenderer.drawIsometricGoal(ctx, 'away', bounds.right, goalTop, goalBottom, pitchHeight);

    // 4. RETRO PIXEL-CRISP WHITE PITCH MARKINGS
    ctx.strokeStyle = '#f8fafc';
    ctx.lineWidth = 5;
    ctx.lineCap = 'square';
    ctx.lineJoin = 'miter';

    // Outer Boundary Line
    ctx.strokeRect(bounds.left, bounds.top, pitchWidth, pitchHeight);

    // Halfway Center Line
    const centerX = bounds.left + pitchWidth * 0.5;
    ctx.beginPath();
    ctx.moveTo(centerX, bounds.top);
    ctx.lineTo(centerX, bounds.bottom);
    ctx.stroke();

    // Center Circle & Center Spot
    const centerRadius = Math.min(pitchWidth, pitchHeight) * 0.18;
    ctx.beginPath();
    ctx.arc(centerX, bounds.top + pitchHeight * 0.5, centerRadius, 0, Math.PI * 2);
    ctx.stroke();

    ctx.fillStyle = '#f8fafc';
    ctx.beginPath();
    ctx.arc(centerX, bounds.top + pitchHeight * 0.5, 7, 0, Math.PI * 2);
    ctx.fill();

    // 5. 18-YARD PENALTY BOXES
    const penaltyW = pitchWidth * 0.17;
    const penaltyH = pitchHeight * 0.54;
    const penaltyY = bounds.top + (pitchHeight - penaltyH) / 2;

    // Home 18-Yard Box
    ctx.strokeRect(bounds.left, penaltyY, penaltyW, penaltyH);
    // Away 18-Yard Box
    ctx.strokeRect(bounds.right - penaltyW, penaltyY, penaltyW, penaltyH);

    // 6. 6-YARD GOAL MOUTH BOXES
    const sixYardW = pitchWidth * 0.06;
    const sixYardH = pitchHeight * 0.32;
    const sixYardY = bounds.top + (pitchHeight - sixYardH) / 2;

    ctx.strokeRect(bounds.left, sixYardY, sixYardW, sixYardH);
    ctx.strokeRect(bounds.right - sixYardW, sixYardY, sixYardW, sixYardH);

    // 7. PENALTY SPOTS & PENALTY ARCS (D-Box)
    const penSpotDist = pitchWidth * 0.12;
    const penSpotY = bounds.top + pitchHeight * 0.5;

    // Left Penalty Spot & Arc
    ctx.beginPath();
    ctx.arc(bounds.left + penSpotDist, penSpotY, 6, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(bounds.left + penSpotDist, penSpotY, centerRadius * 0.75, -Math.PI * 0.30, Math.PI * 0.30);
    ctx.stroke();

    // Right Penalty Spot & Arc
    ctx.beginPath();
    ctx.arc(bounds.right - penSpotDist, penSpotY, 6, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(bounds.right - penSpotDist, penSpotY, centerRadius * 0.75, Math.PI * 0.70, Math.PI * 1.30);
    ctx.stroke();

    // 8. 4-CORNER ARCS
    const cornerR = 24;
    // Top-Left
    ctx.beginPath();
    ctx.arc(bounds.left, bounds.top, cornerR, 0, Math.PI * 0.5);
    ctx.stroke();
    // Bottom-Left
    ctx.beginPath();
    ctx.arc(bounds.left, bounds.bottom, cornerR, -Math.PI * 0.5, 0);
    ctx.stroke();
    // Top-Right
    ctx.beginPath();
    ctx.arc(bounds.right, bounds.top, cornerR, Math.PI * 0.5, Math.PI);
    ctx.stroke();
    // Bottom-Right
    ctx.beginPath();
    ctx.arc(bounds.right, bounds.bottom, cornerR, Math.PI, Math.PI * 1.5);
    ctx.stroke();

    ctx.restore();
  }
}
