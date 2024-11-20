// Task 1

// Import mongoose module
mongoose = require('mongoose');

// Define URL constant
const mongoURL = 'mongodb://localhost:27017/week8';

// Establish connection with URL
mongoose.connect(mongoURL, {useUnifiedTopology: true, useNewUrlParser: true});

// Define database connection
const db = mongoose.connection;

// Print error message to the console if error has occurred
db.on('error', function(err)
{
    console.log('Error occurred during connection ' + err);
});

// Print connected message to the console
db.once('Connected', function() 
{
    console.log(`Connected to ${mongoURL}`);
});

// Define the schema of the database
const personSchema = new mongoose.Schema(
{
    name:{type: String, required: true},
    age:{type: Number},
    gender:{type: String},
    salary:{type: Number}
});

// Define database model
const personDoc = (mongoose.model('modelname', personSchema, 'personCollection'));

// Define a new record
const rec1 = new personDoc(
{
    name: 'Arwen',
    age: 45,
    gender: 'Female',
    salary: 6780
});

// Save record to database
rec1.save()
// If successful, print message to console
.then((rec1) =>
{
    console.log('New record has been added into your database', rec1);
})
// If error occurs, print error to console
.catch((err) =>
{
    console.error(err);
});

// Task 2

// Define an array of JSON records
const manyPeople = 
[
    {name: 'Gandalf', age: 70, gender: 'Male', salary: 3500},
    {name: 'Sam', age: 23, gender: 'Male', salary: 2900},
    {name: 'Aragorn', age: 50, gender: 'Male', salary: 8600},
    {name: 'Rose', age: 25, gender: 'Female', salary: 4600},
    {name: 'Eowyn', age: 33, gender: 'Female', salary: 6350}
];

// Insert many documents into the database. 'manyPeople' is passed as an 
// argument to the 'insertMany' method.
personDoc.insertMany(manyPeople)
.then(function()
{
    console.log('Data inserted');
})
.catch(function(error)
{
    console.log(error);
});

// Task 3

// Sort documents by salary and display only the name, age, and salary on the console
personDoc.find({})
.sort({salary: 1})
.select('name age salary')
.limit(10)
.exec()
.then(docs =>
{
    console.log('Displaying the requested documents: ');
    docs.forEach(function(doc)
    {
        console.log(doc.name, doc.age, doc.salary);
    });
})
.catch(err => 
{
    console.error(err);
});

// Task 4

// Declare age variable
var givenAge = 40;

// Filter documents by female and age >= 30, sort by ascending name,
// select name and age, and display only 10 records
personDoc.find({gender: 'Female', age: {$gte:givenAge}})
.sort({name:1})
.select('name age')
.limit(10)
.exec()
.then(docs => 
{
    console.log('Displaying Females with age greater than or equal to', givenAge);
    docs.forEach(function(doc)
    {
        console.log(doc.name, doc.age);
    });
})
.catch(err => 
{
    console.error(err);
});

// Task 5

// Count total number of documents and display in console
personDoc.countDocuments()
.exec()
.then(count =>
{
    console.log('Total document count:', count);
})
.catch(err =>
{
    console.log(err);
});

// Task 6

// Delete documents where age is >= 25, display total deleted in console
personDoc.deleteMany({age: {$gte: 25}})
.exec()
.then(docs =>
{
    console.log('Deleted documents:', docs);
})
.catch(function(error)
{
    console.log(error);
});

// Task 7

// Update salary to 5555 for females and display the results on the console
personDoc.updateMany({gender: 'Female'}, {salary: 5555})
.exec()
.then(docs =>
{
    console.log('Update');
    console.log(docs);
})
.catch(function(error)
{
    console.log(error);
});