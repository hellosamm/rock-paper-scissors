const humanChoices = document.getElementsByClassName("human");
const computerChoiceElement = document.getElementsByClassName("computer");
const textBox = document.getElementById("text");
const scoreBox = document.getElementById("score");
let human = "";
let computerChoice = "";
let humanScore = 0;
let computerScore = 0;

for (const choice of humanChoices) {
  choice.addEventListener("click", function () {
    // assign .selected class
    for (const element of humanChoices) {
      element.classList.remove("selected");
    }

    this.classList.add("selected");

    // get the human selection
    human = this.innerText;
    console.log("human:", human);

    // get computer selection
    computerChoice = getComputerChoice();
    console.log("computer:", computerChoice);

    // assign computer .selected class

    // play the game with both values
    playGame(human, computerChoice);
  });
}

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

function playGame(human, computerChoice) {
  if (
    (human === "rock" && computerChoice === "paper") ||
    (human === "paper" && computerChoice === "scissors") ||
    (human === "scissors" && computerChoice === "rock")
  ) {
    computerScore++;
    textBox.innerText = `bummer, the computer beat you :/`;
    scoreBox.innerText = `${humanScore} - ${computerScore}`;
  } else if (
    (human === "paper" && computerChoice === "rock") ||
    (human === "scissors" && computerChoice === "paper") ||
    (human === "rock" && computerChoice === "scissors")
  ) {
    humanScore++;
    textBox.innerText = `nice job, you won!`;
    scoreBox.innerText = `${humanScore} - ${computerScore}`;
  } else textBox.innerText = `it's a tie!`;
  scoreBox.innerText = `${humanScore} - ${computerScore}`;

  if (humanScore === 3 || computerScore === 3) winner();
}

function winner() {
  if (humanScore === 3) {
    textBox.innerText = `you beat the computer! nice job, click to play again`;
    scoreBox.innerText = `${humanScore} - ${computerScore}`;
  } else if (computerScore === 3) {
    textBox.innerText = `... looks like the computer beat you, click to play again`;
    scoreBox.innerText = `${humanScore} - ${computerScore}`;
  }
}

function resetGame() {
  computerScore = 0;
  humanScore = 0;
  scoreBox.innerText = `${humanScore} - ${computerScore}`;
}
