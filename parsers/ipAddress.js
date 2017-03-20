const requestIp = require('request-ip');

module.exports = (req) => {
  const clientIp = requestIp.getClientIp(req);
  const pattern = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;
  if (clientIp && pattern.test(clientIp)) return clientIp.match(pattern)[0];
  return null;
};
