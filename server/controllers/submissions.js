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
      savedDate: Date.now()
    });
    ctx.body = newSubmission;
    ctx.status = 201;
  } catch (error) {
    ctx.status = 500;
  }
}

module.exports = { getSubmissions, postSubmission };