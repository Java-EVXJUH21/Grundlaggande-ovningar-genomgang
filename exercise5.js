/*
Skriv ett program som kan hantera addition och subtraktion mellan två tal. Man väljer i
början av programmet om man vill göra addition eller subtraktion
*/
let prompt = require('prompt-sync')();
let operation = prompt("Choose operation: ");

function getNumbers() {
    let a = parseFloat(prompt("Number 1: "));
    let b = parseFloat(prompt("Number 2: "));
    return [a, b];
}

if (operation === '+') {
    let nums = getNumbers();
    console.log("Answer: " + (nums[0] + nums[1]));
} else if (operation === '-') {
    let nums = getNumbers();
    console.log("Answer: " + (nums[0] - nums[1]));
} else {
    console.log("No such operation");
}