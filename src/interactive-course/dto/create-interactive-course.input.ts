import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateInteractiveCourseInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
