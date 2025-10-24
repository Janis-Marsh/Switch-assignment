/* Question 5: Salary Bonus Calculator
Create a program that calculates an employee’s bonus and total salary based on their level in
the company.
Instructions:
1. Ask the user to enter their employee level (junior, mid, senior, or lead).
2. Ask the user to enter their base salary (for example, $50,000).
3. Use a switch statement to determine the bonus percentage based on the level:
○ junior → 5% bonus
○ mid → 10% bonus
○ senior → 15% bonus
○ lead → 20% bonus 
4. Calculate the bonus amount using the formula:
bonus = baseSalary * bonusPercentage
5. Calculate the total salary:
totalSalary = baseSalary + bonus
6. Display the employee level, base salary, bonus amount, and total salary.*/

const prompt = require('prompt-sync')();
let level = prompt("What is your employee level? ")
let salary = parseInt(prompt("Whats your base salary? $"))
let bonus = 0
let result = 0

switch (level) {
    case "Junior":
        bonus = 0.05
        bonus = salary * 0.05;
        result = salary + bonus;
        break;
        case "Mid":
            bonus = 0.10
            bonus = salary * 0.10
            result = salary + bonus
            break;
            case "Senior":
            bonus = 0.15
            bonus = salary * 0.15
            result = salary + bonus
            break;
            case "Lead":
            bonus = 0.20
            bonus = salary * 0.2
            result = salary + bonus
            break;
            default:
             console.log("Invalid option")
} console.log("Your employee level is " + level + " Your base salary is $" + salary + " Your bonus is $" + bonus + " Your total salary is $" + result)