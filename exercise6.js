/*
Skriv ett program som räknar ut om ett visst tal är ett primtal eller inte.
*/
let prompt = require('prompt-sync')();
let input = parseInt(prompt("Number: "));

function isPrime(num) {
    if (num === 0 || num === 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(input));