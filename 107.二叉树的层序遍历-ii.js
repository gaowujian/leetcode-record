/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (!root) {
    return [];
  }
  const result = [];
  const queue = [];
  queue.push(root);
  while (queue.length !== 0) {
    const size = queue.length;
    const subResult = [];
    for (let i = 0; i < size; i++) {
      const el = queue.shift();
      subResult.push(el.val);
      if (el.left) {
        queue.push(el.left);
      }
      if (el.right) {
        queue.push(el.right);
      }
    }
    result.push(subResult);
  }
  return result.reverse();
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = levelOrderBottom;
// @after-stub-for-debug-end
