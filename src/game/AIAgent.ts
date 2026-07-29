import { Player } from './Player';
import { Ball } from './Ball';
import { Field } from './Field';

export class AIAgent {
  static update(bot: Player, ball: Ball, field: Field, humanPlayers: Player[]) {
    if (!bot.isAI) return;

    const targetGoal = bot.team === 'home' ? field.goals.awayGoal : field.goals.homeGoal;
    const goalCenterY = targetGoal.top + (targetGoal.bottom - targetGoal.top) * 0.5;
    const distToGoal = Math.hypot(targetGoal.x - bot.pos.x, goalCenterY - bot.pos.y);

    const distToBall = Math.hypot(ball.pos.x - bot.pos.x, ball.pos.y - bot.pos.y);

    // Ball Touch Check
    if (distToBall < bot.radius + ball.radius + 2) {
      bot.hasPossession = true;
      ball.attachToPlayer(bot.pos, bot.facingAngle, bot.radius, bot.vel, bot.id);

      // Shoot if close to goal
      if (distToGoal < 220) {
        const dx = targetGoal.x - bot.pos.x;
        const dy = goalCenterY - bot.pos.y;
        const len = Math.hypot(dx, dy) || 1;
        ball.kick({ x: dx / len, y: dy / len }, 12, bot.id);
        return;
      }

      // Dribble toward opponent goal
      const dx = targetGoal.x - bot.pos.x;
      const dy = goalCenterY - bot.pos.y;
      const len = Math.hypot(dx, dy) || 1;

      bot.vel.x = (dx / len) * bot.speed * 0.9;
      bot.vel.y = (dy / len) * bot.speed * 0.9;
      bot.facingAngle = Math.atan2(bot.vel.y, bot.vel.x);
    } else {
      bot.hasPossession = false;

      // Chase ball or press human player
      const dx = ball.pos.x - bot.pos.x;
      const dy = ball.pos.y - bot.pos.y;
      const len = Math.hypot(dx, dy) || 1;

      bot.vel.x = (dx / len) * bot.speed * 0.85;
      bot.vel.y = (dy / len) * bot.speed * 0.85;
      bot.facingAngle = Math.atan2(bot.vel.y, bot.vel.x);
    }

    // Update position and clamp bounds
    bot.pos.x += bot.vel.x;
    bot.pos.y += bot.vel.y;

    const bounds = field.pitchBounds;
    bot.pos.x = Math.max(bounds.left + bot.radius, Math.min(bounds.right - bot.radius, bot.pos.x));
    bot.pos.y = Math.max(bounds.top + bot.radius, Math.min(bounds.bottom - bot.radius, bot.pos.y));
  }
}
