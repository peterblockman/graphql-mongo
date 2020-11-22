import { Field, ID, InputType } from '@nestjs/graphql';
import { IsUUID, MinLength, IsDateString } from 'class-validator';
// this is where graphql does validation

@InputType()
export class CreateLessonInput {
  @MinLength(1)
  @Field()
  name: string;

  @IsDateString()
  @Field()
  startDate: string;

  @Field()
  endDate: string;

  @IsUUID('4', { each: true })
  @Field(() => [ID], { defaultValue: [] })
  students: string[];
}
