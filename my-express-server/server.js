//express setup
const express = require("express");
const app = express();
const port = 3000

//now use app.<> to access express libraries
//to start Server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})

app.get("/", function(req,res) {
  res.send("<em>Hello!</em>");
});

app.get("/home", function(req,res) {
  res.send("<em>Home!</em>");
});

app.get("/contact-me", function(req,res) {
  res.send("<em>Contact Me!</em>");
});

app.get("/hobbies", function(req,res) {
  res.send("<em>Hobbies!</em>");
});
