const RPS_MAX = 3;
const CHOICE_OPTIONS = ["rock", "paper", "scissors"];

function getComputerChoice(max, array) {
  /* Get a random number between 0 and 2*/
  let C_choice = Math.floor(Math.random() * RPS_MAX);
  /* Initialise array with game choice options */

  return array[C_choice];
}
console.log(getComputerChoice(RPS_MAX, CHOICE_OPTIONS));

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
