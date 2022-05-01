/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stk = [];
  for (let i = 0; i < tokens.length; i++) {
    const el = tokens[i];
    const parsed = parseInt(el);
    if (!isNaN(parsed)) {
      stk.push(parsed);
    } else {
      stk.push(operation(stk.pop(), stk.pop(), el));
    }
  }
  function operation(a, b, operation) {
    switch (operation) {
      case "+":
        return b + a;
      case "-":
        return b - a;
      case "*":
        return b * a;
      case "/":
        return b / a > 0 ? Math.floor(b / a) : Math.ceil(b / a);
    }
  }
  return stk.pop();
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = evalRPN;
// @after-stub-for-debug-end
