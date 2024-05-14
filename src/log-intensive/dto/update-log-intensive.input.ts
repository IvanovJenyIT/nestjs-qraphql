import { CreateLogIntensiveInput } from './create-log-intensive.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLogIntensiveInput extends PartialType(CreateLogIntensiveInput) {
  @Field(() => Int)
  id: number;
}
