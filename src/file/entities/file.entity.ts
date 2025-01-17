import { ObjectType, Field } from '@nestjs/graphql'
import { Base } from 'src/db/Base'
import { Column, Entity } from 'typeorm'

@ObjectType()
@Entity({ name: 'File' })
export class FileEntity extends Base {
	@Field()
	@Column({ unique: true })
	name: string

	@Field()
	@Column()
	url: string

	@Field()
	@Column({ default: 0 })
	count: number

	@Field()
	@Column({ default: false, name: 'is_premium' })
	isPremium: boolean
}
