/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function getDepth(node) {
  if (!node) {
    return 0;
  }
  let depth = Math.max(getDepth(node.left), getDepth(node.right));
  depth++;
  return depth;
}
var isBalanced = function (root) {
  if (!root) {
    return true;
  }

  if (isBalanced(root.left) && isBalanced(root.right) && Math.abs(getDepth(root.left) - getHeight(root.right)) <= 1) {
    return true;
  } else {
    return false;
  }
};
// @lc code=end
