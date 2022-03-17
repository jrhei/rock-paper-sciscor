function computerPlay(){
    let rock = 1;
    let paper = 2;
    let scissors = 3;
    outcome = Math.floor(Math.random()*3) + 1;
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