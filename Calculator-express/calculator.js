const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

//To use encoded data from req using body-parser
app.use(bodyParser.urlencoded({extended: true}));

//now use app.<> to access express libraries
//to start Server
app.listen(port, () => {
  console.log("App listening on port "+port);
});

//Root request
app.get("/", function(req,res) {
  res.send("<em>Hello World!</em>");
});

//Normal Calculator request
app.get("/calculate", function(req,res) {
  res.sendFile(__dirname+"/calculator.html");
});

app.post("/calculate", function(req,res) {
  //console.log(req);
  var n1 = Number (req.body.num1);
  var n2 = Number (req.body.num2);
  res.send("Addition of "+n1+" and "+n2+" is: "+(n1+n2));
});

//BMI Calculator request
app.get("/bmiCalculator", function(req,res) {
  res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req,res) {
  //console.log(req);
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = weight / (Math.pow(height/100, 2));
  res.send("Your Weight is "+weight+" kg and your Height is "+height+" cm<br>Your BMI is: "
  +roundUpto2Dec(bmi));
});

//To round off to 2 decimal, for singlee decimal -> change 100 to 10 and so on..
function roundUpto2Dec(num) {
    var m = Number((Math.abs(num) * 100).toPrecision(15));
    return Math.round(m) / 100 * Math.sign(num);
}
