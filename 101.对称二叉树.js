/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */

var isSymmetric = function (root) {
  if (!root) return true;
  function check(left, right) {
    //   终止条件
    //   两个都是true或者都是false
    if (!left && !right) {
      return true;
    }
    //有一个是false，一个是true，返回false
    if (!left || !right) {
      return false;
    }

    const leftResult = check(left.left, right.right);
    const rightResult = check(left.right, right.left);
    return left.val === right.val && leftResult && rightResult;
  }
  return check(root.left, root.right);
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = isSymmetric;
// @after-stub-for-debug-end
