import { CreateLogAchivmentInput } from './create-log-achivment.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLogAchivmentInput extends PartialType(CreateLogAchivmentInput) {
  @Field(() => Int)
  id: number;
}
