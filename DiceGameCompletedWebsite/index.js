var randomNum1 = Math.floor(Math.random()*6) + 1;
var randomNum2 = Math.floor(Math.random()*6) + 1;

var header = document.querySelector(".container h1");
var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");

//img1.src = "images/dice"+randomNum1+".png";
//img2.src = "images/dice"+randomNum2+".png";
img1.setAttribute("src","images/dice"+randomNum1+".png");
img2.setAttribute("src","images/dice"+randomNum2+".png");

if(randomNum1>randomNum2){
  header.textContent = "🚩 Player 1 win";
}
else if(randomNum1<randomNum2){
  header.textContent = "Player 2 win 🚩";
}
else{
  header.textContent = "🚩 It's a Tie 🚩";
}
