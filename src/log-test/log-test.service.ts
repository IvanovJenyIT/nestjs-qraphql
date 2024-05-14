import { Injectable } from '@nestjs/common';
import { CreateLogTestInput } from './dto/create-log-test.input';
import { UpdateLogTestInput } from './dto/update-log-test.input';

@Injectable()
export class LogTestService {
  create(createLogTestInput: CreateLogTestInput) {
    return 'This action adds a new logTest';
  }

  findAll() {
    return `This action returns all logTest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} logTest`;
  }

  update(id: number, updateLogTestInput: UpdateLogTestInput) {
    return `This action updates a #${id} logTest`;
  }

  remove(id: number) {
    return `This action removes a #${id} logTest`;
  }
}
