var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var connectMongoDB = require('./utils/connectMongoDB');

var { login, register } = require('./api/auth');
var usersRouter = require('./api/users/users.router');

var bingNewsApi = require('./api/bingNews/bingNewsApi');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

connectMongoDB();

app.post('/api/login', login);

app.post('/api/register', register);

app.use('/users', usersRouter);
app.use('/api', bingNewsApi);

module.exports = app;
