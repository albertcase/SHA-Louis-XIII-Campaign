var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/test/:id', function(req, res, next) {
	var id = req.params.id;
  res.render('index', { title: id });
});

router.get('/message/:id', function(req, res, next) {
  res.render('test', { title: req.params.id });
});

router.post('/ajax/api/message', function(req, res, next) {
	var name = req.body.name;
	var message = req.body.message;
	var fs = require('fs'),
  		gm = require('gm');
	gm('../images/pic.png')
	.stroke("#ffffff")
	.font("Helvetica.ttf", 25)
	.drawText(120, 20, "GMagick!")
	.write("../images/pic2.png", function (err) {
	  if (!err) {
	  	var mysql = require('mysql');
	  	//....
		res.setHeader('Content-Type', 'application/json');
    	res.send(JSON.stringify({ status: 1, image_src: 'http://xxxxxx' }));
	  } else {
	  	console.log(err)
	  };
	});	
});

router.get('/qrcode-demo', function(req, res, next) {
	var qr_image = require('qr-image');
	//code
});

router.get('/uuid-demo', function(req, res, next) {
	var uuid = require('node-uuid');  
	res.send(JSON.stringify({uuid: uuid.v4() }));

});

module.exports = router;
