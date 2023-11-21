const mongoose = require('mongoose');
const {Schema} = mongoose;

const messagesSchema = new Schema({ // setup messages schema
  username: String,
  message: String,
  date: Date
});

module.exports = mongoose.model('Messages', messagesSchema); // export messages model