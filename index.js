const express = require("express");
const mongoose = require("mongoose");
const app = express();
const routes = require("./src/routes");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("./src/config/configs");

mongoose
  .connect(config.MONGO_URL, { useNewUrsParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use(cors({ exposedHeaders: ["Content-Length", "Authorization"] }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/auth", routes.auth);
app.use("/user", routes.user);
app.use("/institution", routes.institution);
app.use("/review", routes.review);
app.use("/ranking", routes.ranking);

app.listen(config.PORT, () => {
  console.log("server is runing");
});
