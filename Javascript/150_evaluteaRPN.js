var evalRPN = function(tokens) {
  // Edge Case
  if (!tokens || !tokens.length) return 0;

  let stack = [+tokens[0]];

  for (let i = 1; i < tokens.length; i++) {
    const token = tokens[i];
    if (isOperator(token)) {
      let operand2 = +stack.pop();
      let operand1 = +stack.pop();

      if (token === '*') stack.push(operand1 * operand2);
      else if (token === '/') {
        const val = operand1 / operand2;
        if (val < 0) stack.push(Math.ceil(val));
        else stack.push(Math.floor(val));
      }
      else if (token === '+') stack.push(operand1 + operand2);
      else stack.push(operand1 - operand2);
    }
    else stack.push(+token)
  }
  return stack[0];
};

function isOperator(char) {
  return char === '*' || char === '/' || char === '+' || char === '-';
}
