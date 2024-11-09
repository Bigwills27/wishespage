let randomNumber = Math.floor(Math.random() * 100) + 1;

function guessNumber() {
  let guess = parseInt(document.getElementById("guessInput").value);
  let message = document.getElementById("message");

  if (guess === randomNumber) {
    message.textContent = "Congratulations! You guessed the correct number.";
  } else if (guess < randomNumber) {
    message.textContent = "Too low. Guess again.";
  } else {
    message.textContent = "Too high. Guess again.";
  }
}
