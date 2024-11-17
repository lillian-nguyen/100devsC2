//select all crest elements
let crests = document.querySelectorAll('.crest');

//add event listeners to each crest element: mouseover, mouseout, click
crests.forEach(crest => {
    crest.addEventListener('mouseover', fadeCrests);
    crest.addEventListener('mouseout', showCrests);
    //click which house is clicked and assign to variable
    crest.addEventListener('click', (event) => {
        let clickedCrest = event.currentTarget.getAttribute('id');
        let currentCrest = ''

        crests.forEach(crest => {
            //clicking a crest adds the flex-direction: column property
            document.querySelector('.house-container').classList.add('columnCrests');

            clickedCrest == 'gryffindor' ? currentCrest = 'gryffindor' : clickedCrest == 'ravenclaw' ? currentCrest = 'ravenclaw' : clickedCrest == 'slytherin' ? currentCrest = 'slytherin' : currentCrest = 'hufflepuff';
        })
        runHouse(currentCrest)
    })
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

function runHouse(currentCrest) {
    fetch(`https://hp-api.herokuapp.com/api/characters/house/${currentCrest}`)
        .then(res => res.json()) //parse response as JSON
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(`error ${err}`);
        });
}

/*

CURRENTLY WORKING ON:
- resize and reposition column crests
- pull name and img data 
- get backup photo if img blank

OBJECTIVES:
- create container for house photos
- add classes that rearrange flex to flex column and position to the left side on click 
- change opacity of other house crests after clicking on one

COMPLETED:
- 11/14/24: changing opacity of other houses on hover
- 11/15/24: getting data back for characters via checkclick/runhouse functions
*/
