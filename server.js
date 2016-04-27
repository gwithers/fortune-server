var express = require('express');
var app = express();
var fteller = require('fortune-teller');
var routes = require('./routes.js');
var helper = require('./server_helper.js');

app.get('/api/v1/fortune', function (request, response) {
  var fortune = fteller.fortune();
  response.format({
    'text/plain': function() {
      response.send(fortune);
    },

    'text/html': function() {
      response.send('<h3>' + helper.title() + '</h3><p><pre>' + fortune + '</pre></p>');
    },

    'application/json': function() {
      response.send({ fortune: fortune });
    }
  });
});

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function () {
  console.log('Fortune Server app listening on port ' + app.get('port') + '!');
});
