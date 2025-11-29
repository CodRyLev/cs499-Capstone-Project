// app_server/services/slideshowService.js
const repo = require("../repositories/destinationsRepo");
const algo = require("./destinationsAlgoService");

// allow for each switch to mongoDB for enhancement 3
async function getAllDestinations(options = {}) {
  const all = await repo.getAll();

  const filtered = algo.filterDestinations(all, {
    minRating: options.minRating,
    locationContains: options.locationContains
  });


  // apply sorting alorithm(timsort) with time complexity 0(n log n)
  const sorted = algo.sortDestinations(
    filtered,
    options.sortKey || "rating",
    options.dir || "desc"
  );
  // keep slideshow as top 5
  return sorted.slice(0, 5);
}
// retrieves the Json file and uses a map to find entries
async function getDestinationById(id) {
  return repo.findById(id); // 0(1) search complexity will be moved to mongo for enhancement 3
}

module.exports = {
  getAllDestinations,
  getDestinationById
};
