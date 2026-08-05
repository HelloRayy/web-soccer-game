import { Player } from './Player';
import { Ball } from './Ball';
import { Field } from './Field';

export class AIAgent {
  static update(bot: Player, ball: Ball, field: Field, humanPlayers: Player[]) {
    if (!bot.isAI) return;
    bot.updateEnemyBotAI(ball, field, humanPlayers);
  }
}
