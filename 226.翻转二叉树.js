/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) {
    return root;
  }
  function next(node) {
    if (node.left || node.right) {
      [node.left, node.right] = [node.right, node.left];
    }
    if (node.left) {
      next(node.left);
    }
    if (node.right) {
      next(node.right);
    }
  }
  next(root);
  return root;
};
// @lc code=end
