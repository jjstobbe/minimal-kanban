const Koa = require("koa");
const BodyParser = require("koa-bodyparser");
const Router = require("koa-router");
const Logger = require("koa-logger");
const serve = require("koa-static");
const mount = require("koa-mount");
const cors = require('koa-cors');
const HttpStatus = require("http-status");

import errorHandler from './middleware/error-handler';

const app = new Koa();
const PORT = process.env.PORT || 3000;

const static_pages = new Koa();
static_pages.use(serve(__dirname + "/client/build"));

app
    .use(errorHandler)
    .use(mount("/", static_pages))
    .use(BodyParser())
    .use(Logger())
    .use(cors());

const router = new Router();

router.get("/board",async (ctx,next)=>{
  const books = ["Speaking javascript", "Fluent Python", "Pro Python", "The Go programming language"];
  ctx.status = HttpStatus.OK;
  ctx.body = books;
  await next();
});

app.use(router.routes()).use(router.allowedMethods());


app.listen(PORT, function () {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/", PORT, PORT);
});
