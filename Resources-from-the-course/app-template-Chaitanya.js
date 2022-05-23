//jshint esversion:6
//Imports
const express = require("express");
const https = require("https");
//const request = require("request");
//const response = require("response");
const bodyParser = require("body-parser");

//declarations
const app = express();
//const port = process.env.PORT;
const port = 3000;

//To access to project
//https://evening-ocean-79038.herokuapp.com/

//To make public folder available while hosting
app.use(express.static("public"));
//To use encoded data from req using body-parser
app.use(bodyParser.urlencoded({
  extended: true
}));

//now use app.<> to access express libraries
//to start Server
app.listen(process.env.PORT || 3000, () => {
  console.log("Application is up and running!!");
  //console.log("Application is up and running on port " + port);
});

app.get("/", function(req, res){
  res.send("Hello");
});
