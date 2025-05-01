import { registerEnumType } from '@nestjs/graphql';

export enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
}

// if you want to you enum in graphql then you have to register it as it is not enough just to add enum in the code
// to register enum in graphql you have to add it like this

registerEnumType(Difficulty, {
  name: 'Difficulty',
  description: 'The difficulty of the achievement',
});
