// Exercise 1:
// Print to console and add two variables

console.log("This is my first programme");
console.log("Welcome John, your month's salary is £50,000");

const num1 = 5;
const num2 = 3;

// Add two numbers
const sum = num1 + num2;

// Display the sum
console.log("The sum of " + num1 + " and " + num2 + " is " + sum);

// Exercise 2:
// Check if user's number is positive, negative, or zero

// Create user input object
const ps = require("prompt-sync");
const prompt = ps();

// Get input from user
const number = parseInt(prompt('Enter number: '));

// Check if number is positive and prints message
if (number > 0)
{
    console.log('The number is positive');
}
// Check if number is zero and prints message
else if (number == 0)
{
    console.log('The number is zero')
}
// Check if number is negative and prints message
else
{
    console.log('The number is negative')
}