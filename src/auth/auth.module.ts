import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { UserModule } from 'src/user/user.module'
import { AuthResolver } from './auth.resolver'
import { JwtModule } from '@nestjs/jwt'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { getJwtConfig } from 'src/config/jwt.config'
import { JwtStrategy } from './strategies/jwt.strategy'

@Module({
	imports: [
		ConfigModule,
		JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getJwtConfig,
		}),
		UserModule,
	],
	providers: [AuthResolver, AuthService, JwtStrategy],
})
export class AuthModule {}
