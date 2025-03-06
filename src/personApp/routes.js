const express = require("express");

const controllers = require("./controllers");

const router = express.Router();

router.get("/", controllers.PersonController.index);
router.get("/create", controllers.PersonController.create);
router.get("/:id", controllers.PersonController.detail);
router.get("/update/:id", controllers.PersonController.update);
router.post("/update/:id", controllers.PersonController.update);
router.get("/delete/:id", controllers.PersonController.update);
router.post("/delete/:id", controllers.PersonController.update);





module.exports = router;


