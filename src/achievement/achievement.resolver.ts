import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { AchievementService } from './achievement.service';
import { Achievement } from './schema/achievement.schema';
import { CreateAchievement } from './input/create-achievement.input';

@Resolver(() => Achievement)
export class AchievementResolver {
  constructor(private readonly achievementService: AchievementService) {}

  @Query(() => [Achievement], { name: 'achievements' })
  async getAchievements() {
    return await this.achievementService.getAchievements();
  }


  @Mutation(() => Achievement)
  createAchievement(@Args('input') input: CreateAchievement) {
    return this.achievementService.createAchievement(input);
  }

}
