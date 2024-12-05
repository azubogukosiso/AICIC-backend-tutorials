const http = require("http");

const server = http.createServer((req, res) => {
    console.log("Request made:", req.url, req.method);
});

server.listen(3000, "localhost", () => {
    console.log("Server is listening at http://localhost:3000");
});