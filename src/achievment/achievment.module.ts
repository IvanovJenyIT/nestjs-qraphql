import { Module } from '@nestjs/common';
import { AchievmentService } from './achievment.service';
import { AchievmentResolver } from './achievment.resolver';

@Module({
  providers: [AchievmentResolver, AchievmentService],
})
export class AchievmentModule {}
