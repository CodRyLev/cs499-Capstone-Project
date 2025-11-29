var express = require('express');
var router = express.Router();

// get about hbs
router.get('/about', function (req, res) {
  res.render('about', { title: 'About Me' });
});

// gets project hbs
router.get('/project', function (req, res) {
  res.render('project', { title: 'Project Overview' });
});

module.exports = router;
