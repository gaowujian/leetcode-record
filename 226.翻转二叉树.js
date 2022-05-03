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
    return root;
  }
  // 使用递归遍历，然后把左子树和右子树交换即可
  function next(root) {
    [root.left, root.right] = [root.right, root.left];
    if (root.left) {
      next(root.left);
    }
    if (root.right) {
      next(root.right);
    }
  }
  next(root);
  return root;
};
// @lc code=end
