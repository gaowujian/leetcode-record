/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  const min = Math.min(p.val, q.val);
  const max = Math.max(p.val, q.val);
  function find(node, p, q) {
    if (!node) return null;

    if (node.val < p) {
      return find(node.right, p, q);
    }
    if (node.val > q) {
      return find(node.left, p, q);
    }
    if (node.val >= p && node.val <= q) {
      return node;
    }
  }
  return find(root, min, max);
};
// @lc code=end
