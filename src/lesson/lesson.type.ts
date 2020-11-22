import { Field, ID, ObjectType } from '@nestjs/graphql';
import { StudentType } from 'src/student/student.type';

// this file is the type of lesson item
@ObjectType('Lesson') // decorate with object decorator
export class LessonType {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;

  @Field(() => [StudentType])
  students: string[];
}
