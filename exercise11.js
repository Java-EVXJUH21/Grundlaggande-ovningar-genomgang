/*
Skriv ett program som räknar ut om ett visst tal är delbart med 2, 3 eller 5.
*/
let prompt = require('prompt-sync')();
let num = parseInt(prompt("Nummer: "));

if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0) {
    console.log("Ja");
} else {
    console.log("Nej");
}