/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];
  const path = [];

  //   !回溯算法的参数列表，是每次选择后的所有状态
  //   在本道题目中，选择就是选 左括号或者右括号，等价于记录可用括号的个数
  function backtrack(left, right) {
    // 不可能先放右括号，所以右边可能比左边少
    if (right < left) return;
    // 数量小于 0 肯定是不合法的
    if (left < 0 || right < 0) return;
    // 当所有括号都恰好用完时，得到一个合法的括号组合
    if (left == 0 && right == 0) {
      result.push(path.join(""));
      return;
    }

    // 尝试放一个左括号
    path.push("("); // 选择
    backtrack(left - 1, right);
    path.pop(); // 撤消选择

    path.push(")"); // 选择
    backtrack(left, right - 1);
    path.pop(); // 撤消选择
  }
  backtrack(n, n);
  return result;
};
// @lc code=end
