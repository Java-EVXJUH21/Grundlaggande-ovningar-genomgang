/*

Skriv ett program som tar in en temperatur (nummer) och skriver ut en rekommendation på
hur man bör klä sig för att vara utomhus.

*/

let prompt = require('prompt-sync')();

let input = parseFloat(prompt("Temperatur: "));

if (input < -10) {
    console.log("Ta på dig mycket kläder som är varma!");
} else if (input < 0) {
    console.log("Ta på dig en jacka!");
} else if (input < 15) {
    console.log("Ta på dig en lätt jacka!");
} else {
    console.log("Ta på dig shorts och en t-shirt.");
}