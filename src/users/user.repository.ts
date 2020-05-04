import { IUserResource } from './user.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersRepository {
  private readonly users: IUserResource[] = [
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

  create(user: IUserResource) {
    this.users.push(user);
  }

  update(updatedUser: IUserResource) {
    const user = this.users.find(u => u.id === updatedUser.id);
    user.firstName = updatedUser.firstName;
    user.lastName = updatedUser.lastName;
    user.email = updatedUser.email;
  }

  delete(id: string) {
    const userIndex = this.users.findIndex(u => u.id === id);
    if (userIndex >= 0) {
      this.users.splice(userIndex, 1);
    }
  }

  getAll(): IUserResource[] {
    return this.users;
  }

  getSingle(id: string): IUserResource {
    return this.users.find(u => u.id === id);
  }
}
