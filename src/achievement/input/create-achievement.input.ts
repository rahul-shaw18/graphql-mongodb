import { Field, InputType, Int } from '@nestjs/graphql';
import { Difficulty } from '../enum/difficulty.enum';

@InputType()
export class CreateAchievement {
  @Field()
  title: string;

  @Field({ nullable: true })
  description: string;

  @Field(() => Difficulty)
  difficulty: Difficulty;

  @Field(() => Int)
  points: Number;
}
