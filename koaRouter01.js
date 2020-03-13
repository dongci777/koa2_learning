/*
 * @Author: your name
 * @Date: 2020-03-13 17:30:43
 * @LastEditTime: 2020-03-13 17:42:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \koa-demo\koaRouter01.js
 */

 const Koa=require("koa")
 const Router=require("koa-router")
 const app=new Koa()
 const router =new Router();

router.get("/",(ctx,next)=>{
   ctx.body="hello world"
})
.get("/todo",(ctx,next)=>{
    ctx.body="todo"
})

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000,()=>{
    console.log("server is listening at port 3000");
})