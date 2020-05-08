import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { UserModule } from './users/user.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    UserModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'users*', method: RequestMethod.GET });
  }
}
