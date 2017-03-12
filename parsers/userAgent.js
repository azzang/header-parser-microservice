module.exports = function(userAgent) {
  var firstOpeningParen = userAgent.indexOf('(');
  var nestedOpeningParenCount = 0;
  for (var i = firstOpeningParen + 1; i < userAgent.length; i++) {
    if (userAgent[i] === '(') nestedOpeningParenCount += 1;
    if (userAgent[i] === ')') {
      if (nestedOpeningParenCount === 0)
        return userAgent.slice(firstOpeningParen + 1, i);
      nestedOpeningParenCount -= 1;
    }
  }
}
