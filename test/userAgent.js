var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();

var parser = require('../parsers/userAgent');

describe('user-agent parser', function() {

  it('should handle various operating systems', function() {

    parser('Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0').should.equal('Windows 7');
    parser('Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0').should.equal('Mac OS X');
    parser('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36').should.equal('Linux');
    parser('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36 OPR/38.0.2220.41').should.equal('Linux');
    parser('Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30').should.equal('Android');
    parser('Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)').should.equal('Windows Phone');

  });

  it('should handle falsy values', function() {

    should.not.exist(parser(undefined));
    should.not.exist(parser(null));
    should.not.exist(parser(''));
    should.not.exist(parser(0));

  });

  it('should handle bots', function() {

    should.not.exist(parser('Googlebot/2.1 (+http://www.google.com/bot.html)'));

  });

});
