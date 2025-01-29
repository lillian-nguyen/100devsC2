const headAndTails = document.querySelectorAll('.htbutton');
const heads = document.querySelector('#heads-button');
const tails = document.querySelector('#tails-button');

// add event listener to head and tail buttons
headAndTails.forEach(button => {
    button.addEventListener('click', iniateGuess)
})

//button styling on head or tail selection + assign variable for playerGuess
function iniateGuess(event) {
    let playerGuess = '';

    if (heads == event.target) {
        heads.style.color = 'white';
        heads.style.background = 'blue';
        tails.style.color = 'black';
        tails.style.background = 'white';
        playerGuess = 'heads'
    }
    else if (tails == event.target) {
        tails.style.color = 'white';
        tails.style.background = 'blue';
        heads.style.color = 'black';
        heads.style.background = 'white';
        playerGuess = 'tails'
    }
}