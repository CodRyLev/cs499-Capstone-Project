// app_server/config/db.js

const mongoose = require("mongoose");

// connect to mongodb with mongoose
async function connectDB() {
  const uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/slideshow";

  try {
    await mongoose.connect(uri);
    console.log(" MongoDB connected:", uri);
  } catch (err) {
    console.error(" MongoDB connection error:", err.message);
    process.exit(1); // fast exit so you know something went wrong
  }
}

module.exports = connectDB;
