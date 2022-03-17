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
            return "It's a draw! Rock cant beat rock";
        }
        //returns the values of computer and player if both had invalid values for error debugging
        else{
            return "Error-> \nComputer: " + computerSelection + "\nPlayer: " + playerSelection;
        }
    }
    else if (playerSelection === 'paper'){
        if (computerSelection === 'paper'){
            return "It's a draw! Paper cant beat Paper";
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
            return "It's a draw! scissors cant beat scissors";
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

function game(){
    let round = 1;
    while(round <= 5){
        console.log(round);
        let playerSelection = window.prompt("Rock paper or scissors?: ");
        playerSelection = playerSelection.toLowerCase();
        console.log(playerSelection);
        state = true;
        while(state){
            if(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors'){
                state = false;
            }
            else{
                alert("Only type rock papers or scissors. round repeated");
                playerSelection = window.prompt("Rock paper or scissors?: ");
                playerSelection = playerSelection.toLowerCase();
            }
        }
        const computerSelection = computerPlay();
        console.log("Player: " + playerSelection);
        console.log("Computer: " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        round++;
    }
    
}
