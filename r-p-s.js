const choiceButtons = document.querySelectorAll(".choiceButtons");
const playerText = document.querySelectorAll(".playerText");
const computerText = document.querySelectorAll(".computerText");
const score = document.querySelector(".scoreboard");
const restart = document.querySelector(".restart");

let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;

choiceButtons.forEach((button) =>
  button.addEventListener("click", () => {
    playerSelection = button.textContent;
    computerTurn();
    playerText.textContent = "you picked: ${playerSelection}";
    computerText.textContent = "${computerSelection}";
  })
);

function computerTurn() {
  let choice = math.floor(math.random() * 3 + 1);
  if (choice === 1) {
    return "rock";
  } else if (choice === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function rpc(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    results.textContent =
      "you lost... ${computerSelection} beats ${playerSelection}";
    ++computerScore;
    updateScore();
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    results.textContent =
      "you losts... ${computerSelection} beats ${playerSelection}";
    ++computerScore;
    updateScore();
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    results.textContent =
      "you lost... ${computerSelection} beats ${playerSelection}";
    ++computerScore;
    updateScore();
  } else if (playerSelection === computerSelection) {
    results.textContent =
      "it's a draw... you both selected ${computerSelection}";
    updateScore();
  } else {
    results.textContent =
      "you won! ${playerSelection} beats ${computerSelection}";
    ++playerScore;
    updateScore();
  }
}
