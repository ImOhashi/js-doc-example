import express from "express";

import httpStatusCode from "../enum/http-status-code.js";

/**
 * A main class to ser router configuration and service paths
 *
 * @class
 */
class Routes {
  /**
   * @constructor
   */
  constructor() {
    this.router = express.Router();
  }

  /**
   * Config server routes and details path
   *
   * @private
   * @memberof Routes
   * @method configRoutes
   * @returns {void}
   */
  configRoutes() {
    this.router.use("/details", (req, res) => {
      return res.status(httpStatusCode.OK).json({
        version: process.env.npm_package_version,
        author: process.env.npm_package_author_name,
        email: process.env.npm_package_author_email,
        repository_url: process.env.npm_package_repository_url,
      });
    });
  }
}
