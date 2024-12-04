// Import mongoose
const mongoose = require("mongoose");

// Define schema for model
const bookScheme = new mongoose.Schema({
    BookTitle: {type: String, required: true},
    PubYear: Number,
    Author: String,
    Topic: String,
    Format: String
});

// Export and define model with defined schema and MongoDB collection 
module.exports = mongoose.model('BookModel', bookScheme, 'BookCollection2');