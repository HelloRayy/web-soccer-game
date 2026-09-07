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

  draw(ctx: CanvasRenderingContext2D, isGoalShaking = false) {
    const w = this.width;
    const h = this.height;
    const bounds = this.pitchBounds;
    const pitchWidth = bounds.right - bounds.left;
    const pitchHeight = bounds.bottom - bounds.top;
    const animTime = Date.now();

    ctx.save();
    ctx.imageSmoothingEnabled = false;

    // =========================================================================
    // 1. OUTER STADIUM FOUNDATION & RUNNING TRACK APRON
    // =========================================================================
    // Deep stadium base
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(-600, -500, w + 1200, h + 1000);

    // Terracotta / Brick Red Athletics Running Track Apron around pitch
    ctx.fillStyle = '#991b1b'; // Brick red track
    ctx.fillRect(bounds.left - 130, bounds.top - 70, pitchWidth + 260, pitchHeight + 140);

    // Athletics lane white curved stripes
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.30)';
    ctx.lineWidth = 2.5;
    ctx.strokeRect(bounds.left - 120, bounds.top - 60, pitchWidth + 240, pitchHeight + 120);
    ctx.strokeRect(bounds.left - 100, bounds.top - 45, pitchWidth + 200, pitchHeight + 90);

    // Green turf border surrounding pitch lines
    ctx.fillStyle = '#166534';
    ctx.fillRect(bounds.left - 45, bounds.top - 25, pitchWidth + 90, pitchHeight + 50);

    // =========================================================================
    // 2. GRANDSTANDS & CHEERING ANIMATED RETRO CROWD (Upper Stadium)
    // =========================================================================
    const standY = bounds.top - 310;
    const standH = 240;
    const standX = bounds.left - 160;
    const standW = pitchWidth + 320;

    // A. Concrete Tiered Steps
    const tiers = 7;
    const tierH = standH / tiers;
    for (let t = 0; t < tiers; t++) {
      const curY = standY + t * tierH;
      const shade = t % 2 === 0 ? '#1e293b' : '#334155';
      ctx.fillStyle = shade;
      ctx.fillRect(standX, curY, standW, tierH);

      // Step edge highlight
      ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.fillRect(standX, curY, standW, 2);

      // B. Hundreds of Animated Retro Pixel Spectators
      const crowdCols = 72;
      const colStep = standW / crowdCols;
      for (let c = 0; c < crowdCols; c++) {
        const fanX = standX + c * colStep + 4;
        const wave = Math.sin(animTime * 0.005 + c * 0.4 + t * 0.8);
        const isCheering = wave > 0.6;
        const bounceY = isCheering ? -2.5 : 0;

        // Fan colors based on seat section
        let shirtColor = '#ffffff';
        if (c < 28) {
          // Home Ultras Section (Cyan & Royal Blue)
          shirtColor = (c + t) % 2 === 0 ? '#06b6d4' : '#0284c7';
        } else if (c > 44) {
          // Away Ultras Section (Amber & Orange)
          shirtColor = (c + t) % 2 === 0 ? '#f59e0b' : '#ea580c';
        } else {
          // Neutral Fans & VIP Seating (White, Yellow, Green)
          shirtColor = c % 3 === 0 ? '#ffffff' : c % 3 === 1 ? '#facc15' : '#10b981';
        }

        const skin = c % 4 === 0 ? '#fcd34d' : c % 4 === 1 ? '#f59e0b' : c % 4 === 2 ? '#b45309' : '#fed7aa';

        // Fan Body (Shirt)
        ctx.fillStyle = shirtColor;
        ctx.fillRect(fanX, curY + 6 + bounceY, 4.5, 6.5);

        // Fan Head
        ctx.fillStyle = skin;
        ctx.fillRect(fanX + 0.5, curY + 2 + bounceY, 3.5, 4);

        // Cheering Arms in the air
        if (isCheering) {
          ctx.fillStyle = shirtColor;
          ctx.fillRect(fanX - 1.5, curY + 1 + bounceY, 1.5, 4);
          ctx.fillRect(fanX + 4.5, curY + 1 + bounceY, 1.5, 4);
          ctx.fillStyle = skin;
          ctx.fillRect(fanX - 1.5, curY - 1 + bounceY, 1.5, 2);
          ctx.fillRect(fanX + 4.5, curY - 1 + bounceY, 1.5, 2);
        }
      }
    }

    // C. Fan Ultras Banners & Scarves along Grandstand Railing
    const bannerY = bounds.top - 72;
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(standX, bannerY, standW, 16);
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 2;
    ctx.strokeRect(standX, bannerY, standW, 16);

    const bannerItems = [
      { text: '★ RETRO LEAGUE ★', x: bounds.left + pitchWidth * 0.15, col: '#38bdf8' },
      { text: '⚡ FORZA SOCCER ⚡', x: bounds.left + pitchWidth * 0.38, col: '#facc15' },
      { text: '⚽ CHAMPIONS CUP 2026', x: bounds.left + pitchWidth * 0.62, col: '#ffffff' },
      { text: '🔥 ULTRAS PIXEL FC 🔥', x: bounds.left + pitchWidth * 0.85, col: '#fb923c' },
    ];
    ctx.font = 'bold 9.5px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    bannerItems.forEach((b) => {
      ctx.fillStyle = b.col;
      ctx.fillText(b.text, b.x, bannerY + 8);
    });

    // D. Cantilever Stadium Roof & Steel Girder Rafters
    ctx.fillStyle = '#090d16';
    ctx.fillRect(standX - 40, standY - 40, standW + 80, 42);
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 3;
    ctx.strokeRect(standX - 40, standY - 40, standW + 80, 42);

    // Roof lattice steel rafters
    const rafterStep = 120;
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 2;
    for (let rx = standX; rx <= standX + standW; rx += rafterStep) {
      ctx.beginPath();
      ctx.moveTo(rx, standY - 40);
      ctx.lineTo(rx + 40, standY + 30);
      ctx.stroke();
    }

    // =========================================================================
    // 3. CONTINUOUS STADIUM LED ADVERTISING HOARDINGS
    // =========================================================================
    const adHeight = 24;

    // Top Perimeter LED Hoarding
    const topAdY = bounds.top - adHeight - 12;
    ctx.fillStyle = '#090d16';
    ctx.fillRect(bounds.left - 90, topAdY, pitchWidth + 180, adHeight);
    ctx.strokeStyle = '#eab308';
    ctx.lineWidth = 2;
    ctx.strokeRect(bounds.left - 90, topAdY, pitchWidth + 180, adHeight);

    // Bottom Perimeter LED Hoarding
    const botAdY = bounds.bottom + 12;
    ctx.fillStyle = '#090d16';
    ctx.fillRect(bounds.left - 90, botAdY, pitchWidth + 180, adHeight);
    ctx.strokeStyle = '#06b6d4';
    ctx.lineWidth = 2;
    ctx.strokeRect(bounds.left - 90, botAdY, pitchWidth + 180, adHeight);

    // Top LED Sponsor Brandings
    ctx.fillStyle = '#facc15';
    ctx.font = '900 11px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const topSponsors = ['★ RETRO GOAL ★', '⚡ HYPER DRIVE ⚡', 'PIXEL SPORT', 'ARCADE MASTER', 'VICTORY ARENA'];
    topSponsors.forEach((sp, i) => {
      const sx = bounds.left + (pitchWidth / topSponsors.length) * (i + 0.5);
      ctx.fillText(sp, sx, topAdY + adHeight / 2);
    });

    // Bottom LED Sponsor Brandings
    ctx.fillStyle = '#38bdf8';
    const botSponsors = ['⚽ 16-BIT CLASSIC', 'CHAMPIONS LEAGUE', '★ SUPER SIDEKICK ★', 'TURBO SOCCER', 'GOLDEN BOOT 2026'];
    botSponsors.forEach((sp, i) => {
      const sx = bounds.left + (pitchWidth / botSponsors.length) * (i + 0.5);
      ctx.fillText(sp, sx, botAdY + adHeight / 2);
    });

    // Photographers seated behind ad boards
    const photogX = [bounds.left - 60, bounds.left + 80, bounds.right - 80, bounds.right + 60];
    photogX.forEach((px) => {
      ctx.fillStyle = '#1e293b'; // Stool
      ctx.fillRect(px, botAdY + 28, 12, 10);
      ctx.fillStyle = '#e2e8f0'; // Shirt
      ctx.fillRect(px + 1, botAdY + 20, 10, 10);
      ctx.fillStyle = '#f59e0b'; // Head
      ctx.fillRect(px + 3, botAdY + 14, 6, 6);
      ctx.fillStyle = '#0f172a'; // Big Telephoto Camera Lens
      ctx.fillRect(px + 4, botAdY + 16, 12, 5);
      ctx.fillStyle = '#38bdf8'; // Lens reflection
      ctx.fillRect(px + 15, botAdY + 17, 2, 3);
    });

    // =========================================================================
    // 4. TEAM BENCHES / DUGOUTS (Bottom Technical Area)
    // =========================================================================
    const dugoutY = bounds.bottom + 48;
    const dugoutW = 160;
    const dugoutH = 34;

    // Home Team Dugout
    const homeDugoutX = bounds.left + pitchWidth * 0.22;
    ctx.fillStyle = 'rgba(6, 182, 212, 0.22)';
    ctx.fillRect(homeDugoutX, dugoutY, dugoutW, dugoutH);
    ctx.strokeStyle = '#06b6d4';
    ctx.lineWidth = 2.5;
    ctx.strokeRect(homeDugoutX, dugoutY, dugoutW, dugoutH);
    // Bench seats & substitutes
    ctx.fillStyle = '#0284c7';
    for (let b = 0; b < 6; b++) {
      ctx.fillRect(homeDugoutX + 16 + b * 22, dugoutY + 10, 12, 16);
      ctx.fillStyle = '#fcd34d';
      ctx.fillRect(homeDugoutX + 18 + b * 22, dugoutY + 4, 8, 6);
      ctx.fillStyle = '#0284c7';
    }
    // Coach standing in suit
    ctx.fillStyle = '#111827'; // Dark suit
    ctx.fillRect(homeDugoutX + dugoutW + 8, dugoutY + 4, 9, 22);
    ctx.fillStyle = '#fcd34d';
    ctx.fillRect(homeDugoutX + dugoutW + 9, dugoutY - 3, 7, 7);

    // Away Team Dugout
    const awayDugoutX = bounds.left + pitchWidth * 0.64;
    ctx.fillStyle = 'rgba(245, 158, 11, 0.22)';
    ctx.fillRect(awayDugoutX, dugoutY, dugoutW, dugoutH);
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 2.5;
    ctx.strokeRect(awayDugoutX, dugoutY, dugoutW, dugoutH);
    // Bench seats & substitutes
    ctx.fillStyle = '#ea580c';
    for (let b = 0; b < 6; b++) {
      ctx.fillRect(awayDugoutX + 16 + b * 22, dugoutY + 10, 12, 16);
      ctx.fillStyle = '#fcd34d';
      ctx.fillRect(awayDugoutX + 18 + b * 22, dugoutY + 4, 8, 6);
      ctx.fillStyle = '#ea580c';
    }
    // Coach standing in suit
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(awayDugoutX - 18, dugoutY + 4, 9, 22);
    ctx.fillStyle = '#fcd34d';
    ctx.fillRect(awayDugoutX - 17, dugoutY - 3, 7, 7);

    // =========================================================================
    // 5. 45° DIAGONAL LAWN STRIPES (Exact Match with Reference Image)
    // =========================================================================
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

    // =========================================================================
    // 6. RETRO PIXEL-CRISP WHITE PITCH MARKINGS
    // =========================================================================
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

    // 18-Yard Penalty Boxes
    const penaltyW = pitchWidth * 0.17;
    const penaltyH = pitchHeight * 0.54;
    const penaltyY = bounds.top + (pitchHeight - penaltyH) / 2;

    // Home 18-Yard Box
    ctx.strokeRect(bounds.left, penaltyY, penaltyW, penaltyH);
    // Away 18-Yard Box
    ctx.strokeRect(bounds.right - penaltyW, penaltyY, penaltyW, penaltyH);

    // 6-Yard Goal Mouth Boxes
    const sixYardW = pitchWidth * 0.06;
    const sixYardH = pitchHeight * 0.32;
    const sixYardY = bounds.top + (pitchHeight - sixYardH) / 2;

    ctx.strokeRect(bounds.left, sixYardY, sixYardW, sixYardH);
    ctx.strokeRect(bounds.right - sixYardW, sixYardY, sixYardW, sixYardH);

    // Penalty Spots & Penalty Arcs (D-Box)
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

    // 4-Corner Arcs
    const cornerR = 24;
    ctx.beginPath();
    ctx.arc(bounds.left, bounds.top, cornerR, 0, Math.PI * 0.5);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(bounds.left, bounds.bottom, cornerR, -Math.PI * 0.5, 0);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(bounds.right, bounds.top, cornerR, Math.PI * 0.5, Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(bounds.right, bounds.bottom, cornerR, Math.PI, Math.PI * 1.5);
    ctx.stroke();

    // =========================================================================
    // 7. 4 CORNER FLAGS (Waving Checkered Cloth in Breeze)
    // =========================================================================
    const corners = [
      { x: bounds.left, y: bounds.top },
      { x: bounds.right, y: bounds.top },
      { x: bounds.left, y: bounds.bottom },
      { x: bounds.right, y: bounds.bottom },
    ];

    corners.forEach((cn, idx) => {
      const wave = Math.sin(animTime * 0.006 + idx) * 3;
      const poleH = 28;
      // White Pole
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(cn.x, cn.y);
      ctx.lineTo(cn.x, cn.y - poleH);
      ctx.stroke();

      // Gold Finial Ball
      ctx.fillStyle = '#eab308';
      ctx.beginPath();
      ctx.arc(cn.x, cn.y - poleH, 2.5, 0, Math.PI * 2);
      ctx.fill();

      // Checkered Red & Yellow Flag
      const flagW = 16 + wave;
      const flagH = 10;
      const flagDir = cn.x < bounds.left + pitchWidth * 0.5 ? 1 : -1;
      const fx = cn.x;
      const fy = cn.y - poleH;

      ctx.fillStyle = '#ef4444'; // Red
      ctx.fillRect(fx, fy, flagDir * (flagW / 2), flagH / 2);
      ctx.fillRect(fx + flagDir * (flagW / 2), fy + flagH / 2, flagDir * (flagW / 2), flagH / 2);
      ctx.fillStyle = '#facc15'; // Yellow
      ctx.fillRect(fx + flagDir * (flagW / 2), fy, flagDir * (flagW / 2), flagH / 2);
      ctx.fillRect(fx, fy + flagH / 2, flagDir * (flagW / 2), flagH / 2);
    });

    // =========================================================================
    // 8. 2.5D ISOMETRIC GOALS & 3D NETTING (Left Home & Right Away)
    // =========================================================================
    const goalTop = this.goals.homeGoal.top;
    const goalBottom = this.goals.homeGoal.bottom;

    PixelSpriteRenderer.drawIsometricGoal(ctx, 'home', bounds.left, goalTop, goalBottom, pitchHeight, isGoalShaking);
    PixelSpriteRenderer.drawIsometricGoal(ctx, 'away', bounds.right, goalTop, goalBottom, pitchHeight, isGoalShaking);

    // =========================================================================
    // 9. 4 MASSIVE CORNER FLOODLIGHT TOWERS (Stadium Halogen Arrays)
    // =========================================================================
    const towers = [
      { x: bounds.left - 210, y: bounds.top - 160 },
      { x: bounds.right + 210, y: bounds.top - 160 },
      { x: bounds.left - 210, y: bounds.bottom + 95 },
      { x: bounds.right + 210, y: bounds.bottom + 95 },
    ];

    towers.forEach((t) => {
      // Steel Pylon Column
      ctx.fillStyle = '#334155';
      ctx.fillRect(t.x - 8, t.y, 16, 70);
      ctx.strokeStyle = '#64748b';
      ctx.lineWidth = 2;
      ctx.strokeRect(t.x - 8, t.y, 16, 70);

      // Lattice X-bracing
      ctx.beginPath();
      ctx.moveTo(t.x - 8, t.y);
      ctx.lineTo(t.x + 8, t.y + 35);
      ctx.lineTo(t.x - 8, t.y + 70);
      ctx.moveTo(t.x + 8, t.y);
      ctx.lineTo(t.x - 8, t.y + 35);
      ctx.lineTo(t.x + 8, t.y + 70);
      ctx.stroke();

      // Floodlight Head Array (3x3 Halogen Lamps)
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(t.x - 22, t.y - 28, 44, 28);
      ctx.strokeStyle = '#e2e8f0';
      ctx.lineWidth = 2;
      ctx.strokeRect(t.x - 22, t.y - 28, 44, 28);

      // Bright Halogen Bulbs
      ctx.fillStyle = '#fef08a';
      for (let row = 0; row < 2; row++) {
        for (let col = 0; col < 3; col++) {
          ctx.beginPath();
          ctx.arc(t.x - 14 + col * 14, t.y - 20 + row * 12, 4.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Halogen Light Core Specular
      ctx.fillStyle = '#ffffff';
      for (let row = 0; row < 2; row++) {
        for (let col = 0; col < 3; col++) {
          ctx.beginPath();
          ctx.arc(t.x - 14 + col * 14, t.y - 20 + row * 12, 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Subtle Ambient Floodlight Cone Beam onto Turf
      ctx.fillStyle = 'rgba(254, 240, 138, 0.035)';
      ctx.beginPath();
      ctx.moveTo(t.x, t.y);
      ctx.lineTo(t.x + (t.x < centerX ? 400 : -400), t.y + 450);
      ctx.lineTo(t.x + (t.x < centerX ? 750 : -750), t.y + 350);
      ctx.closePath();
      ctx.fill();
    });

    ctx.restore();
  }
}
