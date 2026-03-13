const mongoose = require("mongoose");
const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("database connected to successfully");
    } catch (error) {
        console.log(`database not connected ${error.message}`);
    }
}

module.exports = connectToDb