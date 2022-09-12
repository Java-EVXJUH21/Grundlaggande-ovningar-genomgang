/*
Skriv ett program som kollar om en sträng är en palindrom.
*/
let prompt = require('prompt-sync')();
let input = prompt("Text:");

function isPalindrome(text) {
    let middle = text.length / 2;

    for (let i = 0; i < middle; i++) {
        let charFront = text[i];
        let charBack = text[text.length - 1 - i];

        if (charFront !== charBack) {
            return false;
        }
    }

    return true;
}

console.log(isPalindrome(input));