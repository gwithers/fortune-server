/* ss */
/* jshint esversion: 6 */

var compression = require('compression');
var express = require('express');
var app = express();
app.use(compression());

var fteller = require('fortune-teller');
var routes = require('./routes.js');
var helper = require('./helpers/server_helper.js');

const path = require('path');

// For CI tool to check deployment
app.get('/', function(request, response) {
  response.format({
    'text/html': function() {
      response.send('OK - Hi Dima!');
    }
  });
});

app.get('/readme', function(request, response) {
  response.sendFile(path.join(__dirname, 'README.md'));
});

app.get('/version', function(request, response) {
  response.send("v1");
});

app.get('/api/v1/fortune', function (request, response) {
  var fortune = fteller.fortune();
  response.locals = {
    title: helper.title(),
    fortune: fortune
  };
  response.format({
    'text/plain': function() {
      response.send(fortune);
    },

    'text/html': function() {
      response.render('motd.ejs');
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

module.exports = app;
