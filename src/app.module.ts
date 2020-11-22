import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { LessonModule } from './lesson/lesson.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student/student.module';
// entities
import { Lesson } from './lesson/lesson.entity';
import { Student } from './student/student.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/shool', // typo school but mongodb does not make it easy to rename :(
      synchronize: true,
      useUnifiedTopology: true,
      entities: [Lesson, Student],
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true, // save schema in memory
    }),
    LessonModule,
    StudentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
