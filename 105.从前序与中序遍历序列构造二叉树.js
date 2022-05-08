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
var buildTree = function (preorder, inorder) {
  if (!preorder || !inorder || preorder.length === 0 || inorder.length === 0) {
    return null;
  }
  const rootValue = preorder[0];

  let inTag = -1;
  for (let i = 0; i < inorder.length; i++) {
    if (rootValue === inorder[i]) {
      inTag = i;
      break;
    }
  }

  //   更新下一次inorder顺序
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
  let preLeft = [];
  let preRight = [];
  for (let i = 1; i < preorder.length; i++) {
    if (leftSize > 0) {
      preLeft.push(preorder[i]);
    } else {
      preRight.push(preorder[i]);
    }
    leftSize--;
  }

  const node = new TreeNode(rootValue);
  node.left = buildTree(preLeft, inLeft);
  node.right = buildTree(preRight, inRight);
  return node;
};

// 这个函数需要根据前序和中序遍历的顺序，确认下一次的顺序
function build(params) {}
// @lc code=end
