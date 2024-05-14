import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class InteractiveCourse {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
