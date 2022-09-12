/*
Skriv ett program som tar in text om och om igen tills man skriver in ’exit’
*/

let prompt = require('prompt-sync')();
for (;;) {
    let input = prompt("Nummer: ");
    console.log(input);

    if (input === 'exit') {
        break;
    }
}