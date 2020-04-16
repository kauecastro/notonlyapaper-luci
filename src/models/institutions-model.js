const mongoose = require("mongoose");

const institution = new mongoose.Schema({
  name: { type: String, required: true },
  mainImage: { type: String, required: true },
  backgroundImage: { type: String, required: true }
});

module.exports = mongoose.model("institutions", institution);
