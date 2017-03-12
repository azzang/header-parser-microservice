module.exports = [
  {
    userAgent:  'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0',
    expectedResult: 'Windows NT 6.1; Win64; x64; rv:47.0'
  },
  {
    userAgent:  'Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0',
    expectedResult: 'Macintosh; Intel Mac OS X x.y; rv:42.0'
  },
  {
    userAgent:  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36',
    expectedResult: 'X11; Linux x86_64'
  },
  {
    userAgent:  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36 OPR/38.0.2220.41',
    expectedResult: 'X11; Linux x86_64'
  },
  {
    userAgent:  'Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
    expectedResult: 'Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K'
  },
  {
    userAgent:  'Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)',
    expectedResult: 'compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0'
  },
  {
    userAgent:  'Googlebot/2.1 (+http://www.google.com/bot.html)',
    expectedResult: '+http://www.google.com/bot.html'
  }
];
