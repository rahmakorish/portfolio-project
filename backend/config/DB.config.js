const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        console.log("Connecting to MongoDB...");
        console.log("MONGO_URI:", process.env.MONGO_URI);

        if (!process.env.MONGO_URI) {
            throw new Error("MONGO_URI is not defined in .env");
        }

        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`✅ MongoDB connected at: ${conn.connection.host}`);
    } catch (err) {
        console.error(`❌ MongoDB connection error: ${err.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
