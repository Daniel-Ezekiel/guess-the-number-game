"use-strict";

// select the guess button
const guessBtn = document.querySelector(".guess-btn");
// select the reset button
const resetBtn = document.querySelector(".reset-btn");

// for the remarks
let remarks = document.querySelector(".remark");
// for the number of chances
let chancesLeft = 20;
let score = document.querySelector(".score > span");
score.textContent = chancesLeft;
// for the highscores
let totalScore = 0;
let highscore = document.querySelector(".highscore > span");
highscore.textContent = totalScore;

// THE NUMBER
let num = Math.ceil(Math.random() * 20);
console.log(num);

// onClick of guess button
guessBtn.addEventListener("click", makeGuess);
function makeGuess() {
  // first obtain the value from the user input
  let guessInput = document.querySelector("input").value;
  //   convert the guess input to a number
  if (guessInput === "") {
    alert("Kindly enter your guess");
    return;
  }
  guessInput = Number(guessInput);
  //   Check if input is right guess
  if (guessInput === num) {
    remarks.textContent = "You are correct";
    document.querySelector("body").classList.add("green");
    totalScore += chancesLeft;
    highscore.textContent = totalScore;
  } else if (guessInput > num) {
    remarks.textContent = "Wrong❌ Too High...";
    chancesLeft -= 1;
    score.textContent = chancesLeft;
  } else {
    remarks.textContent = "Wrong❌ Too Low...";
    chancesLeft -= 1;
    score.textContent = chancesLeft;
  }
}

// onClick of the reset button
resetBtn.addEventListener("click", playAgain);
function playAgain() {
  // Change background color back to default
  document.querySelector("body").classList.remove("green");
  // Generate another number
  num = Math.ceil(Math.random() * 20);
  console.log(num);
  // Reset the remark
  remarks.textContent = "Let the guesses roll in!";
  //   Reset the number of chances
  chancesLeft.textContent = 20;
}
