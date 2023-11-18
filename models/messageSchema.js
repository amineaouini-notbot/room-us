const mongoose = require('mongoose');
const {Schema} = mongoose;

const messageSchema = new Schema({
  username: String,
  message: String,
  date: Date
});

module.exports = mongoose.model('Message', messageSchema);