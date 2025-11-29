// app_server/services/destinationsAlgoService.js

function filterDestinations(destinations, { minRating, locationContains } = {}) {
  return destinations.filter(d => {
    // exclude destinations with low rating
    if (minRating != null && d.rating < minRating) return false;
    // exclude destinations that do not have complete data fields
    if (locationContains && !d.location.toLowerCase().includes(locationContains.toLowerCase())) {
      return false;
    }
    return true;
  });
}
/**
 * SortDestinations
 * 
 * This algorith uses a sorty with adcending or decending order
 * sorting is handled through the Array.protoype.sort which uses the engines implementation of
 * timsort which is a hybrid stable sorting algorith that is ideal in professional environments
 * The time complextity of this sort method is o(n log n)in worst case and O(n) for partial data sorting
 */
function sortDestinations(destinations, sortKey = "rating", dir = "desc") {
  // copy the array to prevent data being mutated in dataset
  return [...destinations].sort((a, b) => {
    const av = a[sortKey] ?? 0; // default to 0 if entry is missing property
    const bv = b[sortKey] ?? 0;
    const diff = av - bv;
    return dir === "asc" ? diff : -diff;
  });
}
// export the alroithm function for use in slideshowService and other places needed
module.exports = { filterDestinations, sortDestinations };
