import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLogIntensiveInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
