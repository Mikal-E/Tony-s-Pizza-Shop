/* Tony's Pizza Shop logic:

const shopName = "Tony's Pizza Shop"; - never changes
const shopAddress = "123 Main St";    - never changes
let pizzaPrice = 18.99;               - can change with promotions
let isAvailable = true;               - can change based on inventory

*/

// TOPIC - DATA TYPES

// Strings - text values

// let pizzaName = "Sicilian";
// console.log(pizzaName);

// const shopName = "Tony's Pizza Shop";
// console.log(shopName);

// shopName = "Mario's Pizza";
// console.log(shopName);

// Numbers

// let pizzaPrice = 18.99;
// console.log(pizzaPrice);

// pizzaPrice = 21.99;
// console.log(pizzaPrice);

// // Boolean

// let isAvailable = true;
// console.log(isAvailable);

// // Null - intentionally empty

// let currentOrder = null;
// console.log(currentOrder);

// // Undefined - declared but not assigned

// let deliveryDriver;
// console.log(deliveryDriver);


// // TOPIC - OPERATORS

// let price = 18.99;
// let discount = 5;

// console.log(price + discount);
// console.log(price - discount);
// console.log(price * 2);
// console.log(price / 2);
// console.log(price % 2);

// // Modulus

// console.log(10 % 2); // Even, no remainder
// console.log(11 % 2); // Odd, has a remainder

// // Comparison Operators

// console.log(pizzaPrice > 15);
// console.log(pizzaPrice < 15);
// console.log(pizzaPrice >= 18.99);
// console.log(pizzaPrice === 18.99); // Came out false.
// console.log(pizzaPrice !== 20);

// console.log(18.99 === 18.99);  // Came out true here.
// console.log(0.1 + 0.2 === 0.3); // Came out false.
// console.log(0.1 + 0.2); // Returned 0.30000000000000004.

// console.log(18 == "18");
// console.log(18 === "18");


// // TOPIC - CONTROL FLOW AND ERROR HANDLING

// // Global Scope

// const shopName = "Tony's Pizza Shop"; // Can be seen anywhere.

// {

//     // Block Scope

//     let pizzaName = "Sicilian";
//     const pizzaPrice = 18.99;
//     console.log(shopName); // Can be seen inside the block because it is a global scope.
//     console.log(pizzaName); // Can only be seen only here in the block scope.

// }

// console.log(shopName) // Can still be seen becuase it is a global scope.
// // console.log(pizzaName) // Can't be seen because it is a block scope.

// // Var Variable Issues Of Ignoring Scope

// {
//   var oldWay = "I ignore block scope";
//   let newWay = "I respect block scope";
// }

// console.log(oldWay);
// console.log(newWay);

// Conditional Statements

// Exercise 1

/*

const orderTotal = 45;

if (orderTotal >= 50) {

  console.log("Order qualifies for free delivery!");

} else if (orderTotal >= 30) {

  console.log("Order qualifies for a free drink!");

} else {

  console.log("Add more items to qualify for a reward.");

}

*/

/* Exercise 2 Multiple conditions
Tony wants to apply discounts based on both order total AND whether
the customer is a loyalty member.


const orderTotal = 55
const isLoyaltyMember = true;

if (orderTotal >= 50 && isLoyaltyMember) {

  console.log("20% loyalty discount applied!");

} else if (orderTotal >= 50 && !isLoyaltyMember) {

  console.log("Free delivery applied!");

} else if (orderTotal < 50 && isLoyaltyMember) {

  console.log("10% loyalty discount applied!");

} else {

  console.log("No discount available.");

}


// Testing The Not Operator

const hasPromoCode = false;

console.log(isLoyaltyMember && hasPromoCode);
console.log(isLoyaltyMember || hasPromoCode);
console.log(!isLoyaltyMember);

*/

/* Exercise 3
Tony wants to give free garlic knots to: Any order over $40 OR
Any loyalty member regardless of order total


const orderTotal = 45;
const isLoyaltyMember = false;

if (orderTotal > 40 || isLoyaltyMember) {

  console.log("Free garlic bread added to your order!");
 
} else {

  console.log("No free garlic bread today.");

}

*/

/* Exercise 4
Tony wants to give every even numbered order a free soda:


const orderNumber = 7;

if (orderNumber % 2 === 0) {

  console.log("Free soda added to order #" + orderNumber);

} else {

  console.log("No free soda for order #" + orderNumber);

}
*/

/* Exercise 5
Tony wants a more complex promotion. Every even order over $30 gets a free soda
Every odd order over $50 gets a free soda. Everything else gets nothing.
*/

// const orderNumber = 6;
// const orderTotal = 25;

// if (orderNumber % 2 === 0 && orderTotal > 30) {

//   console.log("Free sda for even order #" + orderNumber);
  
// } else if (orderNumber % 2 !== 0 && orderTotal > 50){

//   console.log("Free soda for odd order #" + orderNumber);
  
// } else {

//   console.log("No free soda for order #" + orderNumber);

// }

/* Exercise 6
Tony wants to check if a pizza is available for delivery:


const pizzaAvailable = true;
const deliveryZoneActive = true;

if (pizzaAvailable && deliveryZoneActive) {

  console.log("Order confirmed!");
  
  } else if (pizzaAvailable && !deliveryZoneActive) {

  console.log("Pickup only available.");
  
} else {

  console.log("Sorry, out of stock.");

}

// Returns Order confirmed!
*/

// Try...Catch Error Handling

// Exercise 1

/*
try {

  const orderTotal = 45
  console.log("Processing order for $" + orderTotal);
  console.log(customerName);

} catch (error) {

  console.log("Something went wrong: " + error.message);
  console.log(error.name);

}
*/

// Exercise 2

/*
const pizzaPrice = 18;
const numberOfSlices = 0;

  try {

  if (numberOfSlices === 0) {

  throw new Error("Cannot divide by zero slices!");

  }

  const pricePerSlice = pizzaPrice / numberOfSlices;
  console.log("Price per slice: $" + pricePerSlice);
  
} catch (error) {

  console.log("Order error: " + error.message);
  
}
*/

// Exercise 3 - try...catch with user input validation
// Tony's order system needs to validate that a customer's name is actually provided before processing.


/*
const customerName = "Sam Smith"

try {
  
  if (customerName === "") {

    throw new Error("Customer name is required.");

  } else {

    console.log("Order received for: " + customerName);

  }

 } catch (error) {

  console.log("Validation error: " + error.message);
  
}
*/

// Exercise 4 - try...catch with multiple validations

/*Tony's system needs to validate an entire order before processing it.
This time you're validating multiple fields and throwing specific errors for each failure.
Check to see if customerName and pizzaName are empty, and if orderTotal is greater than 0.
There is a customerName, no pizzaName, and the orderTotal is 25. So pizzaName should fail,
all validations passing should be set up, the error needs to be caught and logged.
*/

/*
const customerName = "Sam Smith";
const pizzaName = "";
const orderTotal = 25;

try {
  
  if (customerName === "") {

    throw new Error("Customer name is required.");
    
  } else if (pizzaName === "") {

    throw new Error("Pizza name is required");
    
  } else if (orderTotal === 0) {

    throw new Error("Please correct the order total.");

  } else {

    console.log("Order confirmed for " + customerName + ": " + pizzaName + " $" + orderTotal)

  }

} catch (error) {

  console.log("Order failed: " + error.message);
  
}
  */

// Testing with no customer name

/*
const customerName = "";
const pizzaName = "";
const orderTotal = 25;

try {
  
  if (customerName === "") {

    throw new Error("Customer name is required.");
    
  } else if (pizzaName === "") {

    throw new Error("Pizza name is required");
    
  } else if (orderTotal === 0) {

    throw new Error("Please correct the order total.");

  } else {

    console.log("Order confirmed for " + customerName + ": " + pizzaName + " $" + orderTotal)

  }

} catch (error) {

  console.log("Order failed: " + error.message);
  
}
  */

// Testing for all 3 blocks being true

/*
const customerName = "Sam Smith";
const pizzaName = "Sicilian";
const orderTotal = 25;

try {
  
  if (customerName === "") {

    throw new Error("Customer name is required.");
    
  } else if (pizzaName === "") {

    throw new Error("Pizza name is required");
    
  } else if (orderTotal === 0) {

    throw new Error("Please correct the order total.");

  } else {

    console.log("Order confirmed for " + customerName + ": " + pizzaName + " $" + orderTotal)

  }

} catch (error) {

  console.log("Order failed: " + error.message);
  
}
*/

// TOPIC LOOPS & ITERATION

// For Loops
// Exercise 1 - Tony has 10 orders to process.

/*
for (let i = 1; i <= 10; i++) {

  if (i % 2 === 0) {

    console.log("Order #" + i + " gets a free soda!");

  } else {

    console.log("Order #" + i + " - no free soda.");

  }

}
*/

// Exercise 2

/*
let totalRevenue = 0

for (let i = 1; i <= 5; i++) {

  let orderPrice = i * 10;
  totalRevenue = totalRevenue + orderPrice;
  console.log("Order #" + i + "; $" + orderPrice);

}

console.log("Total revenue: $" + totalRevenue);
*/


/* Exercise 3 - Modulus inside a loop

Tony wants to:

Process 10 orders
Give every 3rd order a 10% discount
Log each order with or without the discount

Use orderTotal = 20 as the base price for every order.

10 orders need processing, so a loop to 10
every 3rd order needs to be found so % 3 === 0 would find orders divisible by 3
*/

/*
let orderTotal = 20


for (let i = 1; i <= 10; i++) {

    if (i % 3 === 0) {

      orderTotal = orderTotal - (orderTotal * .10);
      console.log("Order #" + i + ": Your total is " + orderTotal);
      
    } else if (i % 3 != 0){

      orderTotal = 20
      console.log("Order #" + i + ": Your total is " + orderTotal);

    }

    
}


let orderTotal = 20

for (let i = 1; i <= 10; i++) {

    if (i % 3 === 0) {

      const orderTotalDiscount = orderTotal - (orderTotal * .10);
      console.log("Order #" + i + ": Your total is " + orderTotalDiscount);
      
    } else {

      console.log("Order #" + i + ": Your total is " + orderTotal);

    }

    
}
*/


// While Loops

/*
Tony's Pizza Shop — the oven:
Tony's oven can only hold 3 pizzas at a time. He has 10 pizzas to bake.
Keep baking until all pizzas are done.
*/

// let pizzasToBake = 10;
// let ovenCapacity = 3;
// let batch = 1;

// while (pizzasToBake > 0) {

//   let baking = Math.min(ovenCapacity, pizzasToBake);
//   pizzasToBake -= baking;
//   console.log("Batch #" + batch + ": Baking " + baking + " pizzas. Remaining: " + pizzasToBake);

//   batch++;

// }

// console.log("All pizzas done!");


/* JAVASCRIPT TRAINING — PAUSED

The code directly above the heading comment is where I left of in JavaScript
*/


// TOPIC - THE DOCUMENT OBJECT MODEL

/* Selecting elements
const shopTitle = document.querySelector("#shop-title");
shopTitle.textContent = "Tony's Famous Pizza Shop";
*/

// Selecting Multiple Elements

// const pizzaItems = document.querySelectorAll(".pizza-item");
// // console.log(pizzaItems);

// pizzaItems.forEach(function(item, index) {

//   item.textContent = "Pizza #" + (index + 1) + " - Coming Soon!";

//   }

// )

// const shopTitle = document.querySelector("#shop-title");

// // shopTitle.style.color = "red";
// // shopTitle.style.fontSize = "48px";

const shopTitle = document.querySelector("#shop-title");
shopTitle.classList.add("featured");
shopTitle.classList.remove("featured");
shopTitle.classList.toggle("featured");
shopTitle.classList.toggle("featured");
shopTitle.classList.toggle("featured");

console.log(shopTitle.classList.contains("featured"));

// Manipulating Attributes

// const pizzaImg = document.querySelector("#pizza-img");

// console.log(pizzaImg.getAttribute("alt"));
// pizzaImg.setAttribute("alt", "Tony's Famous Cheese Pizza");
// console.log(pizzaImg.getAttribute("alt"));

// Iterating Over a Collection
// Tony wants to highlight any pizza over $15 on the menu.

const pizzaItems = document.querySelectorAll(".pizza-item");

pizzaItems.forEach(function(item) {

  const price = parseInt(item.getAttribute("data-price"));

  if (price > 15) {

    item.style.color = "red";

    }

  }

);

/* ^^^^^^^^^^^^^^ Start of the DOM exercises to here - What you just built is real DOM manipulation:

Selected multiple elements ✅
Read custom data attributes ✅
Converted data types ✅
Applied conditional styling ✅

That's four concepts working together in one small block of code. In a real menu app, this is exactly
how you'd highlight featured items, sold-out items, or promotional pricing.
*/

// Document Fragments and HTML Templates

// Building a menu dynamically:

const menu = document.querySelector("#menu");
const fragment = document.createDocumentFragment();

const pizzas = ["Margherita - $14", "BBQ Chicken - $16", "Veggie - 13"];

pizzas.forEach(function(pizza) {

  const li = document.createElement("li");

  li.textContent = pizza;
  li.classList.add("pizza-item");

  fragment.appendChild(li);

  }

);

menu.appendChild(fragment);