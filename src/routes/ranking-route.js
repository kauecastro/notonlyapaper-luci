var express = require("express");
var router = express.Router();
var controllers = require("../controllers");

router.get("/topinstitutions", controllers.ranking.getTopInstitutions);

module.exports = router;
