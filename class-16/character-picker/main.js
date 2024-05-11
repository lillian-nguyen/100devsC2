//assign variables for each character
const kairi = document.querySelector('.kairi-info')
const sora = document.querySelector('.sora-info')
const riku = document.querySelector('.riku-info')

//add event listener to trigger hover changes (mouseover & mouseout)
kairi.addEventListener('mouseover', kairiHover)
kairi.addEventListener('mouseout', kairiRevert)

sora.addEventListener('mouseover', soraHover)
sora.addEventListener('mouseout', soraRevert)

riku.addEventListener('mouseover', rikuHover)
riku.addEventListener('mouseout', rikuRevert)

function kairiHover() {
    kairi.classList.add('kairi-border');
    document.querySelector('.kairi-img').style.transform = 'scale(0.36)';
}

function kairiRevert() {
    kairi.classList.remove('kairi-border')
    document.querySelector('.kairi-img').style.transform = 'scale(0.32)';
}

function soraHover() {
    sora.classList.add('sora-border');
    document.querySelector('.sora-img').style.transform = 'scale(1)';
}

function soraRevert() {
    sora.classList.remove('sora-border');
    document.querySelector('.sora-img').style.transform = 'scale(0.9)';
}

function rikuHover() {
    riku.classList.add('riku-border');
    document.querySelector('.riku-img').style.transform = 'scale(1)';
}

function rikuRevert() {
    riku.classList.remove('riku-border');
    document.querySelector('.riku-img').style.transform = 'scale(0.9)';
}