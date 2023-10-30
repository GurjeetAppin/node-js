/*********** Connect Nodejs with MongoDB */
/*
1. Install MongoDB package.
Ans :- install i mongodb :- This command is install the mongodb package inside the nodejs.
2. Connect MongoDB with NodeJs.
Ans :-
        const {MongoClient} = require('mongodb'); // Both are same. First is modern javascript concept.
        //const MongoClient = require('mongodb').MongoClient;

        //const url = "mongodb://localhost:27017/"; // Set the path of mongodb. Sometime we connect the mongodb online then we pass the path of mongodb local/online.
        const url = "mongodb://127.0.0.1:27017/"; // Set the path of mongodb. Sometime we connect the mongodb online then we pass the path of mongodb local/online.
        const database = "e-comm"; // Database name
        const client = new MongoClient(url); // Pass the url in MongoClient because mongodb understand to get the data from this path.

        async function getData(){
            let result = await client.connect();
            let db = result.db(database); // Connection with database
            let collection = db.collection('products'); // Give the collection name where to get the data.
            let response = await collection.find({}).toArray(); // find() method get all data form collection
            console.log(response);
        }
        getData();

3. Show data from MongoDB.
Ans :-  async function getData(){
            let result = await client.connect();
            let db = result.db(database); // Connection with database
            let collection = db.collection('products'); // Give the collection name where to get the data.
            let response = await collection.find({}).toArray(); // find() method get all data form collection
            let response = await collection.find({name : 'i phone 14'}).toArray(); // Get the single data form database
            console.log(response);
        }
        getData();
4. Interview Question.
Q :- Can we connect the two database?
Ans :- Yes, We definitly connect the two database. You would create a two connection and connected it.
*/



/*************  Read data form MongoDB ************/
/*
1. Read data from mongoDB.
Ans :- async function getData(){
            let result = await client.connect();
            let db = result.db(database); // Connection with database
            let collection = db.collection('products'); // Give the collection name where to get the data.
            let response = await collection.find({}).toArray(); // find() method get all data form collection
            let response = await collection.find({name : 'i phone 14'}).toArray(); // Get the single data form database
            console.log(response);
        }
        getData();
2. Make file for DB connection.
Ans :- Make a mongodb.js file and past this connection code.
        const { MongoClient } = require('mongodb'); // Both are same. First is modern javascript concept.
        //const MongoClient = require('mongodb').MongoClient;

        //const url = "mongodb://localhost:27017/"; // Set the path of mongodb. Sometime we connect the mongodb online then we pass the path of mongodb local/online.
        const url = "mongodb://127.0.0.1:27017/"; // Set the path of mongodb. Sometime we connect the mongodb online then we pass the path of mongodb local/online.
        const database = "e-comm"; // Database name
        const client = new MongoClient(url); // Pass the url in MongoClient because mongodb understand to get  the data from this path.

        async function dbConnection() {
            let result = await client.connect();
            let db = result.db(database); // Connection with database
            return db.collection('products'); // Give the collection name where to get the data.

        }

3. Handle promise.
4. Interview connection.
*/

// Import the connection file data
//const dbConnection = require('./mongodb');

// Using Promise

/* dbConnection().then((resp, rej) => {
    // Get all data
     resp.find().toArray().then( (data) => {
         console.log(data);
     })
    // For single data
    resp.find({ name: "i phone 14" }).toArray().then((data) => {
        console.log(data);
    })
}) */
//console.log(dbConnection());

// Async await in promises.
/* const main = async () => {
    let data = await dbConnection()
    data = await data.find().toArray();
    console.log(data);
}
main(); */

/************* Insert Data from Mongodb *************/

/* 
Insert Data from Mongodb with Nodejs

1. Make new file for insert data.
Ans :- Create a file insert.js
 const dbConnection = require('./mongodb');

const insert = async () => {
    const db = await dbConnection();
   // console.log(db);
   // process.exit(0); // terminate the code of execution in nodejs
    const result = db.insert(
        {name : "N90",brand : "Black Berry",price : 2000,category : "Mobile"}
    );
   // For single result
    const result = await db.insert(
            {name : "N90",brand : "Black Berry",price : 2000,category : "Mobile"}
    );
    // For multiple result
    const result = await db.insert(
        [
            {name : "N90",brand : "Black Berry",price : 2000,category : "Mobile"},
            {name : "M220",brand : "Black Berry 2",price : 3200,category : "Mobile"}
        ]
);
    // To check the result is success or not
    if(result.acknowledged){
        console.log("Data inserted");
    }
  
     const myobj = {name : "N90",brand : "Black Berry",price : 2000,category : "Mobile"};
    const result = db.insert(myobj, (err, res) => {
        // Showing the error's
        if(err) throw err;
        console.log("Data insert");
    } 
    )
    

    console.log(result);
}
insert();

// Run the file into the terminal
// nodemon .\insert.js 

2. Import mongodb connection.
Ans :-  const dbConnection = require('./mongodb'); 
        // mongodb.js file code
        const { MongoClient } = require('mongodb'); // Both are same. First is modern javascript concept.
        //const MongoClient = require('mongodb').MongoClient;

        //const url = "mongodb://localhost:27017/"; // Set the path of mongodb. Sometime we connect the mongodb online then we pass the path of mongodb local/online.
        const url = "mongodb://127.0.0.1:27017/"; // Set the path of mongodb. Sometime we connect the mongodb online then we pass the path of mongodb local/online.
        const database = "e-comm"; // Database name
        const client = new MongoClient(url); // Pass the url in MongoClient because mongodb understand to get  the data from this path.

        async function dbConnection() {
            let result = await client.connect();
            let db = result.db(database); // Connection with database
            return db.collection('products'); // Give the collection name where to get the data.
        }

        // Export the function
        module.exports = dbConnection; // Passed the function
3. Insert single and multiple records.
Ans :-  // For single result
            const result = await db.insert(
                    {name : "N90",brand : "Black Berry",price : 2000,category : "Mobile"}
            );
            // For multiple result
            const result = await db.insert(
                [
                    {name : "N90",brand : "Black Berry",price : 2000,category : "Mobile"},
                    {name : "M220",brand : "Black Berry 2",price : 3200,category : "Mobile"}
                ]
        );
4. Interview question.
Q :- Insert multiple data?
Ans :-  const result = await db.insert(
                [
                    {name : "N90",brand : "Black Berry",price : 2000,category : "Mobile"},
                    {name : "M220",brand : "Black Berry 2",price : 3200,category : "Mobile"}
                ]
        );
Q :- How use the where condition?
Ans :- resp.find({ name: "i phone 14" }).
*/

/************* Update data in MongoDb ***********/
/* 
1. Make new file for update data.
Ans :- Create file update.js
2. Import mongodb connection.
Ans :- require('./mongodb).
3. Update single or multiple records.
Ans :-  // Single data update
        let result = await data.updateOne(
        { name : "Samsung Galaxy Pro", }, 
        { $set : {name : "Galaxy Pro"}}
        );

        // Multiple records update
        let result = await data.update(
            { name : "Samsung Galaxy Pro", }, 
            { $set : {name : "Galaxy Pro"}}
            );
4. Interview question.
Q :- In collection multiple records with same data. Then which records is updated?
Ans :- First records is updated.
Q :- In collection we have multiple records but you want to update only one records how it's possible?
Ans :- Using a updateOne() method for update a single records.
*/

/**************** Delete Data in mongodb ****************/
/* 
1. Make a new file for delete data.
Ans :- Create file delete.js
2. Import mongodb connection.
Ans :- require('./mongodb).
3. Delete single or multiple records.
Ans :- // Single records delete
        const result = await data.deleteOne(
            { name : "i phone 15"}
        );
        // Delete multiple records
        const result = await data.deleteMany(
            { name : "i phone 15"}
        );
        if(result.acknowledged){
            console.log("Records Deteted");
        }
        console.log(result);
4. Interview questions
Q :- If records is not avaliable inside the collection. So what will happen?
Ans :- Using a deleteCount we will check the data is deleted or not.
*/

/************ API with MongoDB ************/
/* 
1. Make a new file for API.
Ans :- Create a file api.js.
2. Import and use Mongo Config.
Ans :- require('mongodb').
3. Make API for get data.
Ans :-  const express = require("express");
        const dbConnection = require('./mongodb');
        const app = express();

        app.get('/', async (req, resp) => {
            let data = await dbConnection();
            data = await data.find().toArray();
            //console.log(data);
            //resp.send({name : "Gurjeet"})
            resp.send(data)
        });

        // Make server
        app.listen(5000);  
4. Test with Postman
Ans :- Open the Postman and use the url like this :- localhost:5000
5. Interview question
Q :- Can we pass the body in get method?
Ans :- No, We don't pass the body with get method. But we pass the query perem in the URL.
*/

/************* NodeJs Post API method ***********/
/* 
File name :- api.js
1. Make Post method for API.
Ans :-  app.post("/", (res, resp) => {
            console.log(res.body);
            resp.send({name : "Gurjeet"});
        });
2. Send data form postman.
Ans :-  app.post("/", (res, resp) => {
           resp.send({name : "Gurjeet"});
        });
3. Get data in Nodejs by request.
Ans :-  app.get('/', async (req, resp) => {
            let data = await dbConnection();
            data = await data.find().toArray();
            //console.log(data);
            //resp.send({name : "Gurjeet"})
            resp.send(data)
        });
4. Write code for insert data in MongoDB.
Ans :-  Passed the data in Postman using post method with body json format.
        Like this :- 
                    {
                        "name" : "Nokia 7610",
                        "brand" : "Nokia",
                        "price" : 1100,
                        "category" : "mobile"
                    }
        // Insert Data in MongoDb using Postman.
        app.post("/", async (req, resp) => {
            let data = await dbConnection();
            let result = await data.insertOne(req.body)
            resp.send(result);
        });

5. Interview question.
Q :- Can pass the same url for get and post?
Ans :- Yes.
Q :- Send the data using Postman and How to get the data using nodeJs?
Ans :-  Passed the data inside the postman in body section with json format.
        Like this :- 
        {
            "name" : "Gurjeet Singh"
        }

        // Get the data form postman or request
        app.use(express.json());
        app.post("/", (res, resp) => {
            console.log(res.body); // res.body This is a function to get data form postman.
            resp.send({name : "Gurjeet"});
        });
Q :- Why we don't use a body.parse?
Ans :- In the express version 4.6. We used the body.parse. But right now above the  4.6 version we used the express.json() method.
Q :- What your used for get body from Request?
Ans :- Using a express.json to get body from request in the lastest version. In the 4.6 version we used the body.parse method.

*/

/*************** NodeJs Put API method **************/
/* 
1. Make a Put method for API.
Ans :- Postman Url :-  localhost:5000/Nokia 7610
2. Send the data from Postman.
Ans :- Postman json data :- {
                            "name" : "Nokia 7700",
                            "brand" : "Nokia",
                            "price" : 2000,
                            "category" : "mobile"
                        } 
3. Handle data in Nodejs by request.
Ans :- req.params.your_params_name
4. Write code for update data in MongoDB.
Ans :- // Update Data statically
        app.put("/", async (req, resq) => {
            //console.log(req.body); // To check the data is get from postman to nodejs.
            let data = await dbConnection();
            let result = data.updateOne(
                {name : "Nokia 7610"}, // Used to condition with static data
                {$set : {price: 1500}} // Updated stactic data
                //{name : req.body.name}, // Used to condition with dynamic data
                //{$set : req.body} // Updated dynamic data
                )
            resq.send({result:"Update"});
        }); 

        // Update Data Dynamically
        // Postman Url :-  localhost:5000/Nokia 7610
        // Postman json data :- {
                                    "name" : "Nokia 7700",
                                    "brand" : "Nokia",
                                    "price" : 2000,
                                    "category" : "mobile"
                                } 
        app.put("/:name", async (req, resq) => {
            let data = await dbConnection();
            let result = data.updateOne(
                {name : req.params.name}, // Get the data of query param form postman using the req.params.your_params_name method. like this (req.params.name) this name get form the routs and postman url throw.
                {$set : req.body}
            );
            resq.send({result:"Update data"});
        });
5. Interview question.
Q :- Can update data using the POST method?
Ans :- Yes, We update data using Post method. But one is recommanded and standarad tarika for data update is PUT method. That's why we used the Put method for update data.
*/

/************ Nodejs Delete API method ************/
/* 
1. Make Delete method for API.
Ans :-  const mongodb = require('mongodb');
        app.delete("/:id", async (req, resq) => {
            //console.log(req.params.id);
            let data = await dbConnection();
            // When direct put id in the delete method this not working. Reason is that id is a object id. So we want to create a ID instance using the mongoDB object Example :- new mongodb.objectId(req.params.id)
            //let result = data.deleteOne({name : req.params.name}); // This working perfectly but in ID case this is not work
            let result = await data.deleteOne({_id : new mongodb.ObjectId(req.params.id)});
            resq.send(result);
        })
2. Send the Data from postman.
Ans :- localhost:5000/653b70c4808b99aefc3e9859
3. Handle data in Nodejs by request.
Ans :-  const mongodb = require('mongodb');
        new mongodb.ObjectId(req.params.id)
4. Write code for delete data in mongoDB.
Ans :- let result = await data.deleteOne({_id : new mongodb.ObjectId(req.params.id)});
5. Interview question.
*/
