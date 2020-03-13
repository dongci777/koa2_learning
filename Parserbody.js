/*
 * @Author: your name
 * @Date: 2020-03-13 15:06:36
 * @LastEditTime: 2020-03-13 17:06:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit/*
 * @Author: your name
 * @Date: 2020-03-13 13:22:09
 * @LastEditTime: 2020-03-13 14:16:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \koa-demo\post.js
 */

const Koa = require("koa");
const app = new Koa();
const bodyparser=require("koa-bodyparser")

app.use(bodyparser());

app.use(async ctx => {
  if (ctx.url === "/" && ctx.method == "GET") {
    let htmlTxt = `
          <h2>POST Form</h2>
          <form action="/" method="POST">
          <label>username:</label>
          <input type="text" name="userName"/><br/>
          <label>age:</label>
          <input type="text" name="age"/><br/>
          <label>web:</label>
          <input type="text" name="web"/><br/>
          <button type="submit">submit</button>
          </form>        `;
    ctx.body = htmlTxt;
  } else if (ctx.url === "/" && ctx.method == "POST") {    
    ctx.body = ctx.request.body;
  } else {
    ctx.body = "<h2>404</h2>";
  }
}); 

app.listen(3000, () => {
  console.log("server is runing at port 3000");
}); 
