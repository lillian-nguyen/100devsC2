//factory function
function createCircle(radius) {
    return {
        radius: radius,
        draw: function () {
            console.log('draw');
        }
    };
}

//constructor function
function Circle(radius) {
    this.radius = radius;
    let defaultLocation = { x: 0, y: 0 };

    this.draw = function () {
        console.log('draw');
    }
    Object.defineProperty(this, 'defaultLocation', {
        get: function () {
            return defaultLocation;
        },
        set: function (value) {
            if (!value.x || !value.y) {
                throw new Error('Invalid location.')
            }
            defaultLocation = value;
        }
    })
}
const circle = new Circle(10);
circle.location = { x: 1 }; //could use bracket too circle['location] = {x: 1};
//delete circle.location; 

//enumerate members of obj
for (let key in circle) {
    if (typeof circle[key] !== 'function')
        console.log(key, circle[key]);
}

//get keys of obj
const keys = Object.keys(circle);
console.log(keys);

//does object have given property?
if ('radius' in circle) {
    console.log('Circle has a radius.')
}

//duration, reset, start, stop 

// function Stopwatch() {
//     let start, end, currentlyRunning, duration = 0;

//     this.start = function () {
//         if (currentlyRunning) {
//             throw new Error('Stopwatch already started.')
//         }

//         currentlyRunning = true;

//         start = new Date();
//     };

//     this.stop = function () {
//         if (!currentlyRunning) {
//             throw new Error('Stopwatch hasn\'t started.');

//             currentlyRunning = false;

//             end = new Date();

//             const seconds = (end.getTime() - start.getTime()) / 1000;
//             duration += seconds;
//         };

//         this.reset = function () {
//             start = null;
//             end = null;
//             currentlyRunning = false;
//             duration = 0;
//         }
//     }
// }

class Stopwatch {
    constructor() {
        let startTime, endTime, runStatus, duration = 0;

        this.start = function () {
            if (runStatus) {
                throw new Error('Stopwatch already started.')
            }

            runStatus = true;

            startTime = new Date();
        };
        this.stop = function () {
            if (!runStatus) {
                throw new Error('Stopwatch hasn\'t started.');
            }

            runStatus = false;

            endTime = new Date();

            const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
            duration += seconds;
        };

        this.reset = function () {
            startTime = null;
            endTime = null;
            runStatus = false;
            duration = 0;
        }

        Object.defineProperty(this, 'duration', {
            get: function () { return duration; }
        });
    }
}

let sw = new Stopwatch();