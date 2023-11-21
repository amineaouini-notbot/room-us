const mongoose = require('mongoose');
const {Schema} = mongoose;

const messagesSchema = new Schema({
  username: String,
  message: String,
  date: Date
});

module.exports = mongoose.model('Messages', messagesSchema);