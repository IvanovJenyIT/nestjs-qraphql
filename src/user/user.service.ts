import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UserEntity } from './user.entity'
import { Repository } from 'typeorm'

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(UserEntity)
		private usersRepository: Repository<UserEntity>
	) {}

	async getAll() {
		return this.usersRepository.find()
	}

	async byId(id: number) {
		const user = await this.usersRepository.findOneBy({ id })
		if (!user) throw new NotFoundException('User not found')

		return user
	}

	async deleteOne(id: number) {
		const user = await this.usersRepository.findOne({ where: { id } })
		if (!user) throw new Error('User not found')
		await this.usersRepository.delete(id)
		return user
	}
}
