var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();

var parser = require('../parsers/language');

describe('accept-language parser', function() {

  it('should handle various headers', function() {

    parser('az-AZ').should.equal('az-AZ');
    parser('fr-CA,fr;q=0.8').should.equal('fr-CA');
    parser('fr,en-US;q=0.6,en;q=0.4,*;q=0.1').should.equal('fr');
    parser('fr-CA,fr;q=0.2,en-US;q=0.6,en;q=0.4,*;q=0.5').should.equal('fr-CA');
    parser('ja-JP,ja;1=0.5,en;q=0.2').should.equal('ja-JP');
    parser('en-GB;q=0.8').should.equal('en-GB');

  });

  it('should handle falsy values', function() {

    should.not.exist(parser(undefined));
    should.not.exist(parser(null));
    should.not.exist(parser(''));
    should.not.exist(parser(0));

  });

});
