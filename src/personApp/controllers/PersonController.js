const BaseController = require("../../../sevo/controllers/BaseController");

class PersonController extends BaseController {
    index(req, res, next) {
        res.render("personApp/index", {
            title: "personApp#PersonController#index",
        });
    }
    create(req, res, next) {
        res.render("personApp/create", {
            title: "personApp#PersonController#create",
            referrer: req.get("referrer"),
        });
    }
    detail(req, res, next) {
        const id = parseInt(req.params.id);
        if (!id || id === NaN) {
            return next();
        }
        return res.render("personApp/detail", {
            title: "personApp#PersonController#detail",
            id: id,
            referrer: req.get("referrer"),
        });
    }
    update(req, res, next) {
        const id = parseInt(req.params.id);
        if (!id || id === NaN) {
            return next();
        }
        if (req.method === "POST") {
            return res.redirect("/person");
        }
        return res.render("personApp/update", {
            title: "personApp#PersonController#update",
            id: id,
            referrer: req.get("referrer"),
        });
    }
    delete(req, res, next) {
        const id = parseInt(req.params.id);
        if (!id || id === NaN) {
            return next();
        }
        return res.render("personApp/update", {
            title: "personApp#PersonController#delete",
            id: id,
            referrer: req.get("referrer"),
        });
    }
}

module.exports = PersonController.getInstance();
