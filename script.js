const choices = ["rock", "paper", "scissors"];
const player = document.getElementById("playerDisplay");
const computer = document.getElementById("computerDisplay");
const result = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
// inital player and computer score;
let Playerscore = 0;
let Computerscore = 0;

function playGame(playerChoice) {
  // computer choice any one value randomly
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let res = "";
  if (playerChoice === computerChoice) {
    res = "IT'S A TIE!";
  } else {
    // check the condition WIN or LOSE on (player vs computer)
    switch (playerChoice) {
      case "rock":
        res = computerChoice === "scissors" ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "paper":
        res = computerChoice === "rock" ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "scissors":
        res = computerChoice === "paper" ? "YOU WIN!" : "YOU LOSE!";
        break;
    }
  }

  player.textContent = `Player: ${playerChoice}`;
  computer.textContent = `Computer: ${computerChoice}`;
  result.textContent = res;
  //   initaly color class removed
  result.classList.remove("greenTxt", "redTxt");
  // add class to showcasing color Green
  switch (res) {
    case "YOU WIN!":
      result.classList.add("greenTxt");
      playerScoreDisplay.textContent = ++Playerscore;
      break;
    case "YOU LOSE!":
      result.classList.add("redTxt");
      computerScoreDisplay.textContent = ++Computerscore;
      break;
  }
}
