var express = require('express');
var router = express.Router();

var mainController = require('../controllers/main');

// get home page route
router.get('/', mainController.index);

module.exports = router;
