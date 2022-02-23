import express from "express";
import morgan from "morgan";

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
    this.app.use(morgan(":method :url :response-time"));
  }
}

export default new App().app;