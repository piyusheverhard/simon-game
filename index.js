var gameOver = false;
var moves = ["green", "red", "yellow", "blue"];
var currMoves = [];
var curr = 0, level = 0, started = false;

$(".btn").click(function() {
  highlight(this.id);
  playSound(this.id);
  if (this.id === currMoves[curr]) {
    curr++;
    if (curr === currMoves.length) {
      setTimeout(play, 1000);
    }
  } else {
    endGame();
  }
});


$(document).keypress(function() {
  if (!started) {
    started = true;
    level = 0;
    play();
  }
});

function play() {
  level++;
  curr = 0;
  $("#level-title").text("Level " + level);
  var move = moves[Math.floor(Math.random() * 4)];
  currMoves.push(move);
  highlight(move);
  playSound(move);
}

function endGame() {
  $("#level-title").text("Game Over! Press any key to start again.");
  $("body").addClass("game-over");
  var audio = new Audio("sounds/wrong.mp3");
  setTimeout(function() {
    $("body").removeClass("game-over");
  }, 100);
  audio.play();
  currMoves = [];
  curr = 0;
  started = false;
}

function highlight(bt) {
  $("#" + bt).addClass("pressed");
  setTimeout(function() {
    $("#" + bt).removeClass("pressed");
  }, 100);
}

function playSound(bt) {
  var address = "sounds/" + bt + ".mp3";
  var audio = new Audio(address);
  audio.play();
}
