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
  // 创建一个dp数组
  // dp[i] 表示以 nums[i] 元素结尾的最长子序列的长度, 先初始化为1
  const dp = new Array(nums.length).fill(1);
  let max = 1;
  //  初始化 ，每个点指向自己
  let prev = new Array(nums.length);
  for (let i = 0; i < prev.length; i++) {
    prev[i] = i;
  }
  let flag = null;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        // const arr = dp.slice(j, i);
        // dp[i] = Math.max(arr) + 1;
        const temp = dp[i];
        dp[i] = Math.max(dp[i], dp[j] + 1);
        // 修改指向
        if (dp[i] !== temp) {
          // 填写路径
          prev[i] = j;
        }
      }
    }
    let tmp = max;
    max = Math.max(max, dp[i]);
    if (max !== tmp) {
      flag = i;
    }
  }
  //   console.log(prev);
  //   console.log(flag);
  let workingIndex = flag;
  let arr = [];
  while (workingIndex !== prev[workingIndex]) {
    // console.log("flag", nums[workingIndex]);
    arr.unshift(nums[workingIndex]);
    workingIndex = prev[workingIndex];
  }
  // 添加最后一个
  arr.unshift(nums[workingIndex]);
  console.log("最长自增子序列", arr.join("->"));

  return max;
};
// @lc code=end
