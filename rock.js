const RPS_MAX = 3;
const CHOICE_OPTIONS = ["rock", "paper", "scissors"];

function getComputerChoice(max, array) {
  // Get a random number between 0 and 2
  let C_choice = Math.floor(Math.random() * RPS_MAX);
  // return what we find at this index of the array
  return array[C_choice];
}
console.log(getComputerChoice(RPS_MAX, CHOICE_OPTIONS));

function getHumanChoice() {
  //ask user for choice input and cover for differences in case
  let H_choice = prompt("rock, paper or scissors? ").toLowerCase();
  //Set up a variable to stop unlimited invalid entries
  let invalidEntries = 0;
  // if the user input isnt valid alert and ask again until valid or
  // there have been more than 3 invalid attempts
  while (
    H_choice !== "rock" &&
    H_choice !== "paper" &&
    H_choice !== "scissors"
  ) {
    invalidEntries++;
    if (invalidEntries > 3) {
      alert("Too many invalid entries, ending programme.");
      break;
    } else {
      alert(`Sorry "${H_choice}" is not a valid option.`);
      H_choice = prompt("rock, paper or scissors? ").toLowerCase();
    }
  }
  // All being well return valid choice
  return H_choice;
}
console.log(getHumanChoice());

// initiate variables for scores and rounds
let computerScore = 0;
let humanScore = 0;
let totalRounds = 5;
let roundNumber = 1;

function playRound(C_choice, H_choice) {
  /* 

  If round number isn't more than the total number of rounds to play:

  Play one round:

  Compare the two arguments

  If they are both equal do not increment the number of rounds and message the human.
  "It's a draw, lets take that round again."

  Else look at C_choise. 
  
  rock > scissors
  paper > rock
  scissors > paper
  

  If it's rock
    If H_choice is scissors
      computerScore increases by 1
      Message human "You lose! Rock beats scissors."
    Else 
      humanScore increases by 1
      Message human `You win! Your choice beats rock.`
  Else if it's paper
    If H_choice is rock
      computerScore increases by 1
      Message human "You lose! Paper beats rock."
    Else
      humanScore increases by 1
      Message human `You win! Your choice beats paper.`
  Else (if it's scissors)
    If H_choice is paper
      computerScore increases by 1
      Message human "You lose! Scissors beat paper."
    Else
      humanScore increases by 1
      Message human `You win! Your choice beats scissors.`
  
  Message the current scores

  Increment round number by 1;

    let winMessage = `You win! Your choice beats the computer's choice.`

    let loseMessage = `You lose! The computer's choice beats your choice.`
  
   */
}
