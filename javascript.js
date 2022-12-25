function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    const capitalize = word => { return word.charAt(0).toUpperCase() + word.slice(1); }
    const winStatement = (winner, loser) => { return `You Win! ${capitalize(winner)} beats ${capitalize(loser)}`; }
    const loseStatement = (winner, loser) => { return `You Lose! ${capitalize(winner)} beats ${capitalize(loser)}`; }
    const winningChoice = {'rock': 'paper', 'paper': 'scissors', 'scissors': 'rock'};
    
    playerSelection = playerSelection.toLowerCase();
    
    if(playerSelection === computerSelection) return "Oh! It's a tie";
    else if(playerSelection === winningChoice[computerSelection]) return winStatement(playerSelection, computerSelection);
    else return loseStatement(computerSelection, playerSelection);
}

const playerSelection = 'rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));