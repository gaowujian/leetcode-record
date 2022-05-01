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
  const queue = [root];
  while (queue.length > 0) {
    const sameLayerElements = [];
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const element = queue.shift();
      sameLayerElements.push(element.val);
      if (element.left) {
        queue.push(element.left);
      }
      if (element.right) {
        queue.push(element.right);
      }
    }
    result.unshift(sameLayerElements);
  }
  return result;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = levelOrderBottom;
// @after-stub-for-debug-end
