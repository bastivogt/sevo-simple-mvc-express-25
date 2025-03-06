const BaseController = require("../../../sevo/controllers/BaseController");


class LoggerMiddleware extends BaseController {

    logPath(req, res, next) {
        console.log("path:", req.path);
        next();
    }

    logReferrer(req, res, next) {
        console.log("referrer:", req.get("referrer"));
        next();
    }
}

module.exports = LoggerMiddleware.getInstance();
