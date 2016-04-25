var http = require('http');
var fteller = require('fortune-teller');
var alpha_message = require('./server_helper.js');

var server = http.createServer();
server.on('request', function(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(fteller.fortune());
  response.end();
});
server.listen(3000);
