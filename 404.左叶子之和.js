/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
 * @return {number}
 */

// root是一个树的根节点，返回他的所有左节点的值
var sumOfLeftLeaves = function (root) {
  if (!root) {
    return 0;
  }
  let leftValue = sumOfLeftLeaves(root.left);
  let rightValue = sumOfLeftLeaves(root.right);
  let midValue = 0;
  if (root.left && !root.left.left && !root.left.right) {
    midValue += root.left.val;
  }
  return leftValue + rightValue + midValue;
};
// @lc code=end
