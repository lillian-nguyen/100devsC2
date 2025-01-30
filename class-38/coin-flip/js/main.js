const headAndTails = document.querySelectorAll('.htbutton');
const heads = document.querySelector('#heads-button');
const tails = document.querySelector('#tails-button');

let playerGuess = '';

// add event listener to head and tail buttons
headAndTails.forEach(button => {
    button.addEventListener('click', iniateGuess)
})

//Let user guess heads/tails and show step two after player choice made
function iniateGuess(event) {
    //step 1: button styling on head or tail selection + assign variable for playerGuess

    if ('heads-button' === event.target.id) {
        heads.style.color = 'white';
        heads.style.background = '#6D7969';
        tails.style.color = 'black';
        tails.style.background = 'white';
        playerGuess = 'heads';
    }
    else if ('tails-button' == event.target.id) {
        tails.style.color = 'white';
        tails.style.background = '#6D7969';
        heads.style.color = 'black';
        heads.style.background = 'white';
        playerGuess = 'tails';
    }
    //show step 2
    document.querySelector('.step2').style.visibility = 'visible';
}

//make request to api when flip coin button clicked
let flipButton = document.querySelector('#flip-button');

flipButton.addEventListener('click', showResult);
flipButton.addEventListener('click', showScore);

function showScore() {
    document.querySelector('.player').style.visibility = 'visible';
    document.querySelector('.computer').style.visibility = 'visible';
    flipButton.innerText = 'Flip Again';
}

let playerScore = 0;
let computerScore = 0;

async function showResult() {
    const res = await fetch(`/api?guess=${playerGuess}`);
    const data = await res.json();

    //**fill in result? coin and computer and player score 
    let coinStatus = document.querySelector('#coin-status');
    let player = document.querySelector('.player-box');
    let computer = document.querySelector('.computer-box');

    let randomizationResult = data.result;

    //change coin name
    coinStatus.innerText = `${randomizationResult}`

    if (playerGuess === randomizationResult) {
        playerScore += 1;
        player.innerText = playerScore;
    } else if (playerGuess !== randomizationResult) {
        computerScore += 1;
        computer.innerText = computerScore;
    }
}