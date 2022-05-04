/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (!nums) return;
  if (nums.length === 1) {
    return nums[0];
  }
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      max = Math.max(max, sum);
    }
  }
  return max;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = maxSubArray;
// @after-stub-for-debug-end

// * 暴力双层循环, 解法正确但是会超时
// var maxSubArray = function (nums) {
//   if (!nums) return;
//   if (nums.length === 1) {
//     return nums[0];
//   }
//   let max = -Infinity;
//   for (let i = 0; i < nums.length; i++) {
//     let sum = 0;
//     for (let j = i; j < nums.length; j++) {
//       sum += nums[j];
//       max = Math.max(max, sum);
//     }
//   }
//   return max;
// };
