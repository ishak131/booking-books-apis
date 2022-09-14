var mongoose = require('mongoose');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var appRouter = express.Router();

require('dotenv/config')

var bookRouter = require('./routes/book');
var bookingRouter = require('./routes/booking');

var app = express();

// view engine setup

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

appRouter.get('/', (req, res) => {
  res.send({ message: 'yes I am working' })
})

app.use('/book', bookRouter);
app.use('/booking', bookingRouter);
app.use('/', appRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


//#region Connecting to Database ////////////////////////////
const DB_CONECTION = process.env.DB_CONECTION ?? 'not Conected';
//using connect method as a promise 
connectMeMongoDB().catch((err) => console.log(err))
// connecting mongoDB with our application with connect method from mongoose
async function connectMeMongoDB() {
  // 4. Connect to MongoDB
  await mongoose.connect(DB_CONECTION
    ,
    (err) => err ? console.log(err) : console.log('db is connected you can start storing data : ' + Date.now()))
}
//#endregion

/////////////// making the app listening to port 4000 on localhost///////////////
app.listen(process.env.PORT || 4000)



module.exports = app;
