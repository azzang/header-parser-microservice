var http = require('http');
var requestIp = require('request-ip');
var useragent = require('useragent');

var server = http.createServer(function(req, res) {
  var headers = req.headers;

  Object.keys(headers).forEach(header => console.log(header, headers[header]));

  console.log(req.headers['x-forwarded-for'], 'asaersa');

  var clientIp = requestIp.getClientIp(req);

  var agent = useragent.parse(req.headers['user-agent']);
  console.log(clientIp, 'client ip', agent.os.toString());

  var data = {
    "ipaddress": null,
    "language": null,
    "software": null
  };

  res.setHeader('Content-Type', 'application/json');

  res.end(JSON.stringify(data, null, 3));
});

server.listen(process.env.PORT || 5000);

module.exports = server;
