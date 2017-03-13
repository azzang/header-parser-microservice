var useragent = require('useragent');

module.exports = function(userAgent) {
  var agent = useragent.parse(userAgent);
  var os = agent.os.toString();
  var version = agent.os.toVersion();
  if (!Boolean(os)) return null;
  return os.slice(0, os.indexOf(version) - 1);
}
