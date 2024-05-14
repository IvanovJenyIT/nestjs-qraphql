import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './user/user.module'
import { AuthModule } from './auth/auth.module'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { getMySqlDbConfig } from './config/db.config'
import { IntensiveModule } from './intensive/intensive.module';
import { InteractiveCourseModule } from './interactive-course/interactive-course.module';
import { PostModule } from './post/post.module';
import { PlanModule } from './plan/plan.module';
import { TestModule } from './test/test.module';
import { AchievmentModule } from './achievment/achievment.module';
import { LogIntensiveModule } from './log-intensive/log-intensive.module';
import { LogInteractiveCourseModule } from './log-interactive-course/log-interactive-course.module';
import { LogAchivmentModule } from './log-achivment/log-achivment.module';
import { LogTestModule } from './log-test/log-test.module';
import { FileModule } from './file/file.module';
import { TechnologyModule } from './technology/technology.module';

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getMySqlDbConfig,
		}),
		UserModule,
		AuthModule,
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			playground: true,
			autoSchemaFile: 'schema.gql',
			context: ({ req, res }) => ({
				req,
				res,
			}),
		}),
		IntensiveModule,
		InteractiveCourseModule,
		PostModule,
		PlanModule,
		TestModule,
		AchievmentModule,
		LogIntensiveModule,
		LogInteractiveCourseModule,
		LogAchivmentModule,
		LogTestModule,
		FileModule,
		TechnologyModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
