//import mongoose
const mongoose = require("mongoose");

//function to connect mongodb

const connectDB = async () => {
    try {
        const URL = process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/recipedb";
        await mongoose.connect(URL);
        console.log("Mongodb is connected successfully");

    } catch (error) {
        console.log("error is connecting the database");

    }
}

module.exports = connectDB;