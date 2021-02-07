const mongoose = require("mongoose");

const CardSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    labels: [],
    dueDate: {
      type: String
    },
    list: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "List"
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Card", CardSchema);
