/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// var coinChange = function (coins, amount) {
//   if (amount === 0) return 0;
//   const memo = {};

//   // coins是可以金币值，amount是要凑的钱，返回值是最少的硬币
//   function dp(coins, amount) {
//     if (amount === 0) return 0;
//     // 如果是小于0，说明无法凑
//     if (amount < 0) return -1;
//     if (memo[amount]) {
//       return memo[amount];
//     }
//     let res = Infinity;
//     for (let i = 0; i < coins.length; i++) {
//       const coin = coins[i];
//       const subPro = dp(coins, amount - coin);
//       if (subPro === -1) continue;
//       // result.push(subPro + 1);
//       res = Math.min(res, subPro + 1);
//     }
//     memo[amount] = res === Infinity ? -1 : res;
//     return memo[amount];
//   }
//   return dp(coins, amount);
// };

// console.log(coinChange([2], 3));

var coinChange = function (coins, amount) {
  if (amount < 0) return -1;
  if (amount === 0) return 0;
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i >= coin) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = coinChange;
// @after-stub-for-debug-end
