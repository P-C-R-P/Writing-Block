const prompt = require('../models/prompt.js');

async function getPrompts(ctx) {
  try {
    ctx.body = await prompt.find({});
    ctx.status = 200;
  } catch (error) {
    ctx.body = error;
  }
}

async function postPrompt(ctx) {
  try {
    const promptData = ctx.request.body;
    const newPrompt = await prompt.create({
      title: promptData.title,
      text: promptData.text,
      author: promptData.author,
      savedDate: Date.now()
    });
    ctx.body = newPrompt;
    ctx.status = 201;
  } catch (error) {
    ctx.status = 500;
  }
}

async function deletePrompt(ctx) {
  try {
    const id = ctx.params.id;
    ctx.body = await prompt.findByIdAndDelete(id);
  } catch (error) {
    ctx.body = error;
  }
}

module.exports = { getPrompts, postPrompt, deletePrompt }