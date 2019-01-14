import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";

import { Routes } from "./routes/app.routes";


/**
 * This class is the backend application
 */
class App {
  public app: express.Application;
  private routePrv: Routes = new Routes();
  private mongoUrl: string = 'mongodb://localhost/aQuienVoto';  

  constructor() {
    this.app = express();
    this.config();
    this.routePrv.routes(this.app);
    this.routePrv.initRoutes(this.app);
  }

  /**
   * This method will be use to configure the application
   */

  private config(): void {
    // support application/json type post data
    this.app.use(bodyParser.json());
    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
    //connect to MongoDB
    this.mongoSetup();
  }

  private mongoSetup(): void{
    mongoose.Promise = global.Promise;
    mongoose.connect(this.mongoUrl);    
}
}

export default new App().app;
