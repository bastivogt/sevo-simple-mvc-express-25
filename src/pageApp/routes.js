const express = require("express");
const controllers = require("./controllers");


const router = express.Router();

router.get("/datenschutz", controllers.PageController.datenschutz);
router.get("/impressum", controllers.PageController.impressum);

module.exports = router;