import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LogInteractiveCourseService } from './log-interactive-course.service';
import { LogInteractiveCourse } from './entities/log-interactive-course.entity';
import { CreateLogInteractiveCourseInput } from './dto/create-log-interactive-course.input';
import { UpdateLogInteractiveCourseInput } from './dto/update-log-interactive-course.input';

@Resolver(() => LogInteractiveCourse)
export class LogInteractiveCourseResolver {
  constructor(private readonly logInteractiveCourseService: LogInteractiveCourseService) {}

  @Mutation(() => LogInteractiveCourse)
  createLogInteractiveCourse(@Args('createLogInteractiveCourseInput') createLogInteractiveCourseInput: CreateLogInteractiveCourseInput) {
    return this.logInteractiveCourseService.create(createLogInteractiveCourseInput);
  }

  @Query(() => [LogInteractiveCourse], { name: 'logInteractiveCourse' })
  findAll() {
    return this.logInteractiveCourseService.findAll();
  }

  @Query(() => LogInteractiveCourse, { name: 'logInteractiveCourse' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.logInteractiveCourseService.findOne(id);
  }

  @Mutation(() => LogInteractiveCourse)
  updateLogInteractiveCourse(@Args('updateLogInteractiveCourseInput') updateLogInteractiveCourseInput: UpdateLogInteractiveCourseInput) {
    return this.logInteractiveCourseService.update(updateLogInteractiveCourseInput.id, updateLogInteractiveCourseInput);
  }

  @Mutation(() => LogInteractiveCourse)
  removeLogInteractiveCourse(@Args('id', { type: () => Int }) id: number) {
    return this.logInteractiveCourseService.remove(id);
  }
}
