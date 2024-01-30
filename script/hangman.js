const maxAttempts = 8;
const wordList = ["football", "shopping", "stockholm", "business"];

let selectedWord = "";
let hiddenWord = [];
let attemptsLeft = maxAttempts;

function selectRandomWord() {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    return wordList[randomIndex];
}

function initializeGame() {
    selectedWord = selectRandomWord();
    hiddenWord = Array(selectedWord.length).fill("_");
    attemptsLeft = maxAttempts;
}

function displayGameState() {
    alert(`Word: ${hiddenWord.join(" ")}\nAttempts left: ${attemptsLeft}`);
}

function getUserInput() {
    return prompt("Guess a letter:").toLowerCase();
}

function updateHiddenWord(letter) {
    for (let i = 0; i < selectedWord.length; i++) {
        if (selectedWord[i] === letter) {
            hiddenWord[i] = letter;
        }
    }
}

function isGameWon() {
    return hiddenWord.join("") === selectedWord;
}

while (attemptsLeft > 0) {
    displayGameState();

    const guess = getUserInput();

    if (guess === null) {
        alert("Game canceled.");
        break;
    }

    if (guess.length !== 1 || !/[a-z]/.test(guess)) {
        alert("Please enter a single letter.");
        continue;
    }

    if (selectedWord.includes(guess)) {
        updateHiddenWord(guess);

        if (isGameWon()) {
            alert("Congratulations! You won!");
            break;
        }
    } else {
        attemptsLeft--;
        alert(`Incorrect guess. Attempts left: ${attemptsLeft}`);

        if (attemptsLeft === 0) {
            alert(`Sorry, you ran out of attempts. The word was "${selectedWord}".`);
        }
    }
}

alert("Game over! Thanks for playing!");
