/*
 * @Author: your name
 * @Date: 2020-03-13 23:05:43
 * @LastEditTime: 2020-03-13 23:10:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \koa-demo\ejs.js
 */


 const Koa=require("koa")
 const views=require("koa-views")
 const path=require("path")
 
 const app=new Koa()

  app.use(views(path.join(__dirname,'./view'),{
      extension:'ejs'
  }))

 app.use(async(ctx)=>{
     let title="hello world"
     await ctx.render('index',{title})
 })

 app.listen(3000,()=>{
     console.log("server is listenig at port 3000")
 })