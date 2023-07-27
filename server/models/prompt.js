const mongoose = require('./database.js');

const promptSchema = new mongoose.Schema({
  title: String,
  text: String,
  author: String,
  savedDate: Date
});

const Prompt = mongoose.model('Prompt', promptSchema);

module.exports = Prompt;