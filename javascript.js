
const stats = document.querySelector('#stats');

const pscore = document.createElement('div');
pscore.classList.add('player-score');
pscore.textContent = 'Player score: 0';

const cscore = document.createElement('div');
cscore.classList.add('player-score');
cscore.textContent = 'Computer score: 0';

stats.appendChild(pscore);
stats.appendChild(cscore);
function computerPlay(){
    //give designated values from 1-3 to rock, papers and scissors
    let rock = 1;
    let paper = 2;
    let scissors = 3;

    //randomize a number from 1-3 and save it to outcome variable
    outcome = Math.floor(Math.random()*3) + 1;

    /*conditional statements that return rock paper or scissor
    based on the outcome*/
    if (outcome === rock){
        return "rock";
    }
    else if(outcome === paper) {
        return "paper";
    }
    else if (outcome === scissors){
        return "scissors";
    }
    else{
        return (outcome + "error");
    }
}
//function that starts the round
function playRound(playerSelection, computerSelection){
    //compare value of playerSelection and computerSelection
    //determine the outcome of the winner based on rock-paper-scissor rules
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock'){
        if (computerSelection === 'paper'){
            return "You lose! Paper beats Rock";
        }
        else if (computerSelection === 'scissors'){
            return "You win! Rock beats scissors";
        }
        else if (computerSelection === 'rock'){
            return "It's a draw! Rock cant beat rock. Repeating round!";
        }
        //returns the values of computer and player if both had invalid values for error debugging
        else{
            return "Error-> \nComputer: " + computerSelection + "\nPlayer: " + playerSelection;
        }
    }
    else if (playerSelection === 'paper'){
        if (computerSelection === 'paper'){
            return "It's a draw! Paper cant beat Paper. Repeating round!";
        }
        else if (computerSelection === 'scissors'){
            return "You lose! scissors beats Paper";
        }
        else if (computerSelection === 'rock'){
            return "You win! Paper beats Rock";
        }
        //returns the values of computer and player if both had invalid values for error debugging
        else{
            return "Error-> \nComputer: " + computerSelection + "\nPlayer: " + playerSelection;
        }
    }
    else if (playerSelection === 'scissors'){
        if (computerSelection === 'paper'){
            return "You win! scissors beats Paper";
        }
        else if (computerSelection === 'scissors'){
            return "It's a draw! scissors cant beat scissors. Repeating round!";
        }
        else if (computerSelection === 'rock'){
            return "You lose! rock beats scissors";
        }
        //returns the values of computer and player if both had invalid values for error debugging
        else{
            return "Error-> \nComputer: " + computerSelection + "\nPlayer: " + playerSelection;
        }
    }
}
let round = 1;
let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
        console.log(button.id);
        let winner = game(button.id);

        if (winner === 'player'){
            playerScore++;
            pscore.textContent = "Player score:" + playerScore;
        }
        else if (winner === 'computer'){
            computerScore++;
            cscore.textContent = "Computer score:" + computerScore;
        }
        else{
            console.log('draw');
        }
        if (playerScore === 5){
            pscore.textContent = "Player score:" + playerScore;
            alert('You have won!');
            playerScore = 0;
            computerScore = 0;
        }
        else if (computerScore === 5){
            cscore.textContent = "Computer score:" + computerScore;
            alert('Oh no! The computer won!');
            playerScore = 0;
            computerScore = 0;
        }
        
        
        console.log('player score: ' + playerScore);
        console.log('Comp score: ' + computerScore);
    });
});


function game(choice){ 
    //initialize round and, player and computer scores
    
    let playerSelection = choice;
    playerSelection = playerSelection.toLowerCase(); //save button choice to a a var
    const computerSelection = computerPlay(); //save random computer choice to a var
    
    console.log("Player: " + playerSelection);
    console.log("Computer: " + computerSelection);
    outcome = playRound(playerSelection, computerSelection);
    if (outcome.indexOf('win!') > -1){
        alert(outcome);
        return 'player';
    }
    else if (outcome.indexOf('lose!') > -1){
        alert(outcome);
        return 'computer';
    }
    else{
        alert(outcome);
    }
    
}

