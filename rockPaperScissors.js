const getUserChoice = function (userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    } else {
      console.log('Please enter valid choice.');
    }
  };
  
  function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  }
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'You tied!';
    } else if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Computer Wins!';
      } else {
        return 'You Won!';
      }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
          return 'You Won!';
        } else {
          return 'Computer Wins!';
        }
    } else if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Computer Wins!';
      } else {
        return 'You Won!';
      }
    }
  }
  
  function playGame() {
    let userChoice = getUserChoice('Paper');
    let computerChoice = getComputerChoice();
    console.log(`You: ${userChoice}`);
    console.log(`Computer: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();
  
  