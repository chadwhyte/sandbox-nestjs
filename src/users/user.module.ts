import { Module } from '@nestjs/common';
import { UsersRepository } from './user.repository';
import { UserResolver } from './graphql/user.resolver';
import { UsersController } from './rest/user.rest.controller';

@Module({
  controllers: [UsersController],
  providers: [UsersRepository, UserResolver],
  exports: [UsersRepository], // allows other modules to share the same repo instance
})
export class UserModule {}
