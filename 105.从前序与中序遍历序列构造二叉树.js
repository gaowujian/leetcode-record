/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
var buildTree = function (preorder, inorder) {
  if (!preorder.length) {
    return null;
  }
  const root = new TreeNode(preorder[0]);

  const index = inorder.findIndex((item) => {
    return item === preorder[0];
  });

  //   中序的左右
  const inorderLeft = inorder.slice(0, index);
  const inorderRight = inorder.slice(index + 1);

  //   先序遍历的左右
  //   如果没有左子树，index等于0，前序左树会变成[]
  const preOrderLeft = preorder.slice(1, index + 1);
  const preOrderRight = preorder.slice(index + 1);

  root.left = buildTree(preOrderLeft, inorderLeft);
  root.right = buildTree(preOrderRight, inorderRight);

  return root;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = buildTree;
// @after-stub-for-debug-end
