var solution = function(knows) {
  /**
   * @param {integer} n Total people
   * @return {integer} The celebrity
   */
  return function(n) {
      let x = 0;
      for (let i = 0; i < n; i++) if (knows(x, i)) x = i;
      for (let i = 0; i < x; i++) if (knows(x, i)) return -1;
      for (let i = 0; i < n; i++) if (!knows(i, x)) return -1;
      return x;
  };
};
