import { Injectable } from '@nestjs/common';
import { CreateInteractiveCourseInput } from './dto/create-interactive-course.input';
import { UpdateInteractiveCourseInput } from './dto/update-interactive-course.input';

@Injectable()
export class InteractiveCourseService {
  create(createInteractiveCourseInput: CreateInteractiveCourseInput) {
    return 'This action adds a new interactiveCourse';
  }

  findAll() {
    return `This action returns all interactiveCourse`;
  }

  findOne(id: number) {
    return `This action returns a #${id} interactiveCourse`;
  }

  update(id: number, updateInteractiveCourseInput: UpdateInteractiveCourseInput) {
    return `This action updates a #${id} interactiveCourse`;
  }

  remove(id: number) {
    return `This action removes a #${id} interactiveCourse`;
  }
}
