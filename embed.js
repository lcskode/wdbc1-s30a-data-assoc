var mongoose = require("mongoose");

// connect db
// mongoose.connect("mongodb://localhost/blog_demo");
mongoose.connect("mongodb://admin:admin123@ds159563.mlab.com:59563/wdbc1_blog_demo")


// POST - title, content
var postSchema = new mongoose.Schema({
  title: String,
  content: String
});
var Post = mongoose.model("Post", postSchema);

// USER - email, name
var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  // embed array of posts data from postSchema. postSchema must be created first in order to recognize it here.
  posts: [postSchema]
});
var User = mongoose.model("User", userSchema);


/*****************************************************************************/

// ADDING INITIAL DATA TO DB

// // add new user data
// var newUser = new User({
//   email: "james@brown.edu",
//   name: "James Brown"
// });

// // add posts data to new user data
// newUser.posts.push({
//   title: "How to brew a polyjuice potion?",
//   content: "Just kidding. Go to potions class to learn it!"
// });

// // save new user to db
// newUser.save(function(err, user){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// });




// // add new post data
// var newPost = new Post({
//   title: "Reflections on Apples",
//   content: "They are delicious"
// });

// // save new post to db
// newPost.save(function(err, post){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

/*****************************************************************************/

// // RETRIEVE EXISTING USER
// User.findOne({name: "James Brown"}, function(err, user){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// });


// // RETRIEVE EXISTING USER AND ADD A NEW POST
// User.findOne({name: "Hermoine Granger"}, function(err, user){
//   if (err) {
//     console.log(err);
//   } else {
//     // add new post to existing user
//     user.posts.push({
//       title: "3 things I really hate",
//       content: "Voldemort. Voldemort. Voldemort."
//     });
//     // save post to existing user
//     user.save(function(err, user){
//       if (err) {
//         console.log(err);
//       } else {
//         // display existing user data
//         console.log(user);
//       }
//     });
//   }
// });