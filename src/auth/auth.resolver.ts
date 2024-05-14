import { Args, Context, Mutation, Resolver } from '@nestjs/graphql'
import { AuthService } from './auth.service'
import { AuthReturn } from './auth.interface'
import AuthInput from './inputs/create-user.inputs'
import { IGqlContext } from 'src/app.interface'

@Resolver()
export class AuthResolver {
	constructor(private readonly authService: AuthService) {}

	@Mutation(() => AuthReturn)
	async login(@Args('data') input: AuthInput) {
		return this.authService.login(input)
	}

	@Mutation(() => AuthReturn)
	async getNewTokens(@Context() { req }: IGqlContext) {
		const refreshToken = req.cookies.refreshToken
		return this.authService.getNewTokens(refreshToken)
	}

	@Mutation(() => AuthReturn)
	async register(@Args('data') input: AuthInput) {
		return this.authService.register(input)
	}
}
