const authRoute = require("./auth-route");
const userRoute = require("./user-route");
const institutionRoute = require("./institution-route");
const reviewRoute = require("./review-route");
const rankingRoute = require("./ranking-route");

module.exports = {
  auth: authRoute,
  user: userRoute,
  institution: institutionRoute,
  review: reviewRoute,
  ranking: rankingRoute
};
