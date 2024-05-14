import { CreateAchievmentInput } from './create-achievment.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAchievmentInput extends PartialType(CreateAchievmentInput) {
  @Field(() => Int)
  id: number;
}
