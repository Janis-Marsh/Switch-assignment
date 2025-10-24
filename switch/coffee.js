// Coffee sizing pricing
// if the size of the coffee ordered is small, medium, large, grande
// price should be assigned the value - 2.50, 3.50, 4.50 large and 5.50

const prompt = require('prompt-sync')();
let coffeeSize = prompt("Order coffee - size ");
let price=0
switch(coffeeSize){
    case "small":
        price = 2.50;
        break;

        case "medium":
            price = 3.50
            break;

            case "large":
                price = 4.50
                break;

                case "grande":
                    price= 5.00
                    break;
                    default:
                        console.log("Invalid option")
}

console.log("Coffee Size " + coffeeSize);
console.log("Price $" + price);