const mongoose = require('mongoose');

// Schema
const productSchema = new mongoose.Schema(
    {
        name : String,
        price : Number,
        brand : String,
        category : String
    }
);

// Model

// mongoose.model('products', productSchema);
module.exports = mongoose.model('products', productSchema);