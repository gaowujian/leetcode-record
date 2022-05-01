/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */

var preorderTraversal = function (root) {
  if (!root) {
    return [];
  }
  const result = [];
  const stk = [];
  let cur = root;
  while (cur || stk.length > 0) {
    while (cur) {
      stk.push(cur);
      result.push(cur.val);
      cur = cur.left;
    }
    // 跳出的时候 说明cur指向null
    // 同时栈里也是最后转向null之前的最后一个值
    const node = stk.pop();
    cur = node.right;
  }
  return result;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = preorderTraversal;
// @after-stub-for-debug-end

// * 前序遍历第一种
// 1.递归函数的参数和返回值: 传入一个节点,返回他的前序遍历结果
// 2.写终止条件
// 3. 写单次遍历的过程

// var preorderTraversal = function (node) {
// const result = [];
// if (!node) return result;
// result.push(node.val);
// if (node.left) {
//   result.push(...preorderTraversal(node.left));
// }
// if (node.right) {
//   result.push(...preorderTraversal(node.right));
// }
// return result;
// };

// * 前序遍历第二种
// 1. node是需要遍历的节点，result是当前上一个节点的前序遍历顺序，返回值就是节点的遍历结果
// 2. 终止条件就是节点不存在
// 3. 单层遍历操作就是，把自己的val直接添加到参数的位置上，然后返回

// var preorderTraversal = function (node, result = []) {
//   if (!node) return ;
//   result.push(node.val);
//   if (node.left) {
//     preorderTraversal(node.left, result);
//   }
//   if (node.right) {
//     preorderTraversal(node.right, result);
//   }
//   return result;
// };
