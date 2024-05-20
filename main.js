//initialize scores
let humanScore = 0;
let computerScore = 0;

//get computer choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
function playRound(computerChoice, humanChoice) {
  //win conditions
  if (
    (computerChoice === "rock" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "scissors") ||
    (computerChoice === "scissors" && humanChoice === "rock")
  ) {
    humanScore++;
    return "You Win this round!";
  }
  //lose conditions
  else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    computerScore++;
    return `Comp wins this round! It chose ${computerChoice}`;
  } else if (
    (computerChoice === "rock" && humanChoice === "rock") ||
    (computerChoice === "paper" && humanChoice === "paper") ||
    (computerChoice === "scissors" && humanChoice === "scissors")
  ) {
    return "Tie!";
  }
}

const btnContainer = document.querySelector(".btn-container");
btnContainer.addEventListener("click", (e) => {
  let playerChoice;
  const computerChoice = getComputerChoice();
  if (e.target.id == "rock") {
    playerChoice = "rock";
  } else if (e.target.id == "paper") {
    playerChoice = "paper";
  } else {
    playerChoice = "scissors";
  }
  const roundResult = playRound(computerChoice, playerChoice);

  declareWinner(roundResult);
});

function declareWinner(roundResult) {
  const results = document.querySelector(".results");
  results.childNodes[0].textContent = roundResult;
  results.childNodes[3].textContent = `Your Score: ${humanScore}`;
  results.childNodes[5].textContent = `Computer Score: ${computerScore}`;
  if (humanScore == 5) {
    results.childNodes[5].textContent = "You WIN the Game!";
    resetScoresAndDisableBtns();
  } else if (computerScore == 5) {
    results.childNodes[5].textContent = "Computer WINS the Game!";
    resetScoresAndDisableBtns();
  } else {
    document
      .querySelectorAll(".btn-container button")
      .forEach((btn) => btn.removeAttribute("disabled"));
  }
}

function resetScoresAndDisableBtns() {
  humanScore = 0;
  computerScore = 0;
  const btns = document.querySelectorAll(".btn-container button");
  btns.forEach((btn) => btn.setAttribute("disabled", ""));
}

const playAgainBtn = document.querySelector("#playAgain");
playAgainBtn.addEventListener("click", () => declareWinner());
