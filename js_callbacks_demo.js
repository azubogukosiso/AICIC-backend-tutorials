const addTwoNums = (a, b, cb) => { // cb STANDS FOR CALLBACK
    if (typeof a !== "number" || typeof b !== "number") {
        cb("Both arguments have to be numbers", undefined); // CALLBACK IS CALLED AFTER DETECTING A NON-INTEGER OR NON-FLOAT VALUE
    } else {
        cb(undefined, a + b); // CALLBACK IS CALLED AFTER PEROFORMING ADDITION
    }
}

addTwoNums(2, 4, (err, result) => {
    console.log("callback fired"); // SIGNALS THE EXECUTION OF THE CALLBACK
    if (err === undefined) {
        console.log(result);
    } else {
        console.log(err);
    }
})
