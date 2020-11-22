import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StudentType } from './student.type';
// this file is for graphql
import { StudentService } from './student.service';
import { CreateStudentInput } from './create-student.input';

@Resolver(of => StudentResolver)
export class StudentResolver {
  constructor(private studentService: StudentService) {}
  // Query is for Read method
  @Query(() => StudentType)
  student(@Args('id') id: string) {
    return this.studentService.getStudent(id);
  }
  // Query is for R method
  @Query(() => [StudentType])
  students() {
    return this.studentService.getStudents();
  }
  // Mutation is for CUD methods
  @Mutation(() => StudentType)
  createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.createStudent(createStudentInput);
  }
}
