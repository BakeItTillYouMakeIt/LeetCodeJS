var reverse = function(x) {
  var neg = 1;
  x = x.toString().split('');
  if (x[0] === '-') {
      var neg = -1;
      x.shift();
  }
  x = x.reverse().join('');
  var num = neg * Number(x);

   if (num > 2147483647 || num < -2147483647) {
      return 0;
  }

  return num;
};
