/*
 * @Author: your name
 * @Date: 2020-03-13 22:41:59
 * @LastEditTime: 2020-03-13 22:54:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \koa-demo\cookies.js
 */

const Koa = require("koa");
const app = new Koa(); 

app.use(async(ctx)=>{
    if(ctx.url=== '/index'){
        ctx.cookies.set(
            'userName','dongci777',{
                domain:'127.0.0.1', // 写cookie所在的域名
                path:'/index',       // 写cookie所在的路径
                maxAge:1000*60*60*24,   // cookie有效时长
                expires:new Date('2018-12-31'), // cookie失效时间
                httpOnly:false,  // 是否只用于http请求中获取
                overwrite:false  // 是否允许重写
            }
        );
        ctx.body = 'cookie is ok';
    }else{
        if( ctx.cookies.get('MyName')){
            ctx.body = ctx.cookies.get('MyName');
        }else{
            ctx.body = 'Cookie is none';
        }

    }
});

app.listen(3000, () => {
  console.log("server is listening at port 3000");
});
