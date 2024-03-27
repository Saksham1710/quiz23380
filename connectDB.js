const mongoose = require('mongoose');

async function connectDB(mongoUri){
    try {
       const connectionInstance = await mongoose.connect(mongoUri);
         console.log("Connected to the database");
         console.log("Connected on: ",connectionInstance.connection.host);
    } catch (error) {
        console.log("Error connecting to the database");
        console.log(error);
    }
}

module.exports = connectDB;