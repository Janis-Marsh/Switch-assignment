/* Question 10: Gym Membership Duration Calculator
Create a program that calculates the total cost of a gym plan based on duration and
monthly rate.
Steps:
1. Ask for the plan type (monthly, quarterly, semi-annual, annual).
2. Ask for the monthly rate (for example, $40).
3. Use a switch statement:
○ monthly → 1 month, 0 % discount
○ quarterly → 3 months, 5 % discount
○ semi-annual → 6 months, 10 % discount
○ annual → 12 months, 20 % discount
4. Compute:
originalCost = months * monthlyRate
discountAmount = originalCost * (discount / 100)
finalCost = originalCost - discountAmount
5. Display duration, original cost, discount, and final total. */

const prompt = require('prompt-sync')();
let plan = prompt("Enter plan type  (monthly, quarterly, semi-annual, annual) ");
let monthlyRate = parseInt(prompt("Enter monthly rate $"));
let duration = ""
let discount = ""
let originalCost = ""
let discountAmount = ""
let finalCost = ""

switch (plan) {
    case "monthly":
       duration = 1;
       discount = 0;
       originalCost = duration * monthlyRate;
       discountAmount = originalCost * (discount / 100);
       finalCost = originalCost - discountAmount;
       break;
       case "quarterly":
       duration = 3;
       discount = 5
       originalCost = duration * monthlyRate;
       discountAmount = originalCost * (discount / 100);
       finalCost = originalCost - discountAmount;
       break;
       case "semi-annual":
       duration = 6;
       discount = 10;
       originalCost = duration * monthlyRate;
       discountAmount = originalCost * (discount / 100);
       finalCost = originalCost - discountAmount;
       break;
       case "annual":
       duration = 12;
       discount = 20;
       originalCost = duration * monthlyRate;
       discountAmount = originalCost * (discount / 100);
       finalCost = originalCost - discountAmount;
       break;
       default:
        console.log("Invalid input")
}
console.log("Your " + plan + " plan" + " original cost is $" + originalCost + " your discount is " + discount + "% " + " and your total amount is $" + finalCost.toFixed(2))