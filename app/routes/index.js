var express = require('express');
var router = express.Router();
var config = require('config');

/* GET home page. */
router.get('/test/:id', function(req, res, next) {
	var id = req.params.id;
  	var name = req.query.name;
	var txt = req.query.txt;
	var fs = require('fs'),
  		gm = require('gm');
  	//连接数据库
  	var dbConfig = config.get('Customer.dbConfig')
	var mysql = require('mysql');
	var connection = mysql.createConnection(dbConfig);
	connection.connect(function(err){
	if(err){ 
	console.log('[query] - :'+err);
	return;
	}
	console.log('[connection connect] succeed!');
	});

	var sql = 'INSERT INTO `info`(`name`,`txt`) VALUES(?,?)';
	var sqlParams = [name, txt];	
	//查询
	connection.query(sql, sqlParams, function(err, result) {
	    if (err) throw err;

	    var id = result.insertId;
	    console.log(name.length)
	    gm('../upload/tu_empty.jpg')
		.stroke("#ffffff")
		.font("../upload/simhei.ttf", 70)
		.drawText(120, 550, name)
		.stroke("#ffffff")
		.font("../upload/Cresci_LP.ttf", 50)
		.drawText(150, 620, "No.00001")
		.draw(['image over 180,780 140,140 "http://10.22.149.110:8080/qrcode-demo/'+ id +'"'])
		.write("../upload/user"+id+".png", function (errs) {
		  if (!errs) {

		  } else {
		  	//console.log(errs);
		  }
		});	
		
		res.setHeader('Content-Type', 'application/json');
		res.send(JSON.stringify({ status: 1, msg: "保存成功", "id": result.insertId }));	    
	});
	connection.end();
});

router.get('/ajax/api/getmessage', function(req, res, next) {
    var id = req.query.id;
    //连接数据库
	var dbConfig = config.get('Customer.dbConfig')
	var mysql = require('mysql');
	var connection = mysql.createConnection(dbConfig);
	connection.connect();

	var sql = 'SELECT * FROM `info` WHERE `id` = ?';
	var sqlParams = [id];	
	//查询
	connection.query(sql, sqlParams, function(err, result) {
	    if (err) throw err;

		res.setHeader('Content-Type', 'application/json');
		res.send(JSON.stringify({ status: 1, msg: "查询成功", name: result[0].name, txt: result[0].txt, url: "http://10.22.150.121:8080/upload/user_"+result[0].id+".png"}));	 	    
	});

	connection.end();
	return false;
});

router.post('/ajax/api/message', function(req, res, next) {
	//var id = req.params.id;
  	var name = decodeURI(req.body.name);
	var txt = decodeURI(req.body.txt);
	var fs = require('fs'),
  		gm = require('gm');
  	//连接数据库
	var dbConfig = config.get('Customer.dbConfig')
	var mysql = require('mysql');
	var connection = mysql.createConnection(dbConfig);
	connection.connect();

	var sql = 'INSERT INTO `info`(`name`,`txt`) VALUES(?,?)';
	var sqlParams = [name, txt];	
	//查询
	connection.query(sql, sqlParams, function(err, result) {
	    if (err) throw err;

	    var id = result.insertId;
	    gm('../upload/tu_empty.jpg')
		.stroke("#ffffff")
		.font("../upload/simhei.ttf", 70)
		.drawText(120, 550, name)
		.stroke("#ffffff")
		.font("../upload/Cresci_LP.ttf", 50)
		.drawText(150, 620, "No.00001")
		.draw(['image over 180,780 140,140 "http://10.22.150.121:8080/qrcode-demo/'+ id +'"'])
		.write("../upload/user_"+id+".png", function (errs) {
		  if (!errs) {

		  } else {
		  	//console.log(errs);
		  }
		});	
		
		res.setHeader('Content-Type', 'application/json');
		res.send(JSON.stringify({ status: 1, msg: "保存成功", "id": result.insertId }));	    
	});
	connection.end();
	
});

router.get('/qrcode-demo/:id', function(req, res, next) {
	var id = req.params.id;
	var qr_image = require('qr-image');
	//code
	var temp_qrcode = qr_image.image('http://10.22.150.121:8080/loadinfo/'+id);  
    res.type('png');  
    temp_qrcode.pipe(res); 
});

router.get('/uuid-demo', function(req, res, next) {
	var uuid = require('node-uuid');  
	res.send(JSON.stringify({uuid: uuid.v4() }));

});

module.exports = router;
