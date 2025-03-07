const express = require("express");

const PersonController = require("./controllers/PersonController");

const router = express.Router();

router.get("/", PersonController.index);

router.get("/create", PersonController.create);
router.post("/create", PersonController.create);

router.get("/:id", PersonController.detail);

router.get("/update/:id", PersonController.update);
router.post("/update/:id", PersonController.update);

router.get("/delete/:id", PersonController.delete);
router.post("/delete/:id", PersonController.delete);

module.exports = router;
