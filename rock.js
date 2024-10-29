const RPS_MAX = 3;
const CHOICE_OPTIONS = ["rock", "paper", "scissors"];

function getComputerChoice(max, array) {
  // Get a random number between 0 and 2
  let C_choice = Math.floor(Math.random() * RPS_MAX);
  // return what we find at this index of the array
  return array[C_choice];
}

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
      return "stop";
    } else {
      alert(`Sorry "${H_choice}" is not a valid option.`);
      H_choice = prompt("rock, paper or scissors? ").toLowerCase();
    }
  }
  // All being well return valid choice
  return H_choice;
}

// Initiate variables for scores and rounds
let computerScore = 0;
let humanScore = 0;
let totalRounds = 3;
let roundNumber = 1;

// Funtion to determine the results from one round
function playRound(compChoice, humanChoice) {
  // If there's a draw don't update score/round number
  if (compChoice === humanChoice) {
    console.log("It's a draw, lets take that round again.");
    return 0;
  } else {
    let winMessage = `You win! ${humanChoice[0].toUpperCase()}${humanChoice.slice(
      1
    )} beats ${compChoice}.`;
    let loseMessage = `You lose! ${compChoice[0].toUpperCase()}${compChoice.slice(
      1
    )} beats ${humanChoice}.`;
    // Should add a winLose function to avoid so much here
    // Checking through values to determine winner and print result.
    switch (compChoice) {
      case "rock":
        if (humanChoice === "scissors") {
          computerScore++;
          console.log(loseMessage);
        } else {
          humanScore++;
          console.log(winMessage);
        }
        break;
      case "paper":
        if (humanChoice === "rock") {
          computerScore++;
          console.log(loseMessage);
        } else {
          humanScore++;
          console.log(winMessage);
        }
        break;
      case "scissors":
        if (humanChoice === "paper") {
          computerScore++;
          console.log(loseMessage);
        } else {
          humanScore++;
          console.log(winMessage);
        }
        break;
    }
  }
  //increase round number after a round that didn't end in a draw
  roundNumber++;
}

// For every round of the game
while (roundNumber <= totalRounds) {
  // Announce the round number
  console.log(`Round ${roundNumber}`);
  if (
    // if there have been too many invalid entries quit
    playRound(getComputerChoice(RPS_MAX, CHOICE_OPTIONS), getHumanChoice()) ===
    "stop"
  ) {
    break;
  } else {
    // If it's the last round (round number increased in playRound function so >)
    if (roundNumber > totalRounds) {
      continue;
    } else {
      // Report current scores
      console.log(
        `Current Score:  Computer: ${computerScore} You: ${humanScore}`
      );
    }
  }
}

// After all rounds have been played announce final score
console.log(`Final score:\nComputer: ${computerScore} You: ${humanScore}`);
// Message ultimate win or loss
if (humanScore > computerScore) {
  console.log("*********YOU WIN!*********");
} else {
  console.log("**Computer won this time**");
}

// Reset variables before next game
computerScore = 0;
humanScore = 0;
totalRounds = 3;
roundNumber = 1;

/* 
  Pseudocode for playRound function

  If round number isn't more than the total number of rounds to play:

  Play one round:

  Compare the two arguments

  If they are both equal do not increment the number of rounds and message the human.
  "It's a draw, lets take that round again."

  Else look at the computer's choice. 
  
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
