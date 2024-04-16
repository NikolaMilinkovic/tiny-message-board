const mongoose = require('mongoose')

// Gets the connection string from the .env file
const dotenv = require('dotenv').config();
const connection_string = process.env.MONGO_CONN_STRING;


// Handles database connection
mongoose.connect(connection_string).then((res)=>{
    console.info('Connection to DB has been successfully established.')
}). catch((error) => {
    console.error("Error:", error);
})

module.exports = mongoose.connection;