const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html');

    let filePath = "./views/";

    if (req.url === "/") {
        filePath += "index.html"
        res.statusCode = 200;
    } else if (req.url === "/about") {
        filePath += "about.html"
        res.statusCode = 200;
    } else if (req.url === "/about-me") {
        res.statusCode = 301;
        res.setHeader('Location', "/about");
    } else {
        filePath += "404.html"
        res.statusCode = 404;
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            // res.write(data);            
            res.end(data);
        }
    });
})

server.listen(3000, "localhost", () => {
    console.log("server is listening for requests");
});
