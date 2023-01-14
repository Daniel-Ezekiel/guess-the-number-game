"use-strict";

// Chances left
let chancesLeft = 20;
let score = document.querySelector(".score > span");
score.textContent = chancesLeft;

// Highscore
let highscore = document.querySelector(".highscore > span");
highscore.textContent = 0;

// THE  Secret NUMBER
let secretNumber = Math.ceil(Math.random() * 20);
console.log(secretNumber);

// Show remark function
function showRemark(message) {
  return (document.querySelector(".remark").textContent = message);
}

// Guess Event Listener and function to play game
document.querySelector(".guess-btn").addEventListener("click", function () {
  // first obtain the value from the user input
  let guessInput = document.querySelector("input").value;

  //   Check if input box has a value or is empty
  if (guessInput < 1 || guessInput > 20) {
    alert("Kindly enter a number between 1 and 20");
    return;
  }

  // If chances left has run out
  if (chancesLeft < 1) {
    showRemark("YOU LOSE! 💀");
    return;
  }

  // Check if guess is correct or not
  guessInput = Number(guessInput);
  if (guessInput === secretNumber) {
    showRemark("You are correct!");
    document.querySelector("body").classList.add("green");

    // Check if the current score is higher than the highscore
    highscore.textContent = chancesLeft;
  } else {
    guessInput > secretNumber
      ? showRemark("❌ Too High...Try again!")
      : showRemark("❌ Too Low...Try again!");
    chancesLeft--;
    score.textContent = chancesLeft;
  }
});

// Reset and play game again
document.querySelector(".reset-btn").addEventListener("click", function () {
  // Change background color back to default
  document.querySelector("body").classList.remove("green");

  //   Clear the input box
  document.querySelector("input").value = "";

  // Generate another secret number
  secretNumber = Math.ceil(Math.random() * 20);
  console.log(secretNumber);

  // Reset the remark
  showRemark("Let the guesses roll in!");

  //   Reset the number of chances
  chancesLeft = 20;
  score.textContent = chancesLeft;
});
