var myAtoi = function(str) {
  // Edge Cases
  if (!str || !str.length) return 0;

  let result = 0;

  // remove whitespaces
  str = str.trim();
  if (isNotNumeric(str[0]) && isNotNumeric(str[1])) return 0;
  // handle positive and negative sign
  let isNegative = false;
  // First numerical character
  let startIdx = 0;

  // Handle first character not numerical
  if (str[0] === '+' || str[0] === '-') startIdx++;
  if (str[0] === '-') isNegative = true;


  // Handle normal case
  for (let i = startIdx; i < str.length; i++) {
    // Handle non-numerical character
    if (isNotNumeric(str[i])) break;

    const digitValue = str[i].charCodeAt(0) - '0'.charCodeAt(0);
    result = result * 10 + digitValue;
  }
   if (isNegative) result = -result;

  // Handle out of integer range
  if (result >= Math.pow(2, 31) - 1) return Math.pow(2,31) - 1;
  else if (result <= -Math.pow(2, 31)) return -Math.pow(2,31);

  return result;
};

function isNotNumeric (char) {
  return char < '0' || char > '9';
}
