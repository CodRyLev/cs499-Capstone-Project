// app_server/repositories/destinationsRepoJson.js
const fs = require("fs/promises");
const path = require("path");

const filePath = path.join(__dirname, "../data/destinations.json");

// cache and make a map of data
let cachedDestinations = null; // create empty cache
let destinationsById = null; // create map

async function loadOnce() {
    // if data is cached return it imediately 
  if (cachedDestinations) return cachedDestinations;
    // read and parse json file
  const fileData = await fs.readFile(filePath, "utf8");
  cachedDestinations = JSON.parse(fileData);

  // Map using O(1) time allows faster lookups
  destinationsById = new Map(
    cachedDestinations.map(d => [d.id, d])
  );

  return cachedDestinations;
}

async function getAll() {
  return loadOnce(); // retuns full list of destinations
}

async function findById(id) {
  await loadOnce();
  return destinationsById.get(Number(id)); // returns a single item from map
}

module.exports = { getAll, findById }; // allows ids to be found
