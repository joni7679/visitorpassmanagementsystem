const mongoose = require("mongoose");

async function connectToDb() {
    try {
        if (!process.env.MONGO_URL) {
            console.log("mongodb url is mismatch in env file ")
        }
        await mongoose.connect(process.env.MONGO_URL);
        console.log("connected to the database successfully!")
    } catch (error) {
        console.log(`data base not connected please try again leater, ${error.message}`);
    }
}

module.exports = connectToDb;
