import { Injectable } from '@nestjs/common';
import { CreateIntensiveInput } from './dto/create-intensive.input';
import { UpdateIntensiveInput } from './dto/update-intensive.input';

@Injectable()
export class IntensiveService {
  create(createIntensiveInput: CreateIntensiveInput) {
    return 'This action adds a new intensive';
  }

  findAll() {
    return `This action returns all intensive`;
  }

  findOne(id: number) {
    return `This action returns a #${id} intensive`;
  }

  update(id: number, updateIntensiveInput: UpdateIntensiveInput) {
    return `This action updates a #${id} intensive`;
  }

  remove(id: number) {
    return `This action removes a #${id} intensive`;
  }
}
