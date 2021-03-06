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
const memo = {};

let count = 0;
function printIndent(n) {
  let indentString = "";
  for (let i = 0; i < n; i++) {
    // console.log("   ");
    indentString += "   ";
  }
  return indentString;
}

var fib = function (n) {
  // printIndent(count);
  console.log(`${printIndent(count++)}循环${n}开始`);
  if (n === 0 || n === 1) {
    console.log(`${printIndent(--count)}循环${n}结束,结果:${n}`);

    return n;
  }
  if (memo[n]) {
    console.log(`${printIndent(--count)}}循环${n}结束,结果:${memo[n]}`);

    return memo[n];
  }
  const result = fib(n - 1) + fib(n - 2);
  memo[n] = result;
  count--;
  console.log(`${printIndent(--count)}循环${n}结束,结果:${result}`);
  return result;
};

// @lc code=end

// @after-stub-for-debug-begin
module.exports = fib;
// @after-stub-for-debug-end

// var fib = function (n) {
//   if (n === 0 || n === 1) {
//     return n;
//   }
//   const dp = [];
//   dpA = 0;
//   dpB = 1;
//   for (let i = 2; i <= n; i++) {
//     dp[i] = dpA + dpB;
//     dpA = dpB;
//     dpB = dp[i];
//   }
//   return dp[n];
// };
