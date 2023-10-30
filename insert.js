const dbConnection = require('./mongodb');

const insert = async () => {
    const db = await dbConnection();
   // console.log(db);
   // process.exit(0); // terminate the code of execution in nodejs
    /* const result = db.insert(
        {name : "N90",brand : "Black Berry",price : 2000,category : "Mobile"}
    ); */
   // For single result
   /*  const result = await db.insert(
            {name : "N90",brand : "Black Berry",price : 2000,category : "Mobile"}
    ); */
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
    /* 
     const myobj = {name : "N90",brand : "Black Berry",price : 2000,category : "Mobile"};
    const result = db.insert(myobj, (err, res) => {
        // Showing the error's
        if(err) throw err;
        console.log("Data insert");
    } 
    )
    */

    console.log(result);
}
insert();

// Run the file into the terminal
// nodemon .\insert.js 