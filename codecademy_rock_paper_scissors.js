// TASK 1, 2, and 3
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase(); 
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('Error, please type: rock, paper or scissors.');
    }  
}

// TASK 4
// TEST
//console.log(getUserChoice('paper'));
//console.log(getUserChoice('potato'));

// TASK 5
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
};

// TASK 6
// TEST
//console.log(getComputerChoice());
//console.log(getComputerChoice());
//console.log(getComputerChoice());

// TASK 7, 8, 9, AND 10
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'This game is a tie!';
  }
  if (userChoice === 'rock' ) {
    if (computerChoice === 'paper') {
      return 'Sorry, computer won!';
    } else {
      return 'Congratulations, you won!';
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Sorry, computer won!';
    } else {
      return 'Congratulations, you won!';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Sorry, computer won!';
    } else {
      return 'Congratulations, you won!';
    }
  }
  if (userChoice === 'bomb') {
    return 'Congratulations, you won!';
  }
};

// TASK 11
//console.log(determineWinner('rock', 'scissors'));
//console.log(determineWinner('paper', 'scissors'));
//console.log(determineWinner('rock', 'rock'));

// TASK 12 AND 13
const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log(`You threw: ${userChoice}`);
  console.log(`The computer threw: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};


// TEST
playGame()


// TASK 14
// Add a cheat code for bomb









