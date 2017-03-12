var chai = require('chai');
var should = chai.should();
var parser = require('../parsers/userAgent');
var userAgentExamples = require('../stubs/userAgentExamples');

describe('user-agent parser', function() {

  it('should take in various user agent headers and return system information', function() {

    userAgentExamples.forEach(function(example) {
      parser(example.userAgent).should.equal(example.expectedResult);
    });

  });
  
});
