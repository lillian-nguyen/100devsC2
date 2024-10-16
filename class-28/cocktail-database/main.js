//create global variable for drink data
let currentDrinkData = null;

//event listener for .search button
// const searchButtons = document.querySelectorAll('.search-button');

// searchButtons.forEach(button => {
//     button.addEventListener('click', getDrink);
// })

const initialSearch = document.querySelector('.initial-button')
initialSearch.addEventListener('click', getDrink)

//for new search
const searchAgain = document.querySelectorAll('.search-button');
searchAgain.forEach(button => {
    button.addEventListener('click', updateSearch);
})

//global variable for search input
let drink = null;


function getDrink() {
    //get value from input
    drink = document.querySelector('.initial-input').value;

    console.log(`searching for: ${drink}`)

    //show loading screen for 2 seconds
    loadingScreen();

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(res => res.json()) //parse response as JSON
        .then(data => {

            //store drink data in global variable
            currentDrinkData = data.drinks[0];

            if (data.drinks !== null) {
                console.log(data.drinks);

                // document.querySelector('#drink-name').innerText = data.drinks[0].strDrink;
                // document.querySelector('img').alt = data.drinks[0].strDrink;
                // document.querySelector('img').src = data.drinks[0].strDrinkThumb;

                //show recipe card components
                showIngredients();
                showInstructions();
                getRecipeCard();

            } else if (data.drinks == null) {
                showErrorScreen();
            }

        })
        .catch(err => {
            console.log(`error ${err}`);
            showErrorScreen();
        });
}

function updateSearch() {
    let newSearch = document.querySelector('.search-input').value;
    document.querySelector('.initial-input').value = newSearch;
    console.log(drink)
    getDrink();
}

// show loading screen text after hitting search button
function loadingScreen() {
    //show loading scren
    document.querySelector('.intro-container').style.transform = 'rotateY(180deg)';

    //loading screen disappears after 2 seconds
    setTimeout(() => {
        document.querySelector('.intro-container').style.visibility = 'hidden';
    }, 800)
}

function getRecipeCard() {

    //drink recipe card shows up after previous disappears
    setTimeout(() => {
        document.querySelector('.drink-info').style.visibility = 'visible';
    }, 1220)

    document.querySelector('.recipe-row').style.visibility = 'visible';
    document.querySelector('#drink-name').innerText = currentDrinkData.strDrink;
    document.querySelector('img').style.visibility = 'visible'
    document.querySelector('img').alt = currentDrinkData.strDrink;
    document.querySelector('img').src = currentDrinkData.strDrinkThumb;
}

function showIngredients() {
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
                ingredientListItem.innerText = `${amount ? amount + ' ' : ''}${ingredient}`;
                ingredientsList.appendChild(ingredientListItem);
                ingredientListItem.style.width = '75%';
                ingredientsList.style.margin = '0 0 0 2.5rem'
            }
        }
    } else {
        console.log('no drink data')
    }
}

function showInstructions() {
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

    /* show error screen after delay
     setTimeout(() => {
         document.querySelector('.error-screen').style.visibility = 'visible';
     }, 1220) */

}

/*

CURRENTLY WORKING ON:
-cycle through drinks - carousel of drinks (if you don't put 0 for array)

OBJECTIVES:
- text shadows for text

COMPLETED:
-want drink w/ spaces to be searchable
(loading screen effect)
- loading ingredients & instructions: https://stackoverflow.com/questions/17773938/add-a-list-item-through-javascript
- recycling search button 
- loading error message (see above comment in loadDrink function) --> include search button for error !! clear drink value after searching so I can recycle search button
*/
