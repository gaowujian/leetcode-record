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

var binaryTreePaths = function (root) {
  if (!root) return [];
  const result = [];
  const paths = [];
  function traverse(node) {
    if (!node) return;
    // 前置位置，遍历到这个节点就放入path中
    paths.push(node.val);
    // 如果不是叶子节点，直接放入
    if (!node.left && !node.right) {
      result.push(paths.join("->"));
    }
    traverse(node.left);
    traverse(node.right);
    // 遍历完该节点后需要弹出
    paths.pop();
  }
  traverse(root);
  return result;
};

// @lc code=end

// @after-stub-for-debug-begin
module.exports = binaryTreePaths;
// @after-stub-for-debug-end

// 1.第一种 遍历树的解法

// var binaryTreePaths = function (root) {
//   if (!root) return [];
//   const result = [];
//   // node是传入的节点，path是到该节点之前的路径，result是最终的结果
//   const paths = [];
//   function traverse(node) {
//     if (!node) return;
//     // 节点遍历前入栈
//     paths.push(node.val);
//     if (!node.left && !node.right) {
//       result.push(paths.join("->"));
//     } else {
//       traverse(node.left);
//       traverse(node.right);
//     }
//     // 节点遍历后入栈
//     paths.pop();
//   }
//   traverse(root);
//   return result;
// };

// 2. 分解子问题解法
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
