var validPalindrome = function(str) {
  let i = 0, j = str.length - 1;

  while (i < j) {
    if (str[i] === str[j]) {
      i++;
      j--;
    }
    else {
      return isPalindrome(str.slice(i, j)) || isPalindrome(str.slice(i+1, j+1));
    }
  }

  return true;
};

var isPalindrome = function(s) {
    let i = 0, j = s.length - 1;

    while (i <= j) {
        // Move i and j until both on valid letters
        if (!isLetter(s[i])) {
            i++;
            continue;
        }
        if(!isLetter(s[j])) {
            j--;
            continue;
        }
        // check if they satisfy a palindrome
        if (s[i].toLowerCase() !== s[j].toLowerCase()) {
            return false;
        }
        else {
            i++;
            j--;
        }
    }
    return true;
};

function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i) || (str >= '0' && str <= '9');
}
