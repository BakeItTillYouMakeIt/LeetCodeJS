var serialize = function(root) {
  // Edge Case
  if (!root) return '*';

  const data = [];
  preorderSerialize(root, data);
  return data.join(',');
};

function preorderSerialize(root, data) {
  // Base Case
  if (!root) {
    data.push('*');
    return;
  }

  // add to data
  data.push(root.val);


  // Go left
  preorderSerialize(root.left, data);

  // Go right
  preorderSerialize(root.right, data);
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  // Edge Case
  if (data[0] === '*' && data.length === 1) return null;

  data = data.split(',').reverse();
  const root = new TreeNode(+data.pop());

  preorderDeserialize(root, data);

  return root;
};

function preorderDeserialize(root, data) {
  // Add left node
  let val = data.pop();

  if (val !== '*') {
    root.left = new TreeNode(+val);
    preorderDeserialize(root.left, data);
  }

  // Add right node
  val = data.pop();

  if (val !== '*') {
    root.right = new TreeNode(+val);
    preorderDeserialize(root.right, data);
  }
}
