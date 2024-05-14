import { Injectable } from '@nestjs/common';
import { CreateLogIntensiveInput } from './dto/create-log-intensive.input';
import { UpdateLogIntensiveInput } from './dto/update-log-intensive.input';

@Injectable()
export class LogIntensiveService {
  create(createLogIntensiveInput: CreateLogIntensiveInput) {
    return 'This action adds a new logIntensive';
  }

  findAll() {
    return `This action returns all logIntensive`;
  }

  findOne(id: number) {
    return `This action returns a #${id} logIntensive`;
  }

  update(id: number, updateLogIntensiveInput: UpdateLogIntensiveInput) {
    return `This action updates a #${id} logIntensive`;
  }

  remove(id: number) {
    return `This action removes a #${id} logIntensive`;
  }
}
