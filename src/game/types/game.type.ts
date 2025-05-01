import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Achievement } from 'src/achievement/schema/achievement.schema';

@ObjectType()
export class Game {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field({ description: 'The genre of the game' })
  genre: string;

  @Field(()=> [Achievement])
  achievements: Achievement[];
}
