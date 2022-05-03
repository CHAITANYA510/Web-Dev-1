//capture click and call the function
var arr = document.querySelectorAll("button");
arr.forEach(assignEvent);

function assignEvent(val){
  val.addEventListener("click", function(){
    playSound(val.textContent);
    addButtonAnimation(val.textContent);
  });
}

//trigger is attached to document i.e entire page
//capture keyboard click and call the function
document.addEventListener("keydown", function(event){
  playSound(event.key);
  addButtonAnimation(event.key);
});

function playSound(key) {
  //alert(key+" is pressed!!");
  var audio;
  switch (key) {
    case "w":
      audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    default:
      console.log(key);
  }
}

function addButtonAnimation(key){
  //for adding clicked animation
  var activeButton = document.querySelector("."+key);
  activeButton.classList.add("pressed");

  //for removing clicked animation after certian time
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);

}
