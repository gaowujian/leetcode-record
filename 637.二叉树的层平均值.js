/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
var averageOfLevels = function (root) {
  if (!root) {
    return [];
  }
  const queue = [];
  queue.push(root);
  const result = [];
  while (queue.length !== 0) {
    const size = queue.length;
    let sum = 0;
    for (let i = 0; i < size; i++) {
      const el = queue.shift();
      sum += el.val;
      if (el.left) {
        queue.push(el.left);
      }
      if (el.right) {
        queue.push(el.right);
      }
    }
    result.push(sum / size);
  }
  return result;
};
// @lc code=end
