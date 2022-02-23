import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";

import router from "./routes/index.js";
import Database from "./database/database.js";

/**
 * @author Leonardo Ohashi <leonardoohashi.mkt@gmail.com>
 *
 * A main configuration class
 *
 * @class
 */
class App {
  /**
   * @constructor
   */
  constructor() {
    this.app = express();

    dotenv.config();

    Database.connect();
    this.middlewares();
  }

  /**
   * Set all middlewares of server application
   *
   * @private
   * @memberof App
   * @method middlewares
   * @returns {void}
   */
  middlewares() {
    this.app.use(express.json({ limit: "50mb" }));
    this.app.use(
      express.urlencoded({
        parameterLimit: 100000,
        limit: "50mb",
        extended: false,
      })
    );
    this.app.use(
      morgan(":method :url :status :res[content-length] - :response-time ms")
    );
    this.app.use(router);
  }
}

export default new App().app;
