import { Module } from '@nestjs/common';
import { LogTestService } from './log-test.service';
import { LogTestResolver } from './log-test.resolver';

@Module({
  providers: [LogTestResolver, LogTestService],
})
export class LogTestModule {}
