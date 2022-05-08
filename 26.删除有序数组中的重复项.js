/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let slow = 0,
    fast = 0;
  let len = nums.length;
  while (fast < len) {
    if (nums[slow] !== nums[fast]) {
      nums[++slow] = nums[fast];
    }
    fast++;
  }
  return slow + 1;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = removeDuplicates;
// @after-stub-for-debug-end
