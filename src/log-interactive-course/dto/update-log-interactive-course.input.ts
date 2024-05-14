import { CreateLogInteractiveCourseInput } from './create-log-interactive-course.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLogInteractiveCourseInput extends PartialType(CreateLogInteractiveCourseInput) {
  @Field(() => Int)
  id: number;
}
