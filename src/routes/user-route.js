var express = require("express");
var router = express.Router();
var controllers = require("../controllers");

router.post("/", controllers.user.createUser);

module.exports = router;
