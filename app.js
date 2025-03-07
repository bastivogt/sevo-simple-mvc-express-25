const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const csrf = require("csurf");

const personAppRouter = require("./src/personApp/routes");
const pageAppRouter = require("./src/pageApp/routes");

const PageController = require("./src/pageApp/controllers/PageController");
const LoggerMiddleware = require("./src/loggerApp/middleware/LoggerMiddleware");

const { csrfTokenInputField } = require("./sevo/helper/ViewHelper");

const app = express();
const port = 8042;
const host = "http://localhost";

let csrfProtection = csrf({ cookie: true });

// middleware
app.use(express.static("./src/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./src/public"));

app.use(cookieParser());
app.use(csrfProtection);

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

// locals
app.locals.csrfTokenInputField = csrfTokenInputField;

app.listen(port, () => {
    console.log(`App listen at: ${host}:${port}`);
});
