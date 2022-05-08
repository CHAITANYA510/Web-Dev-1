// $(document).on("click", function(event){
//   console.log(event);
// });
//debugger;

/*** Game is still in progrss ***/
/*** Script is removed from the html ***/

const equals = (a, b) =>
  a.length === b.length &&
  a.every((v, i) => v === b[i]);

var level = 1;
var started = false;

/*** Wait for user input from keyboard ***/
$(document).keypress(function(){
  if(!started){
    started = true;
    startGame();
  }
});

var mapArr = ["green","red","yellow","blue"];
var pattern = [];
var userPattern = [];
var userButtonClick = 0;

/** Game Started **/
function startGame() {
  console.log("A key is pressed!! Game started!!");
  if(started){
    console.log("Game in progress");
    $("#level-title").text("Level "+level++);
    highLightRandomColor();
    //console.log(pattern);
    var btnArr = $(".btn");
    for(var j=0;j<btnArr.length;j++){
      assignEvent(btnArr[j]);
    }
    //waitForUserPattern();
  }
}

function highLightRandomColor() {
  var toFade = mapArr[randomNumberGenerator()];
  $("#"+toFade).fadeOut();
  $("#"+toFade).fadeIn();
  pattern.push(toFade);
}

function randomNumberGenerator() {
  var randomNum = Math.round((Math.random() * 4));
  return randomNum;
}

function assignEvent(val) {
  val.addEventListener("click", function(){
    userPattern.push(val.id);
    userButtonClick++;
    if(level==userPattern.length) {
      // userPattern.push(val.id);
      // userButtonClick++;
      console.log("Generated Pattern: "+pattern);
      console.log("User generated Pattern: "+userPattern);
      var slicedPattern = pattern.slice(0,userButtonClick);
      console.log("Sliced Pattern: "+slicedPattern);
      if(equals(slicedPattern,userPattern)) {
        console.log("Pattern matched");
        level++;
        highLightRandomColor();
      }
      else{
        restartGame();
      }
    }
    else{
      console.log("Record Pattern!!");
    }
  });
}

function restartGame() {
  $("#level-title").text("Game Over, Press Any Key to Restart");
  level = 1;
  started = false;
  pattern = [];
  userPattern = [];
  userButtonClick = 0;
  console.log("Restarting Game!!");
  startGame();
}
