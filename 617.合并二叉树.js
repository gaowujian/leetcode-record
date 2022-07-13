/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
// 传入两个树的头节点，返回一颗树，头节点是两个节点的和
var mergeTrees = function (root1, root2) {
  if (!root1 && !root2) {
    return null;
  }
  if (root1 && !root2) {
    return root1;
  }
  if (root2 && !root1) {
    return root2;
  }

  const node = new TreeNode(root1.val + root2.val);
  const left = mergeTrees(root1.left, root2.left);
  const right = mergeTrees(root1.right, root2.right);

  node.left = left;
  node.right = right;
  return node;
};
// @lc code=end
