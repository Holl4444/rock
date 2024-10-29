function getComputerChoice() {
  let C_choice = Math.floor(Math.random() * 3); /*+ 1*/
  /*switch (choice) {
    case 1:
      choice = "rock";
      break;
    case 2:
      choice = "paper";
      break;
    case 3:
      choice = "scissors";
      break;
    default:
      choice = "An error has occurred";
  }
  return choice;
*/
  const choiceOptions = ["rock", "paper", "scissors"];
  return choiceOptions[C_choice];
}

function getHumanChoice() {
  let H_choice = prompt("rock, paper or scissors? ").toLowerCase();
  while (
    H_choice !== "rock" &&
    H_choice !== "paper" &&
    H_choice !== "scissors"
  ) {
    alert(`Sorry "${H_choice}" is not a valid option.`);
    H_choice = prompt("rock, paper or scissors? ").toLowerCase();
  }
  return H_choice;
}
console.log(getHumanChoice());

let computerScore = 0;
let humanScore = 0;

function playRound(C_choice, H_choice) {
  /* Play one round */
}
