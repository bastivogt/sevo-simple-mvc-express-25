const express = require("express");
const bodyParser = require("body-parser");

const personAppRouter = require("./src/personApp/routes");
const pageAppRouter = require("./src/pageApp/routes");
const pageAppControllers = require("./src/pageApp/controllers");

const app = express();
const port = 8042;
const host = "http://localhost";

// middleware
app.use(express.static("./src/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./src/public"));


// routers
// personApp
app.get("/", pageAppControllers.PageController.index);
app.use("/person", personAppRouter);
app.use("/page", pageAppRouter);


app.use((req, res, next) =>{
    res.send("404 - Page not found");
});

// Template engine
app.set("view engine", "ejs");
app.set("views", "./src/views");




app.listen(port, () => {
    console.log(`App listen at: ${host}:${port}`);
});