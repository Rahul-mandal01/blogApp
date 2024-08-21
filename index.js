const express = require('express');
const app = express();

// loads environment variables from a .env file into process.env
require('dotenv').config();
const PORT = process.env.PORT || 3000;

// // middleware to parse JSON request bodies
app.use(express.json());


const blog = require("./routes/blog")

// mount
app.use("/api/v1", blog);

const connectWithDb = require("./config/database");
connectWithDb();


// start the server
app.listen(PORT, () => {
    console.log(`App is started at PORT NO ${PORT} `);
} )


// default route
app.get('/',(req,res) =>{ 
    res.send(`<h1> This is HomePage </h1>`);
}
);
