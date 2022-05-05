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
  let right = nums.length;
  while (left < right) {
    let middle = Math.floor(left + (right - left) / 2);
    if (nums[middle] === target) return middle;
    if (nums[middle] < target) {
      left = middle + 1;
    }
    if (nums[middle] > target) {
      right = middle;
    }
  }
  return -1;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = search;
// @after-stub-for-debug-end
