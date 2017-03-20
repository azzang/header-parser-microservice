const acceptLanguageParser = require('accept-language-parser');

module.exports = (acceptLanguage) => {
  const languages = acceptLanguageParser.parse(acceptLanguage);
  const highestQualityLanguage = languages[0];
  if (languages.length === 0) return null;
  if (highestQualityLanguage.region) return `${highestQualityLanguage.code}-${highestQualityLanguage.region}`;
  return highestQualityLanguage.code;
};
