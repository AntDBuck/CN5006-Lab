// Import mongoose
const mongoose = require("mongoose");

// Define MongoDB url constant
const url = 'mongodb://localhost:27017/BooksData';

// Establish connection with MongoDB url
mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true});

// Set db to the MongoDB connection
const db = mongoose.connection;
// On error, print message to console
db.on('Error', (error) => {console.log('Error occured', error)});
// Once connected, print message to console
db.once('Connected', () => {console.log(`Connection to ${url} is successful`)});

// Export connection
module.exports = db;