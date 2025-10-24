// Season finder
/* Prompt the user to enter a month name and use a switch statement to determine and display
which season it belongs to.
Example mapping:
● December, January, February → Winter
● March, April, May → Spring
● June, July, August → Summer
● September, October, November → Fall */

const prompt = require('prompt-sync')();
let month = prompt("What month is it? ")
let season = ""
switch(month){
    case "December":
      case "January":
        case "February":
            season = "Winter"
        break;

        case "March":
            case "April":
               case "May":
                    season = "Spring"
            break;

            case "June":
                case "July":
                    case "August":
                        season = "Summer"
                break;

                case "September":
                    case "October":
                        case "November" :
                            season = "Fall"
                    break;
                    default:
                        console.log("Invalid option")
}

console.log(month + " is in the " + season)