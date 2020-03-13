/*
 * @Author: your name
 * @Date: 2020-03-13 12:46:38
 * @LastEditTime: 2020-03-13 12:55:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \koa-demo\AsyncAndAwait.js
 */

//  function testSomthig(){
//      return "somthing"
//  }

//   async function testAsync(){
//       return "hello world"
//   }

//   async function test(){
//       const v1=await testAsync();
//       const v2=await testSomthig();
//       console.log(v1,v2)
//   }  
 
//   test()

function takeSomtime(){
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve("long_time_value")
        }, 3000);
    })
}

async function somtime(){
    const v=await takeSomtime();
    console.log(v)
}
somtime()