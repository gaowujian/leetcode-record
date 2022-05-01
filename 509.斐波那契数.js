/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

var fib = function (n) {
  if (n === 0 || n === 1) {
    return n;
  }
  const dp = [];
  dpA = 0;
  dpB = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dpA + dpB;
    dpA = dpB;
    dpB = dp[i];
  }
  return dp[n];
};

// @lc code=end

// @after-stub-for-debug-begin
module.exports = fib;
// @after-stub-for-debug-end
