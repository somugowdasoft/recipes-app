//import the express
const express = require("express");

//import the db
const connectDB = require("./config/db");

//import recipe routes
const recipeRoutes = require("./routes/recipeRoutes");

//initialize enviroment variables
require("dotenv").config();

// Middleware to parse JSON request bodies
const bodyParser = require('body-parser');

const app = express();

//DataBase connect
connectDB();

//Middleware
app.use(bodyParser.json());

//Routes
app.use('/api/recipes', recipeRoutes);


//startthe server
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
