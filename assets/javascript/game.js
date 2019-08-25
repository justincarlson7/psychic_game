var computerChoices = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

var guesses = 6;
var wins = 0;
var losses = 0;
var letterTypedArray = [];


var computerGuess =
  computerChoices[Math.floor(Math.random() * computerChoices.length)];

function countGuessesRemaining() {
  document.querySelector("#guessesRemaining").innerHTML = "Guesses Remaining: " + guesses;
}

function guessList() {
  document.querySelector("#letterTypedArray").innerHTML =
    "Letters guessed: " + letterTypedArray.join(' ');
}

countGuessesRemaining();

var restart = function() {
  guesses = 6;
  letterTypedArray = [];
  computerGuess =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
};


document.onkeyup = function(event) {
 guesses--;

  var letterTyped = String.fromCharCode(event.keyCode).toLowerCase();

  letterTypedArray.push(letterTyped);
  countGuessesRemaining();
  guessList();
  
  if (letterTyped === computerGuess) {
    wins++;
    document.querySelector("#youWin").innerHTML = "Wins: " + wins;
    restart();
  } else if (guesses === 0) {
    losses++;
    document.querySelector("#youLose").innerHTML = "Losses: " + losses;
    restart();
  }
};

