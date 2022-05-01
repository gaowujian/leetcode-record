/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const set = new Set();
  function outerNext(n) {
    let sum = 0;
    // 求和递归
    function innerNext(n) {
      let num1 = Math.floor(n / 10);
      let num2 = n % 10;
      sum += num2 * num2;
      if (num1 < 10) {
        sum += num1 * num1;
      } else {
        innerNext(num1);
      }
    }
    innerNext(n);

    if (sum === 1) {
      return true;
    } else {
      if (set.has(sum)) {
        return false;
      } else {
        set.add(sum);
        return outerNext(sum);
      }
    }
  }

  return outerNext(n);
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = isHappy;
// @after-stub-for-debug-end
