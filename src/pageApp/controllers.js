const BaseController = require("../../sevo/controllers/BaseController");

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
}

module.exports = {
    PageController: PageController.getInstance()
}
