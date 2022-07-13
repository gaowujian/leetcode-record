/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums < 3) return [];
  const sorted = nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < sorted.length; i++) {
    if (nums[i] > 0) {
      break;
    }
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let low = i + 1;
    let hi = sorted.length - 1;
    while (low < hi) {
      const sum = nums[i] + nums[low] + nums[hi];
      if (sum === 0) {
        result.push([nums[i], nums[low], nums[hi]]);
        while (low < hi && nums[low] === nums[low + 1]) {
          low++;
        }
        while (low < hi && nums[hi] === nums[hi - 1]) {
          hi--;
        }
        low++;
        hi--;
      } else if (sum < 0) {
        low++;
      } else {
        hi--;
      }
    }
  }

  return result;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = threeSum;
// @after-stub-for-debug-end
