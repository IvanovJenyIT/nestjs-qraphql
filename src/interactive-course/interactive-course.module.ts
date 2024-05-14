import { Module } from '@nestjs/common';
import { InteractiveCourseService } from './interactive-course.service';
import { InteractiveCourseResolver } from './interactive-course.resolver';

@Module({
  providers: [InteractiveCourseResolver, InteractiveCourseService],
})
export class InteractiveCourseModule {}
