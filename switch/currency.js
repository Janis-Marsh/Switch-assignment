/* Question 7: Currency Converter
Create a program that converts USD to another currency using sample conversion rates.
Steps:
1. Ask for the amount in USD (e.g., 100).
2. Ask for the target currency (EUR, GBP, JPY, AUD).
3. Use a switch statement for conversion rates:
○ EUR → 0.93 → € EUR (Euro)
○ GBP → 0.80 → £ GBP (British Pound)
○ JPY → 150.20 → ¥ JPY (Japanese Yen)
○ AUD → 1.52 → A$ AUD (Australian Dollar)
4. Calculate:
convertedAmount = USD * rate
5. Display the original and converted amounts with currency symbols. */

const prompt = require('prompt-sync')();
let USD = parseInt(prompt("Enter amount (USD) $"));
let currency = prompt("Enter target currency (EUR, GBP, JPY, AUD) ");
let rate = 0
let total = ""
let symbol = ""

switch (currency) {
    case "EUR":
        rate = 0.93;
        total = rate * USD;
        symbol = "€"
        break;
        case "GBP":
        rate = 0.80;
        total = rate * USD;
        symbol = "£"
        break;
        case "JPY":
        rate = 150.20;
        total = rate * USD;
        symbol = "¥"
        break;
        case "AUD":
        rate = 1.52;
        total = rate * USD;
        symbol = "A$"
        break;
        default:
        console.log("Invalid input")
} console.log("Original amount is $" + USD + " Converted amount is " +  symbol + total.toFixed(2))