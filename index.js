// const http=require("http");
// const fs=require("fs");
// const server=http.createServer((req,res)=>{
//     console.log(req.url)
//     if(req.url === '/'){
//         res.end("home")
//     }else if(req.url === '/about'){
//         res.end("about")
//     }else if(req.url==="/userApi"){
//         fs.readFile("demo.json","UTF-8",(err,data)=>{
//             res.writeHead(200,{"Content-type":"application/json"});
//             res.end(data)
//         })
//     }else{
//         res.writeHead(404,{"Content-type":"text/html"});
//         res.end("<h1>404,page not exist</h1>")
//     }
// })

// server.listen(5000,"127.0.0.1",()=>{
//     console.log("listening to the port of 5000");
// })

// // const bioData={
// //     name:"Rudranil",
// //     age:24,
// // }

// // const jsonData= JSON.stringify(bioData);
// // const fs=require("fs");
// // fs.writeFile("demo.json",jsonData,(err)=>{
// //     console.log("Data Added Successfully")
// // }) 

// // const data=fs.readFile("demo.json","UTF-8",(err,data)=>{
// //     console.log(data);
// //     return data;
// // })

// // console.log(data)

const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("<h1>Rudranil</h1>")
})

app.listen(5000,()=>{
    console.log("Listening the server")
})