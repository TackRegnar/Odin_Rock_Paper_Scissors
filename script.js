
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
    globalScore_computer++;
    check_for_winner()
    computer_score.textContent = "Computer " + globalScore_computer;
    return "You Lose! Paper beats Rock.";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    globalScore_player++;
    check_for_winner()
    player_score.textContent = "Player " + globalScore_player;
    return "You Win! Rock beats scissors.";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    globalScore_player++;
    check_for_winner()
    player_score.textContent = "Player " + globalScore_player;
    return "You Win! Papper beats rock.";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "It's a Tie!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    globalScore_computer++;
    check_for_winner()
    computer_score.textContent = "Computer " + globalScore_computer;
    return "You Lose! Scissors beats paper.";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    globalScore_computer++;
    check_for_winner()
    computer_score.textContent = "Computer " + globalScore_computer;
    return "You Lose! Rock beats Scissors.";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    globalScore_player++;
    check_for_winner()
    player_score.textContent = "Player " + globalScore_player;
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

function setup() {
  window.globalScore_player = 0;
  window.globalScore_computer = 0;

  //show round results
  const round_result_div = document.getElementById("round_result_div");
  window.round_result = document.createElement("p");
  window.player_score = document.createElement("p");
  window.computer_score = document.createElement("p");
  //show end game results
  const end_game_msg_div = document.getElementById("end_game_msg_div");
  window.end_game_msg = document.createElement("p");
  round_result_div.appendChild(player_score);
  round_result_div.appendChild(round_result);
  round_result_div.appendChild(computer_score);
  end_game_msg_div.appendChild(end_game_msg);

  player_score.textContent = "Player " + globalScore_player;
  round_result.textContent = "";
  computer_score.textContent = "Computer " + globalScore_computer;
}

function check_for_winner() { //TODO ask play if they want to play again.
  if (globalScore_player >= 5) {
    el_remover();
    end_game_msg.textContent = "You win the game.";
  } else if (globalScore_computer >= 5) {
    el_remover();
    end_game_msg.textContent = "The computers wins the game.";
  }

}

function el_remover() { //TODO STOP the clicking once 5 score is reached. Below code dont not seem to do so.
  rock_btn.removeEventListener('click', () => {
    round_result.textContent = play_round("rock", computerPlay());
  });

  paper_btn.removeEventListener('click', () => {
    round_result.textContent = play_round("paper", computerPlay());
  });

  scissors_btn.removeEventListener('click', () => {
    round_result.textContent = play_round("scissors", computerPlay());
  });
}

setup();
game();
