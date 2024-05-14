import {
	BadRequestException,
	Injectable,
	UnauthorizedException,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { InjectRepository } from '@nestjs/typeorm'
import { compare, genSalt, hash } from 'bcryptjs'
import AuthInput from 'src/auth/inputs/create-user.inputs'
import { UserEntity } from 'src/user/user.entity'
import { Repository } from 'typeorm'

@Injectable()
export class AuthService {
	constructor(
		@InjectRepository(UserEntity)
		private readonly usersRepository: Repository<UserEntity>,
		private readonly jwtService: JwtService
	) {}

	async login(input: AuthInput) {
		const user = await this.validateUser(input)

		const tokens = await this.issueTokenPair(user.id)

		return {
			...user,
			...tokens,
		}
	}

	async getNewTokens(refreshToken: string) {
		if (!refreshToken) throw new UnauthorizedException('Please sign in!')

		const result = await this.jwtService.verifyAsync(refreshToken)
		if (!result) throw new UnauthorizedException('Not valid token or expired!')

		const user = await this.usersRepository.findOneBy({ id: result.id })

		const tokens = await this.issueTokenPair(user.id)

		return {
			...user,
			...tokens,
		}
	}

	async register(input: AuthInput) {
		const oldUSer = await this.usersRepository.findOneBy({
			email: input.email.toLowerCase().trim(),
		})

		if (oldUSer) {
			throw new BadRequestException('User already exists')
		}

		const salt = await genSalt(10)

		const newUser = this.usersRepository.create({
			email: input.email.toLowerCase().trim(),
			password: await hash(input.password, salt),
		})

		const user = await this.usersRepository.save(newUser)

		const tokens = await this.issueTokenPair(user.id)

		return {
			...user,
			...tokens,
		}
	}

	async validateUser(input: AuthInput): Promise<UserEntity> {
		const user = await this.usersRepository.findOneBy({
			email: input.email,
		})

		if (!user) throw new UnauthorizedException('User not found')

		const isValidPassword = await compare(input.password, user.password)

		if (!isValidPassword) throw new UnauthorizedException('Invalid password')

		return user
	}

	async issueTokenPair(userId: number) {
		const data = { id: userId }

		const refreshToken = await this.jwtService.signAsync(data, {
			expiresIn: `15d`,
		})

		const accessToken = await this.jwtService.signAsync(data, {
			expiresIn: `1h`,
		})

		return { refreshToken, accessToken }
	}
}
