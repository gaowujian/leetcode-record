/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return [];
  }
  const result = [];
  //   const queue = [root];

  //   while (queue.length > 0) {
  //     const subResult = [];
  //     //   定义一个变量，控制每层需要出队的次数，并累计下一次的次数
  //     //   正好是每一轮循环开始的时候，存储的元素数量
  //     const num = queue.length;
  //     for (let i = 0; i < num; i++) {
  //       const el = queue.shift();
  //       subResult.push(el.val);
  //       if (el.left) {
  //         queue.push(el.left);
  //       }
  //       if (el.right) {
  //         queue.push(el.right);
  //       }
  //     }

  //     result.push(subResult);
  //   }

  // 使用递归的方式来完成题目
  function next(root) {
    const subResult = [];
  }
  next(root);

  return result;
};
// @lc code=end
