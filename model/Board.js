const mongoose = require("mongoose");

const BoardSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    team: {
      type: String,
      required: true
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User"
    },
    listsIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "List" }]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Board", BoardSchema);
