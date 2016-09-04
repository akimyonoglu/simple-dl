var express = require('express');
var router = express.Router();
var ydl = require('../lib/ydl-downloader');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/download/*', function(req, res, next){
  console.log(req.params);
  ydl(req.params['0'], function(x) {});
  res.render('index', { title: 'OK'});
});

module.exports = router;
