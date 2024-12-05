export const addHeader = (req, res, next) => {
    res.setHeader("X-Powered-By", "Node.js");
    next();
};
