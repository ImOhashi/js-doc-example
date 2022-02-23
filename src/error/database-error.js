/**
 * Database error class
 *
 * @class
 * @extends Error
 */
export class DatabaseError extends Error {
  /**
   *
   * @constructor
   * @param {string} paramName
   */
  constructor(paramName) {
    super(`Database not is connected\n${paramName}`);
    this.name = "DatabaseError";
  }
}
