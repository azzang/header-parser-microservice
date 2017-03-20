const http = require('http');
const parseIpAddress = require('./parsers/ipAddress');
const parseLanguage = require('./parsers/language');
const parseUserAgent = require('./parsers/userAgent');

const server = http.createServer((req, res) => {
  const headers = req.headers;
  const data = {};

  data.ipAddress = parseIpAddress(req);
  data.language = parseLanguage(headers['accept-language']);
  data.operatingSystem = parseUserAgent(headers['user-agent']);

  res.setHeader('Content-Type', 'application/json');

  if (data.ipAddress && data.language && data.operatingSystem) {
    res.statusCode = 200;
  } else {
    res.statusCode = 400;
    res.statusMessage = 'Could not parse one or more header.';
  }

  res.end(JSON.stringify(data, null, 3));
});

server.listen(process.env.PORT || 5000);
