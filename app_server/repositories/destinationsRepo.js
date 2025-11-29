// app_server/repositories/destinationsRepo.js

// this will act as a buffer for the time being and use the JSON for data handling for
// the time being and later be switched to mongo
const jsonRepo = require("./destinationsRepoJson");

// placeholder for mongo for next enhancement
const USE_MONGO = process.env.USE_MONGO === "true";

module.exports = USE_MONGO
  ? require("./destinationsRepoMongo") //place holder for enhancement 3
  : jsonRepo; // json fallback if mongo fails
