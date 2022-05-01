/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
var isBalanced = function (root) {
  if (root) {
    return true;
  } else {
    return Math.abs(height(root.left) - height(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right);
  }

  //   计算一个节点高度的函数
  //   function height(node) {
  //     if (!node) {
  //       return 0;
  //     }
  //     return Math.max(height(node.left), height(node.right)) + 1;
  //   }
  function height() {
    if (root == null) {
      return 0;
    } else {
      return Math.max(height(root.left), height(root.right)) + 1;
    }
  }
};
// @lc code=end
