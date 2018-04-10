var fizzBuzz = function(n) {
  let arr = [];
  let str = ''
  for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
          if (i % 3 === 0) str += 'Fizz';
          if (i % 5 === 0) str += 'Buzz';
          arr.push(str);
      } else {
          arr.push(String(i));
      }
      str = '';
  }
  return arr;
};
