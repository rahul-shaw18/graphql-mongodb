import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { AchievementDocument } from './schema/achievement.schema';
import { CreateAchievement } from './input/create-achievement.input';

@Injectable()
export class AchievementService {
  constructor(
    @InjectModel('Achievement')
    private achievementModel: Model<AchievementDocument>,
  ) {}

  async getAchievements() {
    return await this.achievementModel.find();
  }

  async getAchievementById(id: string) {
    return await this.achievementModel.findById({gameId: new mongoose.Types.ObjectId(id)});
    }
    
    async createAchievement(input: CreateAchievement) {
        return await this.achievementModel.create(input);
    }
}
