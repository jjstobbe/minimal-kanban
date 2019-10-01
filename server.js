import Koa from 'koa';
import BodyParser from 'koa-bodyparser';
import Router from 'koa-router';
import Logger from 'koa-logger';
import serve from 'koa-static';
import mount from 'koa-mount';
import cors from 'koa-cors';
import HttpStatus from 'http-status';

import graphqlHTTP from 'koa-graphql';

import schema from './middleware/graphql/schema';
import initDB from './middleware/database/connect';

initDB();

const app = new Koa();
const PORT = process.env.PORT || 3000;

const static_pages = new Koa();
static_pages.use(serve(__dirname + "/client/build"));

// TODO Code-Split front-end bundle

app
  .use(mount("/", static_pages))
  .use(mount("/login", static_pages))
  .use(mount("/register", static_pages))
  .use(mount("/board", static_pages))
  .use(BodyParser())
  .use(Logger())
  .use(cors());

const router = new Router();

router.get("/api/board",async (ctx,next)=>{
  const books = ["Speaking javascript", "Fluent Python", "Pro Python", "The Go programming language"];
  ctx.status = HttpStatus.OK;
  ctx.body = books;
  await next();
});

router.all("/graphql", graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app
  .use(router.routes())
  .use(router.allowedMethods());


app.listen(PORT, function () {
    console.log(" ==> Listening on port %s. Visit http://localhost:%s/", PORT, PORT);
});
