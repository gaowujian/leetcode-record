/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */

//  root是当前节点
//  返回值是所有的路径
var binaryTreePaths = function (root) {
  if (!root) {
    return [];
  }
  const result = [...binaryTreePaths(root.left), ...binaryTreePaths(root.right)];
  const converted =
    result.length == 0
      ? [`${root.val}`]
      : result.map((item) => {
          return `${root.val}->${item}`;
        });
  return converted;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = binaryTreePaths;
// @after-stub-for-debug-end
