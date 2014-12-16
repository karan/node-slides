var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Posts = mongoose.model('posts');

/* GET home page. */
router.get('/', function(req, res) {
  mongoose.model('posts').find({}, function(err, docs) {
    res.render('index', { title: 'Express', posts: docs });
  });
});

router.get('/new', function(req, res) {
  res.render('new');
});

router.post('/new', function(req, res) {
  new Posts({
    title: req.body.title,
    content: req.body.content
  }).save(function(err, newPost) {
    return res.redirect('/');
  });
});

router.get('/:id', function(req, res) {
  Posts.findById(req.params.id, function(err, doc) {
    res.render('post', {post: doc});
  });
});

module.exports = router;
