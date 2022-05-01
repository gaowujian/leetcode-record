/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return [];
  }
  const queue = [];
  queue.push(root);
  const result = [];
  while (queue.length !== 0) {
    const size = queue.length;
    const subResult = [];
    for (let i = 0; i < size; i++) {
      const el = queue.shift();
      subResult.push(el.val);
      if (el.children) {
        el.children.forEach((item) => {
          queue.push(item);
        });
      }
    }
    result.push(subResult);
  }
  return result;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = levelOrder;
// @after-stub-for-debug-end
