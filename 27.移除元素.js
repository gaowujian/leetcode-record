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
  let slow = 0,
    fast = 0;
  let len = nums.length;
  while (fast < len) {
    if (nums[fast] !== val) {
      nums[slow++] = nums[fast];
    }
    fast++;
  }
  return slow;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = removeElement;
// @after-stub-for-debug-end
