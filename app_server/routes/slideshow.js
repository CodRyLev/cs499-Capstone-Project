// app_server/routes/slideshow.js
var express = require('express');
var router = express.Router();

var slideshowController = require('../controllers/slideshow');

// get slideshow route
router.get('/', slideshowController.showSlideshow);

module.exports = router;
