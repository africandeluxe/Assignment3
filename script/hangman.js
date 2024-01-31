let gameStats = {
  numberOfGames: 0,
  wins: 0,
  loses: 0,
};

const savedStats = localStorage.getItem("hangmanStats");
if (savedStats) {
  gameStats = JSON.parse(savedStats);
}

function updateGameStats() {
  document.querySelector(".number-of-games").innerText =
    gameStats.numberOfGames;
  document.querySelector(".wins").innerText = gameStats.wins;
  document.querySelector(".loses").innerText = gameStats.loses;
}

function updateStatsAndLocalStorage() {
  gameStats.numberOfGames++;
  updateGameStats();
  localStorage.setItem("hangmanStats", JSON.stringify(gameStats));
}

function confirmClearLocalStorage() {
  const confirmation = confirm(
    "Are you sure about your game statistics deletion?"
  );
  if (confirmation) {
    clearLocalStorage();
  } else {
    alert("Your game statistics remain in your browser!");
  }
}

function clearLocalStorage() {
  localStorage.removeItem("hangmanStats");
  localStorage.removeItem(".wins");
  localStorage.removeItem(".loses");

  alert("Your game statistics has been removed from your browser!");

  location.reload();
}

const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const hangmanImage = document.querySelector(".hangman-box img");
const hangmanModal = document.querySelector(".hangman-modal");
const playAgainBtn = hangmanModal.querySelector("button");

document.querySelector(".download-btn-cn")?.remove();

let currentWord, correctLetters, wrongGuessCount;
const maxGuesses = 6;

const resetGame = () => {
  correctLetters = [];
  wrongGuessCount = 0;
  hangmanImage.src = "images/hangman-0.svg";
  guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
  wordDisplay.innerHTML = currentWord
    .split("")
    .map(() => `<li class="letter"></li>`)
    .join("");
  keyboardDiv
    .querySelectorAll("button")
    .forEach((btn) => (btn.disabled = false));
  hangmanModal.classList.remove("show");
};

document.addEventListener("DOMContentLoaded", function () {
const getRandomWord = () => {
  const { word, hint } =
    hangmanDatabase[Math.floor(Math.random() * hangmanDatabase.length)];
  currentWord = word;
  document.querySelector(".hint-text b").innerText = hint;
  resetGame();

  updateGameStats();
};

const gameOver = (isVictory) => {
  const modalText = isVictory
    ? `Great job! The correct word was:`
    : "Maybe next time! The correct word was:";
  hangmanModal.querySelector("img").src = `images/${
    isVictory ? "victory" : "lost"
  }.gif`;
  hangmanModal.querySelector("h4").innerText = isVictory
    ? "Congrats!"
    : "Game Over!";
  hangmanModal.querySelector(
    "p"
  ).innerHTML = `${modalText} <b>${currentWord}</b>`;
  hangmanModal.classList.add("show");

  if (isVictory) {
    gameStats.wins++;
  } else {
    gameStats.loses++;
  }

  updateStatsAndLocalStorage();
};

const initGame = (button, clickedLetter) => {
  if (currentWord.includes(clickedLetter)) {
    [...currentWord].forEach((letter, index) => {
      if (letter === clickedLetter) {
        correctLetters.push(letter);
        wordDisplay.querySelectorAll("li")[index].innerText = letter;
        wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
      }
    });
  } else {
    wrongGuessCount++;
    hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;
  }
  button.disabled = true;
  guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

  if (wrongGuessCount === maxGuesses) return gameOver(false);
  if (correctLetters.length === currentWord.length) return gameOver(true);
};

for (let i = 97; i <= 122; i++) {
  const button = document.createElement("button");
  button.innerText = String.fromCharCode(i);
  keyboardDiv.appendChild(button);
  button.addEventListener("click", (e) =>
    initGame(e.target, String.fromCharCode(i))
  );
}

getRandomWord();
playAgainBtn.addEventListener("click", getRandomWord);

document.addEventListener("keydown", (e) => {
  const pressedKey = e.key.toLowerCase();
  if (/^[a-z]$/.test(pressedKey)) {
    const button = Array.from(keyboardDiv.querySelectorAll("button")).find(
      (btn) => btn.innerText.toLowerCase() === pressedKey && !btn.disabled
    );
    if (button) {
      initGame(button, pressedKey);
    }
  }
});

NodeList.prototype.contains = function (text) {
  return Array.from(this).some(
    (element) => element.innerText.toLowerCase() === text.toLowerCase()
  );
};

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && hangmanModal.classList.contains("show")) {
    getRandomWord();
  }
  });
});