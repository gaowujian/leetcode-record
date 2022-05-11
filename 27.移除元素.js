/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let slow = 0, //记录真实元素的index, slow指向了有效数字的下一个位置
    fast = 0; //记录遍历
  while (fast < nums.length) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }
  return slow;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = removeElement;
// @after-stub-for-debug-end

// var removeElement = function (nums, val) {
//   let slow = 0,
//     fast = 0;
//   let len = nums.length;
//   while (fast < len) {
//     if (nums[fast] !== val) {
//       nums[slow++] = nums[fast];
//     }
//     fast++;
//   }
//   return slow;
// };
