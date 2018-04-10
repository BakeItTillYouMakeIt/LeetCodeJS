var calPoints = function(ops) {
  // Initialize a stack
  const stack = [];
  let sum = 0;

  for (let l of ops) {

    if (isNum(l)) {
      sum += +l;
      stack.push(+l);
    }
    else if (l === 'C') {
      let invalidNum = stack.pop();
      sum -= invalidNum;
    }
    else if (l === 'D') {
      let newNum = stack[stack.length - 1] * 2;
      sum += newNum;
      stack.push(newNum);
    }
    else if (l === '+') {
      let num1 = +stack[stack.length - 1];
      let num2 = +stack[stack.length - 2];
      sum += num1 + num2;
      stack.push(num1 + num2);
    }
  }

  return sum;
};

function isNum(letter) {
  return letter !== '+' && letter != 'C' && letter != 'D';
}
