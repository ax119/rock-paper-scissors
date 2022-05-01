
var weapon = ['Paper', 'Rock', 'Scissors']

function computerPlay(){
    let randomNum = weapon[Math.floor(Math.random() * weapon.length)]
    return randomNum;
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log(playerSelection + ' ' + 'vs' + ' ' + computerSelection)
        return "Tie!";
    } else if (
        (playerSelection == 'Paper' && computerSelection == 'Rock') ||
        (playerSelection == 'Rock' && computerSelection == 'Scissors') ||
        (playerSelection == 'Scissors' && computerSelection == 'Paper')
    ) {
        console.log(playerSelection + ' ' + 'beats' + ' ' + computerSelection)
        return "You Win!" ;
    } else {
        console.log(playerSelection + ' ' + 'loses to' + ' ' + computerSelection)
        return "You Lose!";
    }

}


    for (let i = 0; i < 5; i++) {
        var playerSelection = weapon[Math.floor(Math.random() * weapon.length)];
        var computerSelection = computerPlay();
        console.log(game()) 

        function game() {
            return(playRound(playerSelection, computerSelection));       
    }
}


