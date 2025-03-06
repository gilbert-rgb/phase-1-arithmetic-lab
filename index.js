// index.js

// For multiply test: num1 * num2 should equal 62
const num1 = 31;
const num2 = 2;
const multiply = num1 * num2;

// For random test: generates a random integer greater than 0
const random = Math.floor(Math.random() * 10) + 1; // Random integer from 1 to 10

// For mod test: num3 % num4 should equal 4
const num3 = 14;
const num4 = 10;
const mod = num3 % num4;

// For max test: should return 20 as the highest number in a set
const max = Math.max(5, 10, 15, 20);

module.exports = { num1, num2, multiply, random, num3, num4, mod, max };