const fs=require("fs");
const http = require("http");

const server=http.createServer();

server.on("request",(req,res)=>{
    // fs.readFile("text.txt","utf-8",(err,data)=>{
    //     res.end(data)
    // })
    const rStream=fs.createReadStream("text.txt");
    rStream.on("data",(chunkData)=>{
        console.log('chunkData', chunkData)
        res.write(chunkData.toString());
    })
    rStream.on("end",()=>{
        res.end();
    })
})

server.listen(5000,"127.0.0.1",()=>{
    console.log("server start")
})