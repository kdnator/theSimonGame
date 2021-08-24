
var gamepattern = [];

var check = false;

var arr = ["red", "blue", "green", "yellow"];

var currLevel, currColour;
$(document).keypress(function(){
  if(check == false){
    currLevel = 1;
    $("h1").text("level " + currLevel);
    var randomChosenColour = arr[nextSequence()];
    gamepattern.push(randomChosenColour);
    blip(randomChosenColour);
    currColour = 0;
    check = true;
  }
});

$(".btn").click(function(){
  var clickColour = this.id;
  blip(clickColour);
  if(check==false){
    $("body").addClass("game-over");
    var audio = new Audio("wrong.mp3");
    audio.play();
    setTimeout(function(){$("body").removeClass("game-over");}, 200);
  }
  else if(clickColour == gamepattern[currColour]){
    if(currColour == currLevel -1){
        currLevel ++;
        $("h1").text("level " + currLevel);
        currColour = 0;
        var randomChosenColour = arr[nextSequence()];
        gamepattern.push(randomChosenColour);
        setTimeout(function (){blip(randomChosenColour);}, 700);
    }
    else{
      currColour++;
    }
  }
  else{
    $("h1").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");
    setTimeout(function(){$("body").removeClass("game-over")},200);
    gamepattern = [];
    audio = new Audio("wrong.mp3");
    audio.play();
    check = false;
  }
});




function blip(choosenColour){
  $("#" + choosenColour).addClass("pressed");
  setTimeout(function(){$("#" + choosenColour).removeClass("pressed");}, 200);
  var audio = new Audio(choosenColour + ".mp3");
  audio.play();
}

function nextSequence(){
  return Math.floor(Math.random()*4);
}
