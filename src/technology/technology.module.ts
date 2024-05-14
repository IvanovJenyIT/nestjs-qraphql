import { Module } from '@nestjs/common'
import { TechnologyService } from './technology.service'
import { TechnologyResolver } from './technology.resolver'

@Module({
	providers: [TechnologyResolver, TechnologyService],
})
export class TechnologyModule {}
