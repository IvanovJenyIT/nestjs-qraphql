import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { IntensiveService } from './intensive.service';
import { Intensive } from './entities/intensive.entity';
import { CreateIntensiveInput } from './dto/create-intensive.input';
import { UpdateIntensiveInput } from './dto/update-intensive.input';

@Resolver(() => Intensive)
export class IntensiveResolver {
  constructor(private readonly intensiveService: IntensiveService) {}

  @Mutation(() => Intensive)
  createIntensive(@Args('createIntensiveInput') createIntensiveInput: CreateIntensiveInput) {
    return this.intensiveService.create(createIntensiveInput);
  }

  @Query(() => [Intensive], { name: 'intensive' })
  findAll() {
    return this.intensiveService.findAll();
  }

  @Query(() => Intensive, { name: 'intensive' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.intensiveService.findOne(id);
  }

  @Mutation(() => Intensive)
  updateIntensive(@Args('updateIntensiveInput') updateIntensiveInput: UpdateIntensiveInput) {
    return this.intensiveService.update(updateIntensiveInput.id, updateIntensiveInput);
  }

  @Mutation(() => Intensive)
  removeIntensive(@Args('id', { type: () => Int }) id: number) {
    return this.intensiveService.remove(id);
  }
}
