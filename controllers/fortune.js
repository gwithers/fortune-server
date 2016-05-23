/*
 * Handle /api/v1/fortune
 */

var helper = require('./helpers/server_helper.js');

exports.list = function (request, response) {
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
