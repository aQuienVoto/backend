import { User } from "../models/user.model";
import { Request, Response } from 'express';

export class UserController {
  public async addUser(req: Request, res: Response) {
    let user = new User(req.body);

    try {
      const response = await user.save();
      res.json(response);
    } catch (error) {
      res.send(error);
    }
  }
}
