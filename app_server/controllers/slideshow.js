// app_server/controllers/slideshow.js
const slideshowService = require('../services/slideshowService');

module.exports.showSlideshow = async function(req, res, next) {
  try {
    // collect optional query parameters by filtering and sorting
    const destinations = await slideshowService.getAllDestinations({      
      sortKey: req.query.sort, // sort key by rating or name      
      dir: req.query.dir, // sort method either by "asc" or "desc"            
      minRating: req.query.minRating ? Number(req.query.minRating) : null, // minimum rating coverted to number
      locationContains: req.query.loc  
    });
    // render slideshow 
    res.render('slideshow', {
      title: 'Top Detox & Wellness Destinations',
      heading: 'Top 5 Detox & Wellness Retreats',
      destinations
    });
  } catch (err) {
    // forward errors to global Express handler
    next(err);
  }
};
