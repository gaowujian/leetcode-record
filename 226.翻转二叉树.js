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
    return null;
  }
  const rootLeft = invertTree(root.left);
  const rootRight = invertTree(root.right);
  [root.right, root.left] = [rootLeft, rootRight];
  return root;
};
// @lc code=end

// 1. 遍历思路解法，利用traverse函数和辅助变量
// var invertTree = function (root) {
//   function traversal(node) {
//     if (!node) {
//       return;
//     }
//     traversal(node.left);
//     traversal(node.right);
//     [node.left, node.right] = [node.right, node.left];
//   }
//   traversal(root);
//   return root;
// };
