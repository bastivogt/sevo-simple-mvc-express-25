const BaseController = require("../../../sevo/controllers/BaseController");

class PageController extends BaseController {
    datenschutz(req, res) {
        return res.render("pageApp/datenschutz", {
            "title": "Datenschutz"
        });
    }

    impressum(req, res) {
        return res.render("pageApp/impressum", {
            "title": "Impressum"
        });
    }

    index(req, res) {
        return res.render("pageApp/index", {
            "title": "Startseite"
        });
    }

    _404(req, res) {
        return res.render("pageApp/404", {
            "title": "404 - Page not found"
        })
    }
}

module.exports = PageController.getInstance();
