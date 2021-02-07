const mongoose = require("mongoose");

const ListSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    cards: [{ type: mongoose.Schema.Types.ObjectId, ref: "Card" }],
    board: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Board"
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("List", ListSchema);
