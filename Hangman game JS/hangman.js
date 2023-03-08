// Word to be guessed
const word = "javascript";

// Number of remaining guesses
let remaining = 6;

// Letters that have been correctly guessed
const correct = [];

// Get elements
const wordEl = document.getElementById("word");
const remainingEl = document.getElementById("remaining");
const letterEl = document.getElementById("letter");

// Update game state
function update() {
  // Display word with correctly guessed letters
    wordEl.innerHTML = word.split("").map(letter => {
        if (correct.includes(letter)) {
        return letter;
        }
        return "_";
    }).join(" ");

    // Display remaining guesses
    remainingEl.innerHTML = remaining;
}

// Check game status
function checkStatus() {
    // Check if player has won
    if (!wordEl.innerHTML.includes("_")) {
        alert("You won!");
        return;
    }

    // Check if player has lost
    if (remaining === 0) {
        alert("You lost!");
    }
}

// Handle form
