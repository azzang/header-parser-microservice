var requestIp = require('request-ip');

module.exports = function(req) {
  var clientIp = requestIp.getClientIp(req);
  var pattern = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;
  if (clientIp && pattern.test(clientIp))
    return clientIp.match(pattern)[0];
  return null;
};
