/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */

function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  let result = false;

  // 计算过程
  // 第一个参数是要遍历的节点，第二个参数是这个节点前的所有路径节点
  function traversal(node, paths) {
    if (!node) {
      return;
    }
    paths.push(node.val);
    if (!node.left && !node.right && sum(paths) === targetSum) {
      result = true;
    }
    traversal(node.left, [...paths]);
    traversal(node.right, [...paths]);
  }
  traversal(root, []);

  return result;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = hasPathSum;
// @after-stub-for-debug-end
