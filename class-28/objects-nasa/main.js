//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', showPicture)

function showPicture() {
    const choice = document.querySelector('input').value;
    const url = `https://api.nasa.gov/planetary/apod?api_key=4oOimujZIyBmNC3y2pc73Ev7YMD2pfPxth3cJX2K&date=${choice}`;

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data);
            if (data.media_type === 'image') {
                document.querySelector('img').src = data.hdurl;
            } else if (data.media_type === 'video') {
                document.querySelector('iframe').src = data.url;
            }

            document.querySelector('h2').innerText = data.title;
            document.querySelector('h3').innerText = data.explanation;
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

//2/3/21 (hide and show video or image. not both (can set to null for ex) -- clear out img or iframe on each load)
//2:18:14 duplicate api template and rename card game
// push work: make sure you're using the same deck (changes on refresh) local storage for deckId