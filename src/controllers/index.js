const institutionController = require("./institution-controller");
const authController = require("./auth-controller");
const userController = require("./user-controller");
const reviewController = require("./review-controller");
const rankingController = require("./ranking-controller");

module.exports = {
  institution: institutionController,
  auth: authController,
  user: userController,
  review: reviewController,
  ranking: rankingController
};
