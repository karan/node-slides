var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Posts = mongoose.model('Posts');

/* GET home page. */
router.get('/', function(req, res) {
  Posts.find({}, function(err, docs) {
    console.log("found the homepage");
    res.render('index', { title: 'Nodejs', posts: docs });
  });
  console.log("after finding the homepage");
});

router.get('/new', function(req, res) {
  res.render('new', { title: 'Hello World' });
});

router.post('/new', function(req, res) {
  console.log(req.body.title);
  new Posts({
    title: req.body.title,
    content: req.body.content
  }).save(function(err, doc) {
    console.log("Done adding post");
    res.redirect('/');
  });
});

router.get('/:id', function (req, res) {
  console.log(req.params.id);
  Posts.findOne({'_id': req.params.id}, function(err, doc) {
    res.render('post', { post: doc });
  });
});

module.exports = router;
