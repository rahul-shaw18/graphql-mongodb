import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameResolver } from './game.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { GameSchema } from './schema/game.schema';
import { AchievementModule } from 'src/achievement/achievement.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Game', schema: GameSchema }]),AchievementModule],
  providers: [GameResolver, GameService],
})
export class GameModule {}
