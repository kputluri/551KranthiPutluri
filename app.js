var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var methodOverride = require('method-Override'); 
var router = express.Router();
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/horizon');

var collection = db.get('employee');
collection.find({},{},function(e,docs){
    console.log('data', docs);
    });
router.post("/", function(req, res){
	var reqBody = req.body;
	var fName= reqBody.fName,
	lname=reqBody.lName,
	email=reqBody.email,
	pword=reqBody.pword,
	phone=reqBody.phone;
	collection.insert({ firstName: fName,lastName:lname,email:email,password: pword,phone:phone },function (e, docs) {if (e) throw e;});
	res.send({ message: 'hooray! welcome to our api!' }); 
});
router.post("/newdata", function(req, res){
	console.log('New Connection established');
	res.setHeader("Access-Control-Allow-Origin" , "*");
	var reqBody = req.body;
	var fName= reqBody.fName,
	lname=reqBody.lName,
	email=reqBody.email,
	pword=reqBody.pword,
	phone=reqBody.phone;
	collection.insert({ firstName: fName,lastName:lname,email:email,password: pword,phone:phone },function (e, docs) {if (e) throw e;});
	res.send({ message: 'hooray! welcome to our api!' }); 
});
	router.get("/employee/:id", function(req, res){
		var employeeId = req.params.id;
		console.log('Connection established');
		res.setHeader("Access-Control-Allow-Origin" , "*");
		collection.find({_id:employeeId},function(err,val){
			res.send(val);
			  });
});
	router.get("/employees", function(req, res){
		console.log('Connection established');
		res.setHeader("Access-Control-Allow-Origin" , "*");
		collection.find({},function(err,val){
			res.send(val);
			  });
});
app.use('/api', router);
app.use(express.static('app'));

//START THE SERVER
//=============================================================================
app.listen(3000);
console.log('Magic happens on port ');
console.log("End of the Script");