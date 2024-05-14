import { Field, ObjectType } from '@nestjs/graphql'
import {
	CreateDateColumn,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm'

@ObjectType()
export abstract class Base {
	@Field()
	@PrimaryGeneratedColumn()
	id: number

	@Field()
	@CreateDateColumn({
		name: 'created_at',
	})
	createdAt: Date

	@Field()
	@UpdateDateColumn({
		name: 'updated_at',
	})
	updatedAt: Date
}
