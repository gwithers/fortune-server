var compression = require('compression');
var express = require('express');
var app = express();
app.use(compression());

var fteller = require('fortune-teller');
var routes = require('./routes.js');
var fortune_controller = require('./controllers/fortune.js');

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

app.get('/api/v1/fortune', fortune_controller);

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function () {
  console.log('Fortune Server app listening on port ' + app.get('port') + '!');
});

module.exports = app;
