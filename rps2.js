let computerScore = 0;
let playerScore = 0;


let playState = false;

function getComputerChoice() {
  const computer = ["rock", "paper", "scissors"];
  const computer = math.floor(math.random() * 3);
  return computer[randomIndex];
}

function playGame() {
  if (playerSelection == computerSelection);
    return "it's a tie, you both selected ${playerSelection}"
  } else if 
  (playerSelection === "rock" && computerSelection === "paper") ||
  (playerSelection === "paper" && computerSelection === "scissors") ||
  (playerSelection === "scissors" && computerSelection === "rock"){
    computerScore ++1
    return '${computerSelection} beats ${playerSelection}, you lost';

  } else if 
  (playerSelection === "paper" && computerSelection === "rock") ||
  (playerSelection === "scissors" && computerSelection === "paper") ||
  (playerSelection === "rock" && computerSelection === "scissors"){
    playerScore ++1
    return '${playerSelection} beats ${computerSelection}, you won!';
  } else {
    return("try again")
  }

  

  

}
