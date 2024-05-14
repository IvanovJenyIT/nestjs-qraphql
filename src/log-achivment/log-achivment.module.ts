import { Module } from '@nestjs/common';
import { LogAchivmentService } from './log-achivment.service';
import { LogAchivmentResolver } from './log-achivment.resolver';

@Module({
  providers: [LogAchivmentResolver, LogAchivmentService],
})
export class LogAchivmentModule {}
