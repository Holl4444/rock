const options = document.querySelector(".choice-container");
const optionsButtons = options.getElementsByTagName("button");
const goAgain = document.getElementById("go-again");
const update = document.getElementById("update");
update.textContent = "Goodluck";
const currentScore = document.getElementById("current-score");
const imageForCompChoice = document.getElementById("comp-choice-img");
const compChoiceLabel = document.getElementById('comp-choice-label');
const compChoiceContainer = document.querySelector('.comp-choice-container');

getComputerChoice = () => {
  const C_CHOICES = ["rock", "paper", "scissors"];
  // Get a random number between 0 and 2
  let C_choice = Math.floor(Math.random() * 3);
  // return what we find at this index of the array
  return C_CHOICES[C_choice];
};

const displayCompChoice = (item) => {
  if (item === "rock") {
    imageForCompChoice.src = "Images/rock-img.png"; 
  } else if (item === "paper") {
    imageForCompChoice.src = "Images/paper-img.png";
  } else {
    imageForCompChoice.src = "Images/scissors-img.png";
  }
  compChoiceLabel.textContent = `The computer chose ${item}:`;
  compChoiceContainer.classList.toggle('hidden');
}

// Initiate variables for round scores
let humanScore = 0;
let computerScore = 0;
let roundNumber = 1;

// Funtion to determine the results from one round
function playRound(compChoice, humanChoice) {
  displayCompChoice(compChoice);
  // Reset the update box styling
  update.classList.toggle("initial-css");
  if (update.classList.contains("win")) {
    update.classList.toggle("win");
  } else if (update.classList.contains("lose")) {
    update.classList.toggle("lose");
  } else if (update.classList.contains("draw")) {
    update.classList.toggle("draw");
  }

  currentScore.textContent = `Round ${roundNumber}`;
  // Initiate win/lose messages and capitalise choice
  let winner = "";
  let winMessage = `You win! ${humanChoice[0].toUpperCase()}${humanChoice.slice(
    1
  )} beats ${compChoice}.`;

  let loseMessage = `You lose! ${compChoice[0].toUpperCase()}${compChoice.slice(
    1
  )} beats ${humanChoice}.`;

  update.textContent = `Round ${roundNumber}`;
  // If there's a draw don't update score
  if (compChoice === humanChoice) {
    update.textContent = `It's a draw. You both picked ${compChoice}.\nLets try again!`;
    winner = "draw";
  } else {
    // Should add a winLose function to avoid so much here
    // Checking through values to determine winner and print result.
    switch (compChoice) {
      case "rock":
        if (humanChoice === "scissors") {
          update.textContent = loseMessage;
          winner = "comp";
        } else {
          update.textContent = winMessage;
          winner = "human";
        }
        break;
      case "paper":
        if (humanChoice === "rock") {
          update.textContent = loseMessage;
          winner = "comp";
        } else {
          update.textContent = winMessage;
          winner = "human";
        }
        break;
      case "scissors":
        if (humanChoice === "paper") {
          update.textContent = loseMessage;
          winner = "comp";
        } else {
          update.textContent = winMessage;
          winner = "human";
        }
        break;
    }
    //Update only if not a draw
    roundNumber++;
  }
  const play = playGame(winner);

  if (play === "end") {
    // Disable all choice buttons and make play again button visible.
    for (let i = 0; i < optionsButtons.length; i++) {
      optionsButtons[i].disabled = true;
    }
    return 1;
  }
}

// Update scores and display text accordingly
function playGame(outcome) {
  if (outcome === "comp") {
    computerScore++;
    update.classList.toggle("lose");
    update.classList.toggle("initial-css");
  } else if (outcome === "human") {
    humanScore++;
    update.classList.toggle("win");
    update.classList.toggle("initial-css");
  } else {
    update.classList.toggle("draw");
    update.classList.toggle("initial-css");
  }
  // For every round of the game announce the round number + report current scores
  if (roundNumber <= 5) {
    currentScore.textContent += `\nCurrent Score:  Computer: ${computerScore} You: ${humanScore}`;
    return "notEnd";
  } else {
    // After all rounds have been played announce final score
    currentScore.textContent += `\nFinal score: Computer: ${computerScore} You: ${humanScore}`;
    if (humanScore > computerScore) {
      currentScore.textContent = "*****YOU WON THE GAME!*****";
    } else {
      currentScore.textContent = "**Computer won this time**";
    }
    currentScore.classList.toggle("game-result");

    // Reset variables before next game
    computerScore = 0;
    humanScore = 0;
    roundNumber = 1;
    goAgain.classList.toggle("hidden");
    return "end";
  }
}

// Run the game based around choice buttons interaction
options.addEventListener("click", (e) => {
  let humanChoice = e.target.id;
  if (!compChoiceContainer.classList.contains("hidden")){
  compChoiceContainer.classList.toggle("hidden");
  }
  playRound(getComputerChoice(), humanChoice);
});

// Eventlistener for another match button. Resets text and buttons.
goAgain.addEventListener("click", () => {
  goAgain.classList.toggle("hidden");
  compChoiceContainer.classList.toggle("hidden");
  update.textContent = "Good luck!";
  for (let i = 0; i < optionsButtons.length; i++) {
    optionsButtons[i].disabled = false;
  }
  currentScore.textContent = "";
  currentScore.classList.toggle("game-result");
});
