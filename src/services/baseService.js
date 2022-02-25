import mongoose from "mongoose";

/**
 * Base service class
 * 
 * @class
 */
export default class BaseService {
  /**
   * @constructor
   * @param {Repository} repository
   */
  constructor(repository) {
    this.repository = repository;
  }

  /**
   * Get document
   *
   * @public
   * @async
   * @memberof BaseService
   * @method getById
   * @param {string} id
   * @returns {object}
   */
  async getById(id) {
    return this.repository.get({ _id: mongoose.Types.ObjectId(id) });
  }

  /**
   * Get an array of documents
   *
   * @public
   * @async
   * @memberof BaseService
   * @method getAll
   * @returns {object[]}
   */
  async getAll() {
    return this.repository.getMany();
  }

  /**
   * Create document
   *
   * @public
   * @async
   * @memberof BaseService
   * @method create
   * @param {object} model
   * @returns {object}
   */
  async create(model) {
    return this.repository.create(model);
  }

  /**
   * Update document
   *
   * @public
   * @async
   * @memberof BaseService
   * @method update
   * @param {string} id
   * @param {object} model
   * @returns {object}
   */
  async update(id, model) {
    return this.repository.update(id, model);
  }

  /**
   * Delete document
   *
   * @public
   * @async
   * @memberof BaseRepository
   * @method delete
   * @param {string} id
   * @returns {object}
   */
  async delete(id) {
    return this.repository.delete(id);
  }
}
