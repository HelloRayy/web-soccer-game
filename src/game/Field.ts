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

    // Pitch margins (Responsive ~7% padding horizontal, ~8% vertical in world coords)
    const marginX = width * 0.07;
    const marginY = height * 0.08;

    this.pitchBounds = {
      left: marginX,
      right: width - marginX,
      top: marginY,
      bottom: height - marginY
    };

    // Goal mouth dimensions (aligned with red and blue goal posts)
    const goalHeight = height * 0.32;
    const goalTop = (height - goalHeight) / 2;
    const goalBottom = goalTop + goalHeight;

    this.goals = {
      homeGoal: { x: marginX, top: goalTop, bottom: goalBottom }, // Red goal left
      awayGoal: { x: width - marginX, top: goalTop, bottom: goalBottom } // Blue goal right
    };
  }

  draw(ctx: CanvasRenderingContext2D) {
    const w = this.width;
    const h = this.height;
    const bounds = this.pitchBounds;
    const pitchWidth = bounds.right - bounds.left;
    const pitchHeight = bounds.bottom - bounds.top;

    // 1. Overall Outer Background Grass
    ctx.fillStyle = '#489c46';
    ctx.fillRect(0, 0, w, h);

    // 2. Alternating Grass Mowing Vertical Stripes (12 Stripes for large pitch)
    const stripeCount = 12;
    const stripeWidth = pitchWidth / stripeCount;
    const darkStripe = '#3f8c3d';
    const lightStripe = '#4ba448';

    for (let i = 0; i < stripeCount; i++) {
      ctx.fillStyle = i % 2 === 0 ? darkStripe : lightStripe;
      const x = bounds.left + i * stripeWidth;
      ctx.fillRect(x, bounds.top, stripeWidth, pitchHeight);
    }

    // 3. Left Red Goal Net (Home Goal)
    const goalDepth = bounds.left * 0.75;
    const homeGoalTop = this.goals.homeGoal.top;
    const homeGoalHeight = this.goals.homeGoal.bottom - homeGoalTop;

    ctx.fillStyle = '#b94b4b'; // Vibrant Red Goal Net
    ctx.fillRect(bounds.left - goalDepth, homeGoalTop, goalDepth, homeGoalHeight);

    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 4;
    ctx.strokeRect(bounds.left - goalDepth, homeGoalTop, goalDepth, homeGoalHeight);

    // 4. Right Blue Goal Net (Away Goal)
    ctx.fillStyle = '#498eb9'; // Vibrant Blue Goal Net
    ctx.fillRect(bounds.right, homeGoalTop, goalDepth, homeGoalHeight);

    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 4;
    ctx.strokeRect(bounds.right, homeGoalTop, goalDepth, homeGoalHeight);

    // 5. White Outer Pitch Border (Rounded Rectangle matching reference)
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 4.5;
    ctx.beginPath();
    ctx.roundRect(bounds.left, bounds.top, pitchWidth, pitchHeight, 12);
    ctx.stroke();

    // 6. Halfway Center Line
    const centerX = bounds.left + pitchWidth * 0.5;
    ctx.beginPath();
    ctx.moveTo(centerX, bounds.top);
    ctx.lineTo(centerX, bounds.bottom);
    ctx.stroke();

    // 7. Center Circle
    const centerRadius = Math.min(pitchWidth, pitchHeight) * 0.18;
    ctx.beginPath();
    ctx.arc(centerX, bounds.top + pitchHeight * 0.5, centerRadius, 0, Math.PI * 2);
    ctx.stroke();

    // Center Spot
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(centerX, bounds.top + pitchHeight * 0.5, 6, 0, Math.PI * 2);
    ctx.fill();

    // 8. Penalty Area Boxes (Left & Right)
    const penaltyW = pitchWidth * 0.16;
    const penaltyH = pitchHeight * 0.52;
    const penaltyY = bounds.top + (pitchHeight - penaltyH) / 2;

    // Home Penalty Box
    ctx.strokeRect(bounds.left, penaltyY, penaltyW, penaltyH);
    // Away Penalty Box
    ctx.strokeRect(bounds.right - penaltyW, penaltyY, penaltyW, penaltyH);
  }
}
