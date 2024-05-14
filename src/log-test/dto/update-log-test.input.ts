import { CreateLogTestInput } from './create-log-test.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLogTestInput extends PartialType(CreateLogTestInput) {
  @Field(() => Int)
  id: number;
}
