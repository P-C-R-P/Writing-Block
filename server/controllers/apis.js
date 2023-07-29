const randomPoem = require('../apis/poetrydb');

async function getPoem(ctx) {
  try {
    ctx.body = await randomPoem();
    ctx.status = 200;
  } catch (error) {
    ctx.body = error;
  }

}

module.exports = getPoem;