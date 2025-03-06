const BaseController = require("../../sevo/controllers/BaseController");
class PersonController extends BaseController {

    index(req, res, next) {
        res.render("personApp/index", {
            "title": "personApp#index"
        })
    }
    create(req, res, next) {
        res.render("personApp/create", {
            "title": "personApp#create",
        })
    }
    detail(req, res, next) {
        const id = parseInt(req.params.id);
        if(!id || id === NaN) {
            return next();
        }
        return res.render("personApp/detail", {
            "title": "personApp#detail",
            "id": id
        })
    }
    update(req, res, next) {
        const id = parseInt(req.params.id);
        if(!id || id === NaN) {
            return next();
        }
        if(req.method === "POST") {
            return res.redirect("/person");
        }
        return res.render("personApp/update", {
            "title": "personApp#update",
            "id": id
        })
    }
    delete(req, res, next) {
        const id = parseInt(req.params.id);
        if(!id || id === NaN) {
            return next();
        }
        return res.render("personApp/update", {
            "title": "personApp#update",
            "id": id
        })
    }
}

module.exports = {
    PersonController: PersonController.getInstance()
}