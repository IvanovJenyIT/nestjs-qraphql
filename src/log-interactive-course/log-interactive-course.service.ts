import { Injectable } from '@nestjs/common';
import { CreateLogInteractiveCourseInput } from './dto/create-log-interactive-course.input';
import { UpdateLogInteractiveCourseInput } from './dto/update-log-interactive-course.input';

@Injectable()
export class LogInteractiveCourseService {
  create(createLogInteractiveCourseInput: CreateLogInteractiveCourseInput) {
    return 'This action adds a new logInteractiveCourse';
  }

  findAll() {
    return `This action returns all logInteractiveCourse`;
  }

  findOne(id: number) {
    return `This action returns a #${id} logInteractiveCourse`;
  }

  update(id: number, updateLogInteractiveCourseInput: UpdateLogInteractiveCourseInput) {
    return `This action updates a #${id} logInteractiveCourse`;
  }

  remove(id: number) {
    return `This action removes a #${id} logInteractiveCourse`;
  }
}
