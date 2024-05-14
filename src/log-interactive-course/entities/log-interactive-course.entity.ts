import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class LogInteractiveCourse {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
