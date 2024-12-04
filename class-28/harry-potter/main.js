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
            //clicking hides horizontal crest view but shows column view
            document.querySelector('.columnCrests').classList.remove('hidden');
            document.querySelector('.house-container').classList.add('hidden');

            clickedCrest == 'gryffindor' ? currentCrest = 'gryffindor' : clickedCrest == 'ravenclaw' ? currentCrest = 'ravenclaw' : clickedCrest == 'slytherin' ? currentCrest = 'slytherin' : currentCrest = 'hufflepuff';

            console.log(currentCrest)
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

//get data 
function runHouse(currentCrest) {
    fetch(`https://hp-api.herokuapp.com/api/characters/house/${currentCrest}`)
        .then(res => res.json()) //parse response as JSON
        .then(data => {
            let dataInfo = data;
            console.log(data)

            showPhotos(dataInfo);
        })
        .catch(err => {
            console.log(`error ${err}`);
        });
};

function showPhotos(dataInfo) {
    //declare variable for + clear character space container
    let characterSpace = document.querySelector('.character-space');
    let characterPhoto = document.querySelector('.character-pic');
    characterSpace.innerHTML = '';
    characterPhoto.innerHTML = '';

    //loop through array to get character names
    for (let i = 0; i < 48; i++) {
        const characterName = dataInfo[i].name;
        const characterImgSrc = dataInfo[i].image;
        console.log(characterName);

        //add character name if present
        if (characterName && characterImgSrc) {
            const characterNameEntry = document.createElement('h4');
            characterNameEntry.innerHTML = characterName;
            characterSpace.appendChild(characterNameEntry);
        }

        if (characterImgSrc) {
            const characterImg = document.createElement('img');
            characterImg.src = characterImgSrc;
            characterPhoto.appendChild(characterImg);
        }
    }
}

// <!-- <div class="yearbook-view">
// <div id="character-container">
//     <div class="character-space"></div>
// </div>
// </div> -->

// function showIngredients(currentDrinkData) {
//     if (currentDrinkData) {
//         // target #ingredientsList element
//         const ingredientsList = document.getElementById('ingredientsList');
//         ingredientsList.innerText = ''; //clear previous ingredients

//         // loop through ingredients to create list items
//         for (let i = 1; i <= 15; i++) {
//             const ingredient = currentDrinkData[`strIngredient${i}`];
//             const amount = currentDrinkData[`strMeasure${i}`];

//             // add ingredient if present
//             if (ingredient) {
//                 const ingredientListItem = document.createElement('li');
//                 ingredientListItem.innerHTML = `${amount ? amount + ' ' : ''}${ingredient}`;
//                 ingredientsList.appendChild(ingredientListItem);
//                 ingredientListItem.style.width = '75%';
//                 ingredientsList.style.margin = '0 0 0 2.5rem'
//             }
//         }
//     } else {
//         console.log('no drink data')
//     }


/*
CURRENTLY WORKING ON:

- trying to use appendChild for different div containers, where name and img are in html (so I can wrap images instead of having them all centered)
- get backup photo if img blank

OBJECTIVES:
- create container for house photos
- add classes that rearrange flex to flex column and position to the left side on click 
- change opacity of other house crests after clicking on one

COMPLETED:
- 11/14/24: changing opacity of other houses on hover
- 11/15/24: getting data back for characters via checkclick/runhouse functions
- 12/03/24: resize and reposition column crests
- 12/03/24: pull name and img data 
*/
