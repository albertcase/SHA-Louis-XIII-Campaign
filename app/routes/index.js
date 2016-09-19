var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/test/:id', function(req, res, next) {
	var id = req.params.id;
  res.render('index', { title: id });
});

router.get('/gm', function(req, res, next) {
	var fs = require('fs'),
  		gm = require('gm');

	gm('../images/pic.png')
	.stroke("#ffffff")
	.font("Helvetica.ttf", 25)
	.drawText(120, 20, "GMagick!")
	.write("../images/pic2.png", function (err) {
	  if (!err) {
	  	console.log('done')
	  } else {
	  	console.log(err)
	  };
	});

	res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ status: 1, url: 'xxxxx' }));
});

router.get('/mysql', function(req, res, next) {
	var mysql = require('mysql');
	//code
});

module.exports = router;
