const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = Schema({
   title: {
  	required: true,
	type: String
   },
   body: {
  	required: true,
	type: String
   },
   created: {
  	type: Date,
	default: Date.now
   },
   user: {
  	required: true,
	type: Schema.ObjectId,
	ref: "User"
   }
});


const Post = mongoose.model('Post', postSchema);

module.exports = Post;
