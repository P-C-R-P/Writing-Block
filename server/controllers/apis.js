const randomPoem = require('../apis/poetrydb');
const openAi = require('../apis/openai');
const fetchQuote = require('../apis/quotes');

async function getPoem(ctx) {
  try {
    ctx.body = await randomPoem();
    ctx.status = 200;
  } catch (error) {
    console.log(error);
    ctx.body = error;
  }
}

async function getSentence(ctx) {
  try {
    const apiResponse = await openAi.fetchSentence();
    ctx.body = { data: apiResponse };
    ctx.status = 200;
  } catch (error) {
    console.log(error);
    ctx.body = error;
  }
}

async function getIdea(ctx) {
  try {
    const apiResponse = await openAi.fetchIdea();
    ctx.body = { data: apiResponse };
    ctx.status = 200;
  } catch (error) {
    console.log(error);
    ctx.body = error;
  }
}

async function getQuote(ctx) {
  try {
    ctx.body = await fetchQuote();
    ctx.status = 200;
  } catch (error) {
    console.log(error);
    ctx.body = error;
  }
}


module.exports = {getQuote, getPoem, getIdea, getSentence};