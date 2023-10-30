//console.log("hello node");
//console.warn("hello node");
//console.error(new Error("Whoops, Something bad happened"));
// If else condition

// var x = 10;
// if(x === 10){
//     console.log("Condition matched");
// }else{
//     console.log("Condition not matched");
// }

// For loop

// for(var i = 1; i<=10; i++){
//     console.log(i);
// }

// Array

// let arrValue = [1,2,3,4,5,6];
// console.log(arrValue);
// console.log(arrValue[0]);

// How to import the data(code) from another file using the javascript.
// If you add the keyword (export) infornt of the variable etc. It's not working in the nodejs but it's woriking into the javascript.
// export the data in nodejs using (module.exports) keywords :- module.exports = { x : 10 }
// import {x} from "./app.js"
// Import file method using the nodejs
// const app = require("./app");
// console.log(app);
// console.log(app.x); // Get the value of x
// console.log(app.y); // Get the value of y
// console.log(app.z()); // Get the function

// Filter() Function => It's used to get the value form array.

// let arrValue = [1,2,3,4,5,6,3];
// arrValue.filter((item) => {
//     console.log(item);
// });

// let result = arrValue.filter((item) => {
//     return item === 3;
// });
// console.log(result);

/***********  Core module's in Nodejs ***********/
// 1. What are the core modules
// Ans :- Every programing language some basic features are already inbuild like database connectivity, file create, code process, api call. This is called core modules.
// Example :-
// console.log(__dirname); // __dirname :- for check the directory D:\learning\node-tut
// console.log(__filename); // __filename :- D:\learning\node-tut\index.js
// 2. What are global modules
// Ans :- Global modules like a we don't need to import like :- console.log is global module, 
//Example :- console.log("Hello global module.....");

// 3. Global module examples
// Ans :- Example :- console.log("Hello global module.....");

// 4. Non-global module with examples
// Ans :- file system is non global module beacuse we need to import it. Example :- Buffer, filesystem, HTTP etc.
// For example file system :-
// let fs = require("fs");
// fs.writeFileSync("hello.txt", "Global module example");
// If you want to a single module of file system. you will get like that :- let fs = require("fs").writeFileSync;
// 5. Interview questions

/*********** Make basic server output on browser ************/
// 1. Make basic server.
// Ans :- Create basic server :- require("http")
// let http = require("http");
// http.createServer( (req, resp) => {
//     resp.write("<h1>Hello this is basic servers</h1>");
//     // After that end the response
//     resp.end();
// }).listen(4500);
// Second type
// function dataControl(req, resp) {
//     resp.write("This is second type, You will get the external function into the basic server");
//     resp.end();
// }
// http.createServer(dataControl).listen(4500);

// 2. Function as parameter in node.
// Ans :-
// function dataControl(req, resp) {
//     resp.write("This is second type, You will get the external function into the basic server");
//     resp.end();
// }
// http.createServer(dataControl).listen(4500);
// 3. Arrow function. :- (a) => return 1*10;
// 4. Get output on browser.
// 5. Interview Question.
// Q :- What is work of HTTP in nodejs?
// Ans :- Http is handle the request and response of server.


/********** All about Package.json ***********/

// What is package file.
// Ans :- Package.json file stored the details of coding related and manage external packages. Like :- What is the version of project, name, git repository and which command is used in this etc.
// How to make it.
// Ans :- There are so many packages. First you will install npm using the (npm init) command then use this command (npm i colors). This is a color package and you will install multiple package's using the different command with npm.

// Import the package using the require() command.
// let colors = require("colors");
// console.log("Hello node colors tw2".green);

// Check the file in detail.
// Install external package.
// Interview Question.
// Q :- Nodejs is single threaded or multi threaded?
// Ans :- Nodejs is single threaded. This is run one command at a time.

/************ Nodemon | Time saving module ***********/
/* 
1. What is nodemon package?
Ans :- Nodemon package is continuosly run the project. We don't need to run the project again and again.
2. How to install it.
Ans :- npm i nodemon -g. // -g is used for install globally in the system.
3. How to use it.
Ans :- nodemon index.js
4. Interview Question
Q :- Nodejs is sync language or async language?
Ans :- Nodejs is a async language.
       Async :- First code is run and second code take a sometime for execution it run the second code but it's not wait for finish. It's run the third code. When the second code is finish it's alert and execute the second code output. It's not wait.
       
       console.log("test nodemon 1");
       console.log("10 + 20");
*/

/************** Make a simple API **************/

/* 
1. Make a sever.
const http = require("http");
const apiData = require('./apiData');
http.createServer((req, resp) => {
    resp.writeHead(200, { 'content-type': 'application/json' });
    resp.write(JSON.stringify(apiData));
    resp.end();
}).listen(5000);
*/
/*
2. Create a header and API body.
Ans :- Using this command we create a header :- resp.writeHead(200, {'content-type' : 'application/json'});
3. Create API with static data
Ans :- This is static data :- {name : 'Gurjeet Singh', email : 'gurjeet@test.com'},
4. Put data in another file.
Ans :- Make a new file.
      For example :- 1. apiData.js
                     2. Include the file in index.js file :- const apiData = require('./apiData');
                     3. Add it into the server :-   resp.write(JSON.stringify(apiData));
                                                    resp.end();
5. Interview Question.
Q :- What is the meaning of 200,201,400, 404?
Ans :- 200 :- Status Ok
       201 :- Status created
       400 :- Status Bad Request
       404 :- Status Not found
       500 :- Status Internal Server Error
*/

/********** Input form Command Line **********/
/* 
1. Set the input form command line.
Ans :- What is the meaning of input in command line :- In the terminal we run the file using node.
    Example :- node index.js. But we enter some text with the node index.js Gurjeet 36 like that. This is a input command in command line.
    Set the input in command line :- node index.js Gurjeet 36
    Get the input value form command line :- process.argv() this command get the value form command line. argv :- argument vector.
    Exaple :- console.log(process.argv[2]);

2. Create file with input.
Ans :- Create file using the file system module.
    Example :- fs.writeFileSync(input[3], input[4]); // witeFileSync() is used for create a file. node index.js apple.txt 'This is apple company based in USA'
3. Delete the file with input.
Ans :-  if(input[2] == 'remove'){
            fs.unlinkSync(input[3]); // unlinkSync() is used for delete the file. node index.js remove addFile.txt
        }
4. Interview question
const fs = require('fs');
const input = process.argv;
fs.writeFileSync(input[2], input[3]); // First argument is file name and second argument is text that are avaliable in the file. Example :- node index.js apple.txt 'This is apple company based in USA'.

if(input[2] == 'add'){
    fs.writeFileSync(input[3], input[4]); // witeFileSync() is used for create a file. node index.js apple.txt 'This is apple company based in USA'
}else if(input[2] == 'remove'){
    fs.unlinkSync(input[3]); // unlinkSync() is used for delete the file. node index.js remove addFile.txt
}else{
    console.log("Invalid Input");
}

*/


/***************** Show File List *************/

/* 
1. Make file in folder.

const fs = require('fs');
*/
//fs.writeFileSync('apple.txt', 'This is a apple file');
// If you want to create a multiple file with inside the folder.
//const path = require('path');
//const dirPath = path.join(__dirname); // Get the current directory path.
//const dirPath = path.join(__dirname, 'files'); // path.join(__dirname, 'folder_name')Get the path of folder inside the folder.
//console.log(dirPath);
// for(var i = 1; i <= 5; i++){
//     //fs.writeFileSync(dirPath + "/apple"+ i +".txt", "This is apple file.");
//     fs.writeFileSync(dirPath + `/apple${i}.txt`, "This is apple file.");
// }

// Showing the list of files. Then we read the directory.
//fs.readdir(dirPath, (err, files) => console.log(files) ); // This is show the file list in array
// If you want to get files form array   
// fs.readdir(dirPath, (err, files) => {
//     files.forEach((item) => {
//         console.log(item);
//     });
// });

/*
2. Use path module.
const dirPath = path.join(__dirname, 'files'); // path.join(__dirname, 'folder_name')Get the path of folder inside the folder.

3. Get file names and print.
    // Showing the list of files. Then we read the directory.
    //fs.readdir(dirPath, (err, files) => console.log(files) ); // This is show the file list in array
    // If you want to get files form array   
    fs.readdir(dirPath, (err, files) => {
        files.forEach((item) => {
            console.log(item);
        });
    });
4. Interview Question.
Q :- Can access the file from outside the folder or drive using nodejs?
Ans :- No, Reasone :- When we run the nodejs inside the folder. Then it's working like a web server
*/


/*************** CRUD with file system ***************/
/* 
1. Make file.
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'crud'); // using a join() function we get the subfolder location.
const filePath = `${dirPath}/apple.txt`;
//fs.writeFileSync(filePath, "This is crud file system");
//fs.readFile(filePath, (err, data) => console.log(data)); // When we run the file it's showing the buffer data. How to resolve it.
//fs.readFile(filePath,'utf8', (err, data) => console.log(data)); // Using the utf8 we convert the buffer data into normal data.
/*
2. Read file.
    fs.readFile(filePath,'utf8', (err, data) => console.log(data));

3. Update file.
    fs.appendFile(filePath," and this is apple.txt file", (err) => {
        if(!err) console.log('File updated successfully.');
        });
4. Rename file.
    fs.rename(filePath,`${dirPath}/hello.txt`, (err) => {
        if(!err) console.log('File updated with new name');
    });
5. Delete file.
    fs.unlinkSync(`${dirPath}/hello.txt`, (err) => {
        if(!err) console.log("File deleted successfully.");
    });
6. Interview question
Q :- What us Buffer?
Ans :- Buffer mean's tempary memory location. When we create file, perform any other operation in nodejs. It's using the some memory that is called buffer.
*/

/************* Asynchronous Basic in Nodejs (Most Important Topic) ************/
/* 
1. Synchronous :- In synchronous operation task are performed one at a time.
2. Asynchronous :- In Asynchronous, Second task do not wait to finish first task.
Example :- 
            console.log("Start Programme.....")
            setTimeOut(() => {
                console.log("Programme logic.....");
            }, 2000);
            console.log("End Programme.....");
            
            // Dropbacks of Asynchronous
            let a=10; b=0;
            setTimeOut(() =>{
                b = 30;
            }, 2000);
            console.log(a+b); // It's output is 10. When we update value but it execute after sometime. This is a dropback of Asynchronous programming
*/

/************** Handle Asynchronous Data in NodeJs *************/
/* 
// If we have a logic and it will take a time. Then how to handle it. Because we get the accutale result. This situation is handle with the (Promise). 
If we have situation like that :- 
                                    setTimeout(() =>{
                                        b = 30;
                                    }, 2000);
Then what will do. Used the Promise.
// What is Promise?
// Ans :- It's wait the internal data of setTimeout() function and after that it's will return's the result.

    let a=10; b=0;
    let wattingData = new Promise( (resolve, reject) => {
        // resolve :- This run when the our work is perfectly run.
        // reject :- If any error its showing in reject.
        setTimeout(() =>{
            b = 30;
            resolve(b);
        }, 2000);
    });
    wattingData.then( (data) => {
        //console.log(a+data);
        b = data;
        console.log(a+b);
    });

*/

/************** How Nodejs Work ( Most Important part according to interview point of view )*************/
/* 
1. Call Stack. :- When we execute the code all function is register inside the Call stack.
    1.1 First main() function call after that all the function call inside the call stack.
    1.2 When the function exit form call stack. When the function execution is complete it automatically exit form call stack.
2. Node API. :- In the node api when we call the function like setTimeout();. This function is manally get from c and c++ language. That's why it's showing inside the Node API section.
3. CallBack Queue. :- After Node API the setTimeout() function going to callback queue. And when the main() function is exit after that it will going into the call stack and return the output.
4. Example.
5. Interview Question.
// Read the Arthitecture of NodeJs for better understanding.
*/

/************ Intermediate Level ************/

/**************** Express Js **************/
/* 
1. What is Express Js.
Ans :- Express js is framework of nodejs. 90% express js is used in nodejs project.
        Create easily API, Routs,  request handle, Web page, css using with less code.
2. Install Express Js.
Ans :- npm install express :- Used to install the express js.
3. Make example with Express Js.
4. Interview Question.
*/

/* const express = require('express');
const expressApp = express(); */

// get() method provide the roots.
// expressApp.get('', (req, resp) =>{
/* console.log("Data send by browser =>>>", req.query); // Send request from browser like that :- http://localhost:5000/?name=Gurjeet and showing it into the command prompt.
console.log("Data send by browser =>>>", req.query.name); 
// To send the request
resp.send('Hello express js.'+ req.query.name);
    */
// resp.send('Hello express js. This is Home page.');
//}); 

// get('/about', (req, res)) To make a about page
/* expressApp.get('/about', (req, resp) =>{
    resp.send('This is a about us page.');
}); */

// Make a sever using this command :- expressApp.listen(5000)

/*  expressApp.listen(5000); */

/************** Dissuse on Routs **************/

/* 
Request(req) :- Cleint request every time.
Response(resp) :- Sever is response every time. nodejs is server that's why it's give a response. Request and Response are basic interact with the server.
*/

/************* Render HTML and JSON data (Render mean's display data) *************/

/* 
1. How HTML tag.
expressApp.get('', (res, resp) => {
    // Apply the HTML tag's
    resp.send(`
                <h1>This is Home page.</h1>
                <a href="/about">Go to About</a>
            `);    
});
2. Show JSON data.
// Send the json data

expressApp.get('/help', (res, resp) => {
    resp.send(
        {
            name : "Gurjeet Singh",
            email : "gurjeet@test.com"
        }
    ); 
    // If we have multiple user data.
    resp.send([
        {
            name : "Gurjeet Singh",
            email : "gurjeet@test.com"
        },
        {
            name : "Nidhi Jaswal",
            email : "nidhi@test.com"
        }
    ]);
});
3. Link page. :- <a href="/about">Go to About</a>
    expressApp.get('', (res, resp) => {
    // Apply the HTML tag's
    resp.send(`
                <h1>This is Home page.</h1>
                <a href="/about">Go to About</a>
            `);    
});
4. Interview Question.
Q :- How to get the data from query parameter :- http://localhost:5000/?name=Gurjeet Singh
Ans :- Using the :- res.query.name This method is get the data form url
    Example :- 
                expressApp.get("/about", (res, resp) => {
                    resp.send(`
                                <input type="text" name="user_name" value="${res.query.name}" placeholder="Enter user name">
                                <button> Click Express Button</button>
                            `);
                });
*/

/***************** Make HTML page *****************/
/* 
1. Make folder for HTML files and access it.
Ans :- create a public folder and make a html file in this folder.
2. Make HTML files.
Ans :- In public folder create a html files.
3. Load HTML files.
Ans :- The basic requirement of load HTML code is our code come form which folder.
4. Interview question.
Q :- Path wala module kis kaam me ata ha?
Ans :- Path module is used for access the folder. 
For example :-  like a Public folder etc.
                const path = require('path');
                const publicPath = path.join(__dirname,'public');
Q :- What is used of static() method?
Ans :- It's load the static page or static content.
Q :- Kya hum css file ko public folder me rakh te ha or usko html page me access kar sakte ha?
Ans :- Nahi. Jo path ha woh nodejs se ho kar ata ha.


const express = require('express');
const expressApp = express(); // express() function is a executed function of express framework.
expressApp.listen(5000);
const path = require('path');
const publicPath = path.join(__dirname,'public');
// console.log(publicPath);
// use() :- Is a expressjs function.
expressApp.use(express.static(publicPath)) // Static function is get the static data from page. In this express is a variable get from upper code.

// Automatically access in route :- create index.html page and it's automatically access by express route.

*/

/*************** Remove extension from URL **************/

/* 
1. Apply Get method.
Ans :-  const express = require('express');
        const expressApp = express(); // express() function is a executed function of express framework.
        expressApp.listen(5000);
        const path = require('path');
        const publicPath = path.join(__dirname,'public');
        // Get the index or home page
        expressApp.get('', (_, resp) => {
            resp.sendFile(`${publicPath}/index.html`);
        });
        // About page
        expressApp.get('/aboutme', (_,resp) => {
            resp.sendFile(`${publicPath}/about.html`);
        });  
        // help page
        expressApp.get("/help", (_,resp) => {
            resp.sendFile(`${publicPath}/help.html`)
        });

        expressApp.get("*", (_,resp) => {
            resp.sendFile(`${publicPath}/pagenotfound.html`);
            
        });

2. Remove extension form URL.
// Add this like this '/aboutme' keywords in the get() method and used it like a url.
Ans :- expressApp.get('/aboutme', (_,resp) => {
            resp.sendFile(`${publicPath}/about.html`);
        });
3. Make 404 page.
Ans :- in public directory make a 404 page. 404 mean's page not found.
4. Apply 404 page.
// * is used for when you write a wronge page name then it's show the 404 page
Ans :- expressApp.get("*", (_,resp) => {
            resp.sendFile(`${publicPath}/pagenotfound.html`);
            
        });
5. Interview question.
Q :- What is 404 page?
Ans :- When enter the wrong url in the browser then to show the message to client for showing this message 404.
Q :- How to load the file in get() method?
Ans :- Using a sendFile() for load the file in get() method.
*/

/************ Template Engine *************/

/* 
1. What is the template Engine?
Ans :- Templage engine is used for make a dynamic page. For used first install it.
        What is dynamic pages?
    >> When the information is get from data base and showing into the html page it's called dynamic page.    
2. Install ejs template package? ejs (Embedded javascript template)
Ans :-  Install command :- npm install ejs
        First we tell to the nodejs we used the ejs.
        1. Set the template engine using the set("view engine", "ejs") method. first parameter is tell what the template used now we used the "view engine". Second parameter is tell what a template is used now "ejs".
        expressApp.set("view engine", "ejs") // This fixed in nodejs
        2. Make folder "views"
        3. Create a file with "ejs" extension.
        Why we used ejs cms.
    >> Ejs templage engine is most usable cms.    
3. Setup dynamic routing?
Ans :- // Set template engine
        expressApp.set("view engine","ejs");
        expressApp.get("/profile", (_, resp) => {
            const user = {
                name : "Gurjeet Singh",
                email : "gurjeet@text.com",
                city : "Chandigarh"
            }
            // Pass a information as a object
            resp.render("profile",{user});
        });
// To display information in the HTML page. The syntax :- <%= %>
    
 
4. Make dynamic page?
Ans :- Create a page in views folder.
5. Interview question.
    const express = require('express');
    const expressApp = express(); // express() function is a executed function of express framework.
    expressApp.listen(5000);
    const path = require('path');
    const publicPath = path.join(__dirname,'public');
    // Set template engine
    expressApp.set("view engine","ejs");
    expressApp.get("/profile", (_, resp) => {
        const user = {
            name : "Gurjeet Singh",
            email : "gurjeet@text.com",
            city : "Chandigarh"
        }
        // Pass a information as a object
        resp.render("profile",{user});
    });

*/

/*********** Dynamic page **********/
/* 
1. How to make a loop in ejs.
Ans :-  <% user.skills.forEach( (item)=>{ %>
            <li><%= item %></li>
        <% }) %>

    const express = require('express');
    const expressApp = express(); // express() function is a executed functions of express framework.
    expressApp.listen(5000);
    const path = require('path');
    const publicPath = path.join(__dirname,'public');
    // Set template engine
    expressApp.set("view engine","ejs");
    expressApp.get("/profile", (_, resp) => {
        const user = {
            name : "Gurjeet Singh",
            email : "gurjeet@text.com",
            city : "Chandigarh",
            skills : ['php', 'js', 'c++', 'node']
        }
        // Pass a information as a object
        resp.render("profile",{user});
    });
    expressApp.get('/login', (_, resp) => {
        resp.render("login.ejs");
    });

2. Make a header file.
Ans :- In the views/common folder make a header.ejs file.
3. Show common header file.
Ans :- <%- include('common/header') %> to include the file in other files. Used the "-" hyphen for tell the ejs to this is a file. And we don't need to give the extension ".ejs".
4. Interview question. 
*/


/************ Middleware ***********/
/* 
1. What are middleware.
Ans :- Yeh kuch functions hote a ha jo routs ke sath hi use hote ha. En ki help se hum request or respone ko access kar sakte ha or esko modify kar sakte ha. Jaha par hume request or response me kuch change karna ho us me hum middleware use karte ha.

Yeh jo hum middleware use kar rahe ha woh Application level middleware hai.
2. How to make a middleware
    Ans :-   // Three parameter is mendatory. The "next" parameter is proceed the next router. jo aap ne route call kiya ha. Without next() method yeh nahi chalega.
    const reqFilter = (req,resp,next) => {
        //console.log("reqFilter");
        // How to acctual used.
        if(!req.query.age){
            resp.send("Plz provide the age.");
        }else if(req.query.age < 18){
            resp.send("Your age is not valid");
        }else{
            next();
        }
        // http://localhost:5000/users?age=18
    // next();
    }
    // This is a application route.
    expressApp.use(reqFilter);
3. Apply middleware in routs.
Ans :- const reqFilter = (req,resp,next) => {
            //console.log("reqFilter");
            next();
        }
4. Types of middleware.
Ans :-  1. Application level middleware
        2. Router-level middleware
        3. Error-handling middleware
        4. Built-in middleware
        5. Third-party middleware
5. Interview questions.
*/

/************ Route Level middleware *************/
/* 
1. Route level middleware.
Ans :- Route level middleware woh hote a jise hum ek single route par bhi apply kar sakte ha, ek group par bhi apply kar sakte ha aur sare ke sare routs par bhi apply kar sakte ha.

2. Apply middleware on single route.
Ans :-  const reqFilter = (req, resp, next) => {
            if(!req.query.age){
                resp.send("Please provide age");
            }else if(req.query.age < 18){
                resp.send("You are under age");
            }else{
                next();
            }
        }

        expressApp.get("/", (req, resp) => {
            resp.send("Welcome Home page");
        });
        // Add single route middle. Use the "reqFilter" variable inside the spacific route like a "about"
        expressApp.get("/about", reqFilter, (req, resp) => {
            resp.send("About us page"); 
        });

3. Make middleware in different file.
Ans :- Make a middleware.js file and "export.modules" export the data form middleware file to index.js file.
Add the file in the index.js :- const reqFilter = require("./middleware");

4. Apply middleware in the group of route.
Ans :- // Add middleware file.
        const reqFilter = require("./middleware");
        const route = express.Router();
        route.use(reqFilter);

        expressApp.get("/", (req, resp) => {
            resp.send("Welcome Home page");
        });
       
        route.get("/about", (req, resp) => {
            resp.send("About us page"); 
        });
        route.get("/contact", (req, resp) => {
            resp.send("Contact us page"); 
        });

        expressApp.use("/", route); // Add the instance of route. 

5. Interview question.
Q :- Difference between Application level middleware and Route level middleware?
Ans :-  1. App-level middleware is globaly apply.
        2. Route level middleware are apply in single, global, and app-level middleware.

*/
/* const express = require('express');
const expressApp = express(); // express() function is a executed function of express framework.
expressApp.listen(5000); */

/*********** Install Mongo DB ***********/

/*
1. Download DB
Ans :- Download the mongodb from offical website.
2. Install Mongo DB
Ans :- Installed it.
3. Set Environment for mongodb
Ans :- When you are installed mongoDB successfully but nothing is showing into the 'CMD' then copy the path of mongoDB 'bin' folder and search in the search bar 'ENV' and select the Edit the system enviorment variable option. Goto the enviorment variable option after that Goto the 'path' option edit it. Past the bin folder path and restart the 'CMD' again.
4. Mongodb compose tool
Ans :- Mongodb compose tool is GUI graphic user interface.
5. Interview question
Q :- How to setup the mongoDB enviorment?
Ans :-
Q :- Tell the name of mongoDB GUI?
Ans :- mongoDB compass.
*/



/*
1. What is mongoDB?
Ans :-  1. Mongodb is non NoSql database.
            Q :- What is NoSql?
            Ans :- Oracle, mysql, sql server all are structured query database. Mongodb is nosql database that mean's there is no structured.
        2. The data stored in a collection. Not in table.
        3. Collection don't have row and column.
        4. Data is stored in the from of object.
2. MongoDB vs SQL.
3. MongoDB basic commands
Q :- How to check the mongoDB?
Ans :-  2 way to check the mongoDB
        1. Using the command line.
            Commands :- 1. show dbs :- To show the database.
                        2. Create new DB :- use database_name
                        3. Create collection :- db.createCollection('collection_name');
                        4. Check collection :- show collection
                        5. Delete collection :- db.collection_name.drop()
                        6. Delete Database :- db.dropDatabase()
                        7. To select the database or switched to other database :- use database_name
        2. MongoDB compose. :- Mostly used the mongodb compose because this is own product of MongoDB.
        3. Robot GUI tools.
4. Interview question?
*/

/************ Crud operations in MongoDB  ***********/

/*
1. How to insert data collection.
Ans :- Insert data using command line :-
            insertOne() function used to insert the single records.
            db.collection_name.insertOne({
                name : 'm40',
                brand : 'samsung',
                price : 250,
                catergory : 'mobile'
            })
2. How to check inserted data.
Ans :-  Using command Line :-
        db.collection_name.find() :- Select  all data from the table.
3. How to update data.
Ans :-  Using command Line :-
        // Single product update
        db.collection_name.updateOne({'select record name for update'}, {$set:{'field_name:'update_data_text'}}')
        For example :- db.collection_name.updateOne({name:'m40'}, {$set:{barnd:'oppo'}}')
4. How to delete data.
Ans :-  Using command Line :-
        // Single product delete
        db.products.deleteOne({column_name : 'record_name'})
5. Interview question.
*/

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

/************* Upload file in NodeJS **************/
/* 
1. Install Multer npm package.
Ans :- npm i multer.
2. Make route for upload file.
Ans :-  app.post("/upload",upload,(req, resp) => {
            resp.send("Upload file");
        });
3. Write code for upload file.
Ans :-  
        const multer = require("multer"); // Most used Multer for file upload. Multer is a easy way to upload the file.
        const upload = multer({
        storage:multer.diskStorage({
            destination:function(req, file, cb){
                cb(null, "uploads")
            },
            filename:function(req, file, cb){
                cb(null, file.fieldname+"-"+Date.now()+".jpg"); // fieldname :- Is a file name.
            }
        })
    }).single("user_file");

    app.post("/upload",upload,(req, resp) => {
        resp.send("Upload file");
    });
4. Interview question.
Q :- Can we upload the file without Multer package?
Ans :- Yes,
*/

/************** OS module in NodeJs *************/
/* 
1. What is OS module.
Ans :- OS :- Operating System module. Where it is used. Jaha par hame apne operating system ki information nikali ho tub yeh module basically jayda use kiya jata ha.
        For example :- Jase ki hame apne system ki ram dekh ni ha. Archecture dekh na ha. Host name dekhna ha. Platform dekh na ha etc.
        Jab hum log ase project par kaam karte ha jaha hume Windows ke upar kuch asi condition lagani ha, Mack par alge se, Ubunto par alage se, Yeh fir unki information lene ha. 
        Tab yeh module kam me ata ha. 
2. Important function of OS module.
Ans :-  const os = require("os");
        1. arch() :- function tell the archecture. App ka system 64 bit ka ha yeh 32 bit ka.
        2. freemem() :- // freemem() :- Check app ke system me RAM kitne free ha. Yeh hamari bits ke ander ha.
        // is ko check karne ke lye hume isko divide karna yeh formula used hota ha :- console.log(os.freemem()/(1024*1024)); result :- 563.9375.
        3.  totalmem() :- Check the total memory of system.
        4. hostname() :- Check the name of system.
        5. platform() :- Check the what operating system is used.
        6. userInfo() :- Check the user name of system
        //console.log(os.arch()); // arch() :- function tell the archecture. App ka system 64 bit ka ha yeh 32 bit ka.
        //console.log(os.freemem()); // freemem() :- Check app ke system me RAM kitne free ha. Yeh hamari bits ke ander ha.
        // is ko check karne ke lye hume isko divide karna yeh formula used hota ha :- console.log(os.freemem()/(1024*1024)); result :- 563.9375.
        //console.log(os.totalmem()/(1024*1024)); // totalmem() :- Check the total memory of system.
        //console.log(os.hostname()); // hostname() :- Check the name of system.
        //console.log(os.platform()); // platform() :- Check the what operating system is used.
        //console.log(os.userInfo()); // userInfo() :- Check the user name of system.
3. Interview Question.
*/

/************** Events and Events Emitter in NodeJs (Important Topics) **************/
/* 
1. What is Events and Events Emitter.
Ans :- Events Emitter :- Jo cheje ko generate karti ha use events emitter kah te ha. Emitter mean's kuch generate karna kuch product karna. HTML wale case me jo Button hota ha woh emitter hota ha.
2. Make a events and call it.
Ans :-  // Know i have to check how many times API is used in the app.

        const event =  new EventEmitter();
        let count = 0;
        event.on("countAPI", () => {
            count++;
            console.log("Event Called " + count);
        });

        app.get("/", (req, resp) => {
            resp.send("Count API");
            event.emit("countAPI"); // Generate the event.
        });
        // Url :- localhost:5000/search
        app.get("/search", (req, resp) => {
            resp.send("Api search"); 
            event.emit("countAPI"); // Generate the event.
        });
        // Url :- localhost:5000/update
        app.get("/update", (req, resp) => {
            resp.send("Api update");
            event.emit("countAPI"); // Generate the event.
        });

        app.get("/", (req, resp) => {
            resp.send("Api Called");
        });

3. Interview question.
Q :- Nodejs ke ander button click kase banoge?
Ans :- Throw API we create a button click. Inside the Nodejs button click nahi ban sakta. Javascript, HTML ke ander ban sakta ha. 
*/

/************* REPL (READ Eval PRINT LOOP) **************/
/* 
Eval :- Evaluate :- That mean's some calculation
1. What is REPL.
Ans :- REPL is command line tool of Nodejs. Jis ke throw ap command line ke upar javascript yeh Nodejs ka code run kar sakte ha.
        When we use the node keyword in the CMD after that cursor is blink that mean's you are in the REPL.
        If you want used the CMD like a editor then used the :- .editor command and CMD is used as a editor.
        Create a function and after that press ctrl+d and called the function.
        (Ctrl+D to finish, Ctrl+C to cancel).
        .help :- Command is show all the command's of CMD.
        Basically command of REPL :-    .break    Sometimes you get stuck, this gets you out
                                        .clear    Alias for .break
                                        .editor   Enter editor mode
                                        .exit     Exit the REPL
                                        .help     Print this help message
                                        .load     Load JS from a file into the REPL session
                                        .save     Save all evaluated commands in this REPL session to a file
2. Example of REPL.
3. Interview Question
Q :- Tell me the output of this code?
Ans :-  const c = 10;
        console.log(c++);
        Output :- error
*/

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

const express = require('express');
require('./config');
const product = require('./product');

const app = express();
app.use(express.json()); // First convert api data into JSON using this method app.use(express.json());

const con = require("./config_mysql");


app.listen(5000);





