/*
 * @Author: your name
 * @Date: 2020-03-13 13:22:09
 * @LastEditTime: 2020-03-13 14:16:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \koa-demo\post.js
 */

const Koa = require("koa");
const app = new Koa();

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
    let Data = await parsePostData(ctx);
    ctx.body = Data;
  } else {
    ctx.body = "<h2>404</h2>";
  }
});

function parsePostData(ctx) {
  return new Promise((resolve, reject) => {
    try {
      let postdata = "";
      ctx.req.on("data", data => {
        postdata += data;
        console.log("postdata1", postdata);
      });
      ctx.req.on("end", function() {
        console.log("postdata2", postdata);
        let parseData = parseQueryStr(postdata);
        resolve(parseData);
      });
    } catch (error) {
      reject(error);
    }
  });
}

function parseQueryStr(queryStr) {
  let queryData = {};
  let queryStrList = queryStr.split("&");
  console.log(queryStrList);
  for (let [index, queryStr] of queryStrList.entries()) {
    let itemList = queryStr.split("=");
    console.log(itemList);
    queryData[itemList[0]] = decodeURIComponent(itemList[1]);
  }
  return queryData;
}

app.listen(3000, () => {
  console.log("server is runing at port 3000");
});
