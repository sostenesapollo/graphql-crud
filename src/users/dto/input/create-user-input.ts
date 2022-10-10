import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, Min } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Field()
  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  age: number;

  @Field()
  @IsBoolean()
  @IsNotEmpty()
  isSubscribed: boolean;
}
