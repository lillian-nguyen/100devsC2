//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', showPicture)

function showPicture() {
    const choice = document.querySelector('input').value;
    const url = `https://api.nasa.gov/planetary/apod?api_key=4oOimujZIyBmNC3y2pc73Ev7YMD2pfPxth3cJX2K&date=${choice}`;

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data);
            document.querySelector('h2').innerText = data.title;
            document.querySelector('img').src = data.hdurl;
            document.querySelector('h3').innerText = data.explanation;
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}
