import { AIState, TacticalRole, Vector2D } from '../types/game';
import { Ball } from './Ball';
import { Field } from './Field';
import { Player } from './Player';

function lerpAngle(start: number, end: number, amount: number): number {
  let diff = end - start;
  while (diff < -Math.PI) diff += Math.PI * 2;
  while (diff > Math.PI) diff -= Math.PI * 2;
  return start + diff * amount;
}

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
    dt = 1 / 60
  ) {
    const frameScale = Math.min(2, Math.max(0.25, dt * 60));
    bot.walkTimerTick(0.02 * frameScale);
    bot.updateParticles();

    // Decrease stun, cooldowns & duel feedback timers
    if (bot.stumbleTimer > 0) bot.stumbleTimer -= dt;
    if (bot.aiGocekCooldownTimer > 0) bot.aiGocekCooldownTimer -= dt;
    if (bot.aiTackleCooldownTimer > 0) bot.aiTackleCooldownTimer -= dt;
    if (bot.dispossessProtectionTimer > 0) bot.dispossessProtectionTimer -= dt;
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
          dt
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
          dt
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
          dt
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
          dt
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
    dt: number
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
      if (timeToGoal > 0 && timeToGoal < 0.85) {
        const predictedY = ball.pos.y + ball.vel.y * timeToGoalFrames;
        const isHeadingInsideGoal =
          predictedY >= defendingGoal.top - 25 && predictedY <= defendingGoal.bottom + 25;
        if (isHeadingInsideGoal) {
          bot.aiState = 'STATE_SWEEPER_CLEAR';
          // Trigger Diving Save across goalmouth
          const distToIntercept = Math.hypot(goalLineX - bot.pos.x, predictedY - bot.pos.y);
          if (distToIntercept < 220 && !bot.isDiving) {
            bot.isDiving = true;
            bot.diveTimer = 0.55;
            const diveDirY = predictedY > bot.pos.y ? 1 : -1;
            bot.facingAngle = Math.atan2(predictedY - bot.pos.y, attackDir * 20);
            bot.vel.x = attackDir * bot.speed * 0.4;
            bot.vel.y = diveDirY * bot.speed * 1.75;
            bot.triggerFeedback('🧤 DIVING SAVE!');
          }
          // Parry or Catch check if ball is within reach
          const distToBall = Math.hypot(ball.pos.x - bot.pos.x, ball.pos.y - bot.pos.y);
          if (distToBall < bot.radius + ball.radius + 18) {
            const ballSpeed = Math.hypot(ball.vel.x, ball.vel.y);
            if (ballSpeed < 10.5) {
              // Catch & hold
              bot.hasPossession = true;
              ball.attachToPlayer(bot.pos, bot.facingAngle, bot.radius, bot.vel, bot.id);
              bot.triggerFeedback('🧤 CAUGHT!');
            } else {
              // High speed shot -> Parry / Deflect to side
              const parryY = predictedY > goalCenterY ? 7.5 : -7.5;
              ball.vel.x = attackDir * 8.5;
              ball.vel.y = parryY;
              ball.vz = 3.5;
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
      const spd = Math.min(bot.speed * 0.85, moveDist * 0.15);
      bot.vel.x = (moveDx / moveDist) * spd;
      bot.vel.y = (moveDy / moveDist) * spd;
    } else {
      bot.vel.x = 0;
      bot.vel.y = 0;
    }

    // Face towards the ball
    const angleToBall = Math.atan2(ball.pos.y - bot.pos.y, ball.pos.x - bot.pos.x);
    bot.facingAngle = lerpAngle(bot.facingAngle, angleToBall, 0.25);
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
    dt: number
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
      if (forwardTarget && Math.random() < 0.035) {
        bot.hasPossession = false;
        bot.executePassTo(forwardTarget, ball);
        bot.triggerFeedback('⚽ OUTLET PASS!');
        return;
      }

      // Safe dribble out of danger
      const safeDirX = attackDir * 0.85;
      const safeDirY = bot.pos.y < goalCenterY ? -0.5 : 0.5;
      bot.vel.x = safeDirX * bot.speed * 0.55;
      bot.vel.y = safeDirY * bot.speed * 0.55;
      bot.facingAngle = lerpAngle(bot.facingAngle, Math.atan2(bot.vel.y, bot.vel.x), 0.2);
      ball.attachToPlayer(bot.pos, bot.facingAngle, bot.radius, bot.vel, bot.id);
      return;
    }

    // Support Teammate with possession
    if (teammateCarrier) {
      bot.aiState = 'STATE_SUPPORT_RUN';
      // Maintain backline cover behind carrier
      const targetDepthX = goalLineX + attackDir * Math.max(340, Math.abs(teammateCarrier.pos.x - goalLineX) * 0.65);
      const targetY = teammateCarrier.pos.y * 0.6 + goalCenterY * 0.4;
      TacticalAI.moveTowards(bot, targetDepthX, targetY, bot.speed * 0.6);
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
      TacticalAI.moveTowards(bot, ball.pos.x, ball.pos.y, bot.speed * 0.85);

      // Standing Poke or Slide tackle loose ball / steal
      if (distToBall < 52 && !bot.isStandingTackling && !bot.isTackling && bot.aiTackleCooldownTimer <= 0) {
        if (Math.random() < 0.04) {
          if (Math.random() < 0.75) {
            bot.isStandingTackling = true;
            bot.standingTackleTimer = 0.25;
            bot.aiTackleCooldownTimer = 4.5;
            bot.triggerFeedback('👟 SWEEPER POKE!');
          } else {
            bot.isTackling = true;
            bot.tackleTimer = 0.4;
            bot.aiTackleCooldownTimer = 6.0;
            bot.tackleSlideAngle = Math.atan2(ball.pos.y - bot.pos.y, ball.pos.x - bot.pos.x);
            bot.triggerFeedback('⚡ SWEEPER TACKLE!');
          }
        }
      }
      return;
    }

    if (targetThreat) {
      const distToThreat = Math.hypot(targetThreat.pos.x - bot.pos.x, targetThreat.pos.y - bot.pos.y);
      const threatDistToGoal = Math.abs(targetThreat.pos.x - goalLineX);

      // Press if threat enters dangerous zone (< 380px from goal or < 120px from bot)
      if (threatDistToGoal < 450 || distToThreat < 130) {
        bot.aiState = 'STATE_PRESS_BALL';
        TacticalAI.moveTowards(bot, targetThreat.pos.x, targetThreat.pos.y, bot.speed * 0.62);

        // Standing Poke Tackle or Slide Tackle execution in box
        if (distToThreat < 52 && !bot.isStandingTackling && !bot.isTackling && bot.aiTackleCooldownTimer <= 0) {
          if (Math.random() < 0.04) {
            if (Math.random() < 0.75) {
              bot.isStandingTackling = true;
              bot.standingTackleTimer = 0.25;
              bot.aiTackleCooldownTimer = 4.5;
              bot.triggerFeedback('👟 DEFENDER POKE!');
            } else {
              bot.isTackling = true;
              bot.tackleTimer = 0.42;
              bot.aiTackleCooldownTimer = 6.0;
              bot.tackleSlideAngle = Math.atan2(targetThreat.pos.y - bot.pos.y, targetThreat.pos.x - bot.pos.x);
              bot.triggerFeedback('⚡ DEFENDER SLIDE!');
            }
          }
        }
      } else {
        // Zonal Marking: Block direct passing/shooting channel to goal
        bot.aiState = 'STATE_ZONE_COVER';
        const coverX = (targetThreat.pos.x + goalLineX) * 0.5;
        const coverY = (targetThreat.pos.y + goalCenterY) * 0.5;
        TacticalAI.moveTowards(bot, coverX, coverY, bot.speed * 0.52);
      }
    } else {
      // Loose Ball Chase or Defensive Base
      if (isClosestToBall) {
        bot.aiState = 'STATE_PRESS_BALL';
        TacticalAI.moveTowards(bot, ball.pos.x, ball.pos.y, bot.speed * 0.65);
      } else {
        bot.aiState = 'STATE_ZONE_COVER';
        // Base defensive position
        const baseDefX = goalLineX + attackDir * 320;
        const baseDefY = Math.max(field.pitchBounds.top + 160, Math.min(field.pitchBounds.bottom - 160, ball.pos.y * 0.5 + goalCenterY * 0.5));
        TacticalAI.moveTowards(bot, baseDefX, baseDefY, bot.speed * 0.5);
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
    dt: number
  ) {
    const attackDir = isHome ? 1 : -1;
    const targetGoalCenterY = (targetGoal.top + targetGoal.bottom) * 0.5;
    const teammateCarrier = teammates.find((t) => t.hasPossession);
    const opponentCarrier = opponents.find((opp) => opp.hasPossession);

    // Ball Possession
    if (bot.hasPossession) {
      bot.aiState = 'STATE_ATTACK_FINISH';
      const striker = teammates.find((t) => t.role === 'ST');

      // Check for Through Pass to Striker
      if (striker && ball.releaseTimer <= 0) {
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
          ball.kick({ x: dx / len, y: dy / len }, 11.5, bot.id, striker, throughPos);
          bot.triggerFeedback('🎯 THROUGH BALL!');
          return;
        }
      }

      // Check shooting chance from medium range (< 320px)
      const distToGoal = Math.hypot(targetGoal.x - bot.pos.x, targetGoalCenterY - bot.pos.y);
      if (distToGoal < 320 && ball.releaseTimer <= 0 && Math.random() < 0.05) {
        bot.hasPossession = false;
        const dx = targetGoal.x - bot.pos.x;
        const dy = targetGoalCenterY - bot.pos.y + (Math.random() - 0.5) * 45;
        const len = Math.hypot(dx, dy) || 1;
        ball.kick({ x: dx / len, y: dy / len }, 14.5, bot.id);
        bot.triggerFeedback('⚽ MIDFIELD ROCKET!');
        return;
      }

      // Progressively dribble towards attacking third while scanning options
      const dribbleDirX = attackDir * 0.85;
      const dribbleDirY = (targetGoalCenterY - bot.pos.y) * 0.003;
      bot.vel.x = dribbleDirX * bot.speed * 0.58;
      bot.vel.y = dribbleDirY * bot.speed * 0.58;
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
      TacticalAI.moveTowards(bot, supportX, supportY, bot.speed * 0.65);
      return;
    }

    // Press opponent or contest loose ball in midfield
    if (opponentCarrier) {
      bot.aiState = 'STATE_PRESS_BALL';
      TacticalAI.moveTowards(bot, opponentCarrier.pos.x, opponentCarrier.pos.y, bot.speed * 0.60);
    } else {
      // Loose ball or zone coverage
      const isClosest = teammates.every((t) => {
        const myDist = Math.hypot(ball.pos.x - bot.pos.x, ball.pos.y - bot.pos.y);
        const tDist = Math.hypot(ball.pos.x - t.pos.x, ball.pos.y - t.pos.y);
        return myDist <= tDist;
      });

      if (isClosest) {
        bot.aiState = 'STATE_PRESS_BALL';
        TacticalAI.moveTowards(bot, ball.pos.x, ball.pos.y, bot.speed * 0.68);
      } else {
        bot.aiState = 'STATE_ZONE_COVER';
        // Central midfield hub
        const pitchCenter = (field.pitchBounds.left + field.pitchBounds.right) * 0.5;
        const targetX = pitchCenter + attackDir * 60;
        const targetY = ball.pos.y * 0.4 + targetGoalCenterY * 0.6;
        TacticalAI.moveTowards(bot, targetX, targetY, bot.speed * 0.52);
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
    dt: number
  ) {
    const attackDir = isHome ? 1 : -1;
    const targetGoalCenterY = (targetGoal.top + targetGoal.bottom) * 0.5;
    const teammateCarrier = teammates.find((t) => t.hasPossession);
    const opponentCarrier = opponents.find((opp) => opp.hasPossession);

    // Ball Possession: Direct Goal Threat!
    if (bot.hasPossession) {
      bot.aiState = 'STATE_ATTACK_FINISH';
      const distToGoal = Math.hypot(targetGoal.x - bot.pos.x, targetGoalCenterY - bot.pos.y);

      // In shooting range (< 390px from goal) -> Shoot clinical first-time finish!
      if (distToGoal < 390 && ball.releaseTimer <= 0) {
        bot.hasPossession = false;
        // Aim for top or bottom corner of target goal
        const cornerTargetY =
          bot.pos.y < targetGoalCenterY ? targetGoal.top + 28 : targetGoal.bottom - 28;
        const aimJitter = (Math.random() - 0.5) * 22;
        const dx = targetGoal.x - bot.pos.x;
        const dy = cornerTargetY + aimJitter - bot.pos.y;
        const len = Math.hypot(dx, dy) || 1;

        const isRocket = distToGoal > 250;
        const shotPower = isRocket ? 16.5 : 14.0;
        ball.kick({ x: dx / len, y: dy / len }, shotPower, bot.id, null, null, isRocket ? 'rocket' : 'normal');
        bot.triggerFeedback(isRocket ? '⚡ THUNDERBOLT!' : '⚽ POACHER FINISH!');
        return;
      }

      // Check if defender blocking direct line
      const blockingOpponent = opponents.find((opp) => {
        const oppDist = Math.hypot(opp.pos.x - bot.pos.x, opp.pos.y - bot.pos.y);
        return oppDist < 95;
      });

      let moveX = (targetGoal.x - bot.pos.x) / distToGoal;
      let moveY = (targetGoalCenterY - bot.pos.y) / distToGoal;

      if (blockingOpponent) {
        // Gocek / Feint around blocker
        if (bot.aiGocekCooldownTimer <= 0 && Math.random() < 0.015) {
          bot.isDribbleSkillActive = true;
          bot.skillDodgeInvincibleTimer = 0.20;
          bot.aiGocekCooldownTimer = 7.0;
          bot.triggerFeedback('✨ GOCEK SKILL!');
        }

        const sideSign = bot.pos.y < blockingOpponent.pos.y ? -1 : 1;
        moveX = moveX * 0.3 + (-moveY * sideSign) * 0.7;
        moveY = moveY * 0.3 + (moveX * sideSign) * 0.7;
        const norm = Math.hypot(moveX, moveY) || 1;
        moveX /= norm;
        moveY /= norm;
      }

      const dribbleSpeed = bot.speed * 0.65;
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

      TacticalAI.moveTowards(bot, runDepthX, runTargetY, bot.speed * 0.75);
      return;
    }

    // Defending or Loose Ball
    if (opponentCarrier) {
      bot.aiState = 'STATE_PRESS_BALL';
      // Press opponent ball carrier aggressively
      TacticalAI.moveTowards(bot, opponentCarrier.pos.x, opponentCarrier.pos.y, bot.speed * 0.65);

      const distToCarrier = Math.hypot(opponentCarrier.pos.x - bot.pos.x, opponentCarrier.pos.y - bot.pos.y);
      if (distToCarrier < 52 && !bot.isStandingTackling && !bot.isTackling && bot.aiTackleCooldownTimer <= 0) {
        if (Math.random() < 0.035) {
          if (Math.random() < 0.75) {
            bot.isStandingTackling = true;
            bot.standingTackleTimer = 0.25;
            bot.aiTackleCooldownTimer = 4.5;
            bot.triggerFeedback('👟 BOT POKE!');
          } else {
            bot.isTackling = true;
            bot.tackleTimer = 0.40;
            bot.aiTackleCooldownTimer = 6.0;
            bot.tackleSlideAngle = Math.atan2(opponentCarrier.pos.y - bot.pos.y, opponentCarrier.pos.x - bot.pos.x);
            bot.triggerFeedback('⚡ BOT SLIDE!');
          }
        }
      }
    } else {
      // Chase loose ball
      bot.aiState = 'STATE_PRESS_BALL';
      TacticalAI.moveTowards(bot, ball.pos.x, ball.pos.y, bot.speed * 0.72);
    }
  }

  /**
   * Shared helper for moving an AI player towards target coordinates.
   */
  private static moveTowards(bot: Player, targetX: number, targetY: number, speed: number) {
    const dx = targetX - bot.pos.x;
    const dy = targetY - bot.pos.y;
    const dist = Math.hypot(dx, dy);

    if (dist > 18) {
      bot.vel.x = (dx / dist) * speed;
      bot.vel.y = (dy / dist) * speed;
      const targetAngle = Math.atan2(bot.vel.y, bot.vel.x);
      bot.facingAngle = lerpAngle(bot.facingAngle, targetAngle, 0.22);
    } else {
      bot.vel.x *= 0.6;
      bot.vel.y *= 0.6;
    }
  }
}
