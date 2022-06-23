function computerPlay() {
  let x = random(1, 3);

  switch (x) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";
      break;
    default:
      return "error";
  }
}

function random(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function play_round(playerSelection, computerSelection) {

  if (playerSelection === "rock" && computerSelection === "rock") {
    return "It's a Tie!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You Lose! Paper beats Rock.";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You Win! Rock beats scissors.";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You Win! Papper beats rock.";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "It's a Tie!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You Lose! Scissors beats paper.";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You Lose! Rock beats Scissors.";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You Win! Scissors beats Paper"
  } else if (playerSelection === "scissors" && computerSelection === "scissors") {
    return "It's a Tie!";
  } else {
    return "Error";
  }
}

function game() {
  //buttons
  const rock_btn = document.getElementById('rock_btn');
  const paper_btn = document.getElementById("paper_btn");
  const scissors_btn = document.getElementById("scissors_btn");
  //show round results
  const round_result_div = document.getElementById("round_result_div");
  const round_result = document.createElement("p");
  //show end game results
  const end_game_msg_div = document.getElementById("end_game_msg_div");
  const end_game_msg = document.createElement("p");
  round_result_div.appendChild(round_result);
  end_game_msg_div.appendChild(end_game_msg); // TODO add showing scores and who wins when it reachs 5 rounds played

  rock_btn.addEventListener('click', () => {
    round_result.textContent = play_round("rock", computerPlay());
  });

  paper_btn.addEventListener('click', () => {
    round_result.textContent = play_round("paper", computerPlay());
  });

  scissors_btn.addEventListener('click', () => {
    round_result.textContent = play_round("scissors", computerPlay());
  });
}

game();
