import { DATABAS_CONNECTION, USER_REPOSITORY } from 'src/constants'
import { DataSource } from 'typeorm'
import { UserEntity } from './user.entity'

export const userProviders = [
	{
		provide: USER_REPOSITORY,
		useFactory: (dataSource: DataSource) =>
			dataSource.getRepository(UserEntity),
		inject: [DATABAS_CONNECTION],
	},
]
