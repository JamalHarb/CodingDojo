function pizzaOven(crustType, sauceType, cheese, toppings){ // input cheese and toppings as arrays
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozarilla"], ["pepperoni", "sausage"])

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozarilla", "feta"], ["mushrooms", "olives", "onions"])

var pizza3 = pizzaOven("crusty thin", "barbique", ["gouda", "qashqawan"], ["onions", "halapino", "ground beef"])

var pizza4 = pizzaOven("crusty thick", "tomato", ["mozarilla"], ["paprika", "olives", "turkey"])

console.log("pizza1 = ", pizza1, "\n")
console.log("pizza2 = ", pizza2, "\n")
console.log("pizza3 = ", pizza3, "\n")
console.log("pizza4 = ", pizza4, "\n")


// ==================================================================


// define a function that creates a random pizza
// let's first define possible values for each pizza component from which a random value is chosen
// from each component choose 3

var crust_ = ["thin", "thick", "hand tossed", "deep dish"]
var sauce_ = ["traditional", "barbique", "tomato", "marinara"]
var cheese_ = ["gouda", "mozarilla", "feta", "qashqawan", "chilli cheese"]
var toppings_ = ["onions", "halapino", "ground beef", "olives", "turkey", "paprika", "mushrooms"]

// generate a random integer in the range [0, arr.length-1]

function getRandom(max){ // max = arr.length
    rand = Math.floor(Math.random() * max);
    return rand;
}

var idxCrust = getRandom(crust_.length)
var idxSauce = getRandom(sauce_.length)
var idxCheese = getRandom(cheese_.length)
var idxTopping = getRandom(toppings_.length)

function randomPizza(crustType, sauceType, cheese, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;   
}

var randPizza = randomPizza(crust_[idxCrust], sauce_[idxSauce], cheese_[idxCheese], toppings_[idxTopping])

console.log(randPizza)