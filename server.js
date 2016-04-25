var express = require('express');
var app = express();
var fteller = require('fortune-teller');
var alpha_message = require('./server_helper.js');

app.get('/', function (req, res) {
  res.send(fteller.fortune());
});

app.listen(3000, function () {
  console.log('Fortune Server app listening on port 3000!');
});
