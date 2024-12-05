import http from "http";

// MIDDLEWARE FUNCTIONS
import { logger } from "./middleware/logger.js";
import { addHeader } from "./middleware/addHeader.js";
import { finalHandler } from "./middleware/finalHandler.js";


// MIDDLEWARE EXECUTOR
const middlewarePipeline = [logger, addHeader, finalHandler];

const server = http.createServer((req, res) => {
    let i = 0;

    const next = () => {
        const middleware = middlewarePipeline[i];
        i++;
        if (middleware) {
            console.log(middleware);
            middleware(req, res, next);
        }
    };

    next(); // START THE MIDDLEWARE PIPELINE
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
