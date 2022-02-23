import mongoose from "mongoose";

import { DatabaseError } from "../error/index.js";

/**
 * Database connection class
 *
 * @class
 */
class Database {
  /**
   * Mongo DB connection method
   *
   * @public
   * @static
   * @memberof Database
   * @method connect
   * @returns {void}
   */
  static connect() {
    mongoose.connect(
      `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`,
      {
        user: process.env.MONGO_USER,
        pass: process.env.MONGO_PASSWORD,
        dbName: process.env.MONGO_COLLECTION,
      },
      (err) => {
        if (err) {
          throw new DatabaseError(err);
        } else {
          console.info("Database is connected");
        }
      }
    );
  }
}

export default Database;
