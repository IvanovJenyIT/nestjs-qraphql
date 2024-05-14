import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LogAchivmentService } from './log-achivment.service';
import { LogAchivment } from './entities/log-achivment.entity';
import { CreateLogAchivmentInput } from './dto/create-log-achivment.input';
import { UpdateLogAchivmentInput } from './dto/update-log-achivment.input';

@Resolver(() => LogAchivment)
export class LogAchivmentResolver {
  constructor(private readonly logAchivmentService: LogAchivmentService) {}

  @Mutation(() => LogAchivment)
  createLogAchivment(@Args('createLogAchivmentInput') createLogAchivmentInput: CreateLogAchivmentInput) {
    return this.logAchivmentService.create(createLogAchivmentInput);
  }

  @Query(() => [LogAchivment], { name: 'logAchivment' })
  findAll() {
    return this.logAchivmentService.findAll();
  }

  @Query(() => LogAchivment, { name: 'logAchivment' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.logAchivmentService.findOne(id);
  }

  @Mutation(() => LogAchivment)
  updateLogAchivment(@Args('updateLogAchivmentInput') updateLogAchivmentInput: UpdateLogAchivmentInput) {
    return this.logAchivmentService.update(updateLogAchivmentInput.id, updateLogAchivmentInput);
  }

  @Mutation(() => LogAchivment)
  removeLogAchivment(@Args('id', { type: () => Int }) id: number) {
    return this.logAchivmentService.remove(id);
  }
}
