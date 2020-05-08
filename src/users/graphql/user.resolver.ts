import { User } from './user.model';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { UsersRepository } from '../user.repository';

@Resolver(of => User)
export class UserResolver {
  constructor(private userReposity: UsersRepository) {}

  @Query(returns => User, { name: 'user' })
  async getUser(@Args('id') id: string) {
    return this.userReposity.getSingle(id);
  }
}
