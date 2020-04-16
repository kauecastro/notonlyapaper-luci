var express = require("express");
var router = express.Router();
var controllers = require("../controllers");

router.post("/login", controllers.auth.login);

router.get("/verify", controllers.auth.verify);

module.exports = router;
