const express = require("express");
const bodyParser = require("body-parser");

const personAppRouter = require("./src/personApp/routes");
const pageAppRouter = require("./src/pageApp/routes");

const PageController = require("./src/pageApp/controllers/PageController");
const LoggerMiddleware = require("./src/loggerApp/middleware/LoggerMiddleware");



const app = express();
const port = 8042;
const host = "http://localhost";

// middleware
app.use(express.static("./src/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./src/public"));
// custom middleware
app.use(LoggerMiddleware.logPath);
app.use(LoggerMiddleware.logReferrer);


// routers
// personApp
app.get("/", PageController.index);
app.use("/person", personAppRouter);
app.use("/page", pageAppRouter);

// 404
app.use(PageController._404);

// Template engine
app.set("view engine", "ejs");
app.set("views", "./src/views");




app.listen(port, () => {
    console.log(`App listen at: ${host}:${port}`);
});