/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
  if (!root) return null;
  // 在node节点的左右子树去查找p和q，查找到就返回最近的祖先节点
  function find(node, p, q) {
    if (!node) return null;
    if (node.val === p.val || node.val === q.val) {
      return node;
    }
    const left = find(node.left, p, q);
    const right = find(node.right, p, q);
    if (left && right) {
      return node;
    }
    return left ? left : right;
  }

  return find(root, p, q);
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = lowestCommonAncestor;
// @after-stub-for-debug-end
