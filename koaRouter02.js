/*
 * @Author: your name
 * @Date: 2020-03-13 17:51:14
 * @LastEditTime: 2020-03-13 17:57:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \koa-demo\koaRouter02.js
 */

 const Koa=require("koa")
 const Router=require("koa-router") 

 const app=new Koa();
 const router=new Router({
     prefix:"/dongci777"
 })

 router
    .get("/",async(ctx)=>{
        ctx.body="/"
    })
    .get("/todo",async(ctx)=>{
        ctx.body="todo"
    })
app
 .use(router.routes())
 .use(router.allowedMethods())
 app.listen("3000",()=>{
     console.log("server is running at port 3000")
 })



 