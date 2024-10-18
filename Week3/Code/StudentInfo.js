// Exercise 3

// Declare constant variable
const dateOfBirth = '12/12/1980';

// Declare two functions
const getStudentName = () =>
{
    return 'Antony';
}

const getCampusName = () =>
{
    return 'UEL Campus';
}

// Export functions and variables 
exports.getName = getStudentName;
exports.location = getCampusName;
exports.dob = dateOfBirth;

// Declare and export function
exports.studentGrade = (marks) =>
{
    if (marks > 50 && marks < 70) return 'B grade';
    else return 'A grade';
}