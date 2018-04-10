var isValid = function(str) {
  const stack = [];
  const bracketMap = {')': '(', '}':'{', ']':'['};
  const openBrackSet = new Set(['(', '[', '{']);

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // Check if char is an open bracket
    if (openBrackSet.has(char)) {
      stack.push(char);
    }
    // Not an open bracket, must be a closing bracket. Check if it matches the top of the stack
    else if (bracketMap[char] !== stack.pop() ) {
      return false;
    }
  }

  return stack.length === 0;
};
