import mongoose from "mongoose";

/**
 * Message schema to mongoose
 *
 * @interface
 */
const MessageSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

/**
 * Message model create using schema
 * 
 * @public
 */
const MessageModel = mongoose.model("MessageModel", MessageSchema);

export default MessageModel;
