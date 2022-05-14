/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  // dp[i] 表示 以nums[i]的值为结尾的字串的长度
  const dp = new Array(nums.length).fill(1);
  // 构建dp数组
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  //   遍历dp数组就结构
  let res = 0;
  for (let i = 0; i < dp.length; i++) {
    res = Math.max(res, dp[i]);
  }

  return res;
};
// @lc code=end
