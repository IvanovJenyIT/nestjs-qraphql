import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLogInteractiveCourseInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
