import { Module } from '@nestjs/common';
import { AchievementService } from './achievement.service';
import { AchievementResolver } from './achievement.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { AchievementSchema } from './schema/achievement.schema';

@Module({
  imports: [MongooseModule.forFeature([{name:'Achievement',schema:AchievementSchema}])],
  providers: [AchievementResolver, AchievementService],
  exports: [AchievementService],
})
export class AchievementModule {}
