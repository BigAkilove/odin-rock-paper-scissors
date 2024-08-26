let computerResult = document.querySelector('.computer-choice');
  let playerResult = document.querySelector('.player-choice');
  let roundResult = document.querySelector('.round-result');
  let scores = document.querySelector('.scores');
  let winner = document.querySelector('.winner');

  let gameContainer = document.querySelector('#rock-paper-scissors-container');
  let playerMove;

  function getComputerChoice() {
    let randomNumber = Math.random();
    let computerMove;

    if (randomNumber >= 0 && randomNumber < 1/3) {
      computerMove = 'scissors';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
      computerMove = 'paper';
    } else if (randomNumber >= 2/3 && randomNumber < 1) {
      computerMove = 'rock';
    }
    computerResult.innerText = 'The computer has played ' + computerMove;
    return computerMove;
  }


  gameContainer.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.className) {
      case 'scissors':
        playerMove = 'scissors';
        break;
      case 'paper':
        playerMove = 'paper';
        break;
      case 'rock':
        playerMove = 'rock';
        break;
    }
    playRound();
  });

  function getHumanChoice() {
    playerMove = playerMove.toLowerCase();
    playerResult.innerText = 'The player has played ' + playerMove;
    if (playerMove === 'paper' || playerMove === 'scissors' || playerMove === 'rock') {
    } else {
      result.innerText = 'invalid move!'
      getHumanChoice();
    }
    return playerMove;
  }

  let humanScore = 0, computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    let result;

    if (humanChoice === 'scissors') {
      if (computerChoice === 'scissors') {
        result = 'tie';
      } else if (computerChoice === 'paper') {
        result = 'win';
      } else if (computerChoice === 'rock') {
        result = 'lose';
      }
    } else if (humanChoice === 'paper') {
      if (computerChoice === 'scissors') {
        result = 'lose';
      } else if (computerChoice === 'paper') {
        result = 'tie';
      } else if (computerChoice === 'rock') {
        result = 'win';
      } 
    }  else if (humanChoice === 'rock') {
      if (computerChoice === 'scissors') {
        result = 'win';
      } else if (computerChoice === 'paper') {
        result = 'lose';
      } else if (computerChoice === 'rock') {
        result = 'tie';
      }
    }

    if (result === 'win') {
      if (humanScore < 5 && computerScore < 5) {
        humanScore++;
        roundResult.innerText = 'You win! ' + humanChoice + ' beats ' + computerChoice;
      }
    } else if (result === 'lose') {
      if (humanScore < 5 && computerScore < 5) {
        computerScore++;
        roundResult.innerText = 'You lose! ' + computerChoice + ' beats ' + humanChoice;
      }
    } else if (result === 'tie') {
      if (humanScore < 5 && computerScore < 5) {
        roundResult.innerText = 'You played the same move as the computer!';
      }
    }
    scores.innerText = 'Your score: ' + humanScore + ', Computer score: ' + computerScore;
    endTheMatch();
  }

  let matchEnd = false;

  function endTheMatch () {
    if (matchEnd === false) {
      if (humanScore === 5) {
        matchEnd = true;
        winner.innerText = 'You reached 5 first, you win!';
      } else if (computerScore === 5) {
        matchEnd = false;
        winner.innerHTML = 'The computer reached 5 first, you lose!'
      }
    }
  }