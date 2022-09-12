/*
Skriv ett program som tar in en lista på alla gånger man handlat på en viss månad. Ta först in
hur många gånger man handlat och sedan ett nummer per köp med kostnaden. Räkna sedan
ut den totala kostnaden.
*/
let prompt = require('prompt-sync')();
let amount = parseInt(prompt("Hur många gånger har du handlat: "));

let sum = 0;

for (let i = 0; i < amount; i++) {
    sum += parseInt(prompt("Kostnad: "));
}

console.log(sum);