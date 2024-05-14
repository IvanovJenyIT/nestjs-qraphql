import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LogIntensiveService } from './log-intensive.service';
import { LogIntensive } from './entities/log-intensive.entity';
import { CreateLogIntensiveInput } from './dto/create-log-intensive.input';
import { UpdateLogIntensiveInput } from './dto/update-log-intensive.input';

@Resolver(() => LogIntensive)
export class LogIntensiveResolver {
  constructor(private readonly logIntensiveService: LogIntensiveService) {}

  @Mutation(() => LogIntensive)
  createLogIntensive(@Args('createLogIntensiveInput') createLogIntensiveInput: CreateLogIntensiveInput) {
    return this.logIntensiveService.create(createLogIntensiveInput);
  }

  @Query(() => [LogIntensive], { name: 'logIntensive' })
  findAll() {
    return this.logIntensiveService.findAll();
  }

  @Query(() => LogIntensive, { name: 'logIntensive' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.logIntensiveService.findOne(id);
  }

  @Mutation(() => LogIntensive)
  updateLogIntensive(@Args('updateLogIntensiveInput') updateLogIntensiveInput: UpdateLogIntensiveInput) {
    return this.logIntensiveService.update(updateLogIntensiveInput.id, updateLogIntensiveInput);
  }

  @Mutation(() => LogIntensive)
  removeLogIntensive(@Args('id', { type: () => Int }) id: number) {
    return this.logIntensiveService.remove(id);
  }
}
