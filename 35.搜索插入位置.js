/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (target <= nums[0]) return 0;
  if (target > nums[nums.length - 1]) return nums.length;

  let left = 0;
  let right = nums.length;

  while (left < right) {
    let middle = left + Math.floor((right - left) / 2);
    if (nums[middle] < target) {
      left = middle + 1;
    } else if (nums[middle] > target) {
      right = middle;
    } else {
      return middle;
    }
  }

  //  跳出的时候 left = right + 1
  return left;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = searchInsert;
// @after-stub-for-debug-end
