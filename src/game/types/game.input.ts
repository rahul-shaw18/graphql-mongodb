import { Field, InputType } from "@nestjs/graphql";


@InputType()
export class CreateGame {

    @Field()
    name: string;

    @Field()
    genre: string;



}