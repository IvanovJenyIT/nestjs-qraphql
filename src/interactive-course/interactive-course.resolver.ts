import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { InteractiveCourseService } from './interactive-course.service';
import { InteractiveCourse } from './entities/interactive-course.entity';
import { CreateInteractiveCourseInput } from './dto/create-interactive-course.input';
import { UpdateInteractiveCourseInput } from './dto/update-interactive-course.input';

@Resolver(() => InteractiveCourse)
export class InteractiveCourseResolver {
  constructor(private readonly interactiveCourseService: InteractiveCourseService) {}

  @Mutation(() => InteractiveCourse)
  createInteractiveCourse(@Args('createInteractiveCourseInput') createInteractiveCourseInput: CreateInteractiveCourseInput) {
    return this.interactiveCourseService.create(createInteractiveCourseInput);
  }

  @Query(() => [InteractiveCourse], { name: 'interactiveCourse' })
  findAll() {
    return this.interactiveCourseService.findAll();
  }

  @Query(() => InteractiveCourse, { name: 'interactiveCourse' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.interactiveCourseService.findOne(id);
  }

  @Mutation(() => InteractiveCourse)
  updateInteractiveCourse(@Args('updateInteractiveCourseInput') updateInteractiveCourseInput: UpdateInteractiveCourseInput) {
    return this.interactiveCourseService.update(updateInteractiveCourseInput.id, updateInteractiveCourseInput);
  }

  @Mutation(() => InteractiveCourse)
  removeInteractiveCourse(@Args('id', { type: () => Int }) id: number) {
    return this.interactiveCourseService.remove(id);
  }
}
