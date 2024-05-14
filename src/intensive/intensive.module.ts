import { Module } from '@nestjs/common';
import { IntensiveService } from './intensive.service';
import { IntensiveResolver } from './intensive.resolver';

@Module({
  providers: [IntensiveResolver, IntensiveService],
})
export class IntensiveModule {}
