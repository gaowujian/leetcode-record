/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
 * @return {number}
 */
var countNodes = function (root) {
  if (!root) {
    return 0;
  }
  let sum = 0;
  const stk = [];
  let cur = root;
  while (cur || stk.length > 0) {
    while (cur) {
      stk.push(cur);
      sum++;
      cur = cur.left;
    }
    // 跳出的时候 说明cur指向null
    // 同时栈里也是最后转向null之前的最后一个值
    const node = stk.pop();
    cur = node.right;
  }
  return sum;
};
// @lc code=end

// var countNodes = function (root) {
//   if (!root) {
//     return 0;
//   }
//   return 1 + countNodes(root.left) + countNodes(root.right);
// };
