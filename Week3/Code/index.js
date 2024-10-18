// Exercise 1:

// Define a function, employeeInfo, that has two parameters and outputs a message to the console
function employeeInfo(name, salary)
{
    console.log('Welcome ' + name + ', Your monthly salary is £' + salary + '.');
}

console.log('*** THIS IS MY FIRST PROGRAM ***');

// Declare two variables to use as arguments in function
let empName = 'Anakin';
let empSalary = 80000;

// Call the function
employeeInfo(empName, empSalary);

// Exercise 2:

// Define an arrow function, empSkills, that has one parameter and outputs a message to the console
const empSkills = (skills) =>
{
    console.log('Expert in ' + skills + '.');
}

// Call the function
empSkills('Java');

// Exercise 3:

// Import functions, variables and class
const student = require('./StudentInfo');
const person = require('./Person');

// Print to console using student import
console.log('Student name: ' + student.getName());
console.log('Location: ' + student.location());
console.log('Date of birth: ' + student.dob);
console.log('Grade is ' + student.studentGrade());
console.log('Grade is ' + student.studentGrade(55));

// Create a new person using person import
person1 = new person('Jim', 'USA', 'myemail@gmail.com');

// Print attributes of person to console
console.log('Using Person module: ', person1.getPersonInfo());

console.log('*** PROGRAMME END ***');

// Exercise 4:

// Import core modules
const os = require('os');
const util = require('util');

// Print messages to console using methods from os and util modules
console.log('Temporary directory: ' + os.tmpdir());
console.log('Hostname: ' + os.hostname());
console.log('OS: ' + os.platform() + ', release: ' + os.release());
console.log('Uptime: ' + (os.uptime() / 3600) + ' hours');
console.log('User info: ' + util.inspect(os.userInfo()));
console.log('Memory: ' + (os.totalmem() / 1000000000) + ' Gigabytes');
console.log('Free: ' + (os.freemem() / 1000000000) + ' Gigabytes');
console.log('CPU: ' + util.inspect(os.cpus()));
console.log('Network: ' + util.inspect(os.networkInterfaces()));

console.log('*** PROGRAMME END ***');