//select all crest elements
let crests = document.querySelectorAll('.crest');

//add event listeners to each crest element: mouseover, mouseout, click
crests.forEach(crest => {
    crest.addEventListener('mouseover', fadeCrests);
    crest.addEventListener('mouseout', showCrests);
    crest.addEventListener('click', checkClick)
})

//change opacity when hovered / revert to original opacity when leaving hover
function fadeCrests(event) {
    //get element currently being hovered over
    let hoveredCrest = event.target;

    //loop through and fade crest if it's not being hovered over
    crests.forEach(crest => {
        if (crest !== hoveredCrest) {
            crest.style.opacity = 0.2;
        }
    })
};

function showCrests() {
    //reset all opacities when not hovering over any crests
    crests.forEach(crest => {
        crest.style.opacity = 1;
    })
}

//click which house is clicked and assign to variable
function checkClick(event) {
    //get clicked element
    let clickedCrest = event.target;

    if (clickedCrest == document.getElementById('gryffindor')) {
        currentCrest = 'gryffindor';
        console.log(currentCrest)
    }

    runHouse();
}

function runHouse(currentCrest) {
    fetch(`https://hp-api.herokuapp.com/api/characters/house/${currentCrest}`)
        .then(res => res.json()) //parse response as JSON
        .then(data => {
            checkClick()
            console.log(data)
        })
        .catch(err => {
            console.log(`error ${err}`);
        });

}


/*

CURRENTLY WORKING ON:
- getting data back for characters via checkclick/runhouse functions

OBJECTIVES:
- change opacity of other house crests after clicking on one

COMPLETED:
- 11/14/24: changing opacity of other houses on hover
*/
