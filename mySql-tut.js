/************ Nodejs Connect with MySql ************/
/* 
1. Install MySql npm package.
Ans :- npm i mysql
2. Connect NodeJs and MySql.
Ans :-  const mysql = require("mysql");
        const con = mysql.createConnection({
            host : "localhost",
            user : "root",
            password : "",
            database : "test"
        });

        // Check the connection is build.

        con.connect((err) => {
        if(err){
                console.warn("error");
        }else{
            console.warn("Connected");
        }
        }); 

        con.query("Select * from users", (err,  result) => {
            console.warn("result :- ", result);
        });

3. Get data from MySql.
Ans :-  con.query("Select * from users", (err,  result) => {
            console.warn("result :- ", result);
        });
4. Interview question.
*/

/************ NodeJs GET API with MySql ***********/
/* 
1. Make config file.
Ans :- config_mysql.js
2. Make route for API.
Ans :-  app.get("/get", (req, resp) => {});

        const con = require("./config_mysql");
        if(con){
            console.log("Done");
        }else{
            console.log("Error"); 
        }

        app.get("/get", (req, resp) => {
            con.query("select * from users", (err, result) => {
                if(err){
                    resp.send(err);
                }else{
                    resp.send(result); 
                }
            });
        
        });
3. Get data from MySql.
Ans :- con.query("select * from users", (err, result) => {
                if(err){
                    resp.send(err);
                }else{
                    resp.send(result); 
                }
4. Interview Question.
*/

/*********** NodeJs POST API with MySql ( Insert data ) ***********/
/* 
1. Make route for API.
Ans :- app.post("/insert", (req, resp) => { });
2. Insert data in Mysql.
Ans :-  
    // Static data inserted
    app.post("/insert", (req, resp) => {
        const data = {name:"Prabhjot Singh", password : 123456, user_type : "admin"};
        con.query("INSERT INTO users SET ?", data, (err, result, fields) => {
            if(err){
                //throw // Throw is nodejs / javasscrit keywords
               throw err;
            }
            resp.send(result);
        });
    }); 

    // Insert dynamic data
    app.post("/insert", (req, resp) => {
        const data = req.body;
        con.query("INSERT INTO users SET ?", data, (err, result, fields) => {
            if(err){
                //throw // Throw is nodejs / javasscrit keywords
                throw err;
            }
            resp.send(result);
        });
    });
3. Interview question.
*/

/************* NodeJs PUT API with MySql ( Update ) ***********/
/* 
1. Make a route for API.
Ans :-  app.put("/update", (req, resp) => {
            resp.send("Update data");
        });
2. Get data from Postman.
Ans :- const data = [req.body.name, req.body.password, req.body.user_type, req.params.id];
3. Update data in mysql.
Ans :-  // PUT Api ( Update the data)
        // Update statically data 
        app.put("/update", (req, resp) => {
            const data = ["Manjot", 258794, "sub_admin", 4];
            con.query("UPDATE users SET name = ?, password = ?, user_type = ? WHERE id = ?", data, (err, result, fields) =>{
                if(err) throw err;
                resp.send(result);
            });    
        });
        // Update dynamic data
        app.put("/update/:id", (req, resp) => {
            const data = [req.body.name, req.body.password, req.body.user_type, req.params.id];
            con.query("UPDATE users SET name = ?, password = ?, user_type = ? WHERE id = ?", data, (err, result, fields) =>{
                if(err) throw err;
                resp.send(result);
            });    
        });
4. Interview question.
Q :- If we don't update the records then we insert the data?
Ans :- First we have check in the api (affectedRows) is 0 then we run the inserted code if the (affectedRows) is 1 then run the updated code.
*/

/************* NodeJs Delete API with MySql ( Dalete data ) */
/* 
1. Make route for API.
Ans :- app.delete("/delete/:id", (req, resp) => {
            
        });
2. Get data from Postman.
Ans :-  const data = [req.params.id];
3. Delete data from MySql.
Ans :- app.delete("/delete/:id", (req, resp) => {
            const data = [req.params.id];
            con.query("DELETE FROM users WHERE id = "+ data, (err, result) => {
                if(err) throw err;
                resp.send(result);
            });
        });
4. Interview question.
*/