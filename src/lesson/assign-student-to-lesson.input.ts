import { Field, ID, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

// define type for graphql
@InputType()
export class AssignStudentsToLessonInput {
  @IsUUID()
  @Field(type => ID)
  lessonId: string;

  @IsUUID('4', { each: true })
  @Field(type => [ID])
  studentIds: string[];
}
