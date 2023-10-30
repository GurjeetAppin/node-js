const dbConnection = require('./mongodb');
const updateData = async () => {
    let data = await dbConnection();
    //console.log(data);
    // Single data update
    let result = await data.updateOne(
        { name : "Samsung Galaxy Pro", }, 
        { $set : {name : "Galaxy Pro"}}
        );
        // Multiple records update
        /* let result = await data.update(
            { name : "Samsung Galaxy Pro", }, 
            { $set : {name : "Galaxy Pro"}}
            ); */
    console.log(result);
}

updateData();