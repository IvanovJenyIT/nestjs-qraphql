import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LogTestService } from './log-test.service';
import { LogTest } from './entities/log-test.entity';
import { CreateLogTestInput } from './dto/create-log-test.input';
import { UpdateLogTestInput } from './dto/update-log-test.input';

@Resolver(() => LogTest)
export class LogTestResolver {
  constructor(private readonly logTestService: LogTestService) {}

  @Mutation(() => LogTest)
  createLogTest(@Args('createLogTestInput') createLogTestInput: CreateLogTestInput) {
    return this.logTestService.create(createLogTestInput);
  }

  @Query(() => [LogTest], { name: 'logTest' })
  findAll() {
    return this.logTestService.findAll();
  }

  @Query(() => LogTest, { name: 'logTest' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.logTestService.findOne(id);
  }

  @Mutation(() => LogTest)
  updateLogTest(@Args('updateLogTestInput') updateLogTestInput: UpdateLogTestInput) {
    return this.logTestService.update(updateLogTestInput.id, updateLogTestInput);
  }

  @Mutation(() => LogTest)
  removeLogTest(@Args('id', { type: () => Int }) id: number) {
    return this.logTestService.remove(id);
  }
}
