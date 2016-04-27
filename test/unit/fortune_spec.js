var should = require('should');
var fteller = require('fortune-teller');

describe('Fortune', function() {
  it('should return different fortunes', function(done) {
    var fortune1 = fteller.fortune();
    var fortune2 = fteller.fortune();
    fortune1.should.not.equal(fortune2);
    done();
  });
});
