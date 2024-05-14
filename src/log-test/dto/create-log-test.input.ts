import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLogTestInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
