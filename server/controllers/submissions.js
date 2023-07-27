const submission = require('../models/submission.js');

async function getSubmissions(ctx) {
  try {
    ctx.body = await submission.find({});
    ctx.status = 200;
  } catch (error) {
    ctx.body = error;
  }
}

async function postSubmission(ctx) {
  try {
    const submissionData = ctx.request.body;
    const newSubmission = await submission.create({
      title: submissionData.title,
      text: submissionData.text,
      author: submissionData.author,
      savedDate: submissionData.savedDate,
    });
    ctx.body = newSubmission;
    ctx.status = 201;
  } catch (error) {
    ctx.status = 500;
  }
}

// deleteSubmission (do I need this?)

// editSubmission (need to consider how to do this...)

module.exports = { getSubmissions, postSubmission };