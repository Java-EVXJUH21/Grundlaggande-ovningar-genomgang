/*
Skriv ett program som räknar ut hur mycket pengar man kommer ha efter ett visst antal år
om startsumman ökar med en viss procent varje år.
*/
let prompt = require('prompt-sync')();
let years = parseFloat(prompt("Years: "));
let startSum = parseFloat(prompt("Start sum: "));
let percentage = parseFloat(prompt("Percentage: "));

// Kan även lösas genom nedanstående kod bara
// let value = startSum * (percentage ** years);

let value = startSum;

for (let i = 0; i < years; i++) {
    value *= percentage;
}

console.log(value);