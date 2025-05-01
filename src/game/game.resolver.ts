import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { GameService } from './game.service';
import { Game } from './types/game.type';
import { Achievement } from 'src/achievement/schema/achievement.schema';
import { AchievementService } from 'src/achievement/achievement.service';
import { CreateGame } from './types/game.input';

@Resolver(() => Game)
export class GameResolver {
  constructor(
    private readonly gameService: GameService,
    private readonly achievementService: AchievementService,
  ) {}

  @Query(() => [Game], { name: 'games' })
  async getGames() {
    return await this.gameService.getGames();
  }

  @Query(() => Game)
  async getGameById(@Args('id') id: string) {
    return await this.gameService.getGameById(id);
  }

  @Mutation(() => Game)
  async createGame(@Args("game") game: CreateGame) {
    return await this.gameService.createGame(game);
    }

  @ResolveField(() => [Achievement])
  achievements(@Parent() game: Game) {
    return this.achievementService.getAchievementById(game.id);
  }
}
