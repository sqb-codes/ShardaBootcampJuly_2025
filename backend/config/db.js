const mongoose = require('mongoose');

const MONGO_URI = "mongodb+srv://admin:admin@cluster0.abcjyai.mongodb.net/sharda_db?retryWrites=true&w=majority&appName=Cluster0";
const mongoDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
}

module.exports = mongoDB;