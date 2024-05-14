import {
	CanActivate,
	ExecutionContext,
	ForbiddenException,
	Injectable,
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { GqlExecutionContext } from '@nestjs/graphql'
import { UserEntity, UserRole } from 'src/user/user.entity'

@Injectable()
export class OnlyEditorGuard implements CanActivate {
	constructor(private reflector: Reflector) {}

	canActivate(context: ExecutionContext): boolean {
		const ctx = GqlExecutionContext.create(context)
		const user = ctx.getContext().req.user as UserEntity

		if (user.role !== UserRole.ADMIN && user.role !== UserRole.EDITOR)
			throw new ForbiddenException('You dont have access')

		return true
	}
}
