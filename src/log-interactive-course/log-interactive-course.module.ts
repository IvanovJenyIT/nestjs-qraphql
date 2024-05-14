import { Module } from '@nestjs/common';
import { LogInteractiveCourseService } from './log-interactive-course.service';
import { LogInteractiveCourseResolver } from './log-interactive-course.resolver';

@Module({
  providers: [LogInteractiveCourseResolver, LogInteractiveCourseService],
})
export class LogInteractiveCourseModule {}
