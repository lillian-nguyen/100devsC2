//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

//event listener for .search button
document.querySelector('button').addEventListener('click', getDrink);

function getDrink() {
    //get value from input
    let drink = document.querySelector('input').value;
    console.log(drink)

    //show loading screen for 2 seconds
    loadingScreen();

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(res => res.json()) //parse response as JSON
        .then(data => {
            if (data.drinks !== null) {
                console.log(data.drinks);
                document.querySelector('#drink-name').innerText = data.drinks[0].strDrink;
                document.querySelector('img').alt = data.drinks[0].strDrink;
                document.querySelector('img').src = data.drinks[0].strDrinkThumb;
                document.querySelector('#instructions').innerText = data.drinks[0].strInstructions;
                document.querySelector('#ingredients').innerText = data.drinks[0].strIngredient1;
                console.log(data.drinks[0].strIngredient1)

                getRecipeCard();
                drink = '';

            } else if (data.drinks == null) {
                showErrorScreen();
            }

        })
        .catch(err => {
            console.log(`error ${err}`);
            showErrorScreen();
        });
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
}

function showErrorScreen() {
    //hide drink info
    document.querySelector('.drink-info').style.visibility = 'hidden';

    //show error screen after delay
    setTimeout(() => {
        document.querySelector('.error-screen').style.visibility = 'visible';
    }, 1220)

}

//search recipes again 
function searchDrinkAgain() {

}


/*

CURRENTLY WORKING ON:
- loading error message (see above comment in loadDrink function) --> include search button for error !! clear drink value after searching so I can recycle search button

OBJECTIVES:
-load ingredients in list: https://stackoverflow.com/questions/17773938/add-a-list-item-through-javascript

-cycle through drinks - carousel of drinks (if you don't put 0 for array)
-nasa api (APOD) get this working. img back from nasa
-show ingredients (strIngredient1, etc )

COMPLETED:
-want drink w/ spaces to be searchable
(loading screen effect)
*/

//strMeasure1