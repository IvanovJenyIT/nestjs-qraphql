import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class LogTest {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
