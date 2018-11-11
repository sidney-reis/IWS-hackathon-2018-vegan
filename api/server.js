const logger = require('morgan');
const cors = require('cors');
const http = require('http');
const express = require('express');
const errorhandler = require('errorhandler');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

express.Router();
module.exports = express.Router();

// Set up default mongoose connection
// const mongoDB = 'mongodb://127.0.0.1/my_database';
const mongoDB = 'mongodb://admin1:admin1@ds159273.mlab.com:59273/go2vegan';
mongoose.connect(mongoDB, { useNewUrlParser: true });
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();

dotenv.load();

// Parsers
// old version of line
// app.use(bodyParser.urlencoded());
// new version of line
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use((err, req, res, next) => {
  if (err.name === 'StatusError') {
    res.send(err.status, err.message);
  } else {
    next(err);
  }
});

if (process.env.NODE_ENV === 'development') {
  app.use(logger('dev'));
  app.use(errorhandler());
}

app.use(require('./controllers/Challenge'));
app.use(require('./controllers/User'));

const port = process.env.PORT || 3001;

http.createServer(app).listen(port, () => console.log(`listening in http://localhost:${port}`));
