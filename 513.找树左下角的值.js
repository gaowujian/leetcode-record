/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
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
var findBottomLeftValue = function (root) {
  if (!root) {
    return null;
  }
  let result = null;
  let maxDepth = -Infinity;

  // 使用递归的时候，需要自己去记录层数，同时控制条件，什么时候第一次
  function traversal(root, depth) {
    if (!root) {
      return;
    }
    depth++;
    const tmp = Math.max(maxDepth, depth);
    if (tmp > maxDepth) {
      maxDepth = tmp;
      result = root.val;
    }

    traversal(root.left, depth);
    traversal(root.right, depth);
  }
  traversal(root, 0);
  return result;
};
// @lc code=end

// *迭代的写法
// var findBottomLeftValue = function (root) {
//     if (!root) {
//       return null;
//     }
//     const queue = [];
//     queue.push(root);
//     let result = null;
//     while (queue.length !== 0) {
//       const size = queue.length;
//       for (let i = 0; i < size; i++) {
//         const el = queue.shift();
//         if (i === 0) {
//           result = el.val;
//         }
//         if (el.left) {
//           queue.push(el.left);
//         }
//         if (el.right) {
//           queue.push(el.right);
//         }
//       }
//     }
//     return result;
//   };
