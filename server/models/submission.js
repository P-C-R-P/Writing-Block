const mongoose = require('./database.js');

const submissionSchema = new mongoose.Schema({
  title: String,
  text: String,
  savedDate: Date,
});

const Submission = mongoose.model('Submission', submissionSchema);

module.exports = Submission;
