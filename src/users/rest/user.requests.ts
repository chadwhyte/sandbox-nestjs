import { IsString } from 'class-validator';

export class CreateUserRequest {
  @IsString()
  id?: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  email: string;
}

export class UpdateUserRequest {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  email: string;
}
