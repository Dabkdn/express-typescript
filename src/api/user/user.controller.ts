import { Request, Response } from "express";
import UserService from "./user.service";

export default class UserController {
  private service;
  constructor() {
    this.service = new UserService();
  }
  public get = async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await this.service.get(id);
    res.send(result);
  };
}
