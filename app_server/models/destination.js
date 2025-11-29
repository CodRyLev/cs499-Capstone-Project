// app_server/models/destination.js

const mongoose = require("mongoose");

/**
 * Manages Destination 
 * This file mirrors the JSON file that contains data so we can integrate mongoDB
 */
const destinationSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true // match JSON to find destination by id
  },
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String // path to image
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  }
});

// export destination to mongoDB
module.exports = mongoose.model("Destination", destinationSchema);
