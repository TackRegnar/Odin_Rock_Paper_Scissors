function computerPlay() {
  let x = random(1,3);

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

function play_round(playerSelection,computerSelection) {
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
  let playerSelection = ""
  for (let i = 0; i < 5; i++) {
    playerSelection = window.prompt('Choose: Rock, Paper, Scissors: ');
    console.log(play_round(playerSelection.toLowerCase(),computerPlay()));
  }
}

game();
