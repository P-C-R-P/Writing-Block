const Koa = require('koa');

const static = require('koa-static');

// const mount = require('koa-mount');

// const path = require('path');

const bodyParser = require('koa-bodyparser');

const cors = require('@koa/cors');

// const send = require('koa-send');

const router = require('./router.js');

const PORT = 3001;

// const PUBLIC = path.join(__dirname, '..', 'client', 'public');

// const PATH = __dirname;

const application = new Koa();

// application.use(static(path.join(__dirname, '/apis')));

// application.use(static(path.join(__dirname, '/controllers')));

// application.use(static(path.join(__dirname, '/models')));

application.use(cors());

application.use(bodyParser());

application.use(router.routes());

application.use(static(__dirname));

application.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}.`);
});
