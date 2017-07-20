const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const usersRoute = require('./routes/user');
const articlesRoute = require('./routes/article');

const MONGODB_URL = 'mongodb://localhost:27017/yusufhacktivpress';

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/users', usersRoute);
app.use('/api/articles', articlesRoute);

mongoose.connect(MONGODB_URL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'coneection error:'));
db.once('open', function() {
  app.listen(3000);
});

