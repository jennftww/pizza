function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType
    pizza.sauceType = sauceType
    pizza.cheeses = cheeses
    pizza.toppings = toppings
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", "mozzarella", "pepperoni", "sausage");
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", "mozzarella", "feta", "mushrooms", "olives", "onions");
console.log(pizza2)

var pizza3 = pizzaOven("thin crust", "marinara", "mozzarella", "olives", "green peppers", "onions");
console.log(pizza3);

var pizza4 = pizzaOven("hand tossed", "traditional", "feta", "spinach", "sausage");
console.log(pizza4);

var crustTypes = [
    "deep dish",
    "hand tossed",
    "stuffed crust",
    "thin crust",
    "cheese crust"
];

var sauceTypes = [
    "traditional",
    "marinara",
    "bbq",
    "pesto",
    "buffalo"
];

var cheeses = [
    "mozzarella",
    "feta",
    "provolone",
    "cheddar",
    "gruyere"
];

var toppings = [
    "pepperoni",
    "sausage",
    "mushrooms",
    "olives",
    "onions",
    "green peppers",
    "spinach"
];

function randomPizza(min, max) {
    return Math.floor(Math.random() * max - min) + min;
}

var items = [crustTypes, sauceTypes, cheeses, toppings];
console.log(randomPizza(items))
