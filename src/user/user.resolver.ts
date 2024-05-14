import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UserService } from './user.service'
import { UserEntity } from './user.entity'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { User } from './decorators/user.decorator'

@Resolver()
export class UserResolver {
	constructor(private readonly userService: UserService) {}

	@Query(() => UserEntity)
	@Auth()
	async profile(@User('id') id: number) {
		return this.userService.byId(id)
	}

	@Query(() => [UserEntity])
	async users() {
		return this.userService.getAll()
	}

	@Mutation(() => UserEntity)
	async deleteUser(@Args('id') id: number) {
		return this.userService.deleteOne(id)
	}
}
