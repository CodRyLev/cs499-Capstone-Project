// load environment variables 
require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./app_server/routes/index');
var slideshowRouter = require('./app_server/routes/slideshow');
var pagesRouter = require('./app_server/routes/pages');


// connect to mongoDB
var connectDB = require('./app_server/config/db');

// connect to MongoDB if variable is true
if (process.env.USE_MONGO === 'true') {
  connectDB();
}

var app = express();
// create method for star display

const hbs = require('hbs');

hbs.registerHelper('stars', function (rating) {
  const rounded = Math.round(rating * 2) / 2;
  const fullStars = Math.floor(rounded);
  const hasHalfStar = rounded % 1 !== 0;

  let stars = '';

  for (let i = 0; i < fullStars; i++) stars += '★';
  if (hasHalfStar) stars += '⯨';

  while (stars.length < 5) stars += '☆';

  return stars;
});

hbs.registerHelper('imgPath', function (image) {
  if (!image || typeof image !== 'string') return '';
  // if file already uses /images/ ignore it
  if (image.startsWith('/images/')) {
    return image;
  }
  // add /images/ to file if person forgot
  return '/images/' + image;
});

hbs.registerPartials(__dirname + '/app_server/views/partials');




// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));

app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/slideshow', slideshowRouter);
app.use('/', pagesRouter);


//app.use('/users', usersRouter);


// create routes
//app.use('/', indexRouter);
//app.use('/slideshow', slideshowRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
