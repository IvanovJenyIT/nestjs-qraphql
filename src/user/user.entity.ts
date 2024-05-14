import { Field, ObjectType } from '@nestjs/graphql'
import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
} from 'typeorm'

export enum UserRole {
	ADMIN = 'admin',
	EDITOR = 'editor',
	STUDENT = 'student',
}

@ObjectType()
@Entity({ name: 'Users' })
export class UserEntity {
	@Field()
	@PrimaryGeneratedColumn()
	id: number

	@Field()
	// unique: true
	@Column()
	email: string

	@Field()
	@Column()
	password: string

	@Field()
	@Column({ nullable: true, unique: true })
	username: string

	@Field()
	@Column({ type: 'text', nullable: true })
	description: string

	@Field()
	@Column({
		name: 'avatar_path',
		nullable: true,
	})
	avatarPath: string

	@Field()
	@Column({
		type: 'enum',
		enum: UserRole,
		default: UserRole.STUDENT,
	})
	role: UserRole

	@Field()
	@Column({ nullable: true })
	country: string

	@Field()
	@Column({
		name: 'social_link',
		nullable: true,
	})
	socialLink: string

	@Field()
	@Column({
		name: 'remember_token',
		nullable: true,
	})
	rememberToken: string

	@Field()
	@Column({
		default: false,
		name: 'is_verified',
	})
	isVerified: boolean

	@Field()
	@Column({
		default: false,
		name: 'is_real_time',
	})
	isRealTime: boolean

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
