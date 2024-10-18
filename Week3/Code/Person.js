// Exercise 3:

// Define class with three variables and one method
class Student
{
    constructor(name, age, email)
    {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    getPersonInfo()
    {
        return [this.name, this.age, this.email];
    }
}

// Export class
module.exports = Student;