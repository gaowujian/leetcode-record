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
  if (!nums || nums.length === 0) {
    return [];
  }
  let slow = 0, // 记录有效元素
    fast = 0; // 记录遍历游标
  while (fast < nums.length) {
    if (nums[slow] !== nums[fast]) {
      slow++;
      nums[slow] = nums[fast];
    }
    fast++;
  }
  return slow + 1;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = removeDuplicates;
// @after-stub-for-debug-end
