// app_server/controllers/slideshow.js
const slideshowService = require('../services/slideshowService');

module.exports.showSlideshow = function(req, res, next) {
  try {
    const destinations = slideshowService.getAllDestinations();

    res.render('slideshow', {
      title: 'Top Detox & Wellness Destinations',
      heading: 'Top 5 Detox & Wellness Retreats',
      destinations: destinations
    });
  } catch (err) {
    // Pass errors to Express error handler
    next(err);
  }
};
