/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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

//  root是传入的节点值，函数的返回是该节点的深度
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  let depth = Math.max(maxDepth(root.left), maxDepth(root.right));
  depth++;
  return depth;
};
// @lc code=end

// *层序遍历解法

// var maxDepth = function (root) {
//     if (!root) {
//       return 0;
//     }
//       const queue = [];
//       queue.push(root);
//       let depth = 0;
//       while (queue.length !== 0) {
//         const size = queue.length;
//         depth++;
//         for (let i = 0; i < size; i++) {
//           const element = queue.shift();
//           if (element.left) {
//             queue.push(element.left);
//           }
//           if (element.right) {
//             queue.push(element.right);
//           }
//         }
//       }
//     return depth;
//   };

// @after-stub-for-debug-begin
module.exports = maxDepth;
// @after-stub-for-debug-end
