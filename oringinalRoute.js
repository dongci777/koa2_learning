/*
 * @Author: your name
 * @Date: 2020-03-13 17:07:27
 * @LastEditTime: 2020-03-13 17:24:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \koa-demo\oringinalRoute.js
 */

const Koa = require("koa");
const app = new Koa();
const fs = require("fs");

function render(html) {
  return new Promise((resolve, reject) => {
    let pageUrl = `./page/${html}`;
    console.log("page",pageUrl)
    fs.readFile(pageUrl, "utf-8", (err, data) => {
      console.log("666")
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

async function route(url) {
  let pageUrl = "404.html";
  switch (url) {
    case "/":
      pageUrl = "index.html";
      break;
    case "/index":
      pageUrl = "index.html";
      break;
    case "/todo":
      pageUrl = "todo.html";
      break;
    case "/404":
      pageUrl = "404.html";
      break;
    default:
      break;
  }

  let html = await render(pageUrl);
  return html;
}

app.use(async ctx => {
  let url = ctx.request.url;
  let html = await route(url);
  ctx.body = html;
});

app.listen(3000, () => {
  console.log("server is listening at port 3000");
});
