var express = require('express');
var router = express.Router();
// var $ = require('jquery');
// var bootstrap = require('bootstrap');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'With Love' });
});

module.exports = router;
