const dbConnection = require('./mongodb');
const deleteData = async () => {
    const data = await dbConnection();
    /* console.log(data);
    process.exit(0); */
    // Single records delete
    const result = await data.deleteOne(
        { name : "i phone 15"}
    );
    // Delete multiple records
    /* const result = await data.deleteMany(
        { name : "i phone 15"}
    ); */
    if(result.acknowledged){
        console.log("Records Deteted");
    }
    console.log(result);
}
deleteData();