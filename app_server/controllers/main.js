// app_server/controllers/main.js

// Home page controller
module.exports.index = function(req, res) {
  res.render('index', {
    title: 'Cody Leveille Capstone Project',
    message: 'Introduction Splash Page.'
  });
};
