/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) {
    return [];
  }
  const queue = [];
  queue.push(root);
  const result = [];
  while (queue.length !== 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const el = queue.shift();
      if (i === size - 1) {
        result.push(el.val);
      }
      if (el.left) {
        queue.push(el.left);
      }
      if (el.right) {
        queue.push(el.right);
      }
    }
  }
  return result;
};
// @lc code=end
