/* Tony's Pizza Shop logic:

const shopName = "Tony's Pizza Shop"; - never changes
const shopAddress = "123 Main St";    - never changes
let pizzaPrice = 18.99;               - can change with promotions
let isAvailable = true;               - can change based on inventory

*/

// TOPIC - DATA TYPES

// Strings - text values

let pizzaName = "Sicilian";
console.log(pizzaName);

const shopName = "Tony's Pizza Shop";
console.log(shopName);

// shopName = "Mario's Pizza";
// console.log(shopName);

// Numbers

let pizzaPrice = 18.99;
console.log(pizzaPrice);

pizzaPrice = 21.99;
console.log(pizzaPrice);

// Boolean

let isAvailable = true;
console.log(isAvailable);

// Null - intentionally empty

let currentOrder = null;
console.log(currentOrder);

// Undefined - declared but not assigned

let deliveryDriver;
console.log(deliveryDriver);


// TOPIC - OPERATORS

let price = 18.99;
let discount = 5;

console.log(price + discount);
console.log(price - discount);
console.log(price * 2);
console.log(price / 2);
console.log(price % 2);

// Modulus

console.log(10 % 2); // Even, no remainder
console.log(11 % 2); // Odd, has a remainder

// Comparison Operators

console.log(pizzaPrice > 15);
console.log(pizzaPrice < 15);
console.log(pizzaPrice >= 18.99);
console.log(pizzaPrice === 18.99); // Came out false.
console.log(pizzaPrice !== 20);

console.log(18.99 === 18.99);  // Came out true here.
console.log(0.1 + 0.2 === 0.3); // Came out false.
console.log(0.1 + 0.2); // Returned 0.30000000000000004.

console.log(18 == "18");
console.log(18 === "18");