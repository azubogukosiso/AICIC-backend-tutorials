export const finalHandler = (req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, middleware world!");
};
