const BaseController = require("../../../sevo/controllers/BaseController");
const PersonModel = require("../models/PersonModel");
const PersonFormData = require("../forms/PersonFormData");

class PersonController extends BaseController {
    async index(req, res, next) {
        const people = await PersonModel.findAll({
            where: {
                published: true,
            },
            order: [["updatedAt", "DESC"]],
        });
        res.render("personApp/index", {
            title: "People",
            people: people,
        });
    }

    async create(req, res, next) {
        const formData = new PersonFormData({
            firstname: "",
            lastname: "",
            birthday: "",
        });
        console.log("personApp#PersonController#create#postformdata", formData);
        if (req.method === "POST") {
            formData.update(req.body);
            if (formData.isValid()) {
                const person = await PersonModel.create({
                    firstname: formData.getField("firstname").value,
                    lastname: formData.getField("lastname").value,
                    birthday: formData.getField("birthday").value,
                });
                return res.redirect("/person");
            }
        }
        return res.render("personApp/create", {
            title: "Create Person",
            values: formData.getFields(),
            referrer: req.get("referrer"),
        });
    }

    async detail(req, res, next) {
        const id = parseInt(req.params.id);
        if (!id || id === NaN) {
            return next();
        }

        const person = await PersonModel.findByPk(id, {
            where: {
                published: true,
            },
        });
        if (person) {
            return res.render("personApp/detail", {
                title: person.firstname,
                person: person,
                referrer: req.get("referrer"),
            });
        }
        next();
    }

    async update(req, res, next) {
        const id = parseInt(req.params.id);
        if (!id || id === NaN) {
            return next();
        }

        const person = await PersonModel.findByPk(id, {
            where: {
                published: true,
            },
        });

        if (!person) {
            return next();
        }

        const formData = new PersonFormData({
            firstname: person.firstname,
            lastname: person.lastname,
            birthday: person.birthday,
        });

        if (req.method === "POST") {
            formData.update(req.body);
            if (formData.isValid()) {
                person.update({
                    firstname: formData.getField("firstname").value,
                    lastname: formData.getField("lastname").value,
                    birthday: formData.getField("birthday").value,
                });
                await person.save();
                return res.redirect("/person");
            }
        }
        return res.render("personApp/update", {
            title: person.firstname,
            person: person,
            values: formData.getFields(),
            referrer: req.get("referrer"),
        });
    }

    async delete(req, res, next) {
        const id = parseInt(req.params.id);
        if (!id || id === NaN) {
            return next();
        }

        const person = await PersonModel.findByPk(id, {
            where: {
                published: true,
            },
        });

        if (!person) {
            return next();
        }

        const formData = new PersonFormData({
            firstname: person.firstname,
            lastname: person.lastname,
            birthday: person.birthday,
        });

        if (req.method === "POST") {
            if (formData.isValid()) {
                await person.destroy();
                return res.redirect("/person");
            }
        }

        return res.render("personApp/delete", {
            title: person.firstname,
            person: person,
            referrer: req.get("referrer"),
        });
    }
}

module.exports = PersonController.getInstance();
