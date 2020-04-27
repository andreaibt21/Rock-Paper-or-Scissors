const getUserChoice = userInput => {
 userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'|| userInput === 'bomb'){
    return userInput
  } 
  else {console.log('errorrr!')}
};

const getComputerChoice = () => {
let randomNumber = Math.floor(Math.random() * 3);
  switch ( randomNumber) {
    case 0: return 'rock';
    case 1: return 'paper';
    case 2: return 'scissors';
  } 
};

const determineWinner = (userChoice, computerChoice) => {
  if( userChoice === computerChoice){
     return 'the game is a tie';
     };
     if ( userChoice === 'rock'){
    if (computerChoice === 'paper'){
       return 'Computer won!'
     } else { return 'User won!'}
   };
    if (userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return 'Computer won!'
    } else { return 'User won!' }
  };
    if (userChoice === 'scissors'){
    if ( computerChoice === 'rock'){
      return 'Computer won!'
    } else {return 'User won!'}
  };
  if (userChoice === 'bomb'){
    if(computerChoice === 'rock'){
      return 'Bomb always win!'
    } else { return 'Bomb always win!'}
  }
};

 const playGame = () => {
   let userChoice = getUserChoice('rock');
   //add your choice avobe (rock, scissors, paper and bomb)
   let computerChoice = getComputerChoice();
 console.log(` User: ${userChoice} Computer: ${computerChoice}` );
console.log(determineWinner(userChoice,computerChoice))
 };

playGame();

