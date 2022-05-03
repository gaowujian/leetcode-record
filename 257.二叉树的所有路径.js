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

// node是传入的节点，path是到该节点之前的路径，result是最终的结果
function traversal(node, prevPath, result) {
  if (!node) return;
  const path = prevPath.length === 0 ? node.val.toString() : prevPath + "->" + node.val;
  if (!node.left && !node.right) {
    result.push(path);
  } else {
    traversal(node.left, path, result);
    traversal(node.right, path, result);
  }
}

var binaryTreePaths = function (root) {
  if (!root) return [];
  const result = [];
  traversal(root, "", result);
  return result;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = binaryTreePaths;
// @after-stub-for-debug-end

// 1. 第一种 深度优先遍历的递归写法，无回溯
// var binaryTreePaths = function (root) {
//   if (!root) {
//     return [];
//   }
//   const result = [...binaryTreePaths(root.left), ...binaryTreePaths(root.right)];
//   const converted =
//     result.length == 0
//       ? [`${root.val}`]
//       : result.map((item) => {
//           return `${root.val}->${item}`;
//         });
//   return converted;
// };

// 2. 第二种 递归算法
// node是传入的节点，path是到该节点之前的路径，result是最终的结果
// function traversal(node, prevPath, result) {
//   if (node) {
//     const path = prevPath.length === 0 ? node.val.toString() : prevPath + "->" + node.val;
//     if (!node.left && !node.right) {
//       result.push(path);
//     } else {
//       traversal(node.left, path, result);
//       traversal(node.right, path, result);
//     }
//   }
// }

// var binaryTreePaths = function (root) {
//   if (!root) return [];
//   const result = [];
//   traversal(root, "", result);
//   return result;
// };
