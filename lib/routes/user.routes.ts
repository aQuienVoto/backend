import { Route } from "./router.interface";
import { Request, Response } from "express";

import express = require("express");

export class UserRoutes implements Route {
  applyRoutes(app: express.Application): void {
    const USER_ROUTE: string = "/users";
    //GET
    app.route(USER_ROUTE).get((req: Request, res: Response) => {
      res.status(200).send({
        message: "GET request to the user entity successfulll!!!!"
      });
    });

    //POST
    app.route(USER_ROUTE).post((req: Request, res: Response) => {
      res.status(200).send({
        message: "POST request to the user entity successfull"
      });
    });
  }
}
