import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLogAchivmentInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
