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
	    console.log(name.length);
	    gm('../images/tu_empty.jpg')
		.stroke("#ffffff")
		.font("../images/simhei.ttf", 70)
		.drawText(120, 550, name)
		.stroke("#ffffff")
		.font("../images/Cresci_LP.ttf", 50)
		.drawText(150, 620, "No.00001")
		.draw(['image over 180,780 140,140 "http://louisxiii-cognac.samesamechina.com/qrcode-demo/'+ id +'"'])
		.write("../upload/user"+id+".png", function (errs) {
		  if (!errs) {
		  	res.setHeader('Content-Type', 'application/json');
			res.send(JSON.stringify({ status: 1, msg: "保存成功111", "id": result.insertId }));	  
		  } else {
		  	//console.log(errs);
		  }
		});	
		
		  
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
		res.send(JSON.stringify({ status: 1, msg: "查询成功", name: encodeURIComponent(result[0].name), txt: result[0].txt, url: "http://louisxiii-cognac.samesamechina.com/upload/user_"+result[0].id+".png"}));	 	    
	});

	connection.end();
	return false;
});

router.post('/ajax/api/message', function(req, res, next) {
	//var id = req.params.id;
  	var name = decodeURI(req.body.name);
	var txt = req.body.txt;
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
	    if (/.*[\u4e00-\u9fa5]+.*$/.test(name)) {
			var font = 'simhei';
			var start = (1133 -name.length*80)/2;
		} else {
			var font = 'Cresci_LP';
			var m=(name.toLowerCase().split('w')).length-1;
			var o=(name.toLowerCase().split('m')).length-1;
			var n=(name.toLowerCase().split('i')).length-1;
			var j=(name.toLowerCase().split('j')).length-1;
			var start = (1133-(name.length-n-m-o-j)*50 - n*25 - m*80 - o*80 - j*25)/2;
		}
		//console.log(font)

	    gm('../images/tu_empty2.jpg')
		.stroke("#ffffff")
		.font("../images/"+ font +".ttf", 80)
		.drawText(start, 460, name)
		//.draw(['image over 190,775 140,140 "http://louisxiii-cognac.samesamechina.com/qrcode-demo/'+ id +'"'])
		.resize(600, 600, "!")
		.autoOrient()
		.write("../upload/user_"+id+".png", function (errs) {
		  if (!errs) {
		  	res.setHeader('Content-Type', 'application/json');
			res.send(JSON.stringify({ status: 1, msg: "保存成功", "id": result.insertId, url: "http://louisxiii-cognac.samesamechina.com/upload/user_"+result.insertId+".png"}));	    	
		  } else {
		  	//console.log(errs);
		  }
		});	
		
		//res.setHeader('Content-Type', 'application/json');
		//res.send(JSON.stringify({ status: 1, msg: "保存成功", "id": result.insertId, url: "http://louisxiii-cognac.samesamechina.com/upload/user_"+result.insertId+".png"}));	    
	});
	connection.end();
	
});

router.get('/qrcode-demo/:id', function(req, res, next) {
	var id = req.params.id;
	var qr_image = require('qr-image');
	//code
	var temp_qrcode = qr_image.image('http://louisxiii-cognac.samesamechina.com/share/?id='+id);  
    res.type('png');  
    temp_qrcode.pipe(res); 
});

router.get('/uuid-demo', function(req, res, next) {
	var uuid = require('node-uuid');  
	res.send(JSON.stringify({uuid: uuid.v4() }));

});

module.exports = router;
