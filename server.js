const express = require("express");

const app = express();

app.set("view engine", "ejs");
// app.set("views", "myViews");

// app.use((req, res) => {
//     console.log(req.url, req.method);
// });

app.get("/", (req, res) => {
    const blogs = [
        { id: 1, title: "Lorem ipsum one", snippet: "This is the first blog" },
        { id: 2, title: "Lorem ipsum two", snippet: "This is the second blog" },
        { id: 3, title: "Lorem ipsum three", snippet: "This is the third blog" },
    ]

    res.render("index", { data: "Home Page", blogs });
});

app.get("/about", (req, res) => {
    res.render("about");
})

app.get("/blogs/create", (req, res) => {
    res.render("create");
})

app.listen("4000", () => {
    console.log("Server is listening at http://localhost:4000");
})