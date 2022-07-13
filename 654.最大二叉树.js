/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  if (!nums || nums.length === 0) {
    return null;
  }

  let max = -Infinity;
  let tag = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
      tag = i;
    }
  }
  const node = new TreeNode(max);

  let left = [];
  let right = [];
  for (let i = 0; i < nums.length; i++) {
    if (i < tag) {
      left.push(nums[i]);
    }
    if (i > tag) {
      right.push(nums[i]);
    }
  }
  node.left = constructMaximumBinaryTree(left);
  node.right = constructMaximumBinaryTree(right);
  return node;
};
// @lc code=end
