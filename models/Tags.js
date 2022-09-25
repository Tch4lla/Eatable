const mongoose = require("mongoose");

//This is the structure of the document that is displayed in the database
const TagsSchema = new mongoose.Schema({
  tag: {
    type: mongoose.Schema.Types.Mixed,
    required: false,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Tags", TagsSchema);