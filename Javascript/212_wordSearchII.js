var findWords = function(grid, words) {
  // Add each word to a trie
  const trie = new Trie();
  for (const word of words) {
    trie.insert(word);
  }

  // Use the trie in a helper function to check
  const sols = new Set();

   // Edge Case
  if (!grid || !grid.length) return false;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      wordSearchDFS(grid, trie, row, col, grid[row][col], sols)
    }
  }
  return Array.from(sols);
};


function wordSearchDFS (grid, trie, row, col, curWord, sols) {

  // Check for fail
  if (!trie.startsWith(curWord)) return;

  // Check for success
  if (trie.search(curWord)) sols.add(curWord);

  // Mark visited for current DFS search
  const temp = grid[row][col]
  grid[row][col] = "#";
  // DFS
  // Top
  if (isValid(row - 1, col, grid)) wordSearchDFS(grid, trie, row - 1, col, curWord + grid[row - 1][col], sols);
  // Right
  if (isValid(row, col + 1, grid)) wordSearchDFS(grid, trie, row, col + 1, curWord + grid[row][col + 1], sols);
  // Bottom
  if (isValid(row + 1, col, grid)) wordSearchDFS(grid, trie, row + 1, col, curWord + grid[row + 1][col], sols);
  // Left
  if (isValid(row, col - 1, grid)) wordSearchDFS(grid, trie, row, col - 1, curWord + grid[row][col - 1], sols);

  // Change back to allow visit
  grid[row][col] = temp;
}

function isValid(row, col, grid) {
  // Check to make sure in bounds
  if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) return false;
  return true;
}

/**
 * Initialize your data structure here.
 */

function TrieNode (val) {
  this.val = val;
  this.children = [];
}


var Trie = function() {
  this.root = new TrieNode('root');
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let ptr = this.root;

  for (const c of word) {
    const nextNode = this.getChild(ptr, c);
    if (nextNode) {
      ptr = nextNode;
    }
    else {
      const newNode = new TrieNode(c);
      ptr.children.push(newNode);
      ptr = newNode;
    }
  }
  ptr.children.push('*');
};

Trie.prototype.getChild = function (ptr, char) {

  for (let i = 0; i < ptr.children.length; i++) {
    let curLetter = ptr.children[i];
    if (curLetter.val === char) return curLetter;
  }
  return null;
}

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let ptr = this.root;

  for (const c of word) {
    const nextNode = this.getChild(ptr, c);
    if (!nextNode) return false;
    ptr = nextNode;
  }

  for (let i = 0; i < ptr.children.length; i++) {
    if (ptr.children[i] === '*') return true;
  }
  return false;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let ptr = this.root;

  for (const c of prefix) {
    const nextNode = this.getChild(ptr, c);
    if (!nextNode) return false;
    ptr = nextNode;
  }

  return true;
};
