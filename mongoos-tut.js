/**************** Start with Mongoose ****************/
/* 
1. What is mongoose.
Ans :- Mongoose is a advanced version of MongoDb.
2. Difference between Mongoose vs MongoDb package.
Ans :- MongoDb is some limitions. This limition is handle with Mongoose. Mongoose give the some advance feature as compare to mongoDb.
        Some advance feature :- 
        1. In the collection we have a 4 fields and We don't want to add the 5 field inside the collection.
        So this type of situation is handle with the mongoose using with the schemas. But inside the mongodb this will not hanpped.
        2. We set the type of fields in the mongoose and apply the validation. like we add only integer value not a string.
        3. Apply validation.
        4. Apply schemas.
        5. Control fields. 
3. Install Mongoose.
Ans :- Command :- npm i mongoose.
4. What is schemas.
Ans :- Schemas basically used for validate the collection fields. And All so used the type validation.
        Example :-
                    const mongoose = require('mongoose');
                    const main = async () => {
                        // Schemas Code.....
                        await mongoose.connect('mongodb://127.0.0.1:27017/e-comm'); // Connect to the database.
                        // Two part are mongoose :- 1 Schemas. 2 Model
                        const productSchemas = new mongoose.Schema({
                            name : String,
                            price : Number
                        });
                        
                        // Model code.....
                        // Define a Model
                        const productModel = mongoose.model('products', productSchemas); // mongoose.model(collection_name, schemas_name)
                        // When we insert, delete etc then we want to create a new schemas
                        let data = new productModel({name:"m8",price:2500});
                        let result = await data.save();
                        console.log(result);
                    }
                    main();  
5. What is model.
Ans :- Model is basically connect Nodjs with MongoDb. 
6. Connect Nodejs with MongoDb and Mongoose.
Ans :-  await mongoose.connect('mongodb://127.0.0.1:27017/e-comm'); // Connect to the database.
        const mongoose = require('mongoose');
        const main = async () => {
            await mongoose.connect('mongodb://127.0.0.1:27017/e-comm'); // Connect to the database.
            // Two part are mongoose :- 1 Schemas. 2 Model
            const productSchemas = new mongoose.schema({
                name : string
            });
        }
7. Diiffernce between Schemas and Model.
Ans :-  Schemas :- All fields in the collection are called schemas and apply inside the schemas for validate the fields.
        Model :- Model are used the schemas for connect the Nodejs and MongoDb.
*/

/*  const mongoose = require('mongoose');
    const main = async () => {
        await mongoose.connect('mongodb://127.0.0.1:27017/e-comm'); // Connect to the database.
        // Two part are mongoose :- 1 Schemas. 2 Model
        const productSchemas = new mongoose.Schema({
            name : String,
            price : Number
        });
        
        // Define a Model
        const productModel = mongoose.model('products', productSchemas); // mongoose.model(collection_name, schemas_name)
        // When we insert, delete etc then we want to create a new schemas
        let data = new productModel({name:"m8",price:2500});
        let result = await data.save();
        console.log(result);
    }
    main();  */

/************* CRUD with Mongoose *************/
/* 
1. Continue last video code (What is mongoose, Model, Schema etc).
Ans :-  const mongoose = require('mongoose');
        mongoose.connect('mongodb://127.0.0.1:27017/e-comm');
        const productSchema = new mongoose.Schema({
            name : String,
            price : Number,
            brand : String,
            category : String
        });

        let saveInDB = async () => {
            let product = await mongoose.model('products', productSchema);
            let data = new product(
                {
                    name : "Venu", 
                    price : 1200000, 
                    brand : "Hundye", 
                    category : "car"
                }
            );
            const result = await data.save();
            console.log(result);
        }
        //saveInDB();

2. Update records.
Ans :- // Update data
        const updateInDB = async () => {
            const product = await mongoose.model('products', productSchema);
            let data = await product.updateOne(
                { name : "Galaxy Pro" },
                { 
                    //$set : {price : 1250} // Single data update
                    $set : { price : 1300, name : "Galaxy Max Pro"}
                }
            );
            console.log(data);
        }
//updateInDB();

3. Delete records.
Ans :- // Delete data
        const deleteData = async () => {
            const product = await mongoose.model('products', productSchema);
            let data = await product.deleteOne({name : "Venu"});
            console.log(data);
        }

        // deleteData();

4. Find and Read result.
Ans :- // Read Data
        const findInDB = async () => {
            const product = await mongoose.model("products", productSchema);
            //let data = await product.find(); // Find all data
            let data = await product.find({name : "Hector"}); // Find single data
            console.log(data);
        }
        findInDB();
*/

/************ Post API with Mongoose (Project level API's) ***********/
/* 
File name :- config.js
File name :- product.js

1. Make a config file for MongoDb.
Ans :- config.js
2. Make post route.
Ans :-  app.post('/create', async (req, resp) => {
            //resp.send("Create");
            let data = new product(req.body);
            let result = await data.save();
            console.log(result);
            //console.log(req.body);
            resp.send(result); 
        });
3. Get data from Postman and save in DB.
Ans :-  let data = new product(req.body);
        const express = require('express');
        require('./config');
        const product = require('./product');
        const app = express();
        app.use(express.json()); // First convert api data into JSON using this method app.use(express.json());
        app.post('/create', async (req, resp) => {
            //resp.send("Create");
            let data = new product(req.body);
            let result = await data.save();
            console.log(result);
            //console.log(req.body);
            resp.send(result); 
        });

app.listen(5000);
4. Interview question.
*/

/************* GET, DELETE AND PUT Api *************/
/* 
1. Example of GET method API.
Ans :-  const express = require('express');
        require('./config');
        const product = require('./product');
        const app = express();
        app.use(express.json()); // First convert api data into JSON using this method app.use(express.json());
        app.post('/create', async (req, resp) => {
            //resp.send("Create");
            let data = new product(req.body);
            let result = await data.save();
            console.log(result);
            //console.log(req.body);
            resp.send(result); 
        });
        localhost:5000/list
        // Get Data
        app.get("/list", async (req, resp) => {
            let data = await product.find();
            resp.send(data);
            //console.log(data);
        });

2. Example of DELETE method Api.
Ans :-  localhost:5000/delete/653bb6c31b4f1e1d6a638958
        // Delete data
        app.delete("/delete/:_id", async (req, resp) => {
            //console.log(req.params);
            //let data = await product.deleteOne({ id: '653bb6c31b4f1e1d6a638958' }); // Static Delete data
            let data = await product.deleteOne(req.params);
            resp.send(data);
        });

3. Example of PUT method Api.
Ans :-  localhost:5000/update/653bab689249094502b9b335
        // PUT Data (Update data)
        app.put("/update/:_id", async (req, resp) => {
        //console.log(req.params);
        let data = await product.updateOne(
            // Condition static
            //{
                // name : "Venu" // static condition           
            //} 
            // Condition dynamic
            req.params, 
            // Updated data
            {
                $set : {price : 1000000}
            }
        );
        resp.send(data);
    });

4. Interview Question.
Q :- When you delete or Put data then you pass the ID in Query Param Or Body
Ans :-  1. When we delete the data then we used the ( Query Param ).
        2. When we Put ( Update ) data then we passed the ID with both ( Query Param ) or (Body). It's upto you which technique you are used.

*/


/************** Search API in Nodejs With MongoDB *************/
/* 
1. Make simple GET route for API.
Ans :-  app.get("/search/:key", async (req,resp) => {
    
        });
2. Search with single field.
Ans :-  app.get("/search/:key", async (req,resp) => {
            let data = await product.find({
                "$or" : [
                    {"name" : {$regex:req.params.key}}                   
                ]
            });
            //  console.log(req.params.key);
            //  Basically used the Regex for search
            resp.send(data);
        });
3. Search with multiple field.
Ans :-  app.get("/search/:key", async (req,resp) => {
            let data = await product.find({
                "$or" : [
                    {"name" : {$regex:req.params.key}},
                    {"brand" : {$regex:req.params.key}}
                ]
            });
            //  console.log(req.params.key);
            //  Basically used the Regex for search
            resp.send(data);
        });
4. Test API.
Ans :-  Select GET method.
        Url :- localhost:5000/search/m
5. Interview Question.
Q :- Can we search the data with POST, PUT or DELETE method?
Ans :- Yes, But POST method used for search send data, PUT for update data, DELETE method used for delete data.
*/