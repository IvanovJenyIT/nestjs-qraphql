import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { IntensiveService } from './intensive.service'
import { IntensiveEntity } from './entities/intensive.entity'
import { CreateIntensiveInput } from './dto/create-intensive.input'
import { UpdateIntensiveInput } from './dto/update-intensive.input'

@Resolver()
export class IntensiveResolver {
	constructor(private readonly intensiveService: IntensiveService) {}

	@Mutation(() => IntensiveEntity)
	createIntensive(
		@Args('createIntensiveInput') createIntensiveInput: CreateIntensiveInput
	) {
		return this.intensiveService.create(createIntensiveInput)
	}

	@Query(() => [IntensiveEntity], { name: 'intensive' })
	findAll() {
		return this.intensiveService.findAll()
	}

	@Query(() => IntensiveEntity, { name: 'intensive' })
	findOne(@Args('id', { type: () => Int }) id: number) {
		return this.intensiveService.findOne(id)
	}

	@Mutation(() => IntensiveEntity)
	updateIntensive(
		@Args('updateIntensiveInput') updateIntensiveInput: UpdateIntensiveInput
	) {
		return this.intensiveService.update(
			updateIntensiveInput.id,
			updateIntensiveInput
		)
	}

	@Mutation(() => IntensiveEntity)
	removeIntensive(@Args('id', { type: () => Int }) id: number) {
		return this.intensiveService.remove(id)
	}
}
