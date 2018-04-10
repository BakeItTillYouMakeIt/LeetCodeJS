var plusOne = function(digits) {

  let digitRev = digits.reverse();
  digitRev[0]++;
  for (let i = 0; i < digitRev.length; i++) {
      if (digitRev[i] === 10) {
          digitRev[i] = 0;
          if ( i+1 === digitRev.length) {
              digitRev[i+1] = 1;
          } else{
              digitRev[i + 1] += 1;
          }
      } else {
          break;
      }
  }
  return digitRev.reverse();
};
