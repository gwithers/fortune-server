var express = require('express');
var app = express();
var fteller = require('fortune-teller');
var routes = require('./routes.js');
var helper = require('./helpers/server_helper.js');

app.get('/', function(request, response) {
  response.format({
    'text/html': function() {
      response.send('OK');
    }
  });
});

app.get('/readme.md', function(request, response) {
  response.sendFile(__dirname + '/README.md');
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
