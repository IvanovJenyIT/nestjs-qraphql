import { UseGuards, applyDecorators } from '@nestjs/common'
import { OnlyAdminGuard } from 'src/guards/admin.guard'
import { OnlyEditorGuard } from 'src/guards/editor.guard'
import { GqlAuthGuard } from 'src/guards/gql-auth.guard'
import { UserRole } from 'src/user/user.entity'

export const Auth = (role: UserRole = UserRole.STUDENT) =>
	applyDecorators(
		role === UserRole.ADMIN
			? UseGuards(GqlAuthGuard, OnlyAdminGuard)
			: role === UserRole.EDITOR
				? UseGuards(GqlAuthGuard, OnlyEditorGuard)
				: UseGuards(GqlAuthGuard)
	)
