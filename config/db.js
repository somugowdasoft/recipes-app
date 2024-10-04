//import mongoose
const mongoose = require("mongoose");

//function to connect mongodb

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Mongodb is connected successfully");

    } catch (error) {
        console.log("error is connecting the database");

    }
}

module.exports = connectDB;