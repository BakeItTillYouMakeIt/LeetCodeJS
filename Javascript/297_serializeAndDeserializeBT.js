/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root, arr = []) {

  // Return if null
  if (root === null) {
    arr.push(null);
    return arr;
  }

  // Add val to array,
  arr.push(root.val);
  serialize(root.left, arr);
  serialize(root.right, arr);

  return arr;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (data[0] === null)  {
    data.shift();
    return null;
  }
  let val = data.shift();

  let node = new TreeNode(val);
  node.left = deserialize(data);
  node.right = deserialize(data);

  return node;
};
