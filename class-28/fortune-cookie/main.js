//event listeners for button 
let button = document.querySelector('button');
button.addEventListener('mouseover', () => {
    document.querySelector('img').classList.add('shakeImg')
})
button.addEventListener('mouseout', () => {
    document.querySelector('img').classList.remove('shakeImg')
})
button.addEventListener('click', checkClick)

const fade = document.querySelector(".paper");

//click type
let firstClick = true;

function getFetch() {
    const url = 'https://api.adviceslip.com/advice'

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            document.getElementById('fortune').innerText = data.slip.advice;

            fadeIn();
            button.innerText = 'Get new fortune'
        })

        .catch(err => {
            console.log(`error ${err}`)
        });
}

function resetClick() {
    fade.style.opacity = 0;
    firstClick = true;
    button.innerText = 'One fortune, please!'
}

function checkClick() {
    firstClick == true ? getFetch() : resetClick();
}

function fadeIn() {
    var opacity = 0;
    var intervalID = setInterval(function () {

        if (opacity < 1) {
            opacity = opacity + 0.1
            fade.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    }, 100);

    firstClick = false;
}
