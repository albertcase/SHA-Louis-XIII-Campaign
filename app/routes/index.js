var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/test/:id', function(req, res, next) {
	var id = req.params.id;
  	var name = req.query.name;
	var txt = req.query.txt;
	var fs = require('fs'),
  		gm = require('gm');
  	//连接数据库
	var mysql = require('mysql');
	var connection = mysql.createConnection({
	    host: '127.0.0.1',
	    user: 'root',
	    password: '',
	    port: '3306',
	    database:'louisxii_campaign'
	});
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
	    gm('../images/tu_empty.jpg')
		.stroke("#ffffff")
		.font("../images/simhei.ttf", 70)
		.drawText(120, 550, name)
		.stroke("#ffffff")
		.font("../images/Cresci_LP.ttf", 50)
		.drawText(150, 620, "No.00001")
		.draw(['image over 180,780 140,140 "../qrcode-demo/'+ id +'"'])
		.write("../images/user"+id+".png", function (err) {
		  if (!err) {
	  		var mysql = require('mysql');

	  		//....
			res.setHeader('Content-Type', 'application/json');
			res.send(JSON.stringify({ status: 1, image_src: 'http://xxxxxx/images/user'+id+'.png' }));
		  	
		  } else {
		  	console.log(err)
		  }
		});	

	    res.setHeader('Content-Type', 'application/json');
		res.send(JSON.stringify({ status: 1, msg: "保存成功", "id": result.insertId }));
	});
	// connection.query('select * from `info`', function(err, rows, fields) {
 //    	if (err) throw err;
 //    	console.log('查询结果为: ', rows);
	// });
	//关闭连接
	connection.end();
	return false;
	gm('../images/tu_empty.jpg')
	.stroke("#ffffff")
	.font("../images/simhei.ttf", 70)
	.drawText(120, 550, name)
	.stroke("#ffffff")
	.font("../images/Cresci_LP.ttf", 50)
	.drawText(150, 620, "No.00001")
	.draw(['image over 180,780 140,140 "http://10.22.149.5:8080/qrcode-demo"'])
	.write("../images/user"+id+".png", function (err) {
	  if (!err) {
  		var mysql = require('mysql');

  		//....
		res.setHeader('Content-Type', 'application/json');
		res.send(JSON.stringify({ status: 1, image_src: 'http://xxxxxx/images/user'+id+'.png' }));
	  	
	  } else {
	  	console.log(err)
	  }
	});	
	// gm('http://10.22.149.5:8080/qrcode-demo').draw("../images/user"+id+".png",200,750)
	// .write("../images/user"+id+".png", function (err) {
	//   if (!err) {
 //  		var mysql = require('mysql');
 //  		//....
	// 	res.setHeader('Content-Type', 'application/json');
	// 	res.send(JSON.stringify({ status: 1, image_src: 'http://xxxxxx/images/user'+id+'.png' }));
	  	
	//   } else {
	//   	console.log(err)
	//   }
	// });	
});

router.post('/ajax/api/getmessage', function(req, res, next) {
    var id = req.body.id;
    //连接数据库
	var mysql = require('mysql');
	var connection = mysql.createConnection({
	    host: '127.0.0.1',
	    user: 'root',
	    password: '',
	    port: '3306',
	    database:'louisxii_campaign'
	});
	connection.connect();

	var sql = 'SELECT * FROM `info` WHERE `id` = ?';
	var sqlParams = [id];	
	//查询
	connection.query(sql, sqlParams, function(err, result) {
	    if (err) throw err;

		res.setHeader('Content-Type', 'application/json');
		res.send(JSON.stringify({ status: 1, msg: "查询成功", "id": result}));	 	    
	});

	connection.end();
	return false;
});

router.post('/ajax/api/message', function(req, res, next) {
	//var id = req.params.id;
  	var name = req.body.name;
	var txt = req.body.txt;
	var fs = require('fs'),
  		gm = require('gm');
  	//连接数据库
	var mysql = require('mysql');
	var connection = mysql.createConnection({
	    host: '127.0.0.1',
	    user: 'root',
	    password: '',
	    port: '3306',
	    database:'louisxii_campaign'
	});
	connection.connect();

	var sql = 'INSERT INTO `info`(`name`,`txt`) VALUES(?,?)';
	var sqlParams = [name, txt];	
	//查询
	connection.query(sql, sqlParams, function(err, result) {
	    if (err) throw err;

	    var id = result.insertId;
	    gm('../images/tu_empty.jpg')
		.stroke("#ffffff")
		.font("../images/simhei.ttf", 70)
		.drawText(120, 550, name)
		.stroke("#ffffff")
		.font("../images/Cresci_LP.ttf", 50)
		.drawText(150, 620, "No.00001")
		.draw(['image over 180,780 140,140 "http://10.22.149.110:8080/qrcode-demo/'+ id +'"'])
		.write("../images/user"+id+".png", function (errs) {
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
	var temp_qrcode = qr_image.image('http://10.22.149.110:8080/loadinfo/'+id);  
    res.type('png');  
    temp_qrcode.pipe(res); 
});

router.get('/uuid-demo', function(req, res, next) {
	var uuid = require('node-uuid');  
	res.send(JSON.stringify({uuid: uuid.v4() }));

});

module.exports = router;
