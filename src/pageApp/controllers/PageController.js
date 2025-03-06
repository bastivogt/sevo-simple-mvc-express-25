const BaseController = require("../../../sevo/controllers/BaseController");

class PageController extends BaseController {
    datenschutz(req, res) {
        return res.render("pageApp/datenschutz", {});
    }

    impressum(req, res) {
        return res.render("pageApp/impressum", {});
    }

    index(req, res) {
        return res.render("pageApp/index", {});
    }

    _404(req, res) {
        return res.render("pageApp/404", {
            "title": "404 - Page not found"
        })
    }
}

module.exports = PageController.getInstance();
