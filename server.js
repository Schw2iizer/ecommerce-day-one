
var express = require("express");
var app = express();
var port = (8080);
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

var mongoUri = "mongodb://localhost:27017/e-commerce";

mongoose.connect(mongoUri);
mongoose.connection.once("open", function(){
	console.log("Connected to db at " + mongoUri);
})


// app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());





app.listen(port, function(){
	console.log("listening on " + port);
}); 


