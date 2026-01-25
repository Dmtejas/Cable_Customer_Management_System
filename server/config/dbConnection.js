import mongoose from 'mongoose'
import expressAsyncHandler from 'express-async-handler'

const dbConnection = expressAsyncHandler( async() => {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    if(!connect) {
        console.log("Error in connecting to database");
        throw new Error("Error connecting to the database");  
    } else {
        console.log("Connected to DB", mongoose.connection.host, mongoose.connection.name);
    }
    
} )

export {dbConnection}