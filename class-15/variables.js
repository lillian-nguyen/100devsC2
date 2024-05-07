
/* Working with variables 

1. Declare two variables: admin and name.
2. Assign the value "John" to name.
3. Copy the value from name to admin.
4. Show the value of admin using alert (must output “John”). */

//can declare both at once: let admin, name;
let admin
let name

name = 'John';
admin = name;

alert(admin);

/* Giving the right name

Create a variable with the name of our planet. How would you name such a variable?
Create a variable to store the name of a current visitor to a website. How would you name that variable? */

const ourPlanet = 'Earth';
let currentVisitor = 'Lil';

/* Uppercase const?
Examine the following code:

const birthday = '18.04.1982';

const age = someCode(birthday);
Here we have a constant birthday for the date, and also the age constant.

The age is calculated from birthday using someCode(), which means a function call that we didn’t explain yet (we will soon!), but the details don’t matter here, the point is that age is calculated somehow based on the birthday.

Would it be right to use upper case for birthday? For age? Or even for both?

const BIRTHDAY = '18.04.1982'; // make birthday uppercase?

const AGE = someCode(BIRTHDAY); // make age uppercase?*/

//birthday should be declared in uppercase since it is a constant that is already known (prior to execution and written into code aka hard-coded). Age must be calculated using a function so is not known yet. Therefore, it should not be all uppercase
