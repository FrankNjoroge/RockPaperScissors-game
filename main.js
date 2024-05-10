//initialize scores
let humanScore = 0;
let computerScore = 0;

//get computer choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

//get human choice
function getHumanChoice() {
  const humanChoice = prompt("Rock, Paper, Scissors. Choose one", "");
  return humanChoice;
}

function playRound(computerChoice, humanChoice) {
  humanChoice = humanChoice.toLowerCase();
  //win conditions
  if (
    (computerChoice === "rock" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "scissors") ||
    (computerChoice === "scissors" && humanChoice === "rock")
  ) {
    console.log(`You WIN! Computer picked ${computerChoice}`);
    humanScore++;
  }
  //lose conditions
  else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    console.log(`You LOSE! Computer picked ${computerChoice}`);
    computerScore++;
  }
  //tie conditions
  else if (
    (computerChoice === "rock" && humanChoice === "rock") ||
    (computerChoice === "paper" && humanChoice === "paper") ||
    (computerChoice === "scissors" && humanChoice === "scissors")
  ) {
    console.log(`You tie! Computer also picked ${computerChoice}`);
  } else {
    console.log("Not a valid choice, choose between rock,paper or scissors!");
  }
}
function declareWinner() {
  if (humanScore > computerScore) {
    console.log("You Win the Game!");
  } else if (computerScore > humanScore) {
    console.log("Computer Wins the Game!");
  } else {
    console.log("The Game ends in a Tie!");
  }
}

for (let i = 0; i < 5; i++) {
  let computerChoice = getComputerChoice();
  let humanChoice = getHumanChoice();
  playRound(computerChoice, humanChoice);
}
declareWinner();

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  humanScore = 0; // Reset scores for a new game
  computerScore = 0;
  console.clear(); // Clear the console for a fresh start
  // You can optionally add a message indicating a new game has begun
  for (let i = 0; i < 5; i++) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    playRound(computerChoice, humanChoice);
  }
  declareWinner();
});
