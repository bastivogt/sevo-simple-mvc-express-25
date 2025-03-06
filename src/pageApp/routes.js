const express = require("express");
const PageController = require("./controllers/PageController");


const router = express.Router();

router.get("/datenschutz", PageController.datenschutz);
router.get("/impressum", PageController.impressum);

module.exports = router;