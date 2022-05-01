/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function (root) {
  if (!root) return [];
  const result = [];
  const stk = [];
  let cur = root;
  let prev;
  while (cur || stk.length !== 0) {
    while (cur) {
      stk.push(cur);
      cur = cur.left;
    }
    const node = stk.pop();
    // 拿到最左侧节点之后，分情况讨论
    // 1. 如果没有右子树，可以直接放入结果，左子树肯定也是空的，因为上面已经向左下递归了
    // 2. 如果一个值放入了result，这个点被记录为prev，那么等父节点弹栈之后，发现right===prev，此时也能把数值放入结果
    if (!node.right || node.right === prev) {
      result.push(node.val);
      prev = node;
      cur = null;
    } else {
      // 如果不是上述两种情况，把上边pop的点重新压入
      stk.push(node);
      cur = node.right;
    }
  }
  return result;
};

// @lc code=end

//* 正常后续迭代遍历
// var postorderTraversal = function (root) {
//   if (!root) return [];
//   const result = [];
//   const stk = [];
//   let cur = root;
//   let prev;
//   while (cur || stk.length !== 0) {
//     while (cur) {
//       stk.push(cur);
//       cur = cur.left;
//     }
//     const node = stk.pop();
//     // 拿到最左侧节点之后，分情况讨论
//     // 1. 如果没有右子树，可以直接放入结果，左子树肯定也是空的，因为上面已经向左下递归了
//     // 2. 如果一个值放入了result，这个点被记录为prev，那么等父节点弹栈之后，发现right===prev，此时也能把数值放入结果
//     if (!node.right || node.right === prev) {
//       result.push(node.val);
//       prev = node;
//       cur = null;
//     } else {
//       // 如果不是上述两种情况，把上边pop的点重新压入
//       stk.push(node);
//       cur = node.right;
//     }
//   }
//   return result;
// };

// *技巧型 后续遍历
// var postorderTraversal = function (root) {
//   if (!root) return [];
//   const result = [];
//   const stk = [];
//   let cur = root;
//   while (cur || stk.length !== 0) {
//     while (cur) {
//       stk.push(cur);
//       result.push(cur.val);
//       cur = cur.right;
//     }
//     const el = stk.pop();
//     cur = el.left;
//   }

//   return result.reverse();
// };

// @after-stub-for-debug-begin
module.exports = postorderTraversal;
// @after-stub-for-debug-end
