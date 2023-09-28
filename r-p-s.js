let playerScore = 0;
let computerScore = 0;

function computerPlay() {
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
