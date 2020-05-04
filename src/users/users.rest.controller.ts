import {
  Controller,
  Get,
  Req,
  Param,
  Post,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import {
  IUserResource,
  ICreateUserRequest,
  IUpdateUserRequest,
} from './user.interface';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(): IUserResource[] {
    // TODO - should use @Query to support pagination
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

  @Put(':id')
  updateUser(
    @Param('id') id: string,
    @Body() updateUserRequest: IUpdateUserRequest,
  ): IUserResource {
    const user = this.users.find(u => u.id === id);
    user.firstName = updateUserRequest.firstName;
    user.lastName = updateUserRequest.lastName;
    user.email = updateUserRequest.email;

    return this.getUser(id);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    const userIndex = this.users.findIndex(u => u.id === id);
    if (userIndex >= 0) {
      this.users.splice(userIndex, 1);
    }
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
