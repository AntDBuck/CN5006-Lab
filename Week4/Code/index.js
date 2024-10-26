// Exercise 1:

// Import modules
let express = require('express');
let fs = require('fs');
let bodyParser = require('body-parser');

// Define express instance as app variable
let app = express();

app.use(bodyParser.urlencoded({extended: true}));

// Use route method and send string using response object
app.get('/', function(req, res)
{
    res.send('Hello, this is my first Express application.');
});

// Set port number to 5000 and print message to console
app.listen(5000, function()
{
    console.log('Server is running on port 5000.');
});

// Exercise 2:

// Use route method and send string using response object
app.get('/about', function(req, res)
{
    res.send('This is a basic Express applicaiton.');
});

// Use route with parameters and pass them to response object
app.get('/users/:userId/books/:bookId', function(req, res)
{
    res.send(req.params);
});

// Exercise 3:

// Use route that reads a file and sends it to browser in json format
app.get('/getstudents', function(req, res)
{
    studentdata = {};
    fs.readFile(__dirname + '/' + 'student.json', 'utf-8', 
        function (err, data) 
        {
            // Print data on console
            console.log(data);
            // Send additional json information along with the data
            res.json({
                'Status': true,
                'Status Code': 200,
                'Requested at': req.localtime,
                'Requested URL': req.url,
                'Requested Method': req.method,
                'Student Data': JSON.parse(data)
            });
        }
    );
});

// Use route that reads a file, filters out record based on url parameter and sends it to browser in json format
app.get('/getstudent/:id', (req, res) =>
{
    studentdata = {};
    fs.readFile(__dirname + '/' + 'student.json', 'utf-8',
        function(err, data)
        {
            // Declare variable of student.json file
            let students = JSON.parse(data);
            // Decalre variable as student record with id parameter
            let student = students['Student' + req.params.id];
            // Print data on console
            console.log('Student', student);

            // If student is found, then send data to browser
            if(student)
            {
                res.json(student);
            }
            // else, send json information with all records
            else
            {
                res.json({
                    'Status': true,
                    'Status Code': 200,
                    'Requested at': req.localtime,
                    'Requested URL': req.url,
                    'Requested Method': req.method,
                    'Student Data': JSON.parse(data)
                });
            }
        }
    );
});

// Exercise 4:

// Send html file to route
app.get('/studentinfo', function(req, res)
{
    res.sendFile('StudentInfo.html', {root: __dirname});
});

// Submit data from form
app.post('/submit-data', function(req, res)
{
    let name = req.body.firstName + req.body.lastName + ' ';
    let age = req.body.myAge + ' Gender: ' + req.body.gender + ' ';
    let qual = 'Qualificaiton: ' + req.body.qualification;

    res.send({
        Status: true,
        Message: 'form details', data:
        {
            Name: name, Age: age, Qualifications: qual
        }
    });
});