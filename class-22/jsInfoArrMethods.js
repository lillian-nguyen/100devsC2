/* Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
Remove all dashes, each word after dash becomes uppercased. */

const camelize = str =>
    //separate string by dashes
    str.split('-')
        //if not first word then capitalize first letter of the word and connect with rest of the word
        .map((e, i) => i !== 0 ? e[0].toUpperCase() + e.slice(1) : e)
        //joins array elements into one string
        .join('');

/* Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array. */
const filterRange = (arr, a, b) => arr.filter(e => e >= a && e <= b);

/* Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

The function should only modify the array. It should not return anything. */

const filterRangeInPlace = (arr, a, b) => {

    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];

        //remove element if value is outside the interval 
        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}

/* sort arr of nums in decreasing order */
const decreasingOrder = arr => arr.sort((a, b) => b - a);

/* sort a copy of an arr of strings. Keep arr unmodified. */

const copySorted = arr => [...arr].sort();

// alt solution:
const copySorted2 = arr => arr.slice().sort();

/* Create constructor function Calculator that creates 'extendable' calculator objects */

// Implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.

function Calculator() {
    // methods stored by adding to this.methods property
    this.methods = {
        '-': (a, b) => a - b,
        '+': (a, b) => a + b
    };

    this.calculate = function (str) {
        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2];

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[op](a, b);
    };

    //Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.


    this.addMethod = function (name, func) {
        this.methods[name] = func;
    };
}

/* Given an arr of user objects, each one has a user.name. Write code converting it into an arr of names */

let john = { name: 'John', age: 25 };
let pete = { name: 'Pete', age: 30 };
let mary = { name: 'Mary', age: 28 };

let users = [john, pete, mary];

let names = users.map(e => e.name);

/* Given an arr of user objects with name, surname, and id: 
Write code to create another arr from it, of objects with id and fullName, where fullName is generated from name and surname */

let john1 = { name: "John", surname: "Smith", id: 1 };
let pete1 = { name: "Pete", surname: "Hunt", id: 2 };
let mary1 = { name: "Mary", surname: "Key", id: 3 };

let users1 = [john, pete, mary];

let usersMapped = users1.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));

/* Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age. */

const sortByAge = arr => {
    arr.sort((a, b) => a.age - b.age)
}

let john2 = { name: "John", age: 25 };
let pete2 = { name: "Pete", age: 30 };
let mary2 = { name: "Mary", age: 28 };

let arr = [pete2, john2, mary2];

sortByAge(arr);

/* Write the function shuffle(array) that shuffles (randomly reorders) elements of the array. */

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// counts of appearances for all possible permutations
let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
};

for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++;
}

// show counts of all possible permutations
for (let key in count) {
    alert(`${key}: ${count[key]}`);
}

/* Write funciton that gets arr of objects with property age & returns avg age gap */

const getAverageAge = users => users.reduce((prev, user) => prev + user.age, 0) / users.length;

/* Create a function that returns an arr with unique items of arr */

const unique = arr => [...new Set(arr)];

/* Let’s say we received an array of users in the form {id:..., name:..., age:... }.

Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values. */

const groupById = arr => {
    return array.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
}