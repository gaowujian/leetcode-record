/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
// 左子树 + 根 + 右子树
// 参数是传入的节点，和结果

// 使用栈，需要模拟递归栈的执行过程，就能理解如何写迭代了
var inorderTraversal = function (root) {
  if (!root) return [];
  const stk = [];
  const result = [];
  let cur = root;
  while (cur || stk.length > 0) {
    while (cur) {
      stk.push(cur);
      cur = cur.left;
    }
    const el = stk.pop();
    result.push(el.val);
    cur = el.right;
  }

  return result;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = inorderTraversal;
// @after-stub-for-debug-end

// var inorderTraversal = function (root) {
//   const result = [];
//   if (!root) return result;
//   if (root.left) {
//     result.push(...inorderTraversal(root.left));
//   }
//   result.push(root.val);
//   if (root.right) {
//     result.push(...inorderTraversal(root.right));
//   }
//   return result;
// };

// 第二种递归
// var inorderTraversal = function (root, result = []) {
//   if (!root) return result;
//   if (root.left) {
//     inorderTraversal(root.left, result);
//   }
//   result.push(root.val);
//   if (root.right) {
//     inorderTraversal(root.right, result);
//   }
//   return result;
// };
