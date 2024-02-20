// Values and Variables
let country = "Afghanistan";
let continent = "Asia";
let population = 38.93;

// Log values to the console
console.log("Country:", country);
console.log("Continent:", continent);
console.log("Population:", population);

// Data Types
let isMarried = false;
let language;

// Log types to the console
console.log("Type of isMarried:", typeof isMarried);
console.log("Type of population:", typeof population);
console.log("Type of country:", typeof country);
console.log("Type of language:", typeof language);

// Let, Const, and Var
language = "English"; //  value of language


//  .. the value of a const variable
country = "Another Country"; // This will result in an error

// Basic Operators
let halfPopulation = population / 2;
console.log("Population in each half of Afghanistan:", halfPopulation);

population++;
console.log("Increased population of Afghanistan:", population);

const finlandPopulation = 6;
let isMoreThanFinland = population > finlandPopulation;
console.log("Does Afghanistan have more people than Finland?", isMoreThanFinland);

const averagePopulation = 33;
let isLessThanAverage = population < averagePopulation;
console.log("Does Afghanistan have less people than the average country?", isLessThanAverage);

// If/Else Statement
if (population > averagePopulation) {
    console.log("Afghanistan population is", population - averagePopulation, "million above the average.");
}

// Logical Operators
let x = true;
let y = false;

if (x && y) {
    console.log("Both conditions are true.");
} else {
    console.log("At least one condition is false.");
}

let a = true;
let b = false;

if (a || b) {
    console.log("At least one condition is true.");
} else {
    console.log("Both conditions are false.");
}

let m = true;

if (!m) {
    console.log("M is false.");
} else {
    console.log("M is true.");
}