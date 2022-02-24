import BaseRepository from "./BaseRepository.js";
import MessageModel from "../models/Message.js";

/**
 * Class used for Message repository
 *
 * @class
 * @extends BaseRepository
 */
class MessageRepository extends BaseRepository {
  constructor() {
    super(MessageModel);
  }
}

export default new MessageRepository();
