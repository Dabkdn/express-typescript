export interface IUserResponse {
  statusCode: number;
  data: IUserAttributes;
}

export interface IUserAttributes {
  id: string;
  name: string;
  email: string;
  age: number;
}
