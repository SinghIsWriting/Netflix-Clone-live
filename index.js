// console.log("this is index.js file");

const http = require("http");
const fs = require("fs");

const port = 3000;
const hostname = "localhost";

const home = fs.readFileSync("index.html");

const server = http.createServer((req, res)=>{
    console.log(req.url);
    if(req.url==='/'){
        return res.end(home);
    }
    else if(req.url==='/about'){
        return res.end("<h1>About</h1>");
    }
    else if(req.url==='/contact'){
        return res.end("<h1>Contact</h1>");
    }
    else{
        return res.end("<h1 style='color: red;'>404 Page Not Found</h1>");
    }
    res.end("Working...");
});

server.listen(port, hostname, ()=>{
    console.log(`Server is running on http://${hostname}:${port}`);
});
