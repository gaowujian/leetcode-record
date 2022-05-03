/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function (root) {
  if (!root) {
    return 0;
  }
  //   如果左子树不存在，最小高度是右子树+1
  if (!root.left) {
    return 1 + minDepth(root.right);
  }
  //   如果右子树不存在，最小高度是左子树+1
  if (!root.right) {
    return 1 + minDepth(root.left);
  }
  //   如果都存在，选择小的一颗+1
  return 1 + Math.min(minDepth(root.left), minDepth(root.right));
};
// @lc code=end

// 层序遍历解法很清楚
// var minDepth = function (root) {
//     if (!root) {
//       return 0;
//     }
//     const queue = [];
//     queue.push(root);
//     let depth = 0;
//     while (queue.length !== 0) {
//       const size = queue.length;
//       depth++;
//       for (let i = 0; i < size; i++) {
//         const element = queue.shift();
//         if (!element.left && !element.right) {
//           return depth;
//         }
//         if (element.left) {
//           queue.push(element.left);
//         }
//         if (element.right) {
//           queue.push(element.right);
//         }
//       }
//     }
//     return depth;
//   };

// @after-stub-for-debug-begin
module.exports = minDepth;
// @after-stub-for-debug-end
