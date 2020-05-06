import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
  HttpException,
  HttpStatus,
  UsePipes,
} from '@nestjs/common';
import { IUserResource } from './user.interface';
import { UsersRepository } from './user.repository';
import { ForbiddenException } from 'src/exceptions/forbidden.exception';
import { CreateUserRequest, UpdateUserRequest } from './user.requests';

@Controller('users')
export class UsersController {
  constructor(private usersRepository: UsersRepository) {}

  @Get()
  async getUsers(): Promise<IUserResource[]> {
    // TODO - should use @Query to support pagination
    return this.usersRepository.getAll();
  }

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<IUserResource> {
    return this.usersRepository.getSingle(id);
  }

  @Get('exception-test')
  async exceptionTest(): Promise<IUserResource> {
    throw new ForbiddenException();
  }

  @Post()
  async createUser(
    @Body() createUserRequest: CreateUserRequest,
  ): Promise<IUserResource> {
    this.usersRepository.create({
      id: createUserRequest.id,
      firstName: createUserRequest.firstName,
      lastName: createUserRequest.lastName,
      email: createUserRequest.email,
    });

    return this.getUser(createUserRequest.id);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserRequest: UpdateUserRequest,
  ): Promise<IUserResource> {
    this.usersRepository.update({
      id,
      firstName: updateUserRequest.firstName,
      lastName: updateUserRequest.lastName,
      email: updateUserRequest.email,
    });

    return this.getUser(id);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    this.usersRepository.delete(id);
  }
}
