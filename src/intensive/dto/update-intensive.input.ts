import { CreateIntensiveInput } from './create-intensive.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateIntensiveInput extends PartialType(CreateIntensiveInput) {
  @Field(() => Int)
  id: number;
}
