/*
Skriv ett program som räknar ut hur många ord en text innehåller. Ett ord definieras som en
del text som är separerad med mellanslag.
*/
let prompt = require('prompt-sync')();
let input = prompt("Text:");

function countWords(sentence) {
    let count = 0;
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];

        if (char === ' ') {
            count++;
        }
    }

    return count + 1;
}

console.log(countWords(input));