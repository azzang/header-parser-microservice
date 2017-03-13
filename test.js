var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('./server');

var should = chai.should();

chai.use(chaiHttp);

describe('api', function() {

  it('should handle localhost', function(done) {

    chai.request(server)
      .get('localhost:5000')
      .set('Accept-Language', 'en-US;q=0.9,fr-CA;q=0.7,en;q=0.8')
      .end(function(err, res) {
        res.body.ipAddress.should.equal('127.0.0.1');
        res.body.language.should.equal('en-US');
        res.body.operatingSystem.should.equal('Linux');
      });
      done();
  });

});
