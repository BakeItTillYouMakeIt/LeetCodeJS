var alienOrder = function(words) {
  // Edge Cases
  if (words.length === 0) return '';
  if (words.length === 1) return words[0];

  // Make directed graph
  const adjList = new Array(26).fill(null);

  const lettersSet = getLetters(words);

  lettersSet.forEach(letter => {
    adjList[getIdx(letter)] = [];
  })

  // For each pair of words, find an ordering
  for (let i = 0; i < words.length - 1; i++) {

    let idx = findEdge(words[i], words[i+1]);

    if (idx !== -1) {
      const u = getIdx(words[i][idx]);
      const v = getIdx(words[i+1][idx]);
      if (adjList[u].indexOf(v) === -1) adjList[u].push(v);
    }
  }

  // Check if graph is cyclic
  if (isCyclic(adjList)) return '';

  return getTopologicalOrder(adjList).reverse().map(idx => idxToAlpha(idx)).join('');
};

function getLetters(words) {

  const lettersSet = new Set();

  for (let word of words) {
    for (let letter of word) {
      lettersSet.add(letter);
    }
  }

  return lettersSet;
}

function getTopologicalOrder(adjList) {

  const visited = new Array(26).fill(false);
  const stack = [];

  for (let i = 0; i < adjList.length; i++) {
    if (adjList[i] && !visited[i]) {
      dfs(i, adjList, visited, stack);
    }
  }

  return stack;
}

function dfs(root, adjList, visited, stack) {
  if (visited[root]) return;

  visited[root] = true;

  for (let i = 0; i < adjList[root].length; i++) {
    dfs(adjList[root][i], adjList, visited, stack)
  }

  stack.push(root);
}

function idxToAlpha(idx) {
  idx += 'a'.charCodeAt(0);

  return String.fromCharCode(idx);
}

function getIdx(alpha) {
  return alpha.charCodeAt(0) - 'a'.charCodeAt(0);
}

function findEdge(word1, word2) {
  let idx = 0;

  while (word1[idx] === word2[idx] && idx < word1.length && idx < word2.length) {
    idx++;
  }
  if (idx === word1.length || idx === word2.length) return -1;

  return idx;
}

function isCyclic(adjList) {
  for (let i = 0; i < adjList.length; i++) {
    const recStack = new Set();

    if(isCyclicFrom(i, adjList, recStack)) return true;
  }

  return false;
}

function isCyclicFrom(vertex, adjList, recStack) {
  // Edge/Base Cases
  if (adjList[vertex] === null) return false;
  else if (recStack.has(vertex)) return true;

  recStack.add(vertex);

  for (let i = 0; i < adjList[vertex].length; i++) {
    if (isCyclicFrom(adjList[vertex][i], adjList, recStack)) return true;
  }
  recStack.delete(vertex);
  return false;
}
