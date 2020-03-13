/*
 * @Author: your name
 * @Date: 2020-03-13 13:06:01
 * @LastEditTime: 2020-03-13 14:02:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \koa-demo\get.js
 */

const Koa= require("koa")
const app=new Koa();
app.use(async(ctx)=>{
    //使用request获取
    let url=ctx.url
    let req_query=ctx.request.query;
    let req_querystring=ctx.request.querystring;

    //使用ctx直接获取
    let ctx_query=ctx.query;
    let ctx_querystring=ctx.querystring;

    ctx.body={
        url,
        req_query,
        req_querystring,
        ctx_query,
        ctx_querystring
    }
})

app.listen(3000,()=>{
    console.log("server is listening at 3000 port")
})