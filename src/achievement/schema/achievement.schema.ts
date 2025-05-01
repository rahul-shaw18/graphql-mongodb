import { Field, ID, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Difficulty } from '../enum/difficulty.enum';

export type AchievementDocument = Achievement & Document;

@Schema()
@ObjectType()
export class Achievement {
  @Field(() => ID)
  id: string;

  @Prop({ required: true })
  @Field()
  title: string;

  @Prop({ required: true })
  @Field({ nullable: true })
  description: string;

  @Prop({ required: true, enum: Difficulty })
  @Field(() => Difficulty)
  difficulty: Difficulty;

  @Prop({ required: true, type: Number })
  @Field(() => Int)
  points: Number;

  @Prop({ type: Types.ObjectId })
  gameId: Types.ObjectId;
}

export const AchievementSchema = SchemaFactory.createForClass(Achievement);

// NOTE graphql Field accept only ID, Float, Int, String, Boolean
// out of which String and Boolean are automaticaly detected in the Fied so no need to add return type in it

