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
  //   Check if input box has a value or is empty
  if (guessInput === "") {
    alert("Kindly enter your guess");
    return;
  } else if (guessInput < 1 || guessInput > 20) {
    // Check if input is above 20 or below 1
    alert("Kindly enter a number between 1 and 20");
    guessInput = "";
    return;
  }
  //   convert the guess input to a number
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
  //   Clear the input box
  let guessInput = document.querySelector("input");
  guessInput.value = "";
  // Generate another number
  num = Math.ceil(Math.random() * 20);
  console.log(num);
  // Reset the remark
  remarks.textContent = "Let the guesses roll in!";
  //   Reset the number of chances
  chancesLeft.textContent = 20;
}
