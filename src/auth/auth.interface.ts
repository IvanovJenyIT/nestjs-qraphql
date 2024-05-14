import { UserEntity } from 'src/user/user.entity'
import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class AuthReturn extends UserEntity {
	@Field()
	refreshToken: string

	@Field()
	accessToken: string
}
