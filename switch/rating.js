/* Question 3: Movie Rating Guide
Accept movie name and movie rating (G, PG, PG-13, R, NC-17) and display the appropriate
audience guideline.
Guideline: Parents strongly cautioned. Some material may be inappropriate for children under
13. */

const prompt = require('prompt-sync')();
let movie = prompt("What movie are you watching? ")
let rating =  prompt("What rating is your movie? ")
let result = ""

switch(rating){
    case "G":
    result = "General Audiences"
    break;
    case "PG":
    result = "Parental guidance suggested"
    break;
    case "PG-13":
    result = "Parents strongly cautioned"
    break;
    case "R":
    result = "Restricted - Under 17 requires accompanying parent or adult guardian"
    break;
    case "NC-17":
    result = "No one 17 and under admitted"
    break;
    default:
    console.log("Invalid option")
} console.log(movie + " is rated " + rating)