function compareVersion (version1, version2) {
  let split1 = version1.split('.');
  let split2 = version2.split('.');

  let i = 0;

  while (i < version1.length || i < version2.length) {
    let dec1 = i < split1.length ? split1[i] : '0';
    let dec2 = i < split2.length ? split2[i] : '0';

    dec1 = removeLeadingZeros(dec1);
    dec2 = removeLeadingZeros(dec2);

    let decimalCompare = compareVersionHelper(dec1, dec2);
    if (decimalCompare !== 0) return decimalCompare;
    i++;
  }

  return 0;
}

var compareVersionHelper = function(version1, version2) {

  if (version1.length > version2.length) return 1;
  else if (version1.length < version2.length) return -1;

  let ptr1 = 0;
  let ptr2 = 0;

  while (ptr1 < version1.length || ptr2 < version2.length) {
    let val1 = ptr1 < version1.length ? +version1[ptr1] : -1;
    let val2 = ptr2 < version2.length ? +version2[ptr2] : -1;

    if (val1 < val2) return -1;
    else if (val1 > val2) return 1;
    ptr1++;
    ptr2++;
  }

  return 0;
};

function removeLeadingZeros(str) {
  let i = 0;
  while (i < str.length) {
    if (str[i] !== '0') return str.slice(i);
    i++;
  }
  return '';
}
