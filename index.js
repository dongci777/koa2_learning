/*
 * @Author: your name
 * @Date: 2020-03-13 12:17:40
 * @LastEditTime: 2020-03-13 12:20:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \koa-demo\index.js
 */
const Koa = require("koa");
const app = new Koa();

app.use(async (ctx) => {
  ctx.body = "hello world";
});

app.listen(3000);
console.log("app is running at port 3000");
