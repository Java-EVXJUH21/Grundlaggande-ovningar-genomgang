/*
Skriv ett program som gör om engelska till morsekod och tvärtom
(Detta program gör bara om engelska till morsekod)
*/
let prompt = require('prompt-sync')();
let input = prompt("Text: ");

let morseTable = { 
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function reverseObject(object) {
    let reversed = {};

    for (let key in object) {
        let value = object[key];
        reversed[value] = key;
    }

    return reversed;
}

let englishTable = reverseObject(morseTable);

let converted = "";
for (let i = 0; i < input.length; i++) {
    let char = input[i];
    let symbols = englishTable[char];
    converted += symbols + " ";
}

console.log(converted);