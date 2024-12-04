// Import all required libraries
const express = require('express');
const bodyParser = require('body-parser');
const Books = require('./BookSchema');
const db = require('./MongoDBConnect');
const cors = require('cors');

// Define instance of express. Create express application
const app = express();

// Define middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

// Run database connection
db;

console.log('Books', Books);

// Create home page route
app.get('/', (req, res) => {
    console.log('Home Page');
    res.send('Home Page');
});

// Create about route
app.get('/about', (req, res) => {
    // Send message in response object
    res.send('MongoDB, Express, React, and Mongoose app. React runs in another applicaiton');
    // Perform mongoose query for total number of books in collection
    Books.countDocuments().exec().then((count) => {
        console.log('Total documents counted before addition: ', count);
    })
    .catch((error) => {
        console.error(error);
    });
});

// Create get books route
app.get('/get-books', (req, res) => {
    // Use find mongoose query to find all book records
    Books.find({})
    .then( (books) => {
        res.json(books);
    })
    .catch( (error) => {
        res.status(500).send(error);
    });
});

// Create get book by parameter id route
app.get('/get-book/:id', (req, res) => {
    // Define variable as id parameter in url
    let id = req.params.id;
    // Use find query with id variable argument
    Books.findById({_id: id})
    .then( (book) => {
        res.json(book);
    })
    .catch( (error) => {
        res.status(500).send(error);
    });
});

// Create add book route
app.post('/add-book', (req, res) => {
    // Print book data to console
    console.log('Ref', req.body);
    // Define new Books instance from request body
    let newBook = new Books(req.body);
    // Print new book data to console
    console.log('New book --> ', newBook);
    // Save book to collection
    newBook.save()
    .then(() => {
        res.status(200).json({'Books': 'book added successfully'});
    })
    .catch((error) => {
        res.status(400).send('Failed to add new book', error);
    });
});

// Create update book by parameter id route
app.post('/update-book/:id', (req, res) => {
    // Define variable as id parameter in url
    let id = req.params.id;
    // Define new Books instance from request body
    let updatedBook = new Books(req.body);
    // Use find and update query with the id variable
    Books.findByIdAndUpdate({_id: id}, {
        BookTitle: updatedBook.BookTitle,
        PubYear: updatedBook.PubYear,
        Author: updatedBook.Author,
        Topic: updatedBook.Topic,
        Format: updatedBook.Format
    })
    .then( () => {
        res.status(200).json({'Books': 'Book updated successfully'});
    })
    .catch( (error) => {
        console.log(error);
    });
});

// Create delete book by parameter id route
app.post('/delete-book/:id', (req, res) => {
    // Define variable as id parameter in url
    let id = req.params.id;
    console.log('Deleting');
    // Use find and delte query with the id variable
    Books.findByIdAndDelete({_id: id})
    .then( () => {
        res.status(200).send('Book deleted');
    })
    .catch ( (error) => {
        console.log(error);
    });
});

// Establish connection and set port number to 5000
app.listen(5000, () => {
    console.log('Server is running on Port 5000');
});