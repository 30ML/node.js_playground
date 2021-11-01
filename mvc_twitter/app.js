var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');
const mongoose = require('mongoose'); // Mongoose ODM
const session = require('express-session'); // 세션 저장용 모듈
const connectMongo = require('connect-mongo');
const passport = require('passport'); // passport 모듈
const flash = require('connect-flash'); // 경고 플래시 모듈

const config = require('./server/config/config.js'); // DB configuration

const index = require('./server/routes/index');
const users = require('./server/routes/users');

var app = express();
const MongoStore = connectMongo(session);

// view engine setup
app.set('views', path.join(__dirname, 'server/views/pages'));
app.set('view engine', 'ejs');

// MongoDB 연결
mongoose.connect(config.db.url);
// MongoDB 실행 중인지 체크
mongoose.Connection.on('error', () => {
  console.error('MongoDB Connection Error! Make sure MongoDB is running.');
});

// 패스포트 설정
config.passport(passport);


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

// 패스포트용
// 세션용 비밀키
app.use(session({
  secret: 'sometextgohere',
  saveUninitialized: true,
  resave: true,
}))

app.use('/', index);
app.use('/users', users);

// 404 error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
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

app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), () => {
  console.log(`Express server listening on port: ${server.address().port}!`)
})
