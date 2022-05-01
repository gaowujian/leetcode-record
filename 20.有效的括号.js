/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 === 1) {
    return false;
  }
  const operations = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const leftKeys = Object.keys(operations);
  const operationStack = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (leftKeys.includes(char)) {
      operationStack.push(char);
    } else {
      const el = operationStack.pop();
      if (operations[el] !== char) {
        return false;
      }
    }
  }
  console.log("operationStack.length:", operationStack.length);
  if (operationStack.length > 0) {
    return false;
  }
  return true;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = isValid;
// @after-stub-for-debug-end
