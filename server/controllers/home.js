async function getHome(ctx) {
  try {
    ctx.body = `<h1>Accessed home route successfully.</h1>`;
    ctx.status = 200;
  } catch (error) {
    ctx.body = error;
  }
}

module.exports = getHome;