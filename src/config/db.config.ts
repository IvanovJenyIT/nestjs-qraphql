import { ConfigService } from '@nestjs/config'
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions'

export const getMySqlDbConfig = async (
	configService: ConfigService
): Promise<MysqlConnectionOptions> => ({
	type: configService.get('DB_CONNECTION'),
	host: configService.get('DB_HOST'),
	port: configService.get('DB_PORT'),
	username: configService.get('DB_USERNAME'),
	password: configService.get('DB_PASSWORD'),
	database: configService.get('DB_DATABASE'),
	entities: [__dirname + '/../**/*.entity{.ts,.js}'],
	migrations: [__dirname + '/../db/*.migration{.ts,.js}'],
	synchronize: true,
})
