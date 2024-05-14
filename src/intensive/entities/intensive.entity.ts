import { ObjectType, Field } from '@nestjs/graphql'
import { Base } from 'src/db/Base'
import { TechnologyEntity } from 'src/technology/entities/technology.entity'
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm'

@ObjectType()
@Entity({ name: 'Intensive' })
export class IntensiveEntity extends Base {
	@Field()
	@Column({ unique: true })
	name: string

	@Field()
	@Column({ name: 'sub_title' })
	subTitle: string

	@Field()
	@Column({ name: 'photo_url', nullable: true })
	photoUrl: string

	@Field()
	@Column({ name: 'image_url', nullable: true })
	imageUrl: string

	@Field()
	@Column({ default: 0, name: 'count_hours' })
	countHours: number

	@Field()
	@Column({ name: 'video_id', nullable: true })
	videoId: number

	@Field()
	@Column({ default: false, name: 'is_moderated' })
	isModerated: boolean

	@Field(() => [TechnologyEntity])
	@ManyToMany(() => TechnologyEntity)
	@JoinTable()
	tecnologies: TechnologyEntity[]
}
