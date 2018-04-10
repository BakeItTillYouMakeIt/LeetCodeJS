function isParenthesis(char) {
  return (char === '(') || (char === ')');
}

function isValid(str) {
  let count = 0;

  for (let l of str) {
    if (l === '(') count++;
    else if (l === ')') count--;

    if (count < 0) return false;
  }

  return count === 0;
}

function removeInvalidParentheses(str) {
  if (str.length === 0) return [''];

  const sols = [];

  //  visit set to ignore already visited string
  const visit = new Set();

  //  queue to maintain BFS
  const queue = [];

  // Used for temp string
  let temp;

  // Used to check if current level is valid
  let level;

  //  pushing given string as starting node into queue
  queue.push(str);
  visit.add(str);

  while (queue.length) {

    str = queue.shift();

    if (isValid(str)) {
      sols.push(str);

      // If answer is found, make level true
      // so that valid string of only that level
      // are processed.
      level = true;
    }
    if (level) continue;

    for (let i = 0; i < str.length; i++) {
      if (!isParenthesis(str[i])) continue;

      // Removing parenthesis from str and
      // pushing into queue,if not visited already
      temp = str.slice(0, i) + str.slice(i + 1);
      //console.log(temp);
      if (!visit.has(temp)) {
        queue.push(temp);
        visit.add(temp);
      }
    }
  }

  return sols;
}
