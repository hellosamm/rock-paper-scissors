let computerScore = 0;
let playerScore = 0;

const playerSelection = document.querySelectorAll("#button");
const results = document.querySelectorAll(".results");
const score = document.querySelectorAll(".score");

function computerSelection() {
  const choices = ["rock", "paper", "scissors"];
  let randomSelection = Math.floor(Math.random() * choices.length);
  let computerChoice = choices[randomSelection];
  console.log(computerChoice);
  return computerChoice;
}

// paperBtn.addEventListener("click", () => playerSelection);

computerSelection();

function playGame() {
  if (playerSelection === computerSelection) {
    results.textContent = "you both selected ${playerSelection}, it's a tie";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore = computerScore++;
    results.textContent =
      "${computerSelection} beats ${playerSelection}, you lost";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore = computerScore++;
    results.textContent =
      "${computerSelection} beats ${playerSelection}, you lost";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore = computerScore++;
    results.textContent =
      "${computerSelection} beats ${playerSelection}, you lost";
  } else {
    playerScore = playerScore++;
    results.textContent =
      "${playerSelection} beats ${computerSelection}, you lost";
  }
}

playGame();
