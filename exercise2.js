/*
Skriv ett program som innehåller en hårdkodad array med text. Fyll arrayen med något
valfritt. Programmet tar in en text och skriver ut om arrayen innehåller inputten. Om arrayen
innehåller texten skall programmet också skriva ut vilket index den ligger på.
*/
let prompt = require('prompt-sync')();
let array = ['Rust', 'C++', 'JavaScript', 'Java'];
let input = prompt("Text:");
let index = undefined;

for (let i = 0; i < array.length; i++) {
    let element = array[i];

    if (element === input) {
        index = i;
        break;
    }
}

if (index === undefined) {
    console.log("Finns inte");
} else {
    console.log("Det finns på index " + index);
}