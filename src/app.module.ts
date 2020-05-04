import { Module } from '@nestjs/common';
import { UsersController } from './users/user.rest.controller';
import { UsersRepository } from './users/user.repository';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersRepository],
})
export class AppModule {}
