const { MongoClient } = require('mongodb'); // Both are same. First is modern javascript concept.
//const MongoClient = require('mongodb').MongoClient;

//const url = "mongodb://localhost:27017/"; // Set the path of mongodb. Sometime we connect the mongodb online then we pass the path of mongodb local/online.
const url = "mongodb://127.0.0.1:27017/"; // Set the path of mongodb. Sometime we connect the mongodb online then we pass the path of mongodb local/online.
const database = "e-comm"; // Database name
const client = new MongoClient(url); // Pass the url in MongoClient because mongodb understand to get the data from this path.

async function dbConnection() {
    let result = await client.connect();
    let db = result.db(database); // Connection with database
    return db.collection('products'); // Give the collection name where to get the data.
}

// Export the function
module.exports = dbConnection; // Passed the function