const http = require("http");
const fs = require("fs")


const myserver = http.createServer((req,res)=>{

    const log = `${Date.now()}: ${req.url}- new requested arrived\n`;
    fs.appendFile("log.text",log,(err,data)=>{
        switch (req.url) {
            case "/":res.end ("Home Page"); break;
            case "/about":res.end ("About Page"); break;
            case "/service":res.end ("Service Page"); break;


                
        
            default:res.end("data messedup from  here");
        }
    })
       
});

myserver.listen(3000,()=>{console.log("server is started from here")})