//global variable for search input
let drink = null;

const initialSearch = document.querySelector('.initial-button')
initialSearch.addEventListener('click', getDrink)

//for new search
const searchAgain = document.querySelectorAll('.search-button');
searchAgain.forEach(button => {
    button.addEventListener('click', updateSearch);
})


function getDrink() {
    //get value from input
    let firstSearch = document.querySelector('.initial-input').value;

    console.log(`searching for: ${firstSearch}`)

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${firstSearch}`)
        .then(res => res.json()) //parse response as JSON
        .then(data => {

            //store drink data in variables
            const currentDrinkData = data.drinks[0];
            let drinkObjects = data.drinks;

            if (data.drinks !== null) {
                showDrink(currentDrinkData, drinkObjects)

            } else if (data.drinks == null) {
                showErrorScreen();
            }

        })
        .catch(err => {
            console.log(`error ${err}`);
            showErrorScreen();
        });
}

function showDrink(currentDrinkData, drinkObjects) {
    //show recipe card components
    showIngredients(currentDrinkData);
    showInstructions(currentDrinkData);
    getRecipeCard(currentDrinkData);
    rotateRecipes(drinkObjects);
    console.log(currentDrinkData)
}

function updateSearch() {
    let newSearch = document.querySelector('.search-input').value;
    document.querySelector('.initial-input').value = newSearch;
    getDrink();
}

// show loading screen text after hitting search button
function loadingScreen() {
    //show loading scren
    document.querySelector('.intro-container').style.transform = 'rotateY(180deg)';

    //loading screen disappears after 2 seconds
    setTimeout(() => {
        document.querySelector('.intro-container').style.visibility = 'hidden';
    }, 2000)
}

function getRecipeCard(currentDrinkData) {

    //drink recipe card shows up after previous disappears
    setTimeout(() => {
        document.querySelector('.drink-info').style.visibility = 'visible';
    }, 2000)
    document.querySelector('.recipe-row').style.visibility = 'visible';
    document.querySelector('#drink-name').innerText = currentDrinkData.strDrink;
    document.querySelector('img').style.visibility = 'visible'
    document.querySelector('img').alt = currentDrinkData.strDrink;
    document.querySelector('img').src = currentDrinkData.strDrinkThumb;
}

function showIngredients(currentDrinkData) {
    if (currentDrinkData) {
        // target #ingredientsList element
        const ingredientsList = document.getElementById('ingredientsList');
        ingredientsList.innerHTML = ''; //clear previous ingredients

        // loop through ingredients to create list items
        for (let i = 1; i <= 15; i++) {
            const ingredient = currentDrinkData[`strIngredient${i}`];
            const amount = currentDrinkData[`strMeasure${i}`];

            // add ingredient if present
            if (ingredient) {
                const ingredientListItem = document.createElement('li');
                ingredientListItem.innerHTML = `${amount ? amount + ' ' : ''}${ingredient}`;
                ingredientsList.appendChild(ingredientListItem);
                ingredientListItem.style.width = '75%';
                ingredientsList.style.margin = '0 0 0 2.5rem'
            }
        }
    } else {
        console.log('no drink data')
    }
}

function showInstructions(currentDrinkData) {
    // target #instructionSteps element
    let instructionsList = document.getElementById('instructionSteps');
    instructionsList.innerHTML = ''; //clear previous instructions

    // create arr variable for instructions (separated by '.')
    let instructionsArr = currentDrinkData.strInstructions.split('.').filter(e => e !== '');

    // loop through instructions to create list items
    for (let i = 0; i < instructionsArr.length; i++) {

        //get value of interest
        const instructions = instructionsArr[i];

        const instructionsEntry = document.createElement('li');
        instructionsEntry.appendChild(document.createTextNode(instructions));
        instructionsList.appendChild(instructionsEntry);
    }
}

function showErrorScreen() {
    // //show drink info
    document.querySelector('.drink-info').style.visibility = 'visible';

    //change h2 to show error message
    document.querySelector('#drink-name').innerText = 'Not found. Please try again.'
    document.querySelector('.recipe-row').style.visibility = 'hidden';
    document.querySelector('img').style.visibility = 'hidden';
}


//carousel option shows if there are more than 1 search results
// assign variable for index
let index = 0;

function rotateRecipes(drinkObjects) {
    //create variables for left & right arrows
    const leftArrow = document.querySelector('.ph-arrow-circle-left');
    const rightArrow = document.querySelector('.ph-arrow-circle-right');

    //event listeners for arrows
    leftArrow.addEventListener('click', () => {
        //function to find index
        index = (index - 1 + drinkObjects.length) % drinkObjects.length;
        currentDrinkData = drinkObjects[index];
        showDrink(currentDrinkData);
    })

    rightArrow.addEventListener('click', () => {
        //function to find index 
        index = (index + 1) % drinkObjects.length;
        currentDrinkData = drinkObjects[index];
        showDrink(currentDrinkData);
    })

    if (Object.keys(drinkObjects).length > 1) {
        leftArrow.style.visibility = 'visible';
        rightArrow.style.visibility = 'visible';
    } else {
        leftArrow.style.visibility = 'hidden';
        rightArrow.style.visibility = 'hidden';
    }
}

/*

CURRENTLY WORKING ON:
- initial search input seems to be buggy (searching whiskey failed)

OBJECTIVES:
- media queries 
- fix loading screen (bonus: loading screen in between searches)

COMPLETED:
-want drink w/ spaces to be searchable
(loading screen effect)
- loading ingredients & instructions: https://stackoverflow.com/questions/17773938/add-a-list-item-through-javascript
- recycling search button 
- loading error message (see above comment in loadDrink function) --> include search button for error !! clear drink value after searching so I can recycle search button
- show the arrows if the array data is > 1 (10/21/24)
-cycle through drinks w/ arrow icons - carousel of drinks (if you don't put 0 for array). Resolved multiple clicks for arrow icons (10/22/24)
*/
