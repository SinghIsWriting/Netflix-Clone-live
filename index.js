// console.log("this is index.js file");

const http = require("http");
const fs = require("fs");

const port = process.env.PORT || 5000;

const home = fs.readFileSync("index.html");

const server = http.createServer((req, res)=>{
    console.log(req.url);
    if(req.url==='/'){
        return res.end(home);
    }
    else if(req.url==='/about'){
        return res.end("<h1>About - Coming soon...</h1>");
    }
    else if(req.url==='/contact'){
        return res.end("<h1>Contact - Coming soon...</h1>");
    }
    else{
        return res.end("<h1 style='color: red;'>404 Page Not Found</h1>");
    }
});

server.listen(port, ()=>{
    console.log(`Server is running at ${port}...`);
});

// server.listen(port, 'localhost', ()=>{
//     console.log(`Server is running at ${port}...`);
// });
