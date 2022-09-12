/*
Skriv ett program som tar in ett visst antal nummer och räknar ut medelvärdet
*/
let prompt = require('prompt-sync')();
let amount = parseInt(prompt("Antal nummer: "));

let sum = 0;

for (let i = 0; i < amount; i++) {
    sum += parseInt(prompt("Nummer: "));
}

console.log(sum / amount);