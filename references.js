var mongoose = require("mongoose");

// connect db
// mongoose.connect("mongodb://localhost/blog_demo");
mongoose.connect("mongodb://admin:admin123@ds159563.mlab.com:59563/wdbc1_blog_demo")

var PostRef = require("./models/post");

var UserRef = require("./models/user");


/*****************************************************************************/

// find user with email, populate all posts, execute query
UserRef.findOne({email: "bob@gmailcom"}).populate("posts").exec(function(err, user){
  if (err) {
    console.log(err);
  } else {
    console.log(user);
  }
});



// // THIS WORKS FINE AS WELL
// PostRef.create({
//   // create post
//   title: "How to cook the best burger part 4",
//   content: "adfkjsdla ldfjsf dslkfjsflajfslfjs"
// }, function(err, post){
//   // select user with email
//   UserRef.findOne({email: "bob@gmailcom"}, function(err, foundUser){
//     if (err) {
//       console.log(err);
//     } else {
//       // add post created on user with email above
//       foundUser.posts.push(post);
//       // save post to user 
//       foundUser.save(function(err, data){
//         if (err) {
//           console.log(err);
//         } else {
//           console.log(data);
//         }
//       });
//     }
//   });
// });


// // THIS WORKS FINE
// PostRef.create({
//   title: "How to cook the best burger",
//   content: "blah blah blah blah blah"
// });

// // THIS WORKS FINE
// UserRef.create({
//   email: "bob@gmailcom",
//   name: "Bob Belcher"
// });


// QUESTION IS, WHEN TO USE EMBED and REFERENCE 