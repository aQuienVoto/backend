import { Route } from "./router.interface";
import { Request, Response } from "express";
import { UserController } from "../controllers/user.controller";
import express = require("express");

export class UserRoutes implements Route {
  ctrl: UserController;

  constructor() {
    this.ctrl = new UserController();
  }

  applyRoutes(app: express.Application): void {
    const USER_ROUTE: string = "/api/users";
    //GET
    app.route(USER_ROUTE).get((req: Request, res: Response) => {
      res.status(200).send({
        message: "GET request to the user entity successfulll!!!!"
      });
    });

    //POST
    app.route(USER_ROUTE).put((req: Request, res: Response) => {
      this.ctrl.addUser(req, res);
    });
  }
}
