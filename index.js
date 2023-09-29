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
// Ans :- file system is no global module beacuse we need to import it. Example :- Buffer, filesystem, HTTP etc.
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