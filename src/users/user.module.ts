import { Module } from '@nestjs/common';
import { UsersController } from './user.rest.controller';
import { UsersRepository } from './user.repository';

@Module({
  controllers: [UsersController],
  providers: [UsersRepository],
  exports: [UsersRepository], // allows other modules to share the same repo instance
})
export class UserModule {}
