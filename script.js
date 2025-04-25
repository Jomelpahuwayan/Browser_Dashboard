// Name: Jomel A. Pahuwayan 
// Course/Year/Section: BSIT-2B

const words = ['apple', 'banana', 'grape', 'orange', 'kiwi', 'peach', 'mango'];
let secretWord = words[Math.floor(Math.random() * words.length)];
let attemptsLeft = 5;
let gameOver = false;

console.log("Secret word (for testing):", secretWord); // For testing

function submitGuess() {
  if (gameOver) return;

  const input = document.getElementById('guessInput');
  const message = document.getElementById('message');
  const restartBtn = document.getElementById('restartBtn');

  let guess = input.value.trim().toLowerCase();
  input.value = ''; // Clear input field

  if (guess === '') {
    attemptsLeft--;
    message.textContent = `Incorrect guess. You have ${attemptsLeft} attempts left. Try again!`;
  } else if (guess === secretWord) {
    message.textContent = "Congratulations! You guessed the secret word!";
    message.className = 'win';
    gameOver = true;
    restartBtn.style.display = 'inline-block';
    document.body.style.backgroundColor = '#d4edda';
  } else {
    attemptsLeft--;
    if (attemptsLeft > 0) {
      message.textContent = `Incorrect guess. You have ${attemptsLeft} attempts left. Try again!`;
    } else {
      message.textContent = `Game over! The secret word was '${secretWord}'.`;
      message.className = 'lose';
      gameOver = true;
      restartBtn.style.display = 'inline-block';
      document.body.style.backgroundColor = '#f8d7da';
    }
  }
}

function restartGame() {
  secretWord = words[Math.floor(Math.random() * words.length)];
  attemptsLeft = 5;
  gameOver = false;
  document.getElementById('message').textContent = '';
  document.getElementById('message').className = '';
  document.getElementById('restartBtn').style.display = 'none';
  document.getElementById('guessInput').value = '';
  document.body.style.backgroundColor = '#f4f4f4';
  console.log("Secret word (for testing):", secretWord); // For testing
}

// Optional: Allow Enter key to submit
document.getElementById('guessInput').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    submitGuess();
  }
});
