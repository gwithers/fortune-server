var express = require('express');
var app = express();
var fteller = require('fortune-teller');
var alpha_message = require('./server_helper.js');

app.get('/api/v1/fortune', function (request, response) {
  var fortune = fteller.fortune();
  response.format({
    'text/plain': function() {
      response.send(fortune);
    },

    'text/html': function() {
      response.send('<h3>motd..</h3><p><pre>' + fortune + '</pre></p>');
    },

    'application/json': function() {
      response.send({ fortune: fortune });
    }
  });
});

app.listen(3000, function () {
  console.log('Fortune Server app listening on port 3000!');
});
