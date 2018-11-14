var mongoose = require("mongoose");

// POST - title, content
var postRefSchema = new mongoose.Schema({
  title: String,
  content: String
});

module.exports = mongoose.model("PostRef", postRefSchema);