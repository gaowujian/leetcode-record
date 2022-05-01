/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let slow = 0;
  let fast = 0;
  let minSubLength = Infinity;
  let sum = 0;
  while (fast < nums.length) {
    sum += nums[fast];
    if (sum >= target) {
      minSubLength = Math.min(minSubLength, fast - slow + 1);
      // 开始缩进窗口
      sum -= nums[slow];
      slow++;

      while (sum >= target) {
        minSubLength = Math.min(minSubLength, fast - slow + 1);

        sum -= nums[slow];
        slow++;
      }
    }

    fast++;
  }
  if (minSubLength === Infinity) {
    return 0;
  }
  return minSubLength;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = minSubArrayLen;
// @after-stub-for-debug-end
