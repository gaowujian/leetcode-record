/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (nums.length === 0) return null;
  let max = -Infinity;
  const result = [];
  // const queue = [];
  let left = 0;
  let right = 0;
  for (let i = 0; i < nums.length - k; i++) {
    max = Math.max(max, nums[i]);
    if (right < k) {
      // queue.push(nums[i]);
      right++;
    } else {
      left++;
      right++;
      // queue.shift();
      // queue.push(nums[i]);
    }
  }
  return result;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = maxSlidingWindow;
// @after-stub-for-debug-end
