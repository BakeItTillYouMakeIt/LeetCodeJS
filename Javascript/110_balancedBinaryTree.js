var isBalanced = function(root) {
    if (!root) return true
    const left = getMaxHeight(root.left)
    const right = getMaxHeight(root.right) 
    if (Math.abs(left - right) > 1) return false
    return isBalanced(root.left) && isBalanced(root.right)
  }
  
  function getMaxHeight(root) {
    if (!root) return 0
    const left = getMaxHeight(root.left)
    const right = getMaxHeight(root.right)
    return 1 + Math.max(left, right)
  };