let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function computerPlay() {
  const choices = ["p", "r", "s"];
  const randomNum =  Math.floor(Math.random() * 3) ;
  return choices[randomNum];
}

function convertWord(letter) {
      if (letter === "p") return "Paper";
      if (letter === "r") return "Rock";
      return "Scissor"
}

function win(playerChoice, computerChoice) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertWord(playerChoice) + " beats " + convertWord(computerChoice) + ". You Win!";
    document.querySelector(".score-board").classList.add("green-glow");
    setTimeout(() => document.querySelector(".score-board").classList.remove("green-glow"), 350);
}

function lose(playerChoice, computerChoice) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  playerScore_span.innerHTML = playerScore;
  result_p.innerHTML = convertWord(playerChoice) + " loses to " + convertWord(computerChoice) + ". You Lose...";
  document.querySelector(".score-board").classList.add("red-glow");
  setTimeout(() => document.querySelector(".score-board").classList.remove("red-glow"), 350);
}

function draw(playerChoice, computerChoice) {
  result_p.innerHTML = convertWord(playerChoice) + " cancels out " + convertWord(computerChoice) + ". Tie!";
  document.querySelector(".score-board").classList.add("grey-glow");
  setTimeout(() => document.querySelector(".score-board").classList.remove("grey-glow"), 350);
}

function game (playerChoice) {
    const computerChoice = computerPlay();
    switch (playerChoice + computerChoice)  {
      case "rs":
      case "pr":
      case "sp":
        win(playerChoice, computerChoice);
        break;
      case "sr":
      case "rp":
      case "ps":
        lose(playerChoice, computerChoice)
        break;
      case "ss":
      case "rr":
      case "pp":
        draw(playerChoice, computerChoice)
        break;
  }

  if (playerScore === 5) {
      result_p.innerHTML = "VICTORY";
      playerScore_span.innerHTML = 0;
      computerScore_span.innerHTML = 0;
      playerScore = 0;
      computerScore = 0;

  }
  if (computerScore === 5) {
      result_p.innerHTML = "DEFEAT";
      playerScore_span.innerHTML = 0;
      computerScore_span.innerHTML = 0;
      playerScore = 0;
      computerScore = 0;
  }
  else if (result_p.innerHTML === "VICTORY" || "DEFEAT"){

  }
}

function main() {
    rock_div.addEventListener("click", () => game("r") );

    paper_div.addEventListener("click", () => game("p") );

    scissor_div.addEventListener("click", () => game("s") );
}


main();
