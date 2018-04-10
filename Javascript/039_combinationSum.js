/*

General Algorithms:

Recursively try out each number and explore using like a DFS, if we hit the target sum, then add the combinations
that we took to get there to the total combinatios array.

*/
var combinationSum = function(candidates, target) {
  candidates.sort((a,b) => a-b);
  return combinationSumDFS(candidates, target, 0, 0, [], []);
}

function combinationSumDFS(candidates, target, startIdx, curSum, curComb, sumCombs) {

  // Iterate candidates from startIdx
  for (let i = startIdx; i < candidates.length; i++) {
    let val = candidates[i];
    let newSum = curSum + val;

    if (newSum === target) {
      sumCombs.push(curComb.concat(val))
      break;
    }
    else if (newSum < target) {
      combinationSumDFS(candidates, target, i, newSum, curComb.concat(val), sumCombs);
    }
    else break;
  }

  return sumCombs;

}
