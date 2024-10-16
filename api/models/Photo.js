const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  feedback: [
    {
      reviewer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      professionalism: { type: Number, min: 1, max: 10 },
      kindness: { type: Number, min: 1, max: 10 },
      competence: { type: Number, min: 1, max: 10 },
      confidence: { type: Number, min: 1, max: 10 },
      smartness: { type: Number, min: 1, max: 10 },
    },
  ],
});

module.exports = mongoose.model("Photo", photoSchema);
