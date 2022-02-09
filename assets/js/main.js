// Aufageb 1 Conditional Statements Lev1_1 //

let age = document.getElementById("age");
let output = document.getElementById("output");

// let date = new Date();
// let year = date.getFullYear();
// console.log(year);

function ageCheck() {
    console.log("test1");

    if (age.value >= 18) {
        output.innerHTML = `<h1>of legal age<h1>`
    } else {
        output.innerHTML = `<h1>underage</h1>`
    }
}


// Aufageb 2 Conditional Statements Lev1_2 //

let weather = document.getElementById("weather");
let output2 = document.getElementById("output2");

function weatherCheck() {
    console.log("test2");
    if (weather.value >= 8) {
        output2.innerHTML = `<h1>Super!<h1>`
    } else if (weather.value <= 8 && weather.value >= 6) {
        output2.innerHTML = `<h1>Good<h1>`
    } else if (weather.value <= 6 && weather.value >= 3) {
        output2.innerHTML = `<h1>Okay<h1>`
    } else if (weather.value <= 3) {
        output2.innerHTML = `<h1>Bad!<h1>`
    }
}


// Aufageb 3 Conditional Statements Lev1_3 //

// siehe oben :) //