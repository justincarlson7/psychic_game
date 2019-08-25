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

var numberRemaining = 6;
var winsCounter = 0;
var lossCounter = 0;
var letterTypedArray = [];
//var letterTyped = "";

var computerGuess =
  computerChoices[Math.floor(Math.random() * computerChoices.length)];

  console.log("This is the computer guess " + computerGuess);

function list(letterTyped) {
  this.letterTypedArray = letterTypedArray.push(letterTyped);
}

console.log("This is the list " + letterTypedArray);

list();



function remaining() {
  document.querySelector("#guessesRemaining").innerHTML =
    "Guesses Left " + numberRemaining;
}

function listOfGuesses() {
  document.querySelector("#guessList").innerHTML =
    "Letters guessed: " + letterTypedArray;
}

// remaining();

function restart() {
  numberRemaining = 6;
  letterTypedArray = [];
  computerGuess =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
}
//start games when user selects number
document.onkeyup = function(event) {
  numberRemaining--;
  var letterTyped = event.key;



  console.log("Is this the letter that I picked " + letterTyped);

  //   if (playerGuess >= 65 && playerGuess <= 90) {
  //     var playerGuess = event.key;
  //     letters(playerGuess);
  //   } else {
  // console.log("Pick another letter!!!!");
}


remaining();
listOfGuesses();

if (this.letterTyped === computerGuess) {
  winsCounter++;
  document.querySelector("#youWin").innerHTML = "Wins: " + winsCounter;

  restart();

} else if (numberRemaining === 0) {
  lossCounter++;

  document.querySelector("#youLose").innerHTML = "Loses: " + lossCounter;

  restart();


}
