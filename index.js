const path = require('path');
const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();

const mongoString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.cqns5.mongodb.net/coding-blog`;
mongoose.connect(mongoString);

mongoose.connection.on('error', function (error) {
  if (process.env.NODE_ENV === 'development') {
    console.log(error);
  }
});

mongoose.connection.on('open', function () {
  console.log('Connected to MongoDB database.');
})

// middlewares
app.use(helmet());
app.use(require('./routes/index'));
app.use('/assets', express.static(path.join(__dirname, '..', '..', 'assets'))); // serving statis images

app.listen(PORT, function () {
  console.log(`Express app listening on port ${PORT}`);
});
