const headAndTails = document.querySelectorAll('.htbutton');
const heads = document.querySelector('#heads-button');
const tails = document.querySelector('#tails-button');

// add event listener to head and tail buttons
headAndTails.forEach(button => {
    button.addEventListener('click', iniateGuess)
})

//Let user guess heads/tails and show step two after player choice made
function iniateGuess(event) {
    //step 1: button styling on head or tail selection + assign variable for playerGuess

    let playerGuess = '';

    if (heads === event.target) {
        heads.style.color = 'white';
        heads.style.background = '#6D7969';
        tails.style.color = 'black';
        tails.style.background = 'white';
        playerGuess = 'heads';
    }
    else if (tails == event.target) {
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
}

async function showResult(playerGuess) {
    // console.log(playerGuess);
    const coinOption = playerGuess;
    console.log(coinOption);
    const res = await fetch(`/api?guess=${coinOption}`);
    const data = await res.json();

    console.log(data);

    //**fill in result? coin and computer and player score 
    let coinStatus = document.querySelector('#coin-status');
    let playerScore = document.querySelector('.player-box');
    let computerScore = document.querySelector('.computer-box');
}
