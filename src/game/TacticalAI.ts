import { AIState, BotDifficulty, TacticalRole, TeamType, Vector2D } from '../types/game';
import { Ball } from './Ball';
import { Field } from './Field';
import { Player } from './Player';

function lerpAngle(start: number, end: number, amount: number): number {
  let diff = end - start;
  while (diff < -Math.PI) diff += Math.PI * 2;
  while (diff > Math.PI) diff -= Math.PI * 2;
  return start + diff * amount;
}

export interface BotTacticalProfile {
  name: string;
  speedMultiplier: number;
  dribbleSpeedMultiplier: number;
  sprintEnabled: boolean;
  sprintSpeedMultiplier: number;
  shootRange: number;
  rocketShotRange: number;
  shotPower: number;
  rocketShotPower: number;
  aimJitter: number;
  tackleChancePerFrame: number;
  slideCooldown: number;
  standingCooldown: number;
  gocekEnabled: boolean;
  gocekCooldown: number;
  pressDistance: number;
  throughPassEnabled: boolean;
  chipShotEnabled: boolean;
  loftedPassEnabled: boolean;
  aerialFinishingEnabled: boolean;
}

export const BOT_PROFILES: Record<BotDifficulty, BotTacticalProfile> = {
  easy: {
    name: 'Easy Bot (Latihan / Santai)',
    speedMultiplier: 1.0,
    dribbleSpeedMultiplier: 0.92,
    sprintEnabled: false,
    sprintSpeedMultiplier: 1.0,
    shootRange: 220,
    rocketShotRange: 190,
    shotPower: 9.8,
    rocketShotPower: 11.0,
    aimJitter: 75,
    tackleChancePerFrame: 0.015,
    slideCooldown: 7.0,
    standingCooldown: 5.5,
    gocekEnabled: false,
    gocekCooldown: 25.0,
    pressDistance: 90,
    throughPassEnabled: false,
    chipShotEnabled: false,
    loftedPassEnabled: false,
    aerialFinishingEnabled: false,
  },
  hard: {
    name: 'Hard Bot (Pro / Agresif)',
    speedMultiplier: 1.0,
    dribbleSpeedMultiplier: 0.92,
    sprintEnabled: true,
    sprintSpeedMultiplier: 1.62,
    shootRange: 340,
    rocketShotRange: 240,
    shotPower: 13.5,
    rocketShotPower: 16.5,
    aimJitter: 15,
    tackleChancePerFrame: 0.05,
    slideCooldown: 3.5,
    standingCooldown: 2.5,
    gocekEnabled: true,
    gocekCooldown: 9.0,
    pressDistance: 170,
    throughPassEnabled: true,
    chipShotEnabled: true,
    loftedPassEnabled: true,
    aerialFinishingEnabled: true,
  },
};

export class TacticalAI {
  /**
   * Main tactical update entrypoint for AI players.
   * Dispatches behavior based on player role and current match state.
   */
  static update(
    bot: Player,
    ball: Ball,
    field: Field,
    opponents: Player[],
    teammates: Player[] = [],
    dt = 1 / 60,
    matchPhase: string = 'PHASE_PLAYING',
    kickoffTeam: TeamType = 'home'
  ) {
    const frameScale = Math.min(2, Math.max(0.25, dt * 60));
    bot.walkTimerTick(0.02 * frameScale);
    bot.updateParticles();

    // Process active tackle, stumble and dive states
    if (bot.diveTimer > 0) {
      bot.diveTimer -= dt;
      if (bot.diveTimer <= 0) bot.isDiving = false;
    } else {
      bot.isDiving = false;
    }

    if (bot.tackleTimer > 0) {
      bot.tackleTimer -= dt;
      bot.vel.x *= Math.pow(0.94, frameScale);
      bot.vel.y *= Math.pow(0.94, frameScale);
      bot.spawnTurfParticle(2.8, true);

      bot.pos.x += bot.vel.x * frameScale;
      bot.pos.y += bot.vel.y * frameScale;

      const bounds = field.pitchBounds;
      bot.pos.x = Math.max(bounds.left + bot.radius, Math.min(bounds.right - bot.radius, bot.pos.x));
      bot.pos.y = Math.max(bounds.top + bot.radius, Math.min(bounds.bottom - bot.radius, bot.pos.y));

      if (bot.tackleTimer <= 0) {
        bot.isTackling = false;
        bot.vel.x = 0;
        bot.vel.y = 0;
      }
      return; // Freeze AI decisions during active slide tackle
    } else {
      bot.isTackling = false;
    }

    if (bot.standingTackleTimer > 0) {
      bot.standingTackleTimer -= dt;
      bot.vel.x *= Math.pow(0.91, frameScale);
      bot.vel.y *= Math.pow(0.91, frameScale);
      bot.spawnTurfParticle(1.5, true);

      bot.pos.x += bot.vel.x * frameScale;
      bot.pos.y += bot.vel.y * frameScale;

      const bounds = field.pitchBounds;
      bot.pos.x = Math.max(bounds.left + bot.radius, Math.min(bounds.right - bot.radius, bot.pos.x));
      bot.pos.y = Math.max(bounds.top + bot.radius, Math.min(bounds.bottom - bot.radius, bot.pos.y));

      if (bot.standingTackleTimer <= 0) {
        bot.isStandingTackling = false;
        bot.vel.x = 0;
        bot.vel.y = 0;
      }
      return; // Freeze AI decisions during active standing poke
    } else {
      bot.isStandingTackling = false;
    }

    if (bot.stumbleTimer > 0) {
      bot.stumbleTimer -= dt;
      bot.vel.x *= Math.pow(0.90, frameScale);
      bot.vel.y *= Math.pow(0.90, frameScale);
      bot.pos.x += bot.vel.x * frameScale;
      bot.pos.y += bot.vel.y * frameScale;
      return;
    }

    // Decrease stun, cooldowns & duel feedback timers
    if (bot.aiGocekCooldownTimer > 0) bot.aiGocekCooldownTimer -= dt;
    if (bot.aiTackleCooldownTimer > 0) bot.aiTackleCooldownTimer -= dt;
    if (bot.dispossessProtectionTimer > 0) bot.dispossessProtectionTimer -= dt;
    if (bot.isKickingTimer > 0) bot.isKickingTimer -= dt;
    if (bot.volleyTimer > 0) {
      bot.volleyTimer -= dt;
      if (bot.volleyTimer <= 0) bot.isVolleying = false;
    }
    if (bot.headerTimer > 0) {
      bot.headerTimer -= dt;
      if (bot.headerTimer <= 0) bot.isHeading = false;
    }
    if (bot.duelFeedbackTimer > 0) {
      bot.duelFeedbackTimer -= dt;
      bot.duelFeedbackYOffset += 0.4 * frameScale;
    }

    // Determine attacking and defending goals based on team
    const isHome = bot.team === 'home';
    const targetGoal = isHome ? field.goals.awayGoal : field.goals.homeGoal;
    const defendingGoal = isHome ? field.goals.homeGoal : field.goals.awayGoal;
    const targetGoalCenterY = (targetGoal.top + targetGoal.bottom) * 0.5;
    const defendingGoalCenterY = (defendingGoal.top + defendingGoal.bottom) * 0.5;

    // Ensure role assignment if unset
    if (!bot.role) {
      bot.role = TacticalAI.assignDefaultRole(bot, field);
    }
    bot.isGoalkeeper = bot.role === 'GK';

    const profile = BOT_PROFILES[bot.difficulty || 'easy'];

    // 0. Freeze bot actions during match breaks and celebrations
    if (matchPhase === 'PHASE_GOAL_CELEBRATION' || matchPhase === 'PHASE_HALF_TIME' || matchPhase === 'PHASE_FULL_TIME') {
      bot.vel.x = 0;
      bot.vel.y = 0;
      bot.isSprinting = false;
      return;
    }

    // 1. Kickoff Phase: Strict football kickoff rules enforcement
    if (matchPhase === 'PHASE_KICKOFF') {
      const centerX = field.width * 0.5;
      const centerY = field.height * 0.5;
      const isDefendingKickoff = bot.team !== kickoffTeam;

      if (isDefendingKickoff) {
        // Defending team MUST hold tactical position on their own half outside center circle (~95px)
        const safeHalfX = bot.team === 'away' ? Math.max(centerX + 95, bot.pos.x) : Math.min(centerX - 95, bot.pos.x);
        bot.pos.x = safeHalfX;
        bot.vel.x = 0;
        bot.vel.y = 0;
        bot.isSprinting = false;
        // Face the ball at center circle
        bot.facingAngle = Math.atan2(centerY - bot.pos.y, centerX - bot.pos.x);
        return;
      }

      // Attacking team during kickoff:
      const distToBall = Math.hypot(bot.pos.x - ball.pos.x, bot.pos.y - ball.pos.y);
      const isKicker = distToBall < 65;

      if (!isKicker) {
        // Supporting teammate stays in own half waiting for kickoff pass
        bot.vel.x = 0;
        bot.vel.y = 0;
        bot.isSprinting = false;
        bot.facingAngle = Math.atan2(ball.pos.y - bot.pos.y, ball.pos.x - bot.pos.x);
        return;
      }

      // The bot IS the designated kickoff taker:
      bot.aiKickoffTimer = (bot.aiKickoffTimer || 0) + dt;
      // Wait ~0.65s for realistic match restart before passing
      if (bot.aiKickoffTimer < 0.65) {
        bot.vel.x = 0;
        bot.vel.y = 0;
        bot.facingAngle = bot.team === 'home' ? 0 : Math.PI;
        return;
      }

      // Execute clean kickoff pass to teammate or touch forward
      bot.aiKickoffTimer = 0;
      const targetTeammate = teammates.find((t) => t.id !== bot.id && !t.isGoalkeeper) || teammates[0];
      if (targetTeammate) {
        const dx = targetTeammate.pos.x - bot.pos.x;
        const dy = targetTeammate.pos.y - bot.pos.y;
        const dist = Math.hypot(dx, dy) || 1;
        ball.kick({ x: dx / dist, y: dy / dist }, 5.2, bot.id, targetTeammate);
        bot.isKickingTimer = 0.2;
      } else {
        const forwardX = bot.team === 'home' ? 1 : -1;
        ball.kick({ x: forwardX, y: 0.15 }, 4.6, bot.id);
        bot.isKickingTimer = 0.2;
      }
      return;
    }

    // Dispatch by role
    switch (bot.role) {
      case 'GK':
        TacticalAI.updateGoalkeeper(
          bot,
          ball,
          field,
          defendingGoal,
          targetGoal,
          opponents,
          teammates,
          isHome,
          dt,
          profile,
          frameScale
        );
        break;

      case 'DF':
        TacticalAI.updateDefender(
          bot,
          ball,
          field,
          defendingGoal,
          targetGoal,
          opponents,
          teammates,
          isHome,
          dt,
          profile,
          frameScale
        );
        break;

      case 'MF':
        TacticalAI.updateMidfielder(
          bot,
          ball,
          field,
          defendingGoal,
          targetGoal,
          opponents,
          teammates,
          isHome,
          dt,
          profile,
          frameScale
        );
        break;

      case 'ST':
      default:
        TacticalAI.updateStriker(
          bot,
          ball,
          field,
          defendingGoal,
          targetGoal,
          opponents,
          teammates,
          isHome,
          dt,
          profile,
          frameScale
        );
        break;
    }

    // 1. Velocity-to-Position Movement Integration (60 FPS Physics)
    bot.pos.x += bot.vel.x * frameScale;
    bot.pos.y += bot.vel.y * frameScale;

    // 2. Walking & Running Step Animation
    const botSpeed = Math.hypot(bot.vel.x, bot.vel.y);
    if (botSpeed > 0.15) {
      bot.stepPhase = (bot.stepPhase + botSpeed * 0.04 * frameScale) % 1;
      const moveAngle = Math.atan2(bot.vel.y, bot.vel.x);
      let angleDiff = moveAngle - bot.facingAngle;
      while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
      while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
      bot.bodyTiltAngle = Math.max(-0.25, Math.min(0.25, angleDiff * 0.35));
    } else {
      bot.bodyTiltAngle = 0;
    }
    // Mutual Anti-Clumping Repulsion between bot teammates
    teammates.forEach((teammate) => {
      if (teammate === bot) return;
      const tmDist = Math.hypot(teammate.pos.x - bot.pos.x, teammate.pos.y - bot.pos.y);
      const minDistance = bot.role === 'GK' || teammate.role === 'GK' ? 220 : 180;
      if (tmDist < minDistance && tmDist > 0) {
        const repX = (bot.pos.x - teammate.pos.x) / tmDist;
        const repY = (bot.pos.y - teammate.pos.y) / tmDist;
        const repForce = (minDistance - tmDist) * 0.035;
        bot.pos.x += repX * repForce;
        bot.pos.y += repY * repForce;
      }
    });

    // Pitch bounds containment
    const bounds = field.pitchBounds;
    bot.pos.x = Math.max(bounds.left + bot.radius, Math.min(bounds.right - bot.radius, bot.pos.x));
    bot.pos.y = Math.max(bounds.top + bot.radius, Math.min(bounds.bottom - bot.radius, bot.pos.y));
  }

  /**
   * Helper to infer default tactical role from player name, ID or spawn position.
   */
  static assignDefaultRole(bot: Player, field: Field): TacticalRole {
    const idLower = bot.id.toLowerCase();
    const nameLower = bot.name.toLowerCase();

    if (idLower.includes('gk') || nameLower.includes('gk') || nameLower.includes('kiper')) {
      return 'GK';
    }

    const isHome = bot.team === 'home';
    const pitchCenter = (field.pitchBounds.left + field.pitchBounds.right) * 0.5;

    // Away team moves left (toward 0), Home team moves right (toward width)
    if (isHome) {
      if (bot.pos.x < field.pitchBounds.left + 220) return 'GK';
      if (bot.pos.x < pitchCenter - 100) return 'DF';
      if (bot.pos.x < pitchCenter + 120) return 'MF';
      return 'ST';
    } else {
      if (bot.pos.x > field.pitchBounds.right - 220) return 'GK';
      if (bot.pos.x > pitchCenter + 100) return 'DF';
      if (bot.pos.x > pitchCenter - 120) return 'MF';
      return 'ST';
    }
  }

  /**
   * 1. GOALKEEPER AI:
   * Angle-cutting bisector positioning, shot trajectory reaction, and diving save parry/catch.
   */
  private static updateGoalkeeper(
    bot: Player,
    ball: Ball,
    field: Field,
    defendingGoal: { x: number; top: number; bottom: number },
    targetGoal: { x: number; top: number; bottom: number },
    opponents: Player[],
    teammates: Player[],
    isHome: boolean,
    dt: number,
    profile: BotTacticalProfile,
    frameScale = 1.0
  ) {
    const goalCenterY = (defendingGoal.top + defendingGoal.bottom) * 0.5;
    const goalLineX = defendingGoal.x;
    const attackDir = isHome ? 1 : -1;

    // Handle Ball Possession
    if (bot.hasPossession) {
      bot.aiState = 'STATE_ATTACK_FINISH';
      // Distribute ball quickly upfield to best open teammate or clearance
      const openTeammate = teammates.find((t) => t.role !== 'GK') || teammates[0];
      if (openTeammate) {
        bot.hasPossession = false;
        bot.executePassTo(openTeammate, ball);
        bot.triggerFeedback('🧤 GK DISTRIBUTION!');
      } else {
        // Clear ball upfield
        bot.hasPossession = false;
        ball.kick({ x: attackDir * 0.95, y: (Math.random() - 0.5) * 0.4 }, 14, bot.id);
        bot.triggerFeedback('🧤 GK CLEARANCE!');
      }
      return;
    }

    // Check if shot is incoming toward goal
    const ballVelTowardGoal = isHome ? ball.vel.x < -3.5 : ball.vel.x > 3.5;
    const distToGoalX = Math.abs(ball.pos.x - goalLineX);

    if (ballVelTowardGoal && distToGoalX < 650) {
      // Calculate projected ball arrival at goal line (in seconds)
      const timeToGoalFrames = Math.abs(distToGoalX / (ball.vel.x || 0.001));
      const timeToGoal = timeToGoalFrames * (1 / 60);
      if (timeToGoal > 0 && timeToGoal < 0.75) {
        const predictedY = ball.pos.y + ball.vel.y * timeToGoalFrames;
        const isHeadingInsideGoal =
          predictedY >= defendingGoal.top - 20 && predictedY <= defendingGoal.bottom + 20;
        if (isHeadingInsideGoal) {
          bot.aiState = 'STATE_SWEEPER_CLEAR';
          // Trigger Diving Save across goalmouth
          const distToIntercept = Math.hypot(goalLineX - bot.pos.x, predictedY - bot.pos.y);
          if (distToIntercept < 180 && !bot.isDiving) {
            bot.isDiving = true;
            bot.diveTimer = 0.50;
            const diveDirY = predictedY > bot.pos.y ? 1 : -1;
            bot.facingAngle = Math.atan2(predictedY - bot.pos.y, attackDir * 20);
            bot.vel.x = attackDir * bot.speed * 0.35;
            bot.vel.y = diveDirY * bot.speed * 1.5;
            bot.triggerFeedback('🧤 DIVING SAVE!');
          }
          // Parry or Catch check if ball is within reach
          const distToBall = Math.hypot(ball.pos.x - bot.pos.x, ball.pos.y - bot.pos.y);
          if (distToBall < bot.radius + ball.radius + 6) {
            const ballSpeed = Math.hypot(ball.vel.x, ball.vel.y);
            if (ballSpeed < 8.5) {
              // Catch & hold
              bot.hasPossession = true;
              ball.attachToPlayer(bot.pos, bot.facingAngle, bot.radius, bot.vel, bot.id);
              bot.triggerFeedback('🧤 CAUGHT!');
            } else {
              // High speed shot -> Parry / Deflect to side
              const parryY = predictedY > goalCenterY ? 6.5 : -6.5;
              ball.vel.x = attackDir * 7.0;
              ball.vel.y = parryY;
              ball.vz = 3.0;
              ball.releaseTimer = 0.4;
              bot.triggerFeedback('🧤 PARRY!');
            }
          }
          return;
        }
      }
    }

    // Default Bisector Angle-Cutting Positioning
    bot.aiState = 'STATE_ZONE_COVER';
    const dxToBall = ball.pos.x - goalLineX;
    const dyToBall = ball.pos.y - goalCenterY;
    const distToBall = Math.hypot(dxToBall, dyToBall) || 1;

    // Advance 30-75px along line to ball to narrow angle
    const advanceLimit = Math.min(80, Math.max(30, distToBall * 0.14));
    const targetX = goalLineX + attackDir * advanceLimit;

    // Clamp target Y strictly within goal posts (+/- margin)
    const normalizedY = dyToBall / distToBall;
    const targetY = Math.max(
      defendingGoal.top - 8,
      Math.min(defendingGoal.bottom + 8, goalCenterY + normalizedY * 55)
    );

    const moveDx = targetX - bot.pos.x;
    const moveDy = targetY - bot.pos.y;
    const moveDist = Math.hypot(moveDx, moveDy);

    if (moveDist > 8) {
      const spd = Math.min(bot.speed * 0.70, moveDist * 0.12);
      bot.vel.x = (moveDx / moveDist) * spd;
      bot.vel.y = (moveDy / moveDist) * spd;
    } else {
      bot.vel.x = 0;
      bot.vel.y = 0;
    }

    // Face towards the ball
    const angleToBall = Math.atan2(ball.pos.y - bot.pos.y, ball.pos.x - bot.pos.x);
    bot.facingAngle = lerpAngle(bot.facingAngle, angleToBall, 0.25);

    // GK sprint reset & stamina recovery
    bot.isSprinting = false;
    if (bot.stamina < 1.0) {
      bot.stamina = Math.min(1.0, bot.stamina + 0.002 * frameScale);
      if (bot.isExhausted && bot.stamina > 0.30) {
        bot.isExhausted = false;
      }
    }
  }

  /**
   * 2. DEFENDER AI (Center Back):
   * Zonal marking, defensive depth preservation, standing block & slide tackle in 18-yard box.
   */
  private static updateDefender(
    bot: Player,
    ball: Ball,
    field: Field,
    defendingGoal: { x: number; top: number; bottom: number },
    targetGoal: { x: number; top: number; bottom: number },
    opponents: Player[],
    teammates: Player[],
    isHome: boolean,
    dt: number,
    profile: BotTacticalProfile,
    frameScale = 1.0
  ) {
    const attackDir = isHome ? 1 : -1;
    const goalLineX = defendingGoal.x;
    const goalCenterY = (defendingGoal.top + defendingGoal.bottom) * 0.5;
    const opponentCarrier = opponents.find((opp) => opp.hasPossession);
    const teammateCarrier = teammates.find((t) => t.hasPossession);

    // Ball Possession
    if (bot.hasPossession) {
      bot.aiState = 'STATE_ATTACK_FINISH';
      // Look for forward pass to Midfielder or Striker
      const forwardTarget =
        teammates.find((t) => t.role === 'ST' || t.role === 'MF') || teammates[0];

      // Tendangan Lambung / Long Lofted Clearance over opponent pressure
      if (profile.loftedPassEnabled && forwardTarget && (opponentCarrier || Math.random() < 0.08)) {
        bot.hasPossession = false;
        const dx = forwardTarget.pos.x - bot.pos.x;
        const dy = forwardTarget.pos.y - bot.pos.y;
        const dist = Math.hypot(dx, dy) || 1;
        const loftPower = Math.min(Math.max(dist * 0.048 + 6.5, 9.5), 14.5);
        ball.kick({ x: dx / dist, y: dy / dist }, loftPower, bot.id, forwardTarget, null, 'chip');
        bot.isKickingTimer = 0.25;
        bot.triggerFeedback('🌈 LONG LOFTED PASS!');
        return;
      }

      if (forwardTarget && Math.random() < 0.035) {
        bot.hasPossession = false;
        bot.executePassTo(forwardTarget, ball);
        bot.isKickingTimer = 0.25;
        bot.triggerFeedback('⚽ OUTLET PASS!');
        return;
      }

      // Safe dribble out of danger
      const safeDirX = attackDir * 0.85;
      const safeDirY = bot.pos.y < goalCenterY ? -0.5 : 0.5;
      bot.vel.x = safeDirX * bot.speed * profile.dribbleSpeedMultiplier;
      bot.vel.y = safeDirY * bot.speed * profile.dribbleSpeedMultiplier;
      bot.facingAngle = lerpAngle(bot.facingAngle, Math.atan2(bot.vel.y, bot.vel.x), 0.2);
      bot.isSprinting = false;
      if (bot.stamina < 1.0) {
        bot.stamina = Math.min(1.0, bot.stamina + 0.002 * frameScale);
        if (bot.isExhausted && bot.stamina > 0.30) bot.isExhausted = false;
      }
      ball.attachToPlayer(bot.pos, bot.facingAngle, bot.radius, bot.vel, bot.id);
      return;
    }

    // Support Teammate with possession
    if (teammateCarrier) {
      bot.aiState = 'STATE_SUPPORT_RUN';
      // Maintain backline cover behind carrier
      const targetDepthX = goalLineX + attackDir * Math.max(340, Math.abs(teammateCarrier.pos.x - goalLineX) * 0.65);
      const targetY = teammateCarrier.pos.y * 0.6 + goalCenterY * 0.4;
      TacticalAI.moveTowards(bot, targetDepthX, targetY, bot.speed * profile.speedMultiplier * 0.8, false, frameScale);
      return;
    }

    // Defending Opponent Carrier or Loose Ball
    const targetThreat = opponentCarrier || null;
    const distToBall = Math.hypot(ball.pos.x - bot.pos.x, ball.pos.y - bot.pos.y);
    const distBallToGoal = Math.abs(ball.pos.x - goalLineX);

    // Check if Defender is closest to ball in defensive third
    const isClosestToBall = teammates.every((t) => {
      if (t.role === 'GK') return true;
      const myDist = Math.hypot(ball.pos.x - bot.pos.x, ball.pos.y - bot.pos.y);
      const tDist = Math.hypot(ball.pos.x - t.pos.x, ball.pos.y - t.pos.y);
      return myDist <= tDist;
    });

    if (distBallToGoal < 420 && isClosestToBall) {
      // Urgent Sweeper Clearance!
      bot.aiState = 'STATE_SWEEPER_CLEAR';
      TacticalAI.moveTowards(bot, ball.pos.x, ball.pos.y, bot.speed * profile.speedMultiplier, profile.sprintEnabled, frameScale);

      // Standing Poke or Slide tackle loose ball / steal
      if (distToBall < 48 && !bot.isStandingTackling && !bot.isTackling && bot.aiTackleCooldownTimer <= 0) {
        if (Math.random() < profile.tackleChancePerFrame) {
          if (Math.random() < 0.65) {
            TacticalAI.performStandingTackle(bot, '👟 SWEEPER POKE!', profile.standingCooldown);
          } else {
            TacticalAI.performSlideTackle(bot, ball.pos.x, ball.pos.y, '⚡ SWEEPER TACKLE!', profile.slideCooldown);
          }
        }
      }
      return;
    }

    if (targetThreat) {
      const distToThreat = Math.hypot(targetThreat.pos.x - bot.pos.x, targetThreat.pos.y - bot.pos.y);
      const threatDistToGoal = Math.abs(targetThreat.pos.x - goalLineX);

      // Press if threat enters dangerous zone
      if (threatDistToGoal < profile.pressDistance + 280 || distToThreat < profile.pressDistance) {
        bot.aiState = 'STATE_PRESS_BALL';
        TacticalAI.moveTowards(bot, targetThreat.pos.x, targetThreat.pos.y, bot.speed * profile.speedMultiplier, profile.sprintEnabled, frameScale);

        // Standing Poke Tackle or Slide Tackle execution in box
        if (distToThreat < 48 && !bot.isStandingTackling && !bot.isTackling && bot.aiTackleCooldownTimer <= 0) {
          if (Math.random() < profile.tackleChancePerFrame) {
            if (Math.random() < 0.65) {
              TacticalAI.performStandingTackle(bot, '👟 DEFENDER POKE!', profile.standingCooldown);
            } else {
              TacticalAI.performSlideTackle(bot, targetThreat.pos.x, targetThreat.pos.y, '⚡ DEFENDER SLIDE!', profile.slideCooldown);
            }
          }
        }
      } else {
        // Zonal Marking: Block direct passing/shooting channel to goal
        bot.aiState = 'STATE_ZONE_COVER';
        const coverX = (targetThreat.pos.x + goalLineX) * 0.5;
        const coverY = (targetThreat.pos.y + goalCenterY) * 0.5;
        TacticalAI.moveTowards(bot, coverX, coverY, bot.speed * profile.speedMultiplier * 0.75, false, frameScale);
      }
    } else {
      // Loose Ball Chase or Defensive Base
      if (isClosestToBall) {
        bot.aiState = 'STATE_PRESS_BALL';
        TacticalAI.moveTowards(bot, ball.pos.x, ball.pos.y, bot.speed * profile.speedMultiplier, profile.sprintEnabled, frameScale);
      } else {
        bot.aiState = 'STATE_ZONE_COVER';
        // Base defensive position
        const baseDefX = goalLineX + attackDir * 320;
        const baseDefY = Math.max(field.pitchBounds.top + 160, Math.min(field.pitchBounds.bottom - 160, ball.pos.y * 0.5 + goalCenterY * 0.5));
        TacticalAI.moveTowards(bot, baseDefX, baseDefY, bot.speed * profile.speedMultiplier * 0.75, false, frameScale);
      }
    }
  }

  /**
   * 3. MIDFIELDER AI (Playmaker):
   * Link play between defense and attack, find open passing channels, deliver through passes.
   */
  private static updateMidfielder(
    bot: Player,
    ball: Ball,
    field: Field,
    defendingGoal: { x: number; top: number; bottom: number },
    targetGoal: { x: number; top: number; bottom: number },
    opponents: Player[],
    teammates: Player[],
    isHome: boolean,
    dt: number,
    profile: BotTacticalProfile,
    frameScale = 1.0
  ) {
    const attackDir = isHome ? 1 : -1;
    const targetGoalCenterY = (targetGoal.top + targetGoal.bottom) * 0.5;
    const teammateCarrier = teammates.find((t) => t.hasPossession);
    const opponentCarrier = opponents.find((opp) => opp.hasPossession);

    // Ball Possession
    if (bot.hasPossession) {
      bot.aiState = 'STATE_ATTACK_FINISH';
      const striker = teammates.find((t) => t.role === 'ST');

      // Check for Lofted Cross / Chip Pass to Striker (Tendangan Lambung melayang di atas pertahanan)
      if (profile.loftedPassEnabled && striker && ball.releaseTimer <= 0) {
        const distToStriker = Math.hypot(striker.pos.x - bot.pos.x, striker.pos.y - bot.pos.y);
        const strikerAdvantage = (striker.pos.x - bot.pos.x) * attackDir;
        const isNearWing = Math.abs(bot.pos.y - field.pitchBounds.top) < 280 || Math.abs(bot.pos.y - field.pitchBounds.bottom) < 280;

        // Check if opponent defenders are blocking ground lane between midfielder and striker
        const hasGroundObstacle = opponents.some((opp) => {
          const dOpp = Math.hypot(opp.pos.x - bot.pos.x, opp.pos.y - bot.pos.y);
          return dOpp < 120 && Math.abs(opp.pos.y - bot.pos.y) < 60;
        });

        if ((hasGroundObstacle || isNearWing || Math.random() < 0.06) && distToStriker > 120 && distToStriker < 650 && strikerAdvantage > 30) {
          bot.hasPossession = false;
          const crossTarget: Vector2D = {
            x: striker.pos.x + attackDir * 40,
            y: striker.pos.y + (striker.vel.y || 0) * 10,
          };
          const dx = crossTarget.x - bot.pos.x;
          const dy = crossTarget.y - bot.pos.y;
          const len = Math.hypot(dx, dy) || 1;
          const passPower = Math.min(Math.max(len * 0.046 + 6.5, 9.5), 14.0);
          ball.kick({ x: dx / len, y: dy / len }, passPower, bot.id, striker, crossTarget, 'chip');
          bot.isKickingTimer = 0.25;
          bot.triggerFeedback('🌈 LOFTED CROSS!');
          return;
        }
      }

      // Check for Ground Through Pass to Striker
      if (profile.throughPassEnabled && striker && ball.releaseTimer <= 0) {
        const distToStriker = Math.hypot(striker.pos.x - bot.pos.x, striker.pos.y - bot.pos.y);
        const strikerAdvantage = (striker.pos.x - bot.pos.x) * attackDir;

        // Striker is making a forward run
        if (strikerAdvantage > 60 && distToStriker < 620) {
          bot.hasPossession = false;
          // Lead the through pass forward into open grass
          const throughPos: Vector2D = {
            x: striker.pos.x + attackDir * 120,
            y: striker.pos.y + (striker.vel.y || 0) * 12,
          };
          const dx = throughPos.x - bot.pos.x;
          const dy = throughPos.y - bot.pos.y;
          const len = Math.hypot(dx, dy) || 1;
          ball.kick({ x: dx / len, y: dy / len }, 10.5, bot.id, striker, throughPos);
          bot.isKickingTimer = 0.25;
          bot.triggerFeedback('🎯 THROUGH BALL!');
          return;
        }
      }

      // Check shooting chance from medium / long range
      const distToGoal = Math.hypot(targetGoal.x - bot.pos.x, targetGoalCenterY - bot.pos.y);
      if (distToGoal < profile.shootRange && ball.releaseTimer <= 0) {
        const shootChance = profile.chipShotEnabled ? 0.05 : 0.025;
        if (Math.random() < shootChance) {
          bot.hasPossession = false;
          const cornerTargetY =
            bot.pos.y < targetGoalCenterY ? targetGoal.top + 35 : targetGoal.bottom - 35;
          const dx = targetGoal.x - bot.pos.x;
          const dy = cornerTargetY - bot.pos.y + (Math.random() - 0.5) * profile.aimJitter;
          const len = Math.hypot(dx, dy) || 1;

          const oppGk = opponents.find((opp) => opp.role === 'GK' || opp.isGoalkeeper);
          const isGkOffLine = oppGk && Math.abs(oppGk.pos.x - targetGoal.x) > 50;

          // Tendangan lambung ke gawang melewati kiper jika kiper maju
          if (profile.chipShotEnabled && (isGkOffLine || (distToGoal < 260 && Math.random() < 0.35))) {
            const chipPower = Math.min(13.8, Math.max(10.5, distToGoal * 0.05 + 8.0));
            ball.kick({ x: dx / len, y: dy / len }, chipPower, bot.id, null, null, 'chip');
            bot.isKickingTimer = 0.25;
            bot.triggerFeedback('🌈 MIDFIELD CHIP!');
          } else if (distToGoal > profile.rocketShotRange) {
            ball.kick({ x: dx / len, y: dy / len }, profile.rocketShotPower, bot.id, null, null, 'rocket');
            bot.isKickingTimer = 0.25;
            bot.triggerFeedback('💥 MIDFIELD ROCKET!');
          } else {
            ball.kick({ x: dx / len, y: dy / len }, profile.shotPower, bot.id, null, null, 'normal');
            bot.isKickingTimer = 0.25;
            bot.triggerFeedback('⚽ MIDFIELD SHOT!');
          }
          return;
        }
      }

      // Progressively dribble towards attacking third while scanning options
      let dribbleSpeed = bot.speed * profile.dribbleSpeedMultiplier;
      const wantsSprintDribble = profile.sprintEnabled && !bot.isExhausted && bot.stamina > 0.20;
      if (wantsSprintDribble) {
        bot.isSprinting = true;
        dribbleSpeed *= profile.sprintSpeedMultiplier;
        bot.stamina = Math.max(0, bot.stamina - 0.003 * frameScale);
        bot.spawnTurfParticle(1.4);
        if (bot.stamina === 0) {
          bot.isExhausted = true;
          bot.isSprinting = false;
          bot.triggerFeedback('⚠️ EXHAUSTED!');
        }
      } else {
        bot.isSprinting = false;
        if (bot.stamina < 1.0) {
          bot.stamina = Math.min(1.0, bot.stamina + 0.002 * frameScale);
          if (bot.isExhausted && bot.stamina > 0.30) {
            bot.isExhausted = false;
          }
        }
      }

      const dribbleDirX = attackDir * 0.85;
      const dribbleDirY = (targetGoalCenterY - bot.pos.y) * 0.003;
      bot.vel.x = dribbleDirX * dribbleSpeed;
      bot.vel.y = dribbleDirY * dribbleSpeed;
      bot.facingAngle = lerpAngle(bot.facingAngle, Math.atan2(bot.vel.y, bot.vel.x), 0.2);
      ball.attachToPlayer(bot.pos, bot.facingAngle, bot.radius, bot.vel, bot.id);
      return;
    }

    // Support Runs: Find open passing lane
    if (teammateCarrier) {
      bot.aiState = 'STATE_SUPPORT_RUN';
      // Position diagonally 180px away from carrier to form a passing triangle
      const sideSign = bot.pos.y > teammateCarrier.pos.y ? 1 : -1;
      const supportX = teammateCarrier.pos.x + attackDir * 40;
      const supportY = Math.max(
        field.pitchBounds.top + 140,
        Math.min(field.pitchBounds.bottom - 140, teammateCarrier.pos.y + sideSign * 200)
      );
      TacticalAI.moveTowards(bot, supportX, supportY, bot.speed * profile.speedMultiplier, profile.sprintEnabled, frameScale);
      return;
    }

    // Press opponent or contest loose ball in midfield
    if (opponentCarrier) {
      bot.aiState = 'STATE_PRESS_BALL';
      TacticalAI.moveTowards(bot, opponentCarrier.pos.x, opponentCarrier.pos.y, bot.speed * profile.speedMultiplier, profile.sprintEnabled, frameScale);

      const distToCarrier = Math.hypot(opponentCarrier.pos.x - bot.pos.x, opponentCarrier.pos.y - bot.pos.y);
      if (distToCarrier < 48 && !bot.isStandingTackling && !bot.isTackling && bot.aiTackleCooldownTimer <= 0) {
        if (Math.random() < profile.tackleChancePerFrame) {
          if (Math.random() < 0.65) {
            TacticalAI.performStandingTackle(bot, '👟 MIDFIELD POKE!', profile.standingCooldown);
          } else {
            TacticalAI.performSlideTackle(bot, opponentCarrier.pos.x, opponentCarrier.pos.y, '⚡ MIDFIELD SLIDE!', profile.slideCooldown);
          }
        }
      }
    } else {
      // Aerial Finishing on incoming airborne crosses
      if (profile.aerialFinishingEnabled && ball.z > 8 && !ball.attachedPlayerId) {
        const distToAirBall = Math.hypot(ball.pos.x - bot.pos.x, ball.pos.y - bot.pos.y);
        const distAirToGoal = Math.hypot(targetGoal.x - bot.pos.x, targetGoalCenterY - bot.pos.y);

        if (distToAirBall < bot.radius + ball.radius + 34 && distAirToGoal < 300) {
          const cornerTargetY =
            bot.pos.y < targetGoalCenterY ? targetGoal.top + 35 : targetGoal.bottom - 35;
          const dx = targetGoal.x - bot.pos.x;
          const dy = cornerTargetY - bot.pos.y;
          const len = Math.hypot(dx, dy) || 1;

          bot.hasPossession = false;
          ball.attachedPlayerId = null;
          bot.isKickingTimer = 0.30;

          if (ball.z >= 20) {
            bot.isHeading = true;
            bot.headerTimer = 0.35;
            ball.kick({ x: dx / len, y: dy / len }, 16.0, bot.id, null, null, 'rocket');
            ball.vz = -2.5;
            bot.triggerFeedback('💥 BULLET HEADER!');
          } else {
            bot.isVolleying = true;
            bot.volleyTimer = 0.40;
            ball.kick({ x: dx / len, y: dy / len }, 17.5, bot.id, null, null, 'rocket');
            ball.vz = 3.5;
            bot.triggerFeedback('🚀 FLYING VOLLEY!');
          }
          return;
        }
      }

      // Loose ball or zone coverage
      const isClosest = teammates.every((t) => {
        const myDist = Math.hypot(ball.pos.x - bot.pos.x, ball.pos.y - bot.pos.y);
        const tDist = Math.hypot(ball.pos.x - t.pos.x, ball.pos.y - t.pos.y);
        return myDist <= tDist;
      });

      if (isClosest) {
        bot.aiState = 'STATE_PRESS_BALL';
        TacticalAI.moveTowards(bot, ball.pos.x, ball.pos.y, bot.speed * profile.speedMultiplier, profile.sprintEnabled, frameScale);
      } else {
        bot.aiState = 'STATE_ZONE_COVER';
        // Central midfield hub
        const pitchCenter = (field.pitchBounds.left + field.pitchBounds.right) * 0.5;
        const targetX = pitchCenter + attackDir * 60;
        const targetY = ball.pos.y * 0.4 + targetGoalCenterY * 0.6;
        TacticalAI.moveTowards(bot, targetX, targetY, bot.speed * (profile.speedMultiplier * 0.85), false, frameScale);
      }
    }
  }

  /**
   * 4. STRIKER AI (Target Man / Poacher):
   * Off-the-ball diagonal penetrative runs, clinical poacher finishing, goalmouth pressure.
   */
  private static updateStriker(
    bot: Player,
    ball: Ball,
    field: Field,
    defendingGoal: { x: number; top: number; bottom: number },
    targetGoal: { x: number; top: number; bottom: number },
    opponents: Player[],
    teammates: Player[],
    isHome: boolean,
    dt: number,
    profile: BotTacticalProfile,
    frameScale = 1.0
  ) {
    const attackDir = isHome ? 1 : -1;
    const targetGoalCenterY = (targetGoal.top + targetGoal.bottom) * 0.5;
    const teammateCarrier = teammates.find((t) => t.hasPossession);
    const opponentCarrier = opponents.find((opp) => opp.hasPossession);

    // Ball Possession: Direct Goal Threat!
    if (bot.hasPossession) {
      bot.aiState = 'STATE_ATTACK_FINISH';
      const distToGoal = Math.hypot(targetGoal.x - bot.pos.x, targetGoalCenterY - bot.pos.y);

      // In shooting range -> Clinical finishing
      if (distToGoal < profile.shootRange && ball.releaseTimer <= 0) {
        bot.hasPossession = false;
        const cornerTargetY =
          bot.pos.y < targetGoalCenterY ? targetGoal.top + 35 : targetGoal.bottom - 35;
        const aimJitter = (Math.random() - 0.5) * profile.aimJitter;
        const dx = targetGoal.x - bot.pos.x;
        const dy = cornerTargetY + aimJitter - bot.pos.y;
        const len = Math.hypot(dx, dy) || 1;

        const oppGk = opponents.find((opp) => opp.role === 'GK' || opp.isGoalkeeper);
        const isGkOffLine = oppGk && Math.abs(oppGk.pos.x - targetGoal.x) > 45;

        // 1. Tendangan Lambung / Lofted Chip Shot over GK or sliding defenders
        if (profile.chipShotEnabled && (isGkOffLine || (distToGoal < 260 && Math.random() < 0.35))) {
          const chipPower = Math.min(13.8, Math.max(10.5, distToGoal * 0.05 + 8.2));
          ball.kick({ x: dx / len, y: dy / len }, chipPower, bot.id, null, null, 'chip');
          bot.isKickingTimer = 0.25;
          bot.triggerFeedback('🌈 CHIP SHOT!');
          return;
        }

        // 2. Curled Finesse Shot (angled into corners)
        if (profile.chipShotEnabled && Math.abs(bot.pos.y - targetGoalCenterY) > 65 && distToGoal < profile.shootRange * 0.85 && Math.random() < 0.45) {
          ball.kick({ x: dx / len, y: dy / len }, profile.shotPower + 1.2, bot.id, null, null, 'finesse');
          bot.isKickingTimer = 0.25;
          bot.triggerFeedback('🍌 CURLED FINESSE!');
          return;
        }

        // 3. Rocket Shot (Thunderbolt from distance)
        const isRocket = distToGoal > profile.rocketShotRange;
        if (isRocket) {
          ball.kick({ x: dx / len, y: dy / len }, profile.rocketShotPower, bot.id, null, null, 'rocket');
          bot.isKickingTimer = 0.25;
          bot.triggerFeedback('💥 THUNDERBOLT!');
          return;
        }

        // 4. Low Laser / Poacher Finish
        const isLowLaser = distToGoal < 160 && Math.random() < 0.5;
        ball.kick({ x: dx / len, y: dy / len }, profile.shotPower, bot.id, null, null, isLowLaser ? 'ground' : 'normal');
        bot.isKickingTimer = 0.25;
        bot.triggerFeedback(isLowLaser ? '⚡ LOW LASER!' : '⚽ POACHER FINISH!');
        return;
      }

      // Check if defender blocking direct line
      const blockingOpponent = opponents.find((opp) => {
        const oppDist = Math.hypot(opp.pos.x - bot.pos.x, opp.pos.y - bot.pos.y);
        return oppDist < 65;
      });

      let moveX = (targetGoal.x - bot.pos.x) / distToGoal;
      let moveY = (targetGoalCenterY - bot.pos.y) / distToGoal;

      if (blockingOpponent) {
        // Skill move attempt (governed by profile)
        if (profile.gocekEnabled && bot.aiGocekCooldownTimer <= 0 && Math.random() < 0.008) {
          bot.isDribbleSkillActive = true;
          bot.skillDodgeInvincibleTimer = 0.15;
          bot.aiGocekCooldownTimer = profile.gocekCooldown;
          bot.triggerFeedback('✨ GOCEK SKILL!');
        }

        // Smooth gentle curve around defender
        const sideSign = bot.pos.y < blockingOpponent.pos.y ? -1 : 1;
        moveY += sideSign * 0.35;
        const norm = Math.hypot(moveX, moveY) || 1;
        moveX /= norm;
        moveY /= norm;
      }

      let dribbleSpeed = bot.speed * profile.dribbleSpeedMultiplier;
      const wantsSprintDribble = profile.sprintEnabled && !bot.isExhausted && bot.stamina > 0.20 && distToGoal > 110 && !blockingOpponent;
      if (wantsSprintDribble) {
        bot.isSprinting = true;
        dribbleSpeed *= profile.sprintSpeedMultiplier;
        bot.stamina = Math.max(0, bot.stamina - 0.003 * frameScale);
        bot.spawnTurfParticle(1.4);
        if (bot.stamina <= 0) {
          bot.isExhausted = true;
          bot.isSprinting = false;
          bot.triggerFeedback('⚠️ EXHAUSTED!');
        }
      } else {
        bot.isSprinting = false;
        if (bot.stamina < 1.0) {
          bot.stamina = Math.min(1.0, bot.stamina + 0.002 * frameScale);
          if (bot.isExhausted && bot.stamina > 0.30) {
            bot.isExhausted = false;
          }
        }
      }

      bot.vel.x = moveX * dribbleSpeed;
      bot.vel.y = moveY * dribbleSpeed;
      bot.facingAngle = lerpAngle(bot.facingAngle, Math.atan2(bot.vel.y, bot.vel.x), 0.24);
      ball.attachToPlayer(bot.pos, bot.facingAngle, bot.radius, bot.vel, bot.id);
      return;
    }

    // Off-the-ball diagonal runs when teammate carries ball
    if (teammateCarrier) {
      bot.aiState = 'STATE_SUPPORT_RUN';
      // Make a penetrative diagonal run toward the box / behind defense
      const runDepthX = Math.max(
        field.pitchBounds.left + 180,
        Math.min(field.pitchBounds.right - 180, targetGoal.x - attackDir * 240)
      );
      // Run to near or far post
      const postOffset = bot.pos.y < targetGoalCenterY ? -140 : 140;
      const runTargetY = Math.max(
        field.pitchBounds.top + 130,
        Math.min(field.pitchBounds.bottom - 130, targetGoalCenterY + postOffset)
      );

      TacticalAI.moveTowards(bot, runDepthX, runTargetY, bot.speed * profile.speedMultiplier, profile.sprintEnabled, frameScale);
      return;
    }

    // Defending or Loose Ball
    if (opponentCarrier) {
      bot.aiState = 'STATE_PRESS_BALL';
      // Press opponent ball carrier
      TacticalAI.moveTowards(bot, opponentCarrier.pos.x, opponentCarrier.pos.y, bot.speed * profile.speedMultiplier, profile.sprintEnabled, frameScale);

      const distToCarrier = Math.hypot(opponentCarrier.pos.x - bot.pos.x, opponentCarrier.pos.y - bot.pos.y);
      if (distToCarrier < 48 && !bot.isStandingTackling && !bot.isTackling && bot.aiTackleCooldownTimer <= 0) {
        if (Math.random() < profile.tackleChancePerFrame) {
          if (Math.random() < 0.65) {
            TacticalAI.performStandingTackle(bot, '👟 BOT POKE!', profile.standingCooldown);
          } else {
            TacticalAI.performSlideTackle(bot, opponentCarrier.pos.x, opponentCarrier.pos.y, '⚡ BOT SLIDE!', profile.slideCooldown);
          }
        }
      }
    } else {
      // Aerial Finishing on incoming airborne crosses / lofted passes
      if (profile.aerialFinishingEnabled && ball.z > 8 && !ball.attachedPlayerId) {
        const distToAirBall = Math.hypot(ball.pos.x - bot.pos.x, ball.pos.y - bot.pos.y);
        const distAirToGoal = Math.hypot(targetGoal.x - bot.pos.x, targetGoalCenterY - bot.pos.y);

        if (distToAirBall < bot.radius + ball.radius + 36 && distAirToGoal < 340) {
          const cornerTargetY =
            bot.pos.y < targetGoalCenterY ? targetGoal.top + 35 : targetGoal.bottom - 35;
          const dx = targetGoal.x - bot.pos.x;
          const dy = cornerTargetY - bot.pos.y;
          const len = Math.hypot(dx, dy) || 1;

          bot.hasPossession = false;
          ball.attachedPlayerId = null;
          bot.isKickingTimer = 0.30;

          if (ball.z >= 20) {
            bot.isHeading = true;
            bot.headerTimer = 0.35;
            ball.kick({ x: dx / len, y: dy / len }, 16.5, bot.id, null, null, 'rocket');
            ball.vz = -2.5;
            bot.triggerFeedback('💥 BULLET HEADER!');
          } else {
            bot.isVolleying = true;
            bot.volleyTimer = 0.40;
            ball.kick({ x: dx / len, y: dy / len }, 18.0, bot.id, null, null, 'rocket');
            ball.vz = 3.5;
            bot.triggerFeedback('🚀 FLYING VOLLEY!');
          }
          return;
        }
      }

      // Chase loose ball
      bot.aiState = 'STATE_PRESS_BALL';
      TacticalAI.moveTowards(bot, ball.pos.x, ball.pos.y, bot.speed * profile.speedMultiplier, profile.sprintEnabled, frameScale);
    }
  }

  /**
   * Shared helper for moving an AI player towards target coordinates.
   */
  private static moveTowards(
    bot: Player,
    targetX: number,
    targetY: number,
    speed: number,
    allowSprint = false,
    frameScale = 1.0
  ) {
    const dx = targetX - bot.pos.x;
    const dy = targetY - bot.pos.y;
    const dist = Math.hypot(dx, dy);

    let currentSpeed = speed;

    const wantsSprint = allowSprint && dist > 110 && !bot.isExhausted && bot.stamina > 0.15;
    if (wantsSprint) {
      bot.isSprinting = true;
      currentSpeed *= 1.62;
      bot.stamina = Math.max(0, bot.stamina - 0.003 * frameScale);
      bot.spawnTurfParticle(1.4);
      if (bot.stamina <= 0) {
        bot.isExhausted = true;
        bot.isSprinting = false;
        bot.triggerFeedback('⚠️ EXHAUSTED!');
      }
    } else {
      bot.isSprinting = false;
      if (bot.stamina < 1.0) {
        bot.stamina = Math.min(1.0, bot.stamina + 0.002 * frameScale);
        if (bot.isExhausted && bot.stamina > 0.30) {
          bot.isExhausted = false;
        }
      }
    }

    if (dist > 18) {
      bot.vel.x = (dx / dist) * currentSpeed;
      bot.vel.y = (dy / dist) * currentSpeed;
      const targetAngle = Math.atan2(bot.vel.y, bot.vel.x);
      bot.facingAngle = lerpAngle(bot.facingAngle, targetAngle, 0.22);
    } else {
      bot.vel.x *= 0.6;
      bot.vel.y *= 0.6;
    }
  }

  /**
   * Helper to initiate dynamic sliding tackle physics.
   */
  private static performSlideTackle(
    bot: Player,
    targetX: number,
    targetY: number,
    feedback: string,
    cooldown = 4.0
  ) {
    bot.isTackling = true;
    bot.isStandingTackling = false;
    bot.tackleTimer = 0.38;
    bot.aiTackleCooldownTimer = cooldown;
    bot.tackleSlideAngle = Math.atan2(targetY - bot.pos.y, targetX - bot.pos.x);
    bot.facingAngle = bot.tackleSlideAngle;
    const slideSpeed = 14.5;
    bot.vel.x = Math.cos(bot.tackleSlideAngle) * slideSpeed;
    bot.vel.y = Math.sin(bot.tackleSlideAngle) * slideSpeed;
    bot.triggerFeedback(feedback);
  }

  /**
   * Helper to initiate standing poke tackle.
   */
  private static performStandingTackle(
    bot: Player,
    feedback: string,
    cooldown = 3.5
  ) {
    bot.isStandingTackling = true;
    bot.isTackling = false;
    bot.standingTackleTimer = 0.25;
    bot.aiTackleCooldownTimer = cooldown;
    bot.vel.x *= 0.4;
    bot.vel.y *= 0.4;
    bot.triggerFeedback(feedback);
  }
}
