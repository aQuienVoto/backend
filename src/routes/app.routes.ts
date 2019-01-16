import { Request, Response } from "express";
import { Route } from "./router.interface";
import { UserRoutes } from "./user.routes";
import express = require("express");
import { NextFunction } from "express";
import { Config } from "../config/config";
import { ApiKey } from "../config/apikey";

/**
 * This class handle all the application routers
 * It has a method to create the default route, and in order to implement more routers
 * must crete Route implementations and push it to the array
 */
export class Routes {
  controllersRoutes: Route[];
  appConfig: Config;

  constructor() {
    this.appConfig = new Config();
  }

  public routes(app: express.Application): void {
    // Base Route - For redirections and gloval validations
    app.route("/").get((req: Request, res: Response) => {
      res.status(200).send({
        message: "GET request successfulll!!!!"
      });
    });

    //Implement an API Key mechanism
    this.secureRoutes(app);

    this.controllersRoutes = [];

    // Add another endpoint routes
    this.controllersRoutes.push(new UserRoutes());
  }

  // Execute all routers
  public initRoutes(app: express.Application): void {
    this.controllersRoutes.forEach(route => route.applyRoutes(app));
  }

  /**
   * This method secures all calls to the application using an API Key
   * //TODO:: Implement JWT
   * @param app express app to secure
   */
  private secureRoutes(app: express.Application): void {
    app
      .route("/api/*")
      .all((req: Request, res: Response, next: NextFunction) => {
        if (req.header('apiKey')) {
          // See if key mathches the app who is calling
          let apiKey: ApiKey = this.appConfig.validateKey(req.header('apiKey'));
          if (apiKey) {
            console.log("interceptor");
            next();
          } else {
            res.status(401).send("Access forbidden");
          }
        } else {
          res.status(401).send("Access forbidden");
        }
      });
  }
}
