/* Question 6: Shipping Cost Calculator (Using Pounds)
Create a program that calculates the total shipping cost based on the shipping zone and
package weight in pounds (lb).
Steps:
1. Ask the user to enter the shipping zone (local, regional, national, or
international).
2. Ask the user to enter the package weight in pounds (lb).
3. Use a switch statement to determine the rate per pound:
○ local → $2.50 per lb
○ regional → $3.50 per lb
○ national → $5.00 per lb
○ international → $10.00 per lb
4. Calculate the total shipping cost using the formula:
totalCost = weight * rate
5. Display the shipping zone, package weight, rate per pound, and total cost. */

const prompt = require('prompt-sync')();
let zone = prompt("Enter zone (local, regional, national, international) ");
let weight = parseInt(prompt("Enter weight (lbs) "));
let price = 0
let total = ""

switch (zone) {
    case "local":
        price = 2.50;
        total = weight * price;
        break;
        case "regional":
            price = 3.50;
            total = weight * price;
            break;
            case "national":
            price = 5;
            total = weight * price;
            break;
            case "international":
            price = 10;
            total = weight * price;
            break;
            default:
                console.log("Invalid input")
} console.log("Shipping zone is " + zone + " Package weight is " + weight + " Rate per pound is " + price + " Total cost is " + total.toFixed(2))