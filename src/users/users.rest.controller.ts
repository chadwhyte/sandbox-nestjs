import { Controller, Get, Req, Param, Post, Body } from '@nestjs/common';
import { IUserResource, ICreateUserRequest } from './user.interface';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(): IUserResource[] {
    return this.users;
  }

  @Get(':id')
  getUser(@Param('id') id: string): IUserResource {
    return this.users.find(u => u.id === id);
  }

  @Post()
  createUser(@Body() createUserRequest: ICreateUserRequest): IUserResource {
    this.users.push({
      id: createUserRequest.id,
      firstName: createUserRequest.firstName,
      lastName: createUserRequest.lastName,
      email: createUserRequest.email,
    });

    return this.getUser(createUserRequest.id);
  }

  users: IUserResource[] = [
    {
      id: '1',
      firstName: 'Tom',
      lastName: 'Segura',
      email: 'tom@segura.com',
    },
    {
      id: '2',
      firstName: 'Bert',
      lastName: 'Kreischer',
      email: 'bert@kreischer.com',
    },
    {
      id: '3',
      firstName: 'Bryan',
      lastName: 'Callen',
      email: 'bryan@callen.com',
    },
  ];
}
