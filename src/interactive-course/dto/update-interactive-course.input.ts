import { CreateInteractiveCourseInput } from './create-interactive-course.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateInteractiveCourseInput extends PartialType(CreateInteractiveCourseInput) {
  @Field(() => Int)
  id: number;
}
