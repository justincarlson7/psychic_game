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

var computerGuess =
  computerChoices[Math.floor(Math.random() * computerChoices.length)];

console.log("This is the computer's random guess: " + computerGuess);

var numberRemaining = 6;
var winCounter = 0;
var lossCounter = 0;
var letterTypedArray = [];

function numGuesses() {
  document.querySelector("#guessesRemaining").innerHTML =
    "Guesses Left!!: " + numberRemaining;
}

function historyGuesses() {
  document.querySelector("#guessList").innerHTML =
    "Guesses: " + letterTypedArray;
}

// console.log("Letter typed" + letterTyped[])

numGuesses();

var restart = function() {
  numberRemaining = 6;
  letterTypedArray = [];
  var computerGuess =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
};

document.onkeyup = function(event) {
  numberRemaining--;
  letterTyped = String.fromCharCode(event.keycode).toLowerCase();

  console.log(letterTyped);

  letterTypedArray.push(letterTyped);
  numGuesses();
  historyGuesses();
};
if (letterTyped === computerGuess) {
  wins++;
  document.querySelector("#youWin").innerHTML = "Wins: " + wins;
  console.log("WWWWWIWIIIIIINNNNNNNN");
  restart();
} else if (guessesRemaining === 0) {
  losses++;

  console.log("LOSSSSSSSEEEEEEEE");
  document.querySelector("#youLose").innerHTML = "Loses: " + losses;
  restart();
}
