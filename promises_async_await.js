// PROMISES ARE USED IN OPERATIONS THAT ARE TIME-CONSUMING. THEY EITHER RESOLVE OR REJECT.
const fs = require("fs");

function readFileSimulation(path) {
    return new Promise((resolve, reject) => {
        console.log(`Reading file: ${path}`);

        fs.readFile(path, (err, data) => {
            if (err) {
                reject(err); // REJECTS ON ERROR
            } else {
                resolve(data.toString()); // RESOLVES WITH ACTUAL DATA
            }
        })
    });
}

const readFile = async () => { // USE async TO INDICATE THAT THE FUNCTION WOULD TAKE TIME TO EXECUTE
    // USING THE PROMISE
    const result = await readFileSimulation("./sample_files/file_one.txt"); // USE await TO INDICATE THAT WE HAVE TO WAIT TO GET THE RESULTS OF THIS OPERATION
    console.log("The result of the promise execution: ", result);
}

readFile();