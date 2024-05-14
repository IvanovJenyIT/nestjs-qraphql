import { Injectable } from '@nestjs/common';
import { CreateLogAchivmentInput } from './dto/create-log-achivment.input';
import { UpdateLogAchivmentInput } from './dto/update-log-achivment.input';

@Injectable()
export class LogAchivmentService {
  create(createLogAchivmentInput: CreateLogAchivmentInput) {
    return 'This action adds a new logAchivment';
  }

  findAll() {
    return `This action returns all logAchivment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} logAchivment`;
  }

  update(id: number, updateLogAchivmentInput: UpdateLogAchivmentInput) {
    return `This action updates a #${id} logAchivment`;
  }

  remove(id: number) {
    return `This action removes a #${id} logAchivment`;
  }
}
