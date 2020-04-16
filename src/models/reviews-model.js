const mongoose = require("mongoose");

const review = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true
  },
  institutionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "institutions",
    required: true
  },
  pros: { type: String, required: true },
  cons: { type: String, required: true },
  rate: { type: Number, required: true },
  isRecomended: { type: Boolean, required: true }
});

module.exports = mongoose.model("reviews", review);
