require('dotenv').config();
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const Destination = require('../app_server/models/destination');

// load data into database
const filePath = path.join(__dirname, 'destinations.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

async function seedDatabase() {
  try {
    console.log("Connecting to MongoDB"); // connected to MongoDB successfully 
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Clearing existing destinations"); // clear old data
    await Destination.deleteMany({});

    console.log("Inserting seed data"); // insert data confirmation
    await Destination.insertMany(data);

    console.log(" Database successfully seeded!"); // data was added to database
    process.exit(0);
  } catch (err) {
    console.error("Seeding error:", err); // no data was added to database message
    process.exit(1);
  }
}

seedDatabase();
