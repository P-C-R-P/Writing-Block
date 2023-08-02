const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

const cors = require('@koa/cors');

const router = require('./router.js');

const PORT = 3001;

const application = new Koa();

application.use(cors());

application.use(bodyParser());

application.use(router.routes());

application.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}.`);
});
