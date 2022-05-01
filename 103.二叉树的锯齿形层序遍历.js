/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
var zigzagLevelOrder = function (root) {
  if (!root) {
    return [];
  }
  const result = [];
  const queue = [root];
  //   如果是false从左往左，如果是true从右向左
  let leftToRight = true;
  while (queue.length > 0) {
    const len = queue.length;
    const sameLayerElements = [];
    let tmp = [];
    // 处理每一层
    for (let i = 0; i < len; i++) {
      let element = null;

      if (leftToRight) {
        element = queue.shift();
      } else {
        element = queue.pop();
      }
      sameLayerElements.push(element.val);
      if (leftToRight) {
        if (element.left) {
          tmp.push(element.left);
        }
        if (element.right) {
          tmp.push(element.right);
        }
      } else {
        if (element.right) {
          tmp.unshift(element.right);
        }
        if (element.left) {
          tmp.unshift(element.left);
        }
      }
    }
    queue.push(...tmp);
    result.push(sameLayerElements);
    leftToRight = !leftToRight;
  }
  return result;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = zigzagLevelOrder;
// @after-stub-for-debug-end
