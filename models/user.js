// USER - email, name
var userRefSchema = new mongoose.Schema({
  email: String,
  name: String,
  // reference array of posts data from postSchema. postSchema must be created first in order to recognize it here.
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PostRef"
    }
  ]
});
var UserRef = mongoose.model("UserRef", userRefSchema);