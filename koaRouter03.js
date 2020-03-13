/*
 * @Author: your name
 * @Date: 2020-03-13 18:00:22
 * @LastEditTime: 2020-03-13 18:08:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \koa-demo\koaRouter03.js
 */

const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();

let page = new Router();
page
  .get("/", async(ctx) => {
    ctx.body = "page router";
  })
  .get("/todo", async(ctx) => {
    ctx.body = "page rodo router";
  });

let home = new Router();
home
  .get("/", async(ctx) => {
    ctx.body = "home page router";
  })
  .get("/todo", async(ctx) => {
    ctx.body = "home todo router";
  });

let router = new Router();
router.use("/page", page.routes(), page.allowedMethods());
router.use("/home", home.routes(), home.allowedMethods());

app.use(router.routes()).use(router.allowedMethods());

app.listen("3000", () => {
  console.log("server is listening at 3000 port");
});
