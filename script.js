//keep track of the score between human and computer
let humanScore = 0;
let computerScore = 0;
const gameOption = ['rock', 'paper', 'scissors']
const rounds = 5;

// fuction that get users choice
function getUserChoice(){
    // while user choice not in rock, paper or scissor keep prompting for user input
        //put usr`s choice into the variable userchoice  
        // convert it to lowercase
    //return user choice 
    let userChoice;
    while(!gameOption.includes(userChoice)){
        userChoice = prompt("GAME TIME:: Rock, Paper or Scissors")
        if (userChoice == null){
            alert('GAME EXITED');
            return null;
        }
        userChoice = userChoice.toLowerCase();
    }
    return userChoice;
    
}


// function that get computer choice 
function getComputerChoice(){
   // randomly generate value from 0 to 2
   // if value 0 return rock 
   // if 1 return scissors
   // if 2 return paper 
   choiceNo =  Math.floor(Math.random() * 3);
   if (choiceNo === 0){
    return 'rock'
   } else if (choiceNo === 1){
    return 'scissors'
   } else {
    return 'paper'
   }
}

function playRound( ){
 // this call getuserchoice function and getcomputerchoice and determine the winner of this round
    
    //get user choice and computer choice by calling the function
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();
    console.log('YOU:: ' + userChoice)
    console.log('COMPUTER:: ' + computerChoice)
    
    //return null to stop the code from running if user choice return null
    if (userChoice === null){
        return null;
    }

    //first check if user & computer match
    if (userChoice === computerChoice) {
        //its draw
        console.log("its a draw");
        //exit the code
        return;
    }

    // if userchoice is rock and computerchoice is scissors
    if (userChoice === 'rock' && computerChoice === 'scissors'){
        //declare user as the winner
        humanScore+=1;
        console.log('You won this round')
        //exit the function
        return;
    } 
    // else if computerchoice is rock and userchoice is scissors
    else if (computerChoice === 'rock' && userChoice === 'scissors'){
        //declare computer as the winner
        computerScore+=1;
        console.log('Computer won this round')
        //exit the function
        return;
    }

    // if userchoice is scissors and computerchoice is paper
    if (userChoice === 'scissors' && computerChoice === 'paper'){
        // declare user as the winner
        humanScore+=1;
        console.log('You won this round')
        //exit the function
        return;
    }
    // else if computerchoice is scissors and userchoice is paper
    else if (computerChoice === 'scissors' && userChoice === 'paper'){
        //declare computer as the winner
        computerScore+=1;
        console.log('Computer won this round')
        //exit the function
        return;
    }
    // if userchoice is paper and computerchoice is rock
    if (userChoice === 'paper' && computerChoice === 'rock'){
        //declare user as the winner
        humanScore+=1;
        console.log('You won this round')
        //exit the function
        return;
    }
    // else if computerchoice is paper and userchoice is rock
    else if (computerChoice === 'paper' && userChoice === 'rock'){
        //declare computer as the winner
        computerScore+=1;
        console.log('Computer won this round')
        //exit the function
        return;
    }

}


function playGame(){
    for (let i = 0; i < rounds; i++){
        if (playRound() === null){
            console.log("GAME EXITED RELOAD THE PAGE AND MAKE SURE YOU input: " + gameOption)
            return;
        }
        
    }

    console.log('YOUR SCORE IS:: ' + humanScore )
    console.log('COMPUTER SCORE IS:: ' + computerScore)
}


playGame();