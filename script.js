const rps = document.querySelector("#rps");
const roundResult = document.querySelector("#round-result");
const playRoundBtn = document.querySelector("#play-round");
const userScoreEl = document.querySelector("#user-score");
const computerScoreEl= document.querySelector("#Computer-score");

//keep track of the score between human and computer
let humanScore = 0;
let computerScore = 0;
const gameOption = ['rock', 'paper', 'scissors']
const roundLimit = 5;
let roundCounter = 0;


// fuction that get users choice
function getUserChoice(){
    const userChoice  = rps.value;
    rps.value = "";
    if (gameOption.includes(userChoice)){
        return userChoice;
    } else {
        alert("please choose between rock, paper or scissors")
        return null;
    }

};


// function that get computer choice 
function getComputerChoice(){
   choiceNo =  Math.floor(Math.random() * 3);
   if (choiceNo === 0){
    return 'rock'
   } else if (choiceNo === 1){
    return 'scissors'
   } else {
    return 'paper'
   }
};




function playRound( ){   
 // this call getuserchoice function and getcomputerchoice and determine the winner of this round  
    // declare winner if round is complete
    if (roundCounter >= roundLimit){
        return declarewinner();
    }
    //get user choice and computer choice by calling the function
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();
    //if userchoice return vallue is null exit this function
    if (userChoice === null){
        return;
    } 

    //put user and computer scores on the screen
    const userChoilceEl = document.createElement("p");
    userChoilceEl.textContent = 'YOU:: ' + userChoice;
    roundResult.appendChild(userChoilceEl);

    const computerChoiceEl = document.createElement("p")
    computerChoiceEl.textContent = 'COMPUTER:: ' + computerChoice;
    roundResult.appendChild(computerChoiceEl);


    //update round counter
    roundCounter+=1;

    //first check if user & computer match
    if (userChoice === computerChoice) {
        //its draw
        const draw = document.createElement('p')
        draw.style.color = 'blue';
        draw.textContent = "THIS ROUND IS A DRAW"
        roundResult.appendChild(draw);
        console.log("its a draw");
        //exit the code
        return;
    }

    // if userchoice is rock and computerchoice is scissors
    if (userChoice === 'rock' && computerChoice === 'scissors'){
        //declare user as the winner
        humanScore+=1;
        userScoreEl.textContent = "You:: " + humanScore;
        const win = document.createElement('p')
        win.style.color = 'green';
        win.textContent = "CONGRATULATION, YOU WON THIS ROUND"
        roundResult.appendChild(win);

        console.log('You won this round')
        //exit the function
        return;
    } 
    // else if computerchoice is rock and userchoice is scissors
    else if (computerChoice === 'rock' && userChoice === 'scissors'){
        //declare computer as the winner
        computerScore+=1;
        computerScoreEl.textContent = 'Computer:: ' + computerScore;
        const lose = document.createElement('p');
        lose.style.color = 'red';
        lose.textContent = "YOU LOSE THIS ROUND"
        roundResult.appendChild(lose);
        console.log('Computer won this round')
        //exit the function
        return;
    }

    // if userchoice is scissors and computerchoice is paper
    if (userChoice === 'scissors' && computerChoice === 'paper'){
        // declare user as the winner
        humanScore+=1;
        userScoreEl.textContent = "You:: " + humanScore;
        const win = document.createElement('p')
        win.style.color = 'green';
        win.textContent = "CONGRATULATION, YOU WON THIS ROUND"
        roundResult.appendChild(win);
        console.log('You won this round')
        //exit the function
        return;
    }
    // else if computerchoice is scissors and userchoice is paper
    else if (computerChoice === 'scissors' && userChoice === 'paper'){
        //declare computer as the winner
        computerScore+=1;
        computerScoreEl.textContent = 'Computer:: ' + computerScore;
        const lose = document.createElement('p')
        lose.style.color = 'red';
        lose.textContent = "YOU LOSE THIS ROUND"
        roundResult.appendChild(lose);
        console.log('SORRY!!, YOU LOSE THIS ROUND')
        //exit the function
        return;
    }
    // if userchoice is paper and computerchoice is rock
    if (userChoice === 'paper' && computerChoice === 'rock'){
        //declare user as the winner
        humanScore+=1;
        userScoreEl.textContent = "You:: " + humanScore;
        const win = document.createElement('p')
        win.style.color = 'green';
        win.textContent = "CONGRATULATION, YOU WON THIS ROUND"
        roundResult.appendChild(win);
        console.log('You won this round')
        //exit the function
        return;
    }
    // else if computerchoice is paper and userchoice is rock
    else if (computerChoice === 'paper' && userChoice === 'rock'){
        //declare computer as the winner
        computerScore+=1;
        computerScoreEl.textContent = 'Computer:: ' + computerScore;
        const lose = document.createElement('p')
        lose.style.color = 'red';
        lose.textContent = "YOU LOSE THIS ROUND"
        roundResult.appendChild(lose);
        console.log('Computer won this round')
        //exit the function
        return;
    }

}

function declarewinner(){
    const finalRound = document.querySelector("#final-round");
    const winNote = document.createElement("h3");

    if (computerScore === humanScore){
        winNote.textContent = "GAME OVER!!, its a draw"
        winNote.style.color = 'blue';
        finalRound.appendChild(winNote);
        return;

    } else if (computerScore > humanScore){
        winNote.textContent = "GAME OVER!!, computer won,  reload page to play again"
        winNote.style.color = 'red';
        finalRound.append(winNote);
        return;

    } else if((computerScore < humanScore)){
        winNote.textContent = "congrat you won, reload to play again"
        winNote.style.color = 'green'
        finalRound.append(winNote);
        return;
    }



}



playRoundBtn.addEventListener('click', playRound);
