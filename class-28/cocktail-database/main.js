//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', getDrink);

function getDrink() {
    //get value from input
    let drink = document.querySelector('input').value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(res => res.json()) //parse response as JSON
        .then(data => {
            console.log(data.drinks);
            document.querySelector('h2').innerText = data.drinks[0].strDrink;
            document.querySelector('img').alt = data.drinks[0].strDrink;
            document.querySelector('img').src = data.drinks[0].strDrinkThumb;
            document.querySelector('h3').innerText = data.drinks[0].strInstructions;
            document.querySelector('h4').innerText = data.drinks[0].strIngredient10;
        })
        .catch(err => {
            console.log(`error ${err}`)

        });
}

// L O A D I N G  S C R E E N 

// add event listener to search button on homepage
document.querySelector('#search-drink').addEventListener('click', loadDrink)

function loadDrink() {
    // when search button is clicked, bring up the 'drinks loading...' text
    document.querySelector('.intro-container').style.transform = 'rotateY(180deg)';
    //loading screen disappears after 2 seconds
    setTimeout(() => {
        document.querySelector('.intro-container').style.visibility = 'hidden';
    }, 800)
    //drink recipe card shows up after previous disappears
    setTimeout(() => {
        document.querySelector('.drink-info').style.visibility = 'visible';
    }, 1300)
}


/* OBJECTIVES:
-load ingredients in list: https://stackoverflow.com/questions/17773938/add-a-list-item-through-javascript
-load error message

-push: cycle through drinks - carousel of drinks (if you don't put 0 for array)
-nasa api (APOD) get this working. img back from nasa
-show ingredients (strIngredient1, etc ), add bg img

COMPLETED:
-want drink w/ spaces to be searchable
(loading screen effect)
*/

//strMeasure1