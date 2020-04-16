var express = require("express");
var router = express.Router();
var controllers = require("../controllers");

router.post("/", controllers.review.createReview);

router.get("/:id", controllers.review.getReview);

router.put("/:id", controllers.review.updateOne);

router.delete("/:id", controllers.review.deleteOne);

module.exports = router;
