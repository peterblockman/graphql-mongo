import { Field, ID, ObjectType } from '@nestjs/graphql';
// this file is the type of lesson item
@ObjectType('Student') // decorate with object decorator
export class StudentType {
  @Field(() => ID)
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;
}
