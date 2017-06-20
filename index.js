const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa2-cors');

const app = new Koa();
const router = new Router();

router
  .get('/', async function (ctx, next) {
    ctx.body = 'Hello World!';
  })
  .get('/armor', async function (ctx, next) {
    ctx.body = { thing: 'Armor Request Successful' };
  });

app.use(cors());
app.use(router.routes());
app.use(router.allowedMethods());

let port = '4000';

app.listen(port);

console.log(`Server started on port: ${port}`);
