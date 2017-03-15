var useragent = require('useragent');

module.exports = function(userAgent) {
  var agent = useragent.parse(userAgent);
  var os = agent.os.toString();
  var version = agent.os.toVersion();
  if (os === 'Other 0.0.0') return null;
  return os.replace(version, '').trim();
};
