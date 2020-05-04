export interface IUserResource {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface ICreateUserRequest {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface IUpdateUserRequest {
  firstName: string;
  lastName: string;
  email: string;
}
