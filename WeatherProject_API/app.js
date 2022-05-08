const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const weatherAPIKey = "9265f72c72472b5320aa1bbd4045acc1";

//To use encoded data from req using body-parser
app.use(bodyParser.urlencoded({extended: true}));

//now use app.<> to access express libraries
//to start Server
app.listen(port, () => {
  console.log("App listening on port "+port);
});

//Root request
app.get("/", function(req,res) {
  //.send("Server is up and running!!");
  res.sendFile(__dirname+"/index.html");
});

//Get current weather for input city
app.get("/weather", function(req,res) {
  //.send("Server is up and running!!");
  res.sendFile(__dirname+"/weather.html");
});


app.post("/getCityWeather", function(req,res) {

  //console.log(req);

  var city = req.body.city;
  var unit = req.body.unit;

  //const  = "Mumbai";
  //const  = "metric";

  const weatherURL = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units="+unit+"&appid="+weatherAPIKey;

  https.get(weatherURL, function(response){
    //console.log(response);
    console.log("Status code is: "+response.statusCode);

    response.on("data",function(data){
      //in stringformat
      //console.log(data);
      //TO convert into JSON
      const weatherData = JSON.parse(data);
      const temperature = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      const weatherIconCode = weatherData.weather[0].icon;
      const weatherCodeURL = 'http://openweathermap.org/img/wn/'+weatherIconCode+'@2x.png';

      var unitToDisplay = (unit=='metric') ? 'celcius' : 'fahrenheit';

      console.log("Temperature is: "+temperature+" degree "+unitToDisplay+", "+description);

      res.write("<h1>Temperature is: "+temperature+" degree "+unitToDisplay+", "+description+"</h1>");
      res.write("<p><img src="+weatherCodeURL+" alt='weather-icon'/></p>");
      //<p><img src='' alt=''></p>
      res.send();
    });

  });

  //res.send();

});
