import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AchievmentService } from './achievment.service';
import { Achievment } from './entities/achievment.entity';
import { CreateAchievmentInput } from './dto/create-achievment.input';
import { UpdateAchievmentInput } from './dto/update-achievment.input';

@Resolver(() => Achievment)
export class AchievmentResolver {
  constructor(private readonly achievmentService: AchievmentService) {}

  @Mutation(() => Achievment)
  createAchievment(@Args('createAchievmentInput') createAchievmentInput: CreateAchievmentInput) {
    return this.achievmentService.create(createAchievmentInput);
  }

  @Query(() => [Achievment], { name: 'achievment' })
  findAll() {
    return this.achievmentService.findAll();
  }

  @Query(() => Achievment, { name: 'achievment' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.achievmentService.findOne(id);
  }

  @Mutation(() => Achievment)
  updateAchievment(@Args('updateAchievmentInput') updateAchievmentInput: UpdateAchievmentInput) {
    return this.achievmentService.update(updateAchievmentInput.id, updateAchievmentInput);
  }

  @Mutation(() => Achievment)
  removeAchievment(@Args('id', { type: () => Int }) id: number) {
    return this.achievmentService.remove(id);
  }
}
