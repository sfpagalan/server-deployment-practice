'use strict';

const sum = require('./sum.js');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/sum', (req, res) => {

  const value1 = parseInt(req.query.value1);
  const value2 = parseInt(req.query.value2);
  console.log(value1, value2);

  res.status(200).send({ results: sum(value1, value2) });
});

module.exports = app;