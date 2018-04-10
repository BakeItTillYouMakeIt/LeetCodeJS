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
