import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateIntensiveInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
