var randomNumber = null;

function generateNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

function startGame() {
    randomNumber = generateNumber();
    var userGuess = prompt("Guess a number between 1 and 5:");

    if (userGuess === null) {
        alert("Game cancelled.");
        return;
    }

    userGuess = parseInt(userGuess);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 5) {
        alert("Invalid input. Please enter a number between 1 and 5.");
    } else if (userGuess === randomNumber) {
        alert("🎉 Correct! You guessed the number!");
    } else {
        alert(`❌ Wrong! The correct number was ${randomNumber}.`);
    }
}

function restartGame() {
    startGame();
}