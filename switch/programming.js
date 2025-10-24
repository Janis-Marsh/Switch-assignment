/* Question 4: Programming Language
Ask for a file extension (.js, .py, .java, .cpp, .html) and display the programming
language name. */
const prompt = require('prompt-sync')();
let file = prompt("What's the file extension? ")
let result = ""


switch(file){
    case ".js":
    result = "Javascript"
    break;
    case ".py":
    result = "Python"
    break;
    case ".java":
    result = "Java"
    break;
    case ".cpp":
    result = "C++"
    break;
    case ".html":
    result = "Hypertext  Markup Language"
    break;
    default:
    console.log("Invalid option")
} console.log(file + " is " + result)