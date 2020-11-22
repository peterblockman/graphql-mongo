import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { LessonType } from './lesson.type';
// this file is for graphql
import { LessonService } from './lesson.service';
import { CreateLessonInput } from './lesson.input';
import { AssignStudentsToLessonInput } from './assign-student-to-lesson.input';
import { Lesson } from './lesson.entity';
import { StudentService } from 'src/student/student.service';

@Resolver(of => LessonResolver)
export class LessonResolver {
  constructor(
    private lessonService: LessonService,
    private studentService: StudentService,
  ) {}

  // Query is for Read method
  @Query(returns => LessonType)
  lesson(@Args('id') id: string) {
    return this.lessonService.getLesson(id);
  }

  // Query is for R method
  @Query(returns => [LessonType])
  lessons() {
    return this.lessonService.getLessons();
  }

  // Mutation is for CUD methods
  @Mutation(returns => LessonType)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ) {
    return this.lessonService.createLesson(createLessonInput);
  }

  @Mutation(returns => LessonType)
  assignStudentsToLesson(
    @Args('assignStudentsToLessonInput')
    assignStudentsToLessonInput: AssignStudentsToLessonInput,
  ) {
    const { lessonId, studentIds } = assignStudentsToLessonInput;
    return this.lessonService.assignStudentsToLesson(lessonId, studentIds);
  }

  // retrieve students
  // @ResolveField()
  // async students(@Parent() lesson: Lesson) {
  //   // run this function when one retrieve students
  //   return this.studentService.getManyStudents(lesson.students);
  // }
}
