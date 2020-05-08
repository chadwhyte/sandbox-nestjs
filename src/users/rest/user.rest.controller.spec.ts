import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './user.rest.controller';
import { UsersRepository } from './user.repository';

describe('UsersController', () => {
  let userController: UsersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersRepository],
    }).compile();

    userController = app.get<UsersController>(UsersController);
  });

  describe('delete', () => {
    it('should invoke repository delete when delete user requested', () => {
      // TODO
    });
  });
});
