// app_server/repositories/destinationsRepoMongo.js

const Destination = require("../models/destination");

/**
 * Implementation of MongoDB the file utilizes USE_MONGO=true and replaces the JSON with the database
 */

// normalize image in mongodb so /images/random.jpg is not required
function normalizeImagePath(doc) {
  if (!doc) return doc;

  if (typeof doc.image === "string") {
    if (!doc.image.startsWith("/images/")) {
      doc.image = "/images/" + doc.image;
    }
  }

  return doc;
}

/**
 * get all destinations from MongoDB
 * uses{Promise<Array>} 
 * returns a promise that resolves the desination
 */
async function getAll() {
  // .lean() returns JS objects instead of entire MongoDB entry
  return Destination.find({}).lean();
}

/**
 * Find a single destination by its numeric id.
 * uses {number|string} id
 * uses {<Promise<Object|null>}
 */
async function findById(id) {
  return Destination.findOne({ id: Number(id) }).lean();
}

module.exports = {
  getAll,
  findById
};
