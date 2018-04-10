var intToRoman = function(num) {
  const romanMap = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
  };

  let romanStr = '';

  while (num) {
    const highestNum = getHighestNum(num, romanMap);
    romanStr += romanMap[highestNum];
    num -= highestNum;
  }

  return romanStr;
};

function getHighestNum (num, romanMap) {
  let highest = 1;

  for (let key in romanMap) {
    if (key <= num) {
      highest = key;
    }
  }

  return highest;
}
