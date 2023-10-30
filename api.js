const express = require("express");
const dbConnection = require('./mongodb');
const app = express();

// Get the data form postman or request
app.use(express.json());

// Get data form MongoDb
app.get('/', async (req, resp) => {
    let data = await dbConnection();
    data = await data.find().toArray();
    //console.log(data);
    //resp.send({name : "Gurjeet"})
    resp.send(data)
});

// Post Data into MongoDb
/* app.post("/", (res, resp) => {
    console.log(res.body);
    resp.send({name : "Gurjeet"});
}); */

// Insert Data in MongoDb using Postman.
app.post("/", async (req, resp) => {
    let data = await dbConnection();
    let result = await data.insertOne(req.body)
    resp.send(result);
});

// Update Data statically
/* app.put("/", async (req, resq) => {
    //console.log(req.body); // To check the data is get from postman to nodejs.
    let data = await dbConnection();
    let result = data.updateOne(
        {name : "Nokia 7610"}, // Used to condition with static data
        {$set : {price: 1500}} // Updated stactic data
        //{name : req.body.name}, // Used to condition with dynamic data
        //{$set : req.body} // Updated dynamic data
        )
    resq.send({result:"Update"});
}); */

//  Update Data Dynamically
//  Postman Url :-  localhost:5000/Nokia 7610
/*  Postman json data :- {
                            "name" : "Nokia 7700",
                            "brand" : "Nokia",
                            "price" : 2000,
                            "category" : "mobile"
                        } */ 
app.put("/:name", async (req, resq) => {
    let data = await dbConnection();
    let result = data.updateOne(
        {name : req.params.name}, // Get the data of query param form postman using the req.params.your_params_name method. like this (req.params.name) this name get form the routs and postman url throw.
        {$set : req.body}
    );
    resq.send({result:"Update data"});
});

// Delete Data API
const mongodb = require('mongodb');
app.delete("/:id", async (req, resq) => {
    //console.log(req.params.id);
    let data = await dbConnection();
    // When direct put id in the delete method this not working. Reason is that id is a object id. So we want to create a ID instance using the mongoDB object Example :- new mongodb.objectId(req.params.id)
    //let result = data.deleteOne({name : req.params.name}); // This working perfectly but in ID case this is not work
    let result = await data.deleteOne({_id : new mongodb.ObjectId(req.params.id)});
    resq.send(result);
})


// Make server
app.listen(5000);  