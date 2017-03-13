var acceptLanguageParser = require('accept-language-parser');

module.exports = function(acceptLanguage) {
  var languages = acceptLanguageParser.parse(acceptLanguage);
  var highestQualityLanguage = languages[0];
  if (languages.length === 0) return null;
  if (highestQualityLanguage.region)
    return `${highestQualityLanguage.code}-${highestQualityLanguage.region}`;
  return highestQualityLanguage.code;
};
