import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { UserEntity } from '../user.entity'
import { GqlExecutionContext } from '@nestjs/graphql'

type TypeData = keyof UserEntity

export const User = createParamDecorator(
	(data: TypeData, ctx: ExecutionContext) => {
		let user: UserEntity

		if (ctx.getType() === 'http') {
			user = ctx.switchToHttp().getRequest().user
		} else {
			const context = GqlExecutionContext.create(ctx)
			user = context.getContext().req.user
		}

		return data ? user[data] : user
	}
)
