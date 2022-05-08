/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @return {number[][]}
 */
function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}
var pathSum = function (root, targetSum) {
  if (!root) return [];
  let result = [];

  // 计算过程
  // 第一个参数是要遍历的节点，第二个参数是这个节点前的所有路径节点
  function traversal(node, paths) {
    if (!node) {
      return;
    }
    paths.push(node.val);
    if (!node.left && !node.right && sum(paths) === targetSum) {
      result.push(paths);
    }
    if (node.left) {
      traversal(node.left, paths);
      paths.pop(node.left.val);
    }
    if (node.right) {
      traversal(node.right, paths);
      paths.pop(node.right.val);
    }
  }
  traversal(root, []);

  return result;
};
// @lc code=end

// 无回溯解法
// function sum(arr) {
//   return arr.reduce((a, b) => a + b, 0);
// }
// var pathSum = function (root, targetSum) {
//   if (!root) return [];
//   let result = [];

//   // 计算过程
//   // 第一个参数是要遍历的节点，第二个参数是这个节点前的所有路径节点
//   function traversal(node, paths) {
//     if (!node) {
//       return;
//     }
//     paths.push(node.val);
//     if (!node.left && !node.right && sum(paths) === targetSum) {
//       result.push(paths);
//     }
//     traversal(node.left, [...paths]);
//     traversal(node.right, [...paths]);
//   }
//   traversal(root, []);

//   return result;
// };
