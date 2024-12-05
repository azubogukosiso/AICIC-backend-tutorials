// STREAMS ARE USEFUL FOR READING OR WRITING HUGE AMOUNTS OF DATA

const fs = require("fs");

const readStream = fs.createReadStream("./sample_files/big_file_read.txt", { encoding: "utf-8" }); // ARGUMENT WITH THE ENCODING PROPERTY IS OPTIONAL
const writeStream = fs.createWriteStream("./sample_files/big_file_write.txt");

// readStream.on("data", (chunk) => { // "data" IS THE EVENT LISTENER LISTENING FOR WHEN A BUFFER IS READ OR WRITTEN INTO THE SPECIFIED FILE
//     console.log("\n\n---------- NEW CHUNK ----------\n\n");
//     console.log(chunk);
//     writeStream.write("\n\n---------- NEW CHUNK ----------\n\n");
//     writeStream.write(chunk);
// });

// PIPING - YOU CAN ONLY PIPE FROM A READSTREAM TO A WRITESTREAM
readStream.pipe(writeStream);