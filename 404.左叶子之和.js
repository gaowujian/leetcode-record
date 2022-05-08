/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
 * @return {number}
 */

// root是一个树的根节点，返回他的所有左节点的值
var sumOfLeftLeaves = function (root) {
  if (!root) {
    return 0;
  }
  let middle = 0;
  // 判断是一个左叶子节点,这时候root。left是一个左叶子节点
  if (root.left && !root.left.left && !root.left.right) {
    middle += root.left.val;
  }

  const leftValue = sumOfLeftLeaves(root.left);
  const rightValue = sumOfLeftLeaves(root.right);
  return leftValue + rightValue + middle;
};
// @lc code=end

// var sumOfLeftLeaves = function (root) {
//   if (!root) {
//     return 0;
//   }
//   let leftValue = sumOfLeftLeaves(root.left);
//   let rightValue = sumOfLeftLeaves(root.right);
//   let midValue = 0;
//   if (root.left && !root.left.left && !root.left.right) {
//     midValue += root.left.val;
//   }
//   return leftValue + rightValue + midValue;
// }
