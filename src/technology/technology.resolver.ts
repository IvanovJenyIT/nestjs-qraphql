import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { TechnologyService } from './technology.service'
import { TechnologyEntity } from './entities/technology.entity'
import { CreateTechnologyInput } from './dto/create-technology.input'
import { UpdateTechnologyInput } from './dto/update-technology.input'

@Resolver(() => TechnologyEntity)
export class TechnologyResolver {
	constructor(private readonly technologyService: TechnologyService) {}

	@Mutation(() => TechnologyEntity)
	createTechnology(
		@Args('createTechnologyInput') createTechnologyInput: CreateTechnologyInput
	) {
		return this.technologyService.create(createTechnologyInput)
	}

	@Query(() => [TechnologyEntity], { name: 'technology' })
	findAll() {
		return this.technologyService.findAll()
	}

	@Query(() => TechnologyEntity, { name: 'technology' })
	findOne(@Args('id', { type: () => Int }) id: number) {
		return this.technologyService.findOne(id)
	}

	@Mutation(() => TechnologyEntity)
	updateTechnology(
		@Args('updateTechnologyInput') updateTechnologyInput: UpdateTechnologyInput
	) {
		return this.technologyService.update(
			updateTechnologyInput.id,
			updateTechnologyInput
		)
	}

	@Mutation(() => TechnologyEntity)
	removeTechnology(@Args('id', { type: () => Int }) id: number) {
		return this.technologyService.remove(id)
	}
}
