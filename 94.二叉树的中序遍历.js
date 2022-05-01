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
var inorderTraversal = function (root) {
  if (!root) return [];
  const result = [];
  const stk = [];
  while (root || stk.length) {
    while (root) {
      //   if (root.left) {
      stk.push(root);
      root = root.left;
      //   continue;
      //   }
    }

    root = stk.pop();

    result.push(root.val);

    // if (root.right) {
    //   stk.push(root.right);
    root = root.right;
    // }
  }
  return result;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = inorderTraversal;
// @after-stub-for-debug-end
