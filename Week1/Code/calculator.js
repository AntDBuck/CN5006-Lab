// Program that either adds, subtracts, multiplies, or divides two or more numbers given by the user

// Create user input object
const ps = require("prompt-sync");
const prompt = ps();

// Display app name
console.log("--- CALCULATOR APP ---");

// Display prompt for number of operands
const totalNum = parseInt(prompt("How many numbers do you wish to use? "))

// Declare array to hold all user's chosen numbers
const userNums = [];

// Get each number and store it in the array
for(i = 0; i < totalNum; i++)
{
    userNums[i] = parseFloat(prompt("Enter number: "));
}

// Display prompt and get user input for operator
const operator = prompt("Enter operation type (+, -, *, /): ");

// Decalre answer variable
let answer;

// Perform operation and display result using a switch statement
switch(operator)
{
    // Addition
    case "+":
        // Set inital vaule to 0
        answer = 0;
        for(i = 0; i < userNums.length; i++)
        {
            answer = answer + userNums[i];
        }
        console.log("Answer: " + answer);
        break;
    // Subtraction
    case "-":
        // Set inital value to first element in array
        answer = userNums[0];
        for(i = 1; i < userNums.length; i++)
        {
            answer = answer - userNums[i];
        }
        console.log("Answer: " + answer);
        break;
    // Multiplication
    case "*":
        // Set inital value to 1
        answer = 1;
        for(i = 0; i < userNums.length; i++)
        {
            answer = answer * userNums[i];
        }
        console.log("Answer: " + answer);
        break;
    // Division
    case "/":
        // Set inital value to first element in array
        answer = userNums[0];
        for(i = 1; i < userNums.length; i++)
        {
            // Terminate program if divison by zero occurs
            if(userNums[i] == 0)
            {
                console.log("Error! Divison by zero is undefined.");
                console.log("--- END OF PROGRAM ---");
                return;
            }
            answer = answer / userNums[i];
        }
        console.log("Answer: " + answer);
        break;
}

// Display end of program message
console.log("--- END OF PROGRAM ---");