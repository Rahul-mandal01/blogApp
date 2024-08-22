const mongoose = require("mongoose");

// loads environment variables from a .env file into process.env
require("dotenv").config();



// connect to MongoDB

const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch( (error) => {
        console.log("Error Connecting to MongoDB: " + error.message);
        process.exit(1);
    });
}

module.exports = connectWithDb;