import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GameDocument } from './schema/game.schema';
import { AchievementService } from 'src/achievement/achievement.service';
import { CreateGame } from './types/game.input';

@Injectable()
export class GameService {
  constructor(
    @InjectModel('Game') private gameModel: Model<GameDocument>,
    private readonly configService: ConfigService,
  ) {}

    async getGames() {
        console.log(process.env.NODE_ENV);
    console.log(this.configService.get<string>('ENV_MODE'));
    return await this.gameModel.find();
  }

  async getGameById(id: string) {
    return await this.gameModel.findById(id);
  }

  async createGame(game: CreateGame) {
    return await this.gameModel.create(game);
  }
}
