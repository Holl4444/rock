const options = document.querySelector(".choice-container");
const optionsButtons = options.getElementsByTagName("button");
const goAgain = document.getElementById("go-again");
const update = document.getElementById("update");
update.textContent = "Goodluck";
const currentScore = document.getElementById("current-score");
const imageForCompChoice = document.getElementById("comp-choice-img");
const compChoiceLabel = document.getElementById("comp-choice-label");
const compChoiceContainer = document.querySelector(".comp-choice-container");

// Initiate variables for round scores
let humanScore = 0;
let computerScore = 0;
let roundNumber = 1;

// Funtion to determine the results from one round
function playRound(compChoice, humanChoice) {
  displayCompChoice(compChoice);
  resetUpdateClasses();

  // Announce Round Number
  currentScore.textContent = `Round ${roundNumber}`;

  //get result of round and output round win/lose message
  let roundWinner = roundResult(compChoice, humanChoice);
  update.textContent = roundWinner[0];

  if (roundWinner[1] !== "draw") {
    //Update only if not a draw
    roundNumber++;
  }

  // Get overall results and end game if five rounds have passed.
  const play = playGame(roundWinner[1]);

  buttonToggle(play);
}

function playGame(outcome) {
  // Update scores and display text accordingly
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
  // For every round of the game report current scores
  if (roundNumber <= 5) {
    currentScore.textContent += `\nCurrent Score:  Computer: ${computerScore} You: ${humanScore}`;
    return "notEnd";
  } else {
    // After all rounds have been played announce final score
    currentScore.textContent += `\nFinal score: Computer: ${computerScore} You: ${humanScore}`;
    if (humanScore > computerScore) {
      currentScore.textContent = "*****YOU WON THE GAME!*****";
    } else {
      currentScore.textContent = "**Computer won the game**";
    }
    currentScore.classList.toggle("game-result");

    // Reset variables before next game
    computerScore = 0;
    humanScore = 0;
    roundNumber = 1;
    goAgain.classList.toggle("hidden");
    // Flag buttons to switch hidden/enabled status
    return "end";
  }
}

getComputerChoice = () => {
  // Get a random number between 0 and 2 and return the result
  const C_CHOICES = ["rock", "paper", "scissors"];
  let C_choice = Math.floor(Math.random() * 3);

  return C_CHOICES[C_choice];
};

const displayCompChoice = (item) => {
  // Show the computer choice for user
  if (item === "rock") {
    imageForCompChoice.src = "Images/rock-img.png";
  } else if (item === "paper") {
    imageForCompChoice.src = "Images/paper-img.png";
  } else {
    imageForCompChoice.src = "Images/scissors-img.png";
  }
  compChoiceLabel.textContent = `The computer chose ${item}:`;
  compChoiceContainer.classList.toggle("hidden");
};

const resetUpdateClasses = () => {
  // Reset the update box styling ( at start of every round)
  update.classList.toggle("initial-css");
  if (update.classList.contains("win")) {
    update.classList.toggle("win");
  } else if (update.classList.contains("lose")) {
    update.classList.toggle("lose");
  } else if (update.classList.contains("draw")) {
    update.classList.toggle("draw");
  }
  // Announce round Number
  update.textContent = `Round ${roundNumber}`;
};

const buttonToggle = (cont) => {
  if (cont === "end") {
    // Disable all choice buttons and make play again button visible.
    for (let i = 0; i < optionsButtons.length; i++) {
      optionsButtons[i].disabled = true;
    }
    return 1;
  }
};

const roundResult = (choiceC, choiceH) => {
  //Initiate win/lose messages and capitalise choice
  let winMessage = [
    `You win! ${choiceH[0].toUpperCase()}${choiceH.slice(1)} beats ${choiceC}.`,
    "human",
  ];

  let loseMessage = [
    `You lose! ${choiceC[0].toUpperCase()}${choiceC.slice(
      1
    )} beats ${choiceH}.`,
    "comp",
  ];

  let drawMessage = [
    `It's a draw. You both picked ${choiceC}.\nLets try again!`,
    "draw",
  ];

  let resultMessage;

  // If there's a draw don't update score
  if (choiceC === choiceH) {
    resultMessage = drawMessage;
  } else {
    // Checking through values to determine roundWinner and return message to display.
    switch (choiceC) {
      case "rock":
        if (choiceH === "scissors") {
          resultMessage = loseMessage;
        } else {
          resultMessage = winMessage;
        }
        break;
      case "paper":
        if (choiceH === "rock") {
          resultMessage = loseMessage;
        } else {
          resultMessage = winMessage;
        }
        break;
      case "scissors":
        if (choiceH === "paper") {
          resultMessage = loseMessage;
        } else {
          resultMessage = winMessage;
        }
        break;
    }
  }
  return resultMessage;
};

// Run the game based around choice buttons interaction
options.addEventListener("click", (e) => {
  let humanChoice = e.target.id;
  // Hide computer choice from any previous rounds
  if (!compChoiceContainer.classList.contains("hidden")) {
    compChoiceContainer.classList.toggle("hidden");
  }
  playRound(getComputerChoice(), humanChoice);
});

// Eventlistener for rematch button. Resets text and re-enables choice buttons.
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
