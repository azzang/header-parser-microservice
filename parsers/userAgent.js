const useragent = require('useragent');

module.exports = (userAgent) => {
  const agent = useragent.parse(userAgent);
  const os = agent.os.toString();
  const version = agent.os.toVersion();
  if (os === 'Other 0.0.0') return null;
  return os.replace(version, '').trim();
};
