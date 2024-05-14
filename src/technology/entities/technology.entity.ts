import { ObjectType, Field } from '@nestjs/graphql'
import { Base } from 'src/db/Base'
import { Column, Entity } from 'typeorm'

@ObjectType()
@Entity({ name: 'Technology' })
export class TechnologyEntity extends Base {
	@Field()
	@Column({ unique: true })
	name: string

	@Field()
	@Column()
	description: string

	@Field()
	@Column({ name: 'image_url', nullable: true })
	imageUrl: string
}
