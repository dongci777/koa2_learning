/*
 * @Author: your name
 * @Date: 2020-03-13 23:23:44
 * @LastEditTime: 2020-03-13 23:26:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \koa-demo\koaStatic.js
 */

 const Koa=require("koa")
 const path=require("path")
 const static=require("koa-static")
 
const app=new Koa()

let staticPath='./static'

app.use(static(path.join(__dirname,staticPath)))

app.listen(3000,()=>{
    console.log("server is listening at port 3000")
})