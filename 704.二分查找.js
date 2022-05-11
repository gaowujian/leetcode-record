/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left++;
    } else {
      right--;
    }
  }
  if (left === right && nums[left] === target) {
    return left;
  }
  return -1;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = search;
// @after-stub-for-debug-end
