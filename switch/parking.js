/* Question 8: Parking Fee Calculator
Create a program that computes the total parking fee based on vehicle type and hours
parked.
Steps:
1. Ask for the vehicle type (motorcycle, car, suv, truck).
2. Ask for hours parked.
3. Use a switch statement for hourly rates:
○ motorcycle → $2 / hour
○ car → $3 / hour
○ suv → $4 / hour
○ truck → $5 / hour
4. If the car is parked for more than 5 hours, add a $10 flat fee.
5. Display vehicle type, hours, and total fee. */

const prompt = require('prompt-sync')();
let vehicle = prompt("What type of vehicle do you have? (motorcycle, car, suv, truck) ");
let hours = parseInt(prompt("How many hours was it parked for? "));
let rate = 0
let total = ""

switch (vehicle) {
    case "motorcycle":
        rate = 2;
        total = rate * hours;
        break;
        case "car":
            rate = 3;
            total = rate * hours;
            break;
            case "suv":
                rate = 4;
                total = rate * hours;
                break;
                case "truck":
                    rate = 5;
                    total = rate * hours;
                    break;
                    default:
                        console.log("Invalid input")
}
if (hours > 5) {
    total = 10
}
console.log("Your cost for parking " + vehicle + " is " + total + " for " + hours + " hours")