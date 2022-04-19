import { STATUS_CODE } from "../../constant/common";
import { MESSAGE } from "../../constant/message";
import { IMessageResponse } from "../../type";
import { IUserResponse } from "./user.type";

const users = [
  { id: 1, name: "User1", email: "user1@gmail.com", age: 31 },
  { id: 2, name: "User2", email: "user2@gmail.com", age: 20 },
  { id: 3, name: "User1", email: "user1.2@gmail.com", age: 25 },
];

export default class UserService {
  constructor() {}
  public get = (id: string): Promise<IUserResponse | IMessageResponse> => {
    return new Promise(async (resolve) => {
      const result = users.find((item) => item.id.toString() === id);
      if (!result) {
        return resolve({
          statusCode: 404,
          message: MESSAGE.NOT_FOUND_USER,
        });
      }
      return resolve({
        statusCode: STATUS_CODE.SUCCESS,
        data: { ...result, id: result.id.toString() },
      });
    });
  };
}
