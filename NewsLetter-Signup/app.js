//Imports
const express = require("express");
const https = require("https");
const request = require("request");
//const response = require("response");
const bodyParser = require("body-parser");

//declarations
const app = express();
const port = 3000;

//To make public folder available while hosting
app.use(express.static("public"));
//To use encoded data from req using body-parser
app.use(bodyParser.urlencoded({
  extended: true
}));

//now use app.<> to access express libraries
//to start Server
app.listen(port, () => {
  console.log("App listening on port " + port);
});

//api sepecific details
const url = "https://us18.api.mailchimp.com/3.0/lists/";
const audienceID = '3e90f0e2f6'; //'95d61cde08';
const apiKey = 'cee465601b1cbeac9625edb2065d8373-us18';

//Root request
app.get("/", function(req, res) {
  //.send("Server is up and running!!");
  res.sendFile(__dirname + "/signup.html");
});

//Issue => On adding same email ID => not getting error code
//Although the id is not added, but if we try to add duplicate email from test.js => we get appropriate error message

app.post("/signup", function(req, res) {

  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;

  //console.log("Form Data ==> "+"fname: " + fname + ", lname: " + lname + ", email: " + email);

  //Mailchip req data in string format, so we first create JSON object and parse into String
  const data = {
    members: [{
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: fname,
          LNAME: lname
        }
      }
    ]
  };

  const jsonData = JSON.stringify(data);

  console.log("Form Data ==> \n"+jsonData);

  const options = {
    method: "POST",
    auth: "chaitanya:"+apiKey
  };

  const request1 = https.request((url+audienceID), options, function(response) {
    //console.log(response);
    response.on("data", function(data) {
      console.log("Response Data ==> \n"+JSON.parse(data));
    });

    console.log(response.statusCode);

    if(response.statusCode === 200) {
      res.send("Success");
    }
    else {
      res.send("Failed");
    }
  });

  request1.write(jsonData);
  request1.end();
  //var response1 = request.end();
  //console.log(request1);

  //res.write("fname: " + fname + ", lname: " + lname + ", email: " + email);
  //res.send(response1);

});
