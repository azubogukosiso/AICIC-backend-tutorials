const fs = require("fs");

// READING FILES
fs.readFile("./sample_files/file_one.txt", (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data);
    console.log(data.toString());
});


// // WRITING FILES
// fs.writeFile("./sample_files/file_one.txt", "Here we go!", () => {
//     console.log("file_one.txt has been written!");
// })  // WRITING TO A FILE THAT EXISTS

// fs.writeFile("./sample_files/file_two.txt", "Here we go again!", () => {
//     console.log("file_two.txt has been written!");
// })  // WRITING TO A FILE THAT DOESN'T EXIST


// // DIRECTORIES
// fs.mkdir("./new_folder", (err) => { // CREATE A NEW FOLDER
//     if (err) {
//         console.log(err);
//     }
//     console.log("new_folder has been created!");
// });

// if (fs.existsSync("./new_folder")) { // CHECK IF FOLDER EXISTS
//     console.log("The folder by name, new_folder, exists!");

//     fs.rmdir("./new_folder", (err) => { // DELETE FOLDER
//         if (err) {
//             console.log(err);
//         }
//         console.log("The folder has been deleted!");
//     })
// } else {
//     console.log("This folder does not exist!");
// }


// // DELETING FILES
// if (fs.existsSync("./sample_files/file_one.txt")) { // CHECK IF FILE EXISTS
//     fs.unlink("./sample_files/file_one.txt", (err) => { // DELETE THE FILE
//         if (err) {
//             console.log(err);
//         }
//         console.log("The file has been deleted!");
//     });
// }