var http = require('http');
var parseIpAddress = require('./parsers/ipAddress');
var parseLanguage = require('./parsers/language');
var parseUserAgent = require('./parsers/userAgent');

var server = http.createServer(function(req, res) {
  var headers = req.headers;
  var data = {};

  data.ipAddress = parseIpAddress(req);
  data.language = parseLanguage(headers['accept-language']);
  data.operatingSystem = parseUserAgent(headers['user-agent']);

  res.setHeader('Content-Type', 'application/json');

  res.end(JSON.stringify(data, null, 3));
});

server.listen(process.env.PORT || 5000);

module.exports = server;
