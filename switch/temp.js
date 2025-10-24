/* Question 9: Temperature Converter with Operations
Create a program that converts a temperature between Celsius and Fahrenheit.
Steps:
1. Ask for a temperature value (e.g., 25).
2. Ask for the conversion type:
○ C2F for Celsius → Fahrenheit
○ F2C for Fahrenheit → Celsius
3. Use a switch statement and formulas:
○ C2F: result = (C × 9 / 5) + 32
○ F2C: result = (F − 32) × 5 / 9
4. Display both input and converted values. */

const prompt = require('prompt-sync')();
let temp = parseInt(prompt("Enter temperature value : "));
let conversion = prompt("Enter conversion type (C2F or F2C) ");
let result = ""

switch(conversion){
    case "C2F":
        result = (temp * 9 / 5) + 32;
        break;
        case "F2C":
            result = (temp - 32) * 5 / 9;
            break;
            default:
                console.log("Invalid input")
} 
console.log(temp + " value converts to " + result)