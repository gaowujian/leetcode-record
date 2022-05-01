/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
// 左子树 + 根 + 右子树
// 参数是传入的节点，和结果
var inorderTraversal = function (root) {
  const result = [];
  if (!root) return result;
  if (root.left) {
    result.push(...inorderTraversal(root.left));
  }
  result.push(root.val);
  if (root.right) {
    result.push(...inorderTraversal(root.right));
  }
  return result;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = inorderTraversal;
// @after-stub-for-debug-end
