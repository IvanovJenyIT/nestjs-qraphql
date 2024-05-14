import { Module } from '@nestjs/common';
import { LogIntensiveService } from './log-intensive.service';
import { LogIntensiveResolver } from './log-intensive.resolver';

@Module({
  providers: [LogIntensiveResolver, LogIntensiveService],
})
export class LogIntensiveModule {}
