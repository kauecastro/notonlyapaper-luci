var express = require("express");
var router = express.Router();
var controllers = require("../controllers");

router.post("/", controllers.institution.createInstitution);

router.get("/:id", controllers.institution.getInstitution);

router.put("/:id", controllers.institution.updateOne);

router.delete("/:id", controllers.institution.deleteOne);

module.exports = router;
