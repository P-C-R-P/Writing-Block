const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

const cors = require('@koa/cors');

// json/parsing?
// cors?

// const static = require('koa-static');

const application = new Koa();

const router = require('./router.js');

const PORT = 3000;

application.use(cors());

application.use(bodyParser());

application.use(router.routes());

// application.use(static());

application.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${3000}.`);
});