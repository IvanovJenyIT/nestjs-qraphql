import { Injectable } from '@nestjs/common';
import { CreateAchievmentInput } from './dto/create-achievment.input';
import { UpdateAchievmentInput } from './dto/update-achievment.input';

@Injectable()
export class AchievmentService {
  create(createAchievmentInput: CreateAchievmentInput) {
    return 'This action adds a new achievment';
  }

  findAll() {
    return `This action returns all achievment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} achievment`;
  }

  update(id: number, updateAchievmentInput: UpdateAchievmentInput) {
    return `This action updates a #${id} achievment`;
  }

  remove(id: number) {
    return `This action removes a #${id} achievment`;
  }
}
