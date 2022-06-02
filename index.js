//    1. Example of CallBAck  function


function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument

//greet('Peter', callMe);    // -- for test program uncomment the function



// 2.  1,3,6,10,15...

function calcSeriesSum(n) {
    let sum = 0;
    let i = 1
    for (let i = 1; i <= n; i++) {
        sum = i * (i + 1) / 2;
        console.log(sum);
    }
   // return sum;
}

// calcSeriesSum(10)  // -- for test program uncomment the function

// PrintNumber(2)