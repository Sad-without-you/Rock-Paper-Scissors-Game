const choices = ['rock', 'paper', 'scissors'];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerChoice);
    let result = "";

    // Remove previous selections
    choices.forEach(choice => {
        document.getElementById(choice).classList.remove('selected-player', 'selected-computer');
    });

    // Add selection highlight
    document.getElementById(playerChoice).classList.add('selected-player');
    document.getElementById(computerChoice).classList.add('selected-computer');

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else {
        switch (playerChoice) {
            case 'rock':
                result = (computerChoice === 'scissors') ? "You win!" : "Computer wins!";
                break;
            case 'paper':
                result = (computerChoice === 'rock') ? "You win!" : "Computer wins!";
                break;
            case 'scissors':
                result = (computerChoice === 'paper') ? "You win!" : "Computer wins!";
                break;
            default:
                result = "Something went wrong!";
        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.style.color = (result === "You win!") ? "green" : (result === "Computer wins!") ? "red" : "black";
    resultDisplay.textContent = result;
}
