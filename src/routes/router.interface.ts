import express = require("express");

/**
 * Interface that all routers must implement
 */

export interface Route  {

    applyRoutes(app: express.Application) : void;
}