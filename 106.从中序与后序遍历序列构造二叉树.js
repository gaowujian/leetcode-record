/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (!inorder || !postorder || inorder.length === 0 || postorder.length === 0) {
    return null;
  }

  const rootValue = postorder[postorder.length - 1];

  let inTag = -1;
  for (let i = 0; i < inorder.length; i++) {
    if (rootValue === inorder[i]) {
      inTag = i;
      break;
    }
  }

  let inLeft = [];
  let inRight = [];
  let leftSize = 0;
  for (let i = 0; i < inorder.length; i++) {
    if (i < inTag) {
      inLeft.push(inorder[i]);
      leftSize++;
    }
    if (i > inTag) {
      inRight.push(inorder[i]);
    }
  }
  // 更新下一次的preOrder顺序
  let postLeft = [];
  let postRight = [];
  for (let i = 0; i < postorder.length - 1; i++) {
    if (leftSize > 0) {
      postLeft.push(postorder[i]);
    } else {
      postRight.push(postorder[i]);
    }
    leftSize--;
  }

  //   ! 创建节点并添加分支的操作
  //   !可以是先序
  const node = new TreeNode(rootValue);
  node.left = buildTree(inLeft, postLeft);
  node.right = buildTree(inRight, postRight);

  //   !可以是后序遍历
  //   const left = buildTree(inLeft, postLeft);
  //   const right = buildTree(inRight, postRight);
  //   const node = new TreeNode(rootValue);
  //   node.left = left;
  //   node.right = right;
  return node;
};
// @lc code=end
