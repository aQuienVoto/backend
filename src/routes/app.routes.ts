import {Request, Response} from "express";
import { Route } from './router.interface';
import { UserRoutes } from './user.routes';
import express = require("express");

/**
 * This class handle all the application routers
 * It has a method to create the default route, and in order to implement more routers 
 * must crete Route implementations and push it to the array
 */
export class Routes {
    
    controllersRoutes: Route[];
    
    public routes(app : express.Application): void {     
        
        // Base Route - For redirections and gloval validations
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        }); 

        this.controllersRoutes = [];
        
        // Add another endpoint routes
        this.controllersRoutes.push(new UserRoutes());
    }

    // Execute all routers
    public initRoutes(app : express.Application) : void {
        this.controllersRoutes.forEach(route => route.applyRoutes(app));
    }
}