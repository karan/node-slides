var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
  title: String,
  content: String
});

mongoose.model('posts', postSchema);
