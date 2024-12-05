export const logger = (req, res, next) => {
    console.log(`Here it is: ${req.method} ${req.url}`);
    next();
};
