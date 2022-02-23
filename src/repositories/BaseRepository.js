/**
 * Base mongo CRUD class
 *
 * @class
 */
export default class BaseRepository {
  /**
   * Recive a model
   *
   * @constructor
   * @param {Model} model
   */
  constructor(model) {
    this.model = model;
  }

  /**
   * Get document by id
   *
   * @public
   * @async
   * @memberof BaseRepository
   * @method getById
   * @param {string} id
   * @returns {object}
   */
  async getById(id) {
    return this.model.findOne({
      _id: id,
    });
  }

  /**
   * Get all document
   *
   * @public
   * @async
   * @memberof BaseRepository
   * @method getAll
   * @returns {object[]}
   */
  async getAll() {
    return this.model.find();
  }
}
